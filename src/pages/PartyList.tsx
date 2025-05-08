import PartyListCard from "@/components/cards/party-list/PartyListCard"
import MapPlaceHolder from "@/map/MapPlaceholder"

const partylist = [
  { name: 'Party A', percent: 100, votes: 19_654_321, imgSrc: null },
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

const PartyList = () => {
  return (
    <div className="w-full border-y border-[#D8D8D8] mt-8 py-10 lg:py-0">
      <div className="w-[90%] flex flex-col lg:flex-row items-center mx-auto">
        <div className="flex-grow">
          <MapPlaceHolder />
        </div>
        <div className="w-full lg:w-[30%]">
          <PartyListCard
            region={"PHILIPPINES"}
            votesData={partylist}
            estimatedVotesIn="Est. 81% votes in"
            lastUpdate="Updated: 2:47 PM - May 13, 2022"
          />
        </div>
      </div>
    </div>
  )
}

export default PartyList