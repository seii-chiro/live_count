import SenatorsCard from "@/components/cards/senate/SenatorsCard";
import Map from "@/map/Map";

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

const Senate = () => {
  return (
    <div className="w-full border-y border-[#D8D8D8] mt-8 py-10 lg:py-0">
      <div className="w-[90%] flex flex-col lg:flex-row items-center mx-auto">
        <div className="flex-grow">
          <Map />
        </div>
        <div className="w-full lg:w-[30%]">
          <SenatorsCard
            region={"PHILIPPINES"}
            votesData={candidates}
            estimatedVotesIn="Est. 81% votes in"
            lastUpdate="Updated: 2:47 PM - May 13, 2022"
          />
        </div>
      </div>
    </div>
  )
}

export default Senate