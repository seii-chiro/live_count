import { LuSearch } from "react-icons/lu";
import halalan_2025_logo from "@/assets/halalan_2025_logo.png"
import bnc_logo from "@/assets/bnc_logo_cropped.jpg"

const Header = () => {
    return (
        <header className="w-full">
            <div className="w-full flex justify-between items-center gap-[30%] px-40 py-4">
                <div className="flex-1">
                    <img src={halalan_2025_logo} alt="Halalan 2025 Logo" />
                </div>
                <div className="flex-[3]">
                    <div className="flex items-center border-b-2 pb-1 border-[#D8D8D8]">
                        <LuSearch color="#E9BC49" />
                        <input
                            className="w-full focus:outline-none focus:border-none active:border-none pl-2"
                            placeholder="Search Location, Candidate, or Party List"
                        />
                    </div>
                </div>
                <div className="flex-1 scale-150">
                    <img src={bnc_logo} alt="Bilyonaryo News Channel Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header