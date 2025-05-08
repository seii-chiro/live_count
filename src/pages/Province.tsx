import MultiPositionCard from '@/components/cards/local/MultiPositionCard';
import MapPlaceHolder from '@/map/MapPlaceholder';
import { useLocation } from 'react-router';

type RowData = {
    location: string;
    percent: number;
    precincts: string;
}

const candidates = [
    { name: 'Go, Bong', percent: 56.8, votes: 23_435_453, partylist: 'AP', imgSrc: null },
    { name: 'Tulfo, Erwin', percent: 52.7, votes: 21_987_654, partylist: 'UF', imgSrc: null },
    { name: 'Sotto, Vicente III', percent: 48.3, votes: 19_876_321, partylist: 'PV', imgSrc: null },
    { name: 'Dela Rosa, Ronald', percent: 45.6, votes: 18_543_210, partylist: 'SN', imgSrc: null },
    { name: 'Tulfo, Ben', percent: 42.1, votes: 17_654_789, partylist: 'NH', imgSrc: null },
]

const Province = () => {
    const location = useLocation();
    const { rowData, region } = location.state as { rowData: RowData; region: string };

    return (
        <div className="flex flex-col items-center justify-center bg-[#F0F0F0] mt-8 ">
            <div className="w-[90%] py-10 flex flex-col gap-8">
                <div className="text-white bg-black w-full flex items-center justify-center py-2">
                    <p className="font-bold text-center text-balance text-sm md:text-base lg:text-xl">LOCAL RESULTS - {region?.toUpperCase()}, {rowData?.location}</p>
                </div>
            </div>

            <div className="w-full border-y border-[#D8D8D8] bg-white mt-1 py-10 lg:py-0">
                <div className="w-[90%] min-h-screen flex flex-col lg:flex-row items-center mx-auto">
                    <div className="flex-grow">
                        <MapPlaceHolder />
                    </div>
                    <div className="w-full lg:w-[30%]">
                        <MultiPositionCard
                            location={rowData?.location}
                            region={region}
                            votesData={candidates}
                            estimatedVotesIn="Est. 81% votes in"
                            lastUpdate="Updated: 2:47 PM - May 13, 2022"
                        />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Province