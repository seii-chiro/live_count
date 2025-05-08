import ResultCard from "@/components/ResultCard"
import Map from "@/map/Map"

const data = [
  { location: 'CAGAYAN', percent: 74.8, precincts: '950 of 1270' },
  { location: 'ISABELA', percent: 79.5, precincts: '1250 of 1575' },
  { location: 'NUEVA VIZCAYA', percent: 81.2, precincts: '580 of 715' },
  { location: 'QUIRINO', percent: 77.4, precincts: '330 of 425' },

  { location: 'BATAAN', percent: 82.5, precincts: '750 of 910' },
  { location: 'ZAMBALES', percent: 79.3, precincts: '670 of 845' },
  { location: 'AURORA', percent: 76.1, precincts: '350 of 460' },
  { location: 'TARLAC', percent: 80.0, precincts: '1200 of 1500' },

  { location: 'BATANGAS', percent: 78.6, precincts: '1600 of 2035' },
  { location: 'CAVITE', percent: 81.9, precincts: '2100 of 2565' },
  { location: 'LAGUNA', percent: 77.5, precincts: '1800 of 2320' },
  { location: 'QUEZON', percent: 79.8, precincts: '1400 of 1755' },

  { location: 'CAMARINES NORTE', percent: 74.2, precincts: '600 of 810' },
  { location: 'CAMARINES SUR', percent: 79.1, precincts: '1400 of 1770' },
  { location: 'ALBAY', percent: 76.5, precincts: '980 of 1263' },
  { location: 'SORSOGON', percent: 78.3, precincts: '750 of 950' },

  { location: 'NEGROS OCCIDENTAL', percent: 81.0, precincts: '2200 of 2720' },
  { location: 'NEGROS ORIENTAL', percent: 76.9, precincts: '1100 of 1430' },
  { location: 'ILOILO', percent: 79.2, precincts: '1345 of 1713' },
  { location: 'CAPIZ', percent: 78.5, precincts: '800 of 1020' },

  { location: 'CEBU', percent: 80.3, precincts: '2200 of 2750' },
  { location: 'BOHOL', percent: 75.8, precincts: '1100 of 1450' },
  { location: 'LEYTE', percent: 77.9, precincts: '1225 of 1625' },
  { location: 'SAMAR', percent: 72.5, precincts: '800 of 1125' },

  { location: 'ZAMBOANGA DEL NORTE', percent: 70.2, precincts: '900 of 1280' },
  { location: 'ZAMBOANGA DEL SUR', percent: 74.8, precincts: '1100 of 1510' },
  { location: 'ZAMBOANGA SIBUGAY', percent: 72.9, precincts: '750 of 1025' },

  { location: 'DAVAO DEL NORTE', percent: 83.5, precincts: '1200 of 1435' },
  { location: 'DAVAO DEL SUR', percent: 82.1, precincts: '1400 of 1705' },
  { location: 'COMPOSTELA VALLEY', percent: 78.6, precincts: '900 of 1145' },

  { location: 'COTABATO', percent: 74.5, precincts: '980 of 1325' },
  { location: 'MAGUINDANAO', percent: 76.2, precincts: '850 of 1115' },
  { location: 'LANAO DEL NORTE', percent: 78.1, precincts: '1020 of 1305' },
  { location: 'LANAO DEL SUR', percent: 71.9, precincts: '800 of 1110' },
];

const candidates = [
  { name: 'Go, Bong', percent: 56.8, votes: 23_435_453 },
  { name: 'Tulfo, Erwin', percent: 52.7, votes: 21_987_654 },
  { name: 'Sotto, Vicente III', percent: 48.3, votes: 19_876_321 },
  { name: 'Dela Rosa, Ronald', percent: 45.6, votes: 18_543_210 },
  { name: 'Tulfo, Ben', percent: 42.1, votes: 17_654_789 },
  { name: 'Cayetano, Pia', percent: 39.8, votes: 16_432_567 },
  { name: 'Revilla, Bong', percent: 38.1, votes: 15_987_654 },
  { name: 'Binay, Abigail', percent: 37.6, votes: 15_654_321 },
  { name: 'Lapid, Lito', percent: 35.6, votes: 14_876_543 },
  { name: 'Lacson, Panfilo', percent: 34.3, votes: 14_543_210 },
  { name: 'Villar, Camille', percent: 31.9, votes: 13_987_654 },
  { name: 'Aquino, Bam', percent: 31.4, votes: 13_654_321 },
  { name: 'Gonzalez, Rafael', percent: 54.2, votes: 22_345_678 },
  { name: 'Marquez, Isabella', percent: 50.7, votes: 20_987_654 },
  { name: 'Reyes, Daniel', percent: 49.3, votes: 19_876_321 },
  { name: 'Santos, Maria', percent: 47.6, votes: 18_543_210 },
  { name: 'Tan, Miguel', percent: 45.1, votes: 17_654_789 },
  { name: 'Cruz, Angelica', percent: 42.8, votes: 16_432_567 },
  { name: 'Vega, Samuel', percent: 40.3, votes: 15_987_654 },
  { name: 'Torres, Camille', percent: 38.9, votes: 15_654_321 },
  { name: 'Navarro, Joaquin', percent: 37.1, votes: 14_876_543 },
  { name: 'Ramos, Stephanie', percent: 36.0, votes: 14_543_210 },
  { name: 'Fernandez, Patrick', percent: 34.5, votes: 13_987_654 },
  { name: 'Mendoza, Lorena', percent: 33.2, votes: 13_654_321 },
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


const Results = () => {
  return (
    <>
      <Map />
      <div className="flex items-center justify-center bg-[#F0F0F0]">
        <div className="w-[90%] py-10 flex flex-col gap-8">
          <div className="text-white bg-black w-full flex items-center justify-center py-2">
            <p className="font-bold text-xl">LOCAL RESULTS</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <ResultCard region={"NATIONAL CAPITAL REGION"} votesData={NCRData} />
            <ResultCard region={"CORDILLERA ADMINISTRATIVE REGION"} votesData={carData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Results