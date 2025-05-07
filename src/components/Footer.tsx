import { Link } from "react-router"
import halalan_2025_white from "@/assets/halalan_2025_white_logo.png"

const Footer = () => {

    const quickLinks = [
        "Home",
        "Business",
        "Brand News",
        "Social Fancy",
        "Video",
        "Money & Trade",
        "Property",
        "Technology",
        "Travel",
        "Health",
        "Lifestyle",
        "Food & Nature",
        "Fine Works",
        "Golf",
        "RSS"
    ];


    return (
        <footer className="bg-[#24252A] w-full h-[25vh]">
            <div>
                <div className="text-white w-full flex items-center justify-between">
                    <Link
                        className="font-bold"
                        to="results"
                    >
                        RESULTS
                    </Link>
                    <Link
                        className="font-bold"
                        to="senate"
                    >
                        SENATE
                    </Link>
                    <div className="w-28">
                        <img src={halalan_2025_white} alt="Halalan 2025 Logo" />
                    </div>
                    <Link
                        className="font-bold"
                        to="party-list"
                    >
                        PARTY-LIST
                    </Link>
                    <Link
                        className="font-bold"
                        to="local"
                    >
                        LOCAL
                    </Link>
                </div>
                <div>
                    {
                        quickLinks?.map(link => (
                            <Link
                                className="text-[#E9BC49]"
                                to="#"
                            >
                                {link}
                            </Link>
                        ))
                    }
                </div>
                <hr className="text-white" />
                <div></div>
            </div>
        </footer>
    )
}

export default Footer