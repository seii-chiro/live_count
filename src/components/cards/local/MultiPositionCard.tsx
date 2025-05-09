import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    type Row,
    type ColumnDef
} from '@tanstack/react-table';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import fallback_img from "@/assets/fallback_img.png"
import { useSettingsStore, type SettingsState } from '@/store/useSettingsStore';
import Select from '@/components/Select';

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint, @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends unknown, TValue> {
        width?: string;
        align?: 'left' | 'center' | 'right';
        padding?: string;
    }
}

type Candidate = {
    name: string;
    percent: number;
    votes: number;
    partylist: string;
    imgSrc: string | null;
}

// Structure where each position key contains an array of candidates
type PositionData = {
    [position: string]: Candidate[];
}

type Props = {
    region: number | string;
    votesData: PositionData;
    lastUpdate: string;
    estimatedVotesIn: string;
    location: string;
    onPositionChange?: (position: string) => void;
}

// Define a type for column metadata
type ColumnMeta = {
    width?: string;
    align?: 'left' | 'center' | 'right';
    padding?: string;
}

type PhotoFlagKeys = {
    [K in keyof SettingsState]: SettingsState[K] extends boolean ? K : never;
}[keyof SettingsState];

const positionToPhotoFlagMap: Record<string, PhotoFlagKeys> = {
    'SENATOR': 'showSenatorPhoto',
    'GOVERNOR': 'showGovernorPhoto',
    'VICE-GOVERNOR': 'showViceGovernorPhoto',
    'MEMBER, HOUSE OF REPRESENTATIVES - FIRST LEGDIST': 'showHouseOfRepresentativeMemberPhoto',
    'MEMBER, HOUSE OF REPRESENTATIVES - SECOND LEGDIST': 'showHouseOfRepresentativeMemberPhoto',
    'MEMBER, SANGGUNIANG PANLALAWIGAN - FIRST LEGDIST': 'showSangguaniangPanlalawiganPhoto',
    'MEMBER, SANGGUNIANG PANLALAWIGAN - SECOND LEGDIST': 'showSangguaniangPanlalawiganPhoto',
    'PARTY-LIST': 'showPartylistPhoto',
};

const rankColors = [
    '#E74C3C', '#F2BE90', '#F1C40F', '#2ECC71', '#1ABC9C', '#3498DB',
    '#9B59B6', '#E91E63', '#8D6E63', '#8E8E8E', '#34495E', '#2D3436',
];

const positions = [
    { label: "Senator", value: "Senator" },
    { label: "Party-List", value: "Party-List" },
    { label: "Governor", value: "Governor" },
    { label: "Vice-Governor", value: "Vice-Governor" },
    { label: "Member, House of Representatives - FIRST LEGDIST", value: "Member, House of Representatives - FIRST LEGDIST" },
    { label: "Member, House of Representatives - SECOND LEGDIST", value: "Member, House of Representatives - SECOND LEGDIST" },
    { label: "Member, Sangguniang Panlalawigan - FIRST LEGDIST", value: "Member, Sangguniang Panlalawigan - FIRST LEGDIST" },
    { label: "Member, Sangguniang Panlalawigan - SECOND LEGDIST", value: "Member, Sangguniang Panlalawigan - SECOND LEGDIST" }
];

const columnHelper = createColumnHelper<Candidate>();

const MultiPositionCard = ({ region, votesData, estimatedVotesIn, lastUpdate, location, onPositionChange }: Props) => {
    const [selectedPosition, setSelectedPosition] = useState("");

    useEffect(() => {
        setSelectedPosition(positions[0]?.value)
    }, [])

    // Use the hook directly to make it reactive
    const settings = useSettingsStore();

    const showPhoto = useMemo(() => {
        if (!selectedPosition) return false;

        const normalizedPosition = selectedPosition.toUpperCase();
        // Find the most appropriate match for the selected position
        let flagKey: PhotoFlagKeys | undefined;

        // Direct match
        if (positionToPhotoFlagMap[normalizedPosition]) {
            flagKey = positionToPhotoFlagMap[normalizedPosition];
        }
        // Check for partial matches
        else {
            if (normalizedPosition.includes('SENATOR')) {
                flagKey = 'showSenatorPhoto';
            } else if (normalizedPosition.includes('GOVERNOR') && !normalizedPosition.includes('VICE')) {
                flagKey = 'showGovernorPhoto';
            } else if (normalizedPosition.includes('VICE-GOVERNOR') || normalizedPosition.includes('VICE GOVERNOR')) {
                flagKey = 'showViceGovernorPhoto';
            } else if (normalizedPosition.includes('HOUSE OF REPRESENTATIVES') || normalizedPosition.includes('LEGDIST')) {
                flagKey = 'showHouseOfRepresentativeMemberPhoto';
            } else if (normalizedPosition.includes('SANGGUNIANG PANLALAWIGAN')) {
                flagKey = 'showSangguaniangPanlalawiganPhoto';
            } else if (normalizedPosition.includes('PARTY-LIST') || normalizedPosition.includes('PARTYLIST')) {
                flagKey = 'showPartylistPhoto';
            }
        }

        return flagKey ? settings[flagKey] : false;
    }, [selectedPosition, settings]);

    // Handle position change
    const handlePositionChange = (position: string) => {
        setSelectedPosition(position);
        if (onPositionChange) {
            onPositionChange(position);
        }
    };

    // Get candidates for the selected position
    const currentPositionData = useMemo(() => {
        if (!selectedPosition || !votesData[selectedPosition]) {
            return [];
        }

        return votesData[selectedPosition];
    }, [votesData, selectedPosition]);

    // Sort the data by votes
    const sortedData = useMemo(() => {
        return [...currentPositionData].sort((a, b) => b.votes - a.votes);
    }, [currentPositionData]);

    // Position-specific column configurations
    const getColumns = () => {
        // Base columns for all positions
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const baseColumns: ColumnDef<Candidate, any>[] = [
            {
                id: 'index',
                cell: ({ row }: { row: Row<Candidate> }) => (
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
                        <div className="flex items-center gap-2">
                            {showPhoto && (
                                <img
                                    src={row.imgSrc || fallback_img}
                                    alt={row.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                    onError={(e) => {
                                        // Set fallback image on error
                                        e.currentTarget.src = fallback_img;
                                    }}
                                />
                            )}
                            <div className="flex flex-col">
                                <span className="pl-1 text-black font-semibold leading-tight">
                                    {row.name}
                                </span>
                                <span className="pl-1 text-xs text-gray-500 leading-tight">
                                    {row.partylist}
                                </span>
                            </div>
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
        return baseColumns;
    };

    const columns = useMemo(() => getColumns(), [showPhoto]); // Add showPhoto as dependency

    const table = useReactTable({
        data: sortedData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    // Available positions from the data
    const availablePositions = useMemo(() => {
        // Get positions that actually have data
        return positions.filter(pos =>
            votesData[pos.value] && votesData[pos.value].length > 0
        );
    }, [votesData]);

    return (
        <div className="w-full font-[Roboto_Condensed] rounded-md overflow-hidden border border-[#D8D8D8] shadow flex flex-col min-h-[700px] bg-white">
            <div className='w-full bg-[#FFEEC4] flex flex-col items-center px-2 py-3'>
                <div className='w-full bg-[#FFEEC4] flex items-center px-2 py-2 gap-2'>
                    <div className='bg-white rounded-md px-2 w-fit'>
                        <p className='font-semibold text-xs md:text-sm lg:text-base'>{String(region)?.toLocaleUpperCase()}</p>
                    </div>
                    <div className='w-fit bg-[#EBB136] rounded-md px-2'>
                        <p className='text-white font-semibold text-xs md:text-sm lg:text-base'>{location?.toLocaleUpperCase()}</p>
                    </div>
                </div>
                <div className='w-full px-2 pb-1'>
                    <Select
                        options={availablePositions.length > 0 ? availablePositions : positions}
                        value={selectedPosition}
                        onChange={handlePositionChange}
                        placeholder='Select a Position'
                    />
                </div>
            </div>

            {/* Empty state: No position selected */}
            {!selectedPosition && (
                <div className="w-full h-64 flex items-center justify-center text-gray-500">
                    Please select a position to view candidates
                </div>
            )}

            {/* Empty state: No data for selected position */}
            {selectedPosition && sortedData.length === 0 && (
                <div className="w-full h-64 flex items-center justify-center text-gray-500">
                    No data available for {selectedPosition}
                </div>
            )}

            {/* Data table */}
            {selectedPosition && sortedData.length > 0 && (
                <div className="flex-grow overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(3.19rem * 12)' }}>
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
                                                marginLeft: `${showPhoto ? 80 : 32}px`,
                                                width: `calc((100% - ${showPhoto ? 80 : 32}px) * ${row.original.percent / 100})`,
                                                backgroundColor: `${rankColors[row.index % 12]}1F`,
                                            }}
                                        />
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="bg-gray-100 w-full flex justify-between px-2 py-1 text-xs md:text-sm lg:text-base mt-auto">
                <div className="text-[#8E8E8E]">{estimatedVotesIn}</div>
                <div className="text-[#8E8E8E]">{lastUpdate}</div>
            </div>
        </div>
    );
};

export default MultiPositionCard;