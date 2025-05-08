import CandidateVotesCard from "@/components/cards/results/CandidateVotesCard";
import ResultCard from "@/components/cards/results/ResultCard"
import Map from "@/map/Map"
import MapPlaceHolder from "@/map/MapPlaceholder";

const candidates = [
  { name: 'Go, Bong', percent: 56.8, votes: 23_435_453, partylist: 'AP', imgSrc: null },
  { name: 'Tulfo, Erwin', percent: 52.7, votes: 21_987_654, partylist: 'UF', imgSrc: null },
  { name: 'Sotto, Vicente III', percent: 48.3, votes: 19_876_321, partylist: 'PV', imgSrc: null },
  { name: 'Dela Rosa, Ronald', percent: 45.6, votes: 18_543_210, partylist: 'SN', imgSrc: null },
  { name: 'Tulfo, Ben', percent: 42.1, votes: 17_654_789, partylist: 'NH', imgSrc: null },
  { name: 'Cayetano, Pia', percent: 39.8, votes: 16_432_567, partylist: 'FM', imgSrc: null },
  { name: 'Revilla, Bong', percent: 38.1, votes: 15_987_654, partylist: 'NG', imgSrc: null },
  { name: 'Binay, Abigail', percent: 37.6, votes: 15_654_321, partylist: 'VL', imgSrc: null },
  { name: 'Lapid, Lito', percent: 35.6, votes: 14_876_543, partylist: 'UC', imgSrc: null },
  { name: 'Lacson, Panfilo', percent: 34.3, votes: 14_543_210, partylist: 'PF', imgSrc: null },
  { name: 'Villar, Camille', percent: 31.9, votes: 13_987_654, partylist: 'PA', imgSrc: null },
  { name: 'Aquino, Bam', percent: 31.4, votes: 13_654_321, partylist: 'DU', imgSrc: null },
  { name: 'Gonzalez, Rafael', percent: 54.2, votes: 22_345_678, partylist: 'CF', imgSrc: null },
  { name: 'Marquez, Isabella', percent: 50.7, votes: 20_987_654, partylist: 'NF', imgSrc: null },
  { name: 'Reyes, Daniel', percent: 49.3, votes: 19_876_321, partylist: 'BT', imgSrc: null },
  { name: 'Santos, Maria', percent: 47.6, votes: 18_543_210, partylist: 'PR', imgSrc: null },
  { name: 'Tan, Miguel', percent: 45.1, votes: 17_654_789, partylist: 'HI', imgSrc: null },
  { name: 'Cruz, Angelica', percent: 42.8, votes: 16_432_567, partylist: 'NG', imgSrc: null },
  { name: 'Vega, Samuel', percent: 40.3, votes: 15_987_654, partylist: 'IP', imgSrc: null },
  { name: 'Torres, Camille', percent: 38.9, votes: 15_654_321, partylist: 'FB', imgSrc: null },
  { name: 'Navarro, Joaquin', percent: 37.1, votes: 14_876_543, partylist: 'EM', imgSrc: null },
  { name: 'Ramos, Stephanie', percent: 36.0, votes: 14_543_210, partylist: 'CF', imgSrc: null },
  { name: 'Fernandez, Patrick', percent: 34.5, votes: 13_987_654, partylist: 'PA', imgSrc: null },
  { name: 'Mendoza, Lorena', percent: 33.2, votes: 13_654_321, partylist: 'PC', imgSrc: null },
];

const NCRData = [
  { location: 'MANILA', percent: 99.0, precincts: '1024 of 1024' },
  { location: 'QUEZON CITY', percent: 50, precincts: '1845 of 2415' },
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

const region4aData = [
  { location: 'BATANGAS', percent: 78.6, precincts: '1600 of 2035' },
  { location: 'CAVITE', percent: 81.9, precincts: '2100 of 2565' },
  { location: 'LAGUNA', percent: 77.5, precincts: '1800 of 2320' },
  { location: 'QUEZON', percent: 79.8, precincts: '1400 of 1755' },
]

const region4bData = [
  { location: 'OCCIDENTAL MINDORO', percent: 78.9, precincts: '610 of 773' },
  { location: 'ORIENTAL MINDORO', percent: 81.2, precincts: '970 of 1195' },
  { location: 'MARINDUQUE', percent: 77.5, precincts: '260 of 335' },
  { location: 'ROMBLON', percent: 75.3, precincts: '290 of 385' },
  { location: 'PALAWAN', percent: 80.1, precincts: '1110 of 1385' },
];

const region5Data = [
  { location: 'MINDORO OCCIDENTAL', percent: 76.2, precincts: '520 of 682' },
  { location: 'MINDORO ORIENTAL', percent: 78.7, precincts: '670 of 851' },
  { location: 'PALAWAN', percent: 80.3, precincts: '950 of 1183' },
  { location: 'ROMBLON', percent: 74.1, precincts: '400 of 540' },
];

const region6Data = [
  { location: 'AKLAN', percent: 80.5, precincts: '550 of 683' },
  { location: 'ANTIQUE', percent: 79.6, precincts: '640 of 805' },
  { location: 'CAPIZ', percent: 81.2, precincts: '720 of 887' },
  { location: 'ILOILO', percent: 83.9, precincts: '2300 of 2742' },
  { location: 'GUIMARAS', percent: 76.3, precincts: '310 of 406' },
  { location: 'NEGROS OCCIDENTAL', percent: 85.1, precincts: '2800 of 3290' },
];

const region7Data = [
  { location: 'BOHOL', percent: 78.8, precincts: '1120 of 1420' },
  { location: 'CEBU', percent: 84.3, precincts: '3450 of 4092' },
  { location: 'NEGROS ORIENTAL', percent: 80.6, precincts: '1310 of 1627' },
  { location: 'SIQUIJOR', percent: 77.1, precincts: '210 of 272' },
];

const region8Data = [
  { location: 'EASTERN SAMAR', percent: 75.0, precincts: '530 of 707' },
  { location: 'NORTHERN SAMAR', percent: 74.4, precincts: '690 of 928' },
  { location: 'SAMAR (WESTERN SAMAR)', percent: 76.2, precincts: '810 of 1063' },
  { location: 'LEYTE', percent: 83.0, precincts: '2000 of 2410' },
  { location: 'SOUTHERN LEYTE', percent: 79.2, precincts: '640 of 808' },
  { location: 'BILIRAN', percent: 78.5, precincts: '310 of 395' },
];

const region9Data = [
  { location: 'ZAMBOANGA DEL NORTE', percent: 76.8, precincts: '890 of 1159' },
  { location: 'ZAMBOANGA DEL SUR', percent: 80.1, precincts: '1230 of 1536' },
  { location: 'ZAMBOANGA SIBUGAY', percent: 77.6, precincts: '690 of 889' },
  { location: 'ZAMBOANGA CITY', percent: 81.4, precincts: '830 of 1020' },
];

const region10Data = [
  { location: 'BUKIDNON', percent: 82.3, precincts: '1340 of 1629' },
  { location: 'CAMIGUIN', percent: 79.9, precincts: '210 of 263' },
  { location: 'LANAO DEL NORTE', percent: 75.4, precincts: '930 of 1234' },
  { location: 'MISAMIS OCCIDENTAL', percent: 80.6, precincts: '710 of 882' },
  { location: 'MISAMIS ORIENTAL', percent: 81.7, precincts: '1220 of 1493' },
];

const region11Data = [
  { location: 'DAVAO DEL NORTE', percent: 84.0, precincts: '950 of 1130' },
  { location: 'DAVAO DEL SUR', percent: 82.5, precincts: '1080 of 1309' },
  { location: 'DAVAO ORIENTAL', percent: 80.9, precincts: '710 of 878' },
  { location: 'DAVAO OCCIDENTAL', percent: 79.1, precincts: '430 of 544' },
  { location: 'DAVAO CITY', percent: 85.7, precincts: '1500 of 1750' },
];

const region12Data = [
  { location: 'COTABATO', percent: 77.4, precincts: '930 of 1201' },
  { location: 'SOUTH COTABATO', percent: 81.2, precincts: '1010 of 1244' },
  { location: 'SULTAN KUDARAT', percent: 78.9, precincts: '800 of 1014' },
  { location: 'SARANGANI', percent: 79.5, precincts: '650 of 818' },
  { location: 'GENERAL SANTOS CITY', percent: 83.3, precincts: '970 of 1165' },
];

const caragaData = [
  { location: 'AGUSAN DEL NORTE', percent: 80.2, precincts: '610 of 761' },
  { location: 'AGUSAN DEL SUR', percent: 78.5, precincts: '940 of 1197' },
  { location: 'SURIGAO DEL NORTE', percent: 76.8, precincts: '720 of 937' },
  { location: 'SURIGAO DEL SUR', percent: 77.9, precincts: '810 of 1040' },
  { location: 'DINAGAT ISLANDS', percent: 75.6, precincts: '280 of 370' },
];

const barmmData = [
  { location: 'BASILAN', percent: 72.1, precincts: '330 of 458' },
  { location: 'LANAO DEL SUR', percent: 70.4, precincts: '950 of 1350' },
  { location: 'MAGUINDANAO', percent: 73.9, precincts: '890 of 1204' },
  { location: 'SULU', percent: 71.3, precincts: '700 of 982' },
  { location: 'TAWI-TAWI', percent: 74.7, precincts: '400 of 535' },
];

const overseasData = [
  { location: "ASIA PACIFIC", percent: 89.3, precincts: "1,920 of 2,150" },
  { location: "MIDDLE EAST & AFRICA", percent: 82.7, precincts: "1,430 of 1,730" },
  { location: "EUROPE", percent: 85.1, precincts: "1,100 of 1,293" },
  { location: "AMERICAS", percent: 88.5, precincts: "950 of 1,073" },
  { location: "SEABASED", percent: 79.6, precincts: "460 of 578" },
];

const Candidate_PartylistData = {
  Senators: [
    ...candidates
  ],
  PartyList: [
    { name: 'Party A', percent: 78.3, votes: 19_654_321, imgSrc: null },
    { name: 'Party B', percent: 14.6, votes: 7_432_789, imgSrc: null },
    { name: 'Party C', percent: 93.2, votes: 22_789_012, imgSrc: null },
    { name: 'Party D', percent: 50.1, votes: 12_234_567, imgSrc: null },
    { name: 'Party E', percent: 8.7, votes: 4_678_910, imgSrc: null },
    { name: 'Party F', percent: 61.9, votes: 15_456_789, imgSrc: null },
    { name: 'Party G', percent: 27.4, votes: 9_321_987, imgSrc: null },
    { name: 'Party H', percent: 89.0, votes: 21_250_123, imgSrc: null },
    { name: 'Party I', percent: 35.6, votes: 10_198_456, imgSrc: null },
    { name: 'Party J', percent: 5.2, votes: 2_172_345, imgSrc: null },
    { name: 'Party K', percent: 44.3, votes: 11_950_678, imgSrc: null },
    { name: 'Party L', percent: 76.8, votes: 18_634_567, imgSrc: null },
    { name: 'Party M', percent: 12.9, votes: 3_210_456, imgSrc: null },
    { name: 'Party N', percent: 68.5, votes: 17_998_321, imgSrc: null },
    { name: 'Party O', percent: 95.1, votes: 24_852_234, imgSrc: null },
    { name: 'Party P', percent: 31.7, votes: 9_751_123, imgSrc: null },
    { name: 'Party Q', percent: 23.4, votes: 6_629_987, imgSrc: null },
    { name: 'Party R', percent: 87.2, votes: 20_506_678, imgSrc: null },
    { name: 'Party S', percent: 42.8, votes: 11_403_345, imgSrc: null },
    { name: 'Party T', percent: 3.9, votes: 1_251_123, imgSrc: null },
  ]
};


const Results = () => {
  return (
    <>
      <div className="w-full border-y border-[#D8D8D8] mt-8 py-10 lg:py-0">
        <div className="w-[90%] min-h-screen flex flex-col lg:flex-row items-center mx-auto">
          <div className="flex-grow">
            <MapPlaceHolder />
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
              region="NATIONAL CAPITAL REGION"
              votesData={NCRData}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
            />
            <ResultCard
              region="CORDILLERA ADMINISTRATIVE REGION"
              votesData={carData}
              estimatedVotesIn="Est. 81% votes in"
              lastUpdate="Updated: 2:47 PM - May 13, 2022"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION I" votesData={region1Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION II" votesData={region2Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION III" votesData={region3Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION IV-A (CALABARZON)" votesData={region4aData} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION IV-B (MIMAROPA)" votesData={region4bData} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION V" votesData={region5Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION VI" votesData={region6Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION VII" votesData={region7Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION VIII" votesData={region8Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION IX" votesData={region9Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION X" votesData={region10Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION XI" votesData={region11Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="REGION XII" votesData={region12Data} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="REGION XIII (CARAGA)" votesData={caragaData} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region="BARMM" votesData={barmmData} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
            <ResultCard region="OVERSEAS" votesData={overseasData} estimatedVotesIn="Est. 81% votes in" lastUpdate="Updated: 2:47 PM - May 13, 2022" />
          </div>
        </div>
      </div>

      <div>
        <Map />
      </div>
    </>
  )
}

export default Results