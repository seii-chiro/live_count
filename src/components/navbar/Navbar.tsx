import { NavLink } from "react-router";

const links = [
    { to: "results", label: "RESULTS" },
    { to: "senate", label: "SENATE" },
    { to: "party-list", label: "PARTY-LIST" },
    { to: "local", label: "LOCAL" },
];

const Navbar = () => {
    return (
        <nav className="w-full h-12 bg-black"> {/* fixed height */}
            <ul className="w-full h-full flex justify-between px-40">
                {links.map(({ to, label }) => (
                    <NavLink key={label} to={to} className="h-full flex items-center justify-center">
                        {({ isActive }) => (
                            <li
                                className={`h-full px-20 flex items-center ${isActive ? "bg-[#E9BC49]" : ""
                                    }`}
                            >
                                <span className="font-bold text-white text-xl">{label}</span>
                            </li>
                        )}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
