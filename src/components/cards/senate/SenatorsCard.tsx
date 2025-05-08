import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    type Row,
    type ColumnDef
} from '@tanstack/react-table';
import clsx from 'clsx';
import { useMemo } from 'react';

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint, @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends unknown, TValue> {
        width?: string;
        align?: 'left' | 'center' | 'right';
        padding?: string;
    }
}

type Candidates_Partylist = {
    name: string;
    percent: number;
    votes: number;
    partylist: string;
}


type Props = {
    region: number | string;
    votesData: Candidates_Partylist[]
    lastUpdate: string;
    estimatedVotesIn: string;
}

// Define a type for column metadata
type ColumnMeta = {
    width?: string;
    align?: 'left' | 'center' | 'right';
    padding?: string;
}

const rankColors = [
    '#E74C3C', '#F2BE90', '#F1C40F', '#2ECC71', '#1ABC9C', '#3498DB',
    '#9B59B6', '#E91E63', '#8D6E63', '#8E8E8E', '#34495E', '#2D3436',
];


const columnHelper = createColumnHelper<Candidates_Partylist>();

// Define columns with proper type for meta
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Candidates_Partylist, any>[] = [
    {
        id: 'index',
        cell: ({ row }: { row: Row<Candidates_Partylist> }) => (
            <div
                className="text-white px-2 py-1 w-8 h-full flex justify-center items-center"
                style={{
                    backgroundColor: row.index < 12 ? rankColors[row.index] : '#8E8E8E'
                }}
            >
                {row.index + 1}
            </div>
        ),
        meta: {
            width: '12px',
            align: 'left'
        } as ColumnMeta
    },
    columnHelper.accessor('name', {
        header: () => 'CANDIDATE',
        cell: info => {
            const row = info.row.original;
            return (
                <div className="flex flex-col">
                    <strong className="text-black">{row.name}</strong>
                    <span className="text-xs text-gray-500">{row.partylist}</span>
                </div>
            );
        },
        meta: {
            align: 'left',
            padding: 'pl-2',
        } as ColumnMeta
    }),
    columnHelper.accessor('percent', {
        header: () => 'PERCENT',
        cell: info => `${info.getValue().toFixed(2)}%`,
        meta: {
            align: 'center'
        } as ColumnMeta
    }),
    columnHelper.accessor('votes', {
        header: () => 'VOTES',
        cell: info => (info.getValue())?.toLocaleString(),
        meta: {
            align: 'right',
            padding: 'pr-8',
        } as ColumnMeta
    }),
];


const SenatorsCard = ({ region, votesData, estimatedVotesIn, lastUpdate }: Props) => {

    const sortedData = useMemo(() => {
        const data = votesData ?? [];
        return [...data].sort((a, b) => b.votes - a.votes);
    }, [votesData]);

    const table = useReactTable({
        data: sortedData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });


    return (
        <div className="w-full font-[Roboto_Condensed] rounded-md overflow-hidden border border-[#D8D8D8] shadow flex flex-col min-h-[300px] bg-white">
            <div className='w-full bg-[#FFEEC4] flex items-center justify-between px-2 py-3 gap-2'>
                <div className='w-fit'>
                    <p className='font-semibold text-xs md:text-sm lg:text-base'>Senator</p>
                </div>
                <div className='bg-white rounded-md px-2 w-fit'>
                    <p className='font-semibold text-xs md:text-sm lg:text-base'>{region}</p>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto" style={{ maxHeight: 'calc(3.19rem * 12)' }}>
                <table className="w-full border-collapse text-sm">
                    <thead className="text-left">
                        {
                            table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            className={clsx('py-2 border-b border-black/1 text-xs md:text-sm lg:text-base sticky top-0 bg-white z-[2000]', {
                                                'text-left': header.column.columnDef.meta?.align === 'left',
                                                'text-center': header.column.columnDef.meta?.align === 'center',
                                                'text-right': header.column.columnDef.meta?.align === 'right',
                                            }, header.column.columnDef.meta?.padding
                                            )}
                                            style={{ width: header.column.columnDef.meta?.width }}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="relative h-12 group">
                                {row.getVisibleCells().map(cell => (
                                    <td
                                        key={cell.id}
                                        className={clsx('border-b border-black/10 h-12 relative font-semibold z-10 bg-white group-hover:bg-gray-50 text-xs sm:text-sm lg:text-base', {
                                            'text-left': cell.column.columnDef.meta?.align === 'left',
                                            'text-center': cell.column.columnDef.meta?.align === 'center',
                                            'text-right': cell.column.columnDef.meta?.align === 'right',
                                        }, cell.column.columnDef.meta?.padding
                                        )}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                                {/* Background progress bar */}
                                <div className="absolute left-0 top-0 h-full w-full z-[1000] pointer-events-none">
                                    <div
                                        className="h-full transition-all duration-500 ease-in-out"
                                        style={{
                                            width: `${row.original.percent}%`,
                                            backgroundColor: `${rankColors[row.index % 12]}1F`, // 1F = ~12.2% opacity (hex / 12)
                                        }}
                                    />
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-gray-100 w-full flex justify-between px-2 py-1 text-xs md:text-sm lg:text-base">
                <div className="text-[#8E8E8E]">{estimatedVotesIn}</div>
                <div className="text-[#8E8E8E]">{lastUpdate}</div>
            </div>
        </div>
    );
};

export default SenatorsCard;