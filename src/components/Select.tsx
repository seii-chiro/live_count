import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";

type Option = {
    label: string;
    value: string;
};

type AnimatedSelectProps = {
    options: Option[];
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
};

const dropdownVariants = {
    open: {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.25, ease: 'easeInOut' },
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.2, ease: 'easeInOut' },
    },
};

export default function Select({
    options,
    value,
    onChange,
    placeholder = 'Select an option',
}: AnimatedSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedLabel = options.find(opt => opt.value === value)?.label;

    return (
        <div className="relative w-full text-sm z-[5000]">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="w-full flex justify-between items-center bg-white border font-bold border-gray-300 rounded-lg px-4 py-2 text-left shadow-sm hover:shadow-md transition-all"
            >
                <span>{selectedLabel || placeholder}</span>
                <span>
                    <IoIosArrowDown />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.ul
                        className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                    >
                        {options.map(opt => (
                            <li
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt.value);
                                    setIsOpen(false);
                                }}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100 font-semibold"
                            >
                                {opt.label}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
