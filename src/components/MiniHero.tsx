import { LuInfo } from "react-icons/lu";
import { ProgressBar } from "./Progressbar";

const MiniHero = () => {
    const totalProcessed = 100;
    const maxCount = 1000;
    const percentage = (totalProcessed / maxCount) * 100;

    const totalRegisteredVoters = 1_403_895;
    const totalVotes = 1_108_385
    const totalVotesPercentage = (totalVotes / totalRegisteredVoters) * 100;

    return (
        <div className="w-full flex justify-center mt-4">
            <div className="w-[90%] flex flex-col lg:flex-row gap-4">
                <div className="border border-[#E9BC49] bg-[#E9BC49]/10 flex flex-col lg:flex-row items-center justify-between rounded-[10px] px-4 py-4 lg:py-0 flex-[2]">
                    <div className="flex gap-2 items-center">
                        <LuInfo color="#E9BC49" />
                        <p className="font-bold text-[#E9BC49]">PARTIAL AND UNOFFICIAL RESULTS</p>
                    </div>
                    <div className="text-sm">
                        <p>
                            Last updated: <span className="font-bold">May 12, 2025 - 10:45 PM</span>
                        </p>
                        <p>
                            Source: <span className="font-bold">COMELEC Transparency Media Server</span>
                        </p>
                    </div>
                </div>
                <div className="flex-[2] flex flex-col sm:flex-row gap-4">
                    <div className="border border-[#D8D8D8] rounded-[10px] p-4 flex-1 text-sm">
                        <div className="flex items-center w-full justify-between">
                            <p className="font-bold">TOTAL ER's PROCESSED</p>
                            <p className="text-lg font-bold text-[#E9BC49]">{percentage.toFixed(2)}%</p>
                        </div>
                        <div>
                            <ProgressBar current={totalProcessed} max={maxCount} />
                        </div>
                        <div>
                            <span className="font-bold">{totalProcessed?.toLocaleString()}</span> of <span className="font-bold">{maxCount?.toLocaleString()}</span> clustered precincts
                        </div>
                    </div>
                    <div className="border border-[#D8D8D8] rounded-[10px] p-4 flex-1 text-sm">
                        <div className="flex items-center w-full justify-between">
                            <p className="font-bold">VOTES IN</p>
                            <p className="text-lg font-bold text-[#E9BC49]">{totalVotesPercentage.toFixed(2)}%</p>
                        </div>
                        <div>
                            <ProgressBar current={totalVotes} max={totalRegisteredVoters} />
                        </div>
                        <div>
                            <span className="font-bold">{totalVotes?.toLocaleString()}</span> of <span className="font-bold">{totalRegisteredVoters?.toLocaleString()}</span> Registered Voters
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniHero