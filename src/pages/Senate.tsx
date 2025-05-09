import SenatorsCard from "@/components/cards/senate/SenatorsCard";
import PhilippinesMap from "@/map/components/PhilippineMap";

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

const Senate = () => {
  return (
    <div className="w-full border-y border-[#D8D8D8] mt-8 py-10 lg:py-0">
      <div className="w-[90%] flex flex-col lg:flex-row items-center mx-auto">
        <div className="flex-grow">
          <PhilippinesMap />
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