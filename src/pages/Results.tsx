import ResultCard from "@/components/ResultCard"
import Map from "@/map/Map"

const Results = () => {
  return (
    <>
      <Map />
      <div className="flex items-center justify-center bg-[#F0F0F0]">
        <div className="w-[90%] flex flex-col lg:flex-row gap-8 py-10">
          <ResultCard region={1} />
          <ResultCard region={2} />
        </div>
      </div>
    </>
  )
}

export default Results