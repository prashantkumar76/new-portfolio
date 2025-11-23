
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface FlipSentencesProps {
    children: string[];
    className?: string;
}

export function FlipSentences({ children, className }: FlipSentencesProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % children.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [children.length]);

    return (
        <div className={cn("relative flex flex-col overflow-hidden", className)}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center"
                >
                    {children[index]}
                </motion.div>
            </AnimatePresence>
            {/* Invisible spacer to maintain height */}
            <div className="invisible">{children[0]}</div>
        </div>
    );
}
