import { Link } from "react-router";
import halalan_2025_white from "@/assets/halalan_2025_white_logo.png";

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
    "RSS",
  ];

  return (
    <footer className="bg-[#24252A] w-full py-8 flex items-center justify-center">
      <div className="w-[90%] flex flex-col gap-4">
        {/* Top Section */}
        <div className="w-full text-white flex flex-col md:flex-row md:items-center md:justify-between md:w-[80%] md:mx-auto">
          {/* Mobile layout: logo + stacked links */}
          <div className="block lg:hidden mb-4 w-28">
            <img src={halalan_2025_white} alt="Halalan 2025 Logo" />
          </div>

          <div className="flex flex-col lg:flex-row md:items-center md:gap-[12%] text-left md:justify-center w-full">
            <Link className="font-bold" to="results">RESULTS</Link>
            <Link className="font-bold" to="senate">SENATE</Link>

            {/* Desktop logo center */}
            <div className="hidden lg:block w-28">
              <img src={halalan_2025_white} alt="Halalan 2025 Logo" />
            </div>

            <Link className="font-bold" to="party-list">PARTY-LIST</Link>
            <Link className="font-bold" to="local">LOCAL</Link>
          </div>
        </div>

        {/* QuickLinks - only visible on md+ */}
        <div className="hidden lg:flex w-full flex-wrap items-center justify-between text-sm">
          {quickLinks.map((link, index) => (
            <Link key={index} className="text-[#E9BC49]" to="#">
              {link}
            </Link>
          ))}
        </div>

        <hr className="border-gray-500" />

        {/* Bottom Text */}
        <div className="w-full flex justify-center">
          <p className="text-white text-sm text-center">
            Copyright &copy; 2025. Bilyonaryo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
