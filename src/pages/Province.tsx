import LocalResultsCard from '@/components/cards/local/LocalResultsCard';
import MultiPositionCard from '@/components/cards/local/MultiPositionCard';
import MapPlaceHolder from '@/map/MapPlaceholder';
import { useLocation } from 'react-router';

type RowData = {
    location: string;
    percent: number;
    precincts: string;
}

const votesData = {
    "Senator": [
        { name: "Carlos Reyes", percent: 27.8, votes: 1075000, partylist: "Progressive Alliance", imgSrc: null },
        { name: "Andrea Morales", percent: 18.3, votes: 710200, partylist: "National Front", imgSrc: null },
        { name: "Miguel Santos", percent: 35.1, votes: 1358000, partylist: "People's Party", imgSrc: null },
        { name: "Luis Mendoza", percent: 20.4, votes: 810900, partylist: "Reform Coalition", imgSrc: null },
        { name: "Sophia Castillo", percent: 30.2, votes: 1176000, partylist: "Democratic Front", imgSrc: null },
        { name: "Javier Hernandez", percent: 25.7, votes: 999400, partylist: "Progress Alliance", imgSrc: null },
        { name: "Monica Vasquez", percent: 29.8, votes: 1159000, partylist: "Social Reform Party", imgSrc: null },
        { name: "Nathaniel Cruz", percent: 22.1, votes: 860200, partylist: "National Unity", imgSrc: null },
        { name: "Olivia Santos", percent: 33.9, votes: 1304000, partylist: "Public Welfare League", imgSrc: null },
        { name: "Gabriel Torres", percent: 19.6, votes: 730700, partylist: "Independent", imgSrc: null }
    ],
    "Party-List": [
        { name: "United Coalition", percent: 12.5, votes: 485000, partylist: "", imgSrc: null },
        { name: "Democratic Movement", percent: 22.9, votes: 889700, partylist: "", imgSrc: null },
        { name: "Social Reform Group", percent: 17.6, votes: 682300, partylist: "", imgSrc: null },
        { name: "National Unity", percent: 14.8, votes: 572400, partylist: "", imgSrc: null },
        { name: "Public Welfare League", percent: 19.3, votes: 741200, partylist: "", imgSrc: null },
        { name: "Future Change", percent: 16.4, votes: 628400, partylist: "", imgSrc: null },
        { name: "New Horizon Party", percent: 18.2, votes: 698300, partylist: "", imgSrc: null },
        { name: "People's Reform League", percent: 13.7, votes: 529000, partylist: "", imgSrc: null },
        { name: "Community First Movement", percent: 15.9, votes: 612400, partylist: "", imgSrc: null },
        { name: "Unity Bloc", percent: 20.5, votes: 785600, partylist: "", imgSrc: null }
    ],
    "Governor": [
        { name: "Isabella Fernandez", percent: 45.2, votes: 1786000, partylist: "New Vision Party", imgSrc: null },
        { name: "Roberto Delgado", percent: 39.7, votes: 1570000, partylist: "Unity Bloc", imgSrc: null },
        { name: "Samantha Cruz", percent: 23.4, votes: 892000, partylist: "Independent", imgSrc: null },
        { name: "Daniel Rivera", percent: 31.5, votes: 1243000, partylist: "Progress Party", imgSrc: null },
        { name: "Lorena Salazar", percent: 28.9, votes: 1127000, partylist: "People's Choice", imgSrc: null },
        { name: "Fernando Gutierrez", percent: 34.2, votes: 1360000, partylist: "Reform Coalition", imgSrc: null },
        { name: "Melissa Tan", percent: 26.8, votes: 1069000, partylist: "Public Welfare League", imgSrc: null },
        { name: "Jorge Valdez", percent: 38.4, votes: 1529000, partylist: "Democratic Front", imgSrc: null },
        { name: "Angela Bautista", percent: 32.9, votes: 1318000, partylist: "Future Change Party", imgSrc: null },
        { name: "Oscar Lim", percent: 29.1, votes: 1164000, partylist: "Community First Movement", imgSrc: null }
    ],
    "Vice-Governor": [
        { name: "Anthony Vasquez", percent: 46.7, votes: 1823000, partylist: "New Vision Party", imgSrc: null },
        { name: "Mariana Rivera", percent: 40.2, votes: 1579000, partylist: "Unity Bloc", imgSrc: null },
        { name: "Julian Torres", percent: 25.8, votes: 892500, partylist: "Independent", imgSrc: null },
        { name: "Elena Castillo", percent: 33.1, votes: 1264000, partylist: "Progress Party", imgSrc: null },
        { name: "Marco Aguilar", percent: 29.5, votes: 1132000, partylist: "People's Choice", imgSrc: null },
        { name: "Sofia Reyes", percent: 35.4, votes: 1381000, partylist: "Reform Coalition", imgSrc: null },
        { name: "Diego Bautista", percent: 27.1, votes: 1082000, partylist: "Public Welfare League", imgSrc: null },
        { name: "Gabriella Cruz", percent: 39.2, votes: 1554000, partylist: "Democratic Front", imgSrc: null },
        { name: "Victor Navarro", percent: 34.6, votes: 1339000, partylist: "Future Change Party", imgSrc: null },
        { name: "Lucia Montoya", percent: 30.7, votes: 1186000, partylist: "Community First Movement", imgSrc: null }
    ],
    "Member, House of Representatives - FIRST LEGDIST": [
        { name: "Alfredo Mendoza", percent: 53.1, votes: 2023000, partylist: "People's Voice", imgSrc: null },
        { name: "Veronica Santos", percent: 46.9, votes: 1787000, partylist: "United Reform", imgSrc: null },
        { name: "Benjamin Cruz", percent: 49.2, votes: 1894000, partylist: "Justice League", imgSrc: null },
        { name: "Clarissa Ortega", percent: 54.1, votes: 2063000, partylist: "Progress Alliance", imgSrc: null },
        { name: "Eduardo Villar", percent: 47.5, votes: 1822000, partylist: "National Unity", imgSrc: null }
    ],
    "Member, House of Representatives - SECOND LEGDIST": [
        { name: "Josephine Cruz", percent: 51.4, votes: 1950000, partylist: "National Alliance", imgSrc: null },
        { name: "Ernesto Ramirez", percent: 48.6, votes: 1846000, partylist: "Independent", imgSrc: null },
        { name: "Carla Moreno", percent: 52.8, votes: 1989000, partylist: "United Change", imgSrc: null },
        { name: "Rafael Espinoza", percent: 50.1, votes: 1914000, partylist: "Reform Coalition", imgSrc: null },
        { name: "Isabel Montoya", percent: 49.3, votes: 1899000, partylist: "Future Change Party", imgSrc: null }
    ],
    "Member, Sangguniang Panlalawigan - FIRST LEGDIST": [
        { name: "Ricardo Navarro", percent: 35.2, votes: 1380000, partylist: "Progressive Movement", imgSrc: null },
        { name: "Melissa Uy", percent: 31.7, votes: 1245000, partylist: "Social Unity", imgSrc: null },
        { name: "Gabriel Ramos", percent: 33.1, votes: 1306000, partylist: "Democratic Alliance", imgSrc: null },
        { name: "Fernando Lopez", percent: 29.3, votes: 1154000, partylist: "People's Rights", imgSrc: null }
    ],
    "Member, Sangguniang Panlalawigan - SECOND LEGDIST": [
        { name: "Catherine Lim", percent: 36.5, votes: 1420000, partylist: "Community First", imgSrc: null },
        { name: "Jorge Bautista", percent: 34.7, votes: 1352000, partylist: "New Horizon", imgSrc: null },
        { name: "Anna Rivera", percent: 28.8, votes: 1123000, partylist: "Independent", imgSrc: null },
        { name: "Marcos Villanueva", percent: 31.4, votes: 1274000, partylist: "Public Reform", imgSrc: null }
    ]
};

const Province = () => {
    const location = useLocation();
    const { rowData, region } = location?.state as { rowData: RowData; region: string };

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
                            votesData={votesData}
                            estimatedVotesIn="Est. 81% votes in"
                            lastUpdate="Updated: 2:47 PM - May 13, 2022"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[90%] py-10 flex flex-col gap-8">
                <div className="text-white bg-black w-full flex items-center justify-center py-2">
                    <p className="font-bold text-center text-balance text-sm md:text-base lg:text-xl">LOCAL RESULTS - {region?.toUpperCase()}, {rowData?.location}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <LocalResultsCard
                        position='Governor'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.Governor}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                    <LocalResultsCard
                        position='Vice-Governor'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.['Vice-Governor']}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <LocalResultsCard
                        position='Member, House of Representatives - FIRST LEGDIST'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.Governor}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                    <LocalResultsCard
                        position='Member, House of Representatives - SECOND LEGDIST'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.['Vice-Governor']}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <LocalResultsCard
                        position='Governor'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.Governor}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                    <LocalResultsCard
                        position='Vice-Governor'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.['Vice-Governor']}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                </div>
            </div>

            <div className="w-[90%] pb-10 flex flex-col gap-8">
                <div className="text-white bg-black w-full flex items-center justify-center py-2">
                    <p className="font-bold text-center text-balance text-sm md:text-base lg:text-xl">NATIONAL RESULTS - {region?.toUpperCase()}, {rowData?.location}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <LocalResultsCard
                        position='Senator'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.Senator}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                    <LocalResultsCard
                        position='Party-List'
                        location={rowData?.location}
                        region={region}
                        votesData={votesData?.['Party-List']}
                        estimatedVotesIn="Est. 81% votes in"
                        lastUpdate="Updated: 2:47 PM - May 13, 2022"
                    />
                </div>
            </div>

        </div>
    )
}

export default Province