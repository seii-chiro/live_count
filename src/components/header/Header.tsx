import { LuSearch } from "react-icons/lu";
import halalan_2025_logo from "@/assets/halalan_2025_logo.png"
import bnc_logo from "@/assets/bnc_logo_cropped.jpg"

const Header = () => {
    return (
        <header className="w-full">
            <div className="w-full flex flex-row items-center justify-between px-4 md:px-20 lg:px-40 py-4 gap-4 md:gap-[5%]">
                {/* Left Logo */}
                <div className="flex justify-center md:justify-start md:flex-1">
                    <img
                        src={halalan_2025_logo}
                        alt="Halalan 2025 Logo"
                        className="w-32"
                    />
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-80">
                    <div className="flex items-center border-b-2 pb-1 border-[#D8D8D8]">
                        <LuSearch color="#E9BC49" />
                        <input
                            className="w-full focus:outline-none pl-2 text-sm"
                            placeholder="Search Location, Candidate, or Party List"
                        />
                    </div>
                </div>

                {/* Right Logo (BNC) - Hidden on small screens */}
                <div className="hidden md:flex justify-end md:flex-1">
                    <img
                        src={bnc_logo}
                        alt="Bilyonaryo News Channel Logo"
                        className="w-24 md:scale-150"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header