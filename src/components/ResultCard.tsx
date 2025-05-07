import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    type Row,
} from '@tanstack/react-table';

type LocalResults = {
    location: string;
    percent: number;
    precincts: string;
};

type Props = {
    region: number | string;
}

const data: LocalResults[] = [
    { location: 'MANILA', percent: 80.0, precincts: '1024 of 1024' },
    { location: 'QUEZON CITY', percent: 76.4, precincts: '1845 of 2415' },
    { location: 'MAKATI', percent: 93.2, precincts: '500 of 536' },
    { location: 'TAGUIG', percent: 88.0, precincts: '612 of 695' },
    { location: 'PASIG', percent: 71.5, precincts: '840 of 1175' },
    { location: 'MANDALUYONG', percent: 85.0, precincts: '320 of 376' },
    { location: 'SAN JUAN', percent: 90.5, precincts: '150 of 166' },
    { location: 'PARAÑAQUE', percent: 77.3, precincts: '680 of 880' },
    { location: 'LAS PIÑAS', percent: 79.1, precincts: '450 of 569' },
    { location: 'PASAY', percent: 81.6, precincts: '380 of 466' },
    { location: 'MUNTINLUPA', percent: 82.0, precincts: '370 of 452' },
    { location: 'MARIKINA', percent: 75.9, precincts: '290 of 382' },
    { location: 'NAVOTAS', percent: 74.2, precincts: '190 of 256' },
    { location: 'MALABON', percent: 70.6, precincts: '210 of 297' },
    { location: 'VALENZUELA', percent: 68.3, precincts: '600 of 878' },
    { location: 'CALOOCAN', percent: 65.9, precincts: '1100 of 1669' },
];

const columnHelper = createColumnHelper<LocalResults>();

const columns = [
    {
        id: 'index',
        cell: ({ row }: { row: Row<LocalResults> }) => (
            <div className="bg-black text-white px-2 py-1 w-8 h-full flex justify-center items-center">
                {row.index + 1}
            </div>
        ),
        footer: () => <div className="w-full text-[#8E8E8E]">Est. 81% votes in</div>,
    },
    columnHelper.accessor('location', {
        header: () => 'LOCATION',
        cell: info => <strong>{info.getValue()}</strong>,
    }),
    columnHelper.accessor('percent', {
        header: () => 'PERCENT',
        cell: info => `${info.getValue().toFixed(2)}%`,
    }),
    columnHelper.accessor('precincts', {
        header: () => 'PRECINCTS',
        cell: info => info.getValue(),
        footer: () => <div className="w-full text-right text-[#8E8E8E]">Updated: 2:47 PM - May 13, 2022</div>,
    }),
];


const ResultCard = ({ region }: Props) => {
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
        <div className='w-full font-[Roboto_Condensed] rounded-md overflow-hidden border border-[#D8D8D8] shadow'>
            <div className='w-full bg-[#FFEEC4] flex p-2'>
                <div className='bg-white rounded-md px-2 py-1'>
                    <p className='text-sm font-semibold'>REGION {region}</p>
                </div>
            </div>
            <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-100 text-left">
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="px-4 py-2 border-b border-black/10 text-center">
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
                                    className="border-b border-black/10 h-12 text-center relative z-10 bg-white group-hover:bg-gray-50"
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                            {/* Background progress bar element that spans full width */}
                            <div className="absolute left-0 top-0 h-full w-full z-10 pointer-events-none">
                                <div
                                    className="h-full bg-black/10"
                                    style={{ width: `${row.original.percent}%` }}
                                />
                            </div>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="bg-gray-100 text-left">
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-2 border-t">
                                    {flexRender(header.column.columnDef.footer, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    );
}

export default ResultCard;