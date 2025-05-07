import { motion } from "framer-motion"

export function ProgressBar({ current, max }: { current: number; max: number }) {
    const percentage = max > 0 ? (current / max) * 100 : 0;

    return (
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-[#E9BC49]"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
        </div>
    );
}
