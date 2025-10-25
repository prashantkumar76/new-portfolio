export const cardVariants = {
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    },
    tap: {
        scale: 0.98,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
};
export const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};
export const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
    },
};
export const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(112, 48, 255, 0.6)", transition: { duration: 0.2 } },
    blur: { scale: 1, boxShadow: "none", transition: { duration: 0.2 } }
};
export const buttonVariants = {
    idle: {},
    submitting: { scale: 0.98 },
    success: { scale: 1, backgroundColor: "rgb(34, 197, 94)", transition: { duration: 0.3 } },
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(112, 48, 255, 0.6)" },
    tap: { scale: 0.95 }
};