import CandidateVotesCard from "@/components/cards/results/CandidateVotesCard";
import ResultCard from "@/components/cards/results/ResultCard"
import Map from "@/map/Map"

const candidates = [
  { name: 'Go, Bong', percent: 56.8, votes: 23_435_453, partylist: 'AP' },
  { name: 'Tulfo, Erwin', percent: 52.7, votes: 21_987_654, partylist: 'UF' },
  { name: 'Sotto, Vicente III', percent: 48.3, votes: 19_876_321, partylist: 'PV' },
  { name: 'Dela Rosa, Ronald', percent: 45.6, votes: 18_543_210, partylist: 'SN' },
  { name: 'Tulfo, Ben', percent: 42.1, votes: 17_654_789, partylist: 'NH' },
  { name: 'Cayetano, Pia', percent: 39.8, votes: 16_432_567, partylist: 'FM' },
  { name: 'Revilla, Bong', percent: 38.1, votes: 15_987_654, partylist: 'NG' },
  { name: 'Binay, Abigail', percent: 37.6, votes: 15_654_321, partylist: 'VL' },
  { name: 'Lapid, Lito', percent: 35.6, votes: 14_876_543, partylist: 'UC' },
  { name: 'Lacson, Panfilo', percent: 34.3, votes: 14_543_210, partylist: 'PF' },
  { name: 'Villar, Camille', percent: 31.9, votes: 13_987_654, partylist: 'PA' },
  { name: 'Aquino, Bam', percent: 31.4, votes: 13_654_321, partylist: 'DU' },
  { name: 'Gonzalez, Rafael', percent: 54.2, votes: 22_345_678, partylist: 'CF' },
  { name: 'Marquez, Isabella', percent: 50.7, votes: 20_987_654, partylist: 'NF' },
  { name: 'Reyes, Daniel', percent: 49.3, votes: 19_876_321, partylist: 'BT' },
  { name: 'Santos, Maria', percent: 47.6, votes: 18_543_210, partylist: 'PR' },
  { name: 'Tan, Miguel', percent: 45.1, votes: 17_654_789, partylist: 'HI' },
  { name: 'Cruz, Angelica', percent: 42.8, votes: 16_432_567, partylist: 'NG' },
  { name: 'Vega, Samuel', percent: 40.3, votes: 15_987_654, partylist: 'IP' },
  { name: 'Torres, Camille', percent: 38.9, votes: 15_654_321, partylist: 'FB' },
  { name: 'Navarro, Joaquin', percent: 37.1, votes: 14_876_543, partylist: 'EM' },
  { name: 'Ramos, Stephanie', percent: 36.0, votes: 14_543_210, partylist: 'CF' },
  { name: 'Fernandez, Patrick', percent: 34.5, votes: 13_987_654, partylist: 'PA' },
  { name: 'Mendoza, Lorena', percent: 33.2, votes: 13_654_321, partylist: 'PC' },
];

const NCRData = [
  { location: 'MANILA', percent: 56.0, precincts: '1024 of 1024' },
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

const carData = [
  { location: 'ILOCOS NORTE', percent: 78.2, precincts: '680 of 870' },
  { location: 'ILOCOS SUR', percent: 80.4, precincts: '940 of 1170' },
  { location: 'LA UNION', percent: 76.9, precincts: '600 of 780' },
  { location: 'PANGASINAN', percent: 83.1, precincts: '2900 of 3485' },
]

const region1Data = [
  { location: 'CAGAYAN', percent: 74.8, precincts: '950 of 1270' },
  { location: 'ISABELA', percent: 79.5, precincts: '1250 of 1575' },
  { location: 'NUEVA VIZCAYA', percent: 81.2, precincts: '580 of 715' },
  { location: 'QUIRINO', percent: 77.4, precincts: '330 of 425' },
]

const region2Data = [
  { location: 'BATAAN', percent: 82.5, precincts: '750 of 910' },
  { location: 'ZAMBALES', percent: 79.3, precincts: '670 of 845' },
  { location: 'AURORA', percent: 76.1, precincts: '350 of 460' },
  { location: 'TARLAC', percent: 80.0, precincts: '1200 of 1500' },
]

const region3Data = [
  { location: 'CAMARINES NORTE', percent: 74.2, precincts: '600 of 810' },
  { location: 'CAMARINES SUR', percent: 79.1, precincts: '1400 of 1770' },
  { location: 'ALBAY', percent: 76.5, precincts: '980 of 1263' },
  { location: 'SORSOGON', percent: 78.3, precincts: '750 of 950' },
]

const region4Data = [
  { location: 'BATANGAS', percent: 78.6, precincts: '1600 of 2035' },
  { location: 'CAVITE', percent: 81.9, precincts: '2100 of 2565' },
  { location: 'LAGUNA', percent: 77.5, precincts: '1800 of 2320' },
  { location: 'QUEZON', percent: 79.8, precincts: '1400 of 1755' },
]

const Candidate_PartylistData = {
  Senators: [
    ...candidates
  ],
  PartyList: [
    { name: 'Party A', percent: 78.3, votes: 19_654_321 },
    { name: 'Party B', percent: 14.6, votes: 7_432_789 },
    { name: 'Party C', percent: 93.2, votes: 22_789_012 },
    { name: 'Party D', percent: 50.1, votes: 12_234_567 },
    { name: 'Party E', percent: 8.7, votes: 4_678_910 },
    { name: 'Party F', percent: 61.9, votes: 15_456_789 },
    { name: 'Party G', percent: 27.4, votes: 9_321_987 },
    { name: 'Party H', percent: 89.0, votes: 21_250_123 },
    { name: 'Party I', percent: 35.6, votes: 10_198_456 },
    { name: 'Party J', percent: 5.2, votes: 2_172_345 },
    { name: 'Party K', percent: 44.3, votes: 11_950_678 },
    { name: 'Party L', percent: 76.8, votes: 18_634_567 },
    { name: 'Party M', percent: 12.9, votes: 3_210_456 },
    { name: 'Party N', percent: 68.5, votes: 17_998_321 },
    { name: 'Party O', percent: 95.1, votes: 24_852_234 },
    { name: 'Party P', percent: 31.7, votes: 9_751_123 },
    { name: 'Party Q', percent: 23.4, votes: 6_629_987 },
    { name: 'Party R', percent: 87.2, votes: 20_506_678 },
    { name: 'Party S', percent: 42.8, votes: 11_403_345 },
    { name: 'Party T', percent: 3.9, votes: 1_251_123 },
  ]
};


const Results = () => {
  return (
    <>
      <div className="w-full border-y border-[#D8D8D8] mt-8 py-10 lg:py-0">
        <div className="w-[90%] flex flex-col lg:flex-row items-center mx-auto">
          <div className="flex-grow">
            <Map />
          </div>
          <div className="w-full lg:w-[30%]">
            <CandidateVotesCard
              region={"PHILIPPINES"}
              votesData={Candidate_PartylistData}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#F0F0F0]">
        <div className="w-[90%] py-10 flex flex-col gap-8">
          <div className="text-white bg-black w-full flex items-center justify-center py-2">
            <p className="font-bold text-xl">LOCAL RESULTS</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard
              region={"NATIONAL CAPITAL REGION"}
              votesData={NCRData}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
            />
            <ResultCard
              region={"CORDILLERA ADMINISTRATIVE REGION"}
              votesData={carData}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard
              region={"REGION 1"}
              votesData={region1Data}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"

            />
            <ResultCard
              region={"REGION 2"}
              votesData={region2Data}
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
              estimatedVotesIn="Est. 81% votes in"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard
              region={"REGION 3"}
              votesData={region3Data}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"

            />
            <ResultCard
              region={"REGION 4"}
              votesData={region4Data}
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
              estimatedVotesIn="Est. 81% votes in"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Results