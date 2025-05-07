import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { to: "results", label: "RESULTS" },
    { to: "senate", label: "SENATE" },
    { to: "party-list", label: "PARTY-LIST" },
    { to: "local", label: "LOCAL" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Get the active route label
    const getActiveLabel = () => {
        const activeLink = links.find(link => location.pathname.includes(link.to));
        return activeLink ? activeLink.label : "";
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="w-full h-12 bg-black hidden lg:block px-30">
                <ul className="w-full h-full flex gap-40 justify-between">
                    {links.map(({ to, label }) => (
                        <NavLink key={label} to={to} className="h-full w-full flex items-center justify-center">
                            {({ isActive }) => (
                                <li
                                    className={`h-full w-full flex items-center justify-center ${isActive ? "bg-[#E9BC49]" : ""
                                        }`}
                                >
                                    <span className="font-bold text-white text-xl">{label}</span>
                                </li>
                            )}
                        </NavLink>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="w-full bg-black lg:hidden px-4">
                {/* Mobile Menu Header */}
                <div className="flex justify-center items-center px-4 h-12 bg-[#E9BC49]">
                    <div className="text-white font-bold text-xl">{getActiveLabel()}</div>
                    <button
                        onClick={toggleMenu}
                        className="text-white p-2 px-4 flex items-center justify-center"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className="flex flex-col w-full"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {links.map(({ to, label }) => (
                                <NavLink
                                    key={label}
                                    to={to}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full"
                                >
                                    {({ isActive }) => (
                                        <motion.li
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                            className={`py-3 px-6 border-b border-gray-700 ${isActive ? "bg-[#E9BC49]" : ""
                                                }`}
                                        >
                                            <span className="font-bold text-white text-lg">{label}</span>
                                        </motion.li>
                                    )}
                                </NavLink>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;