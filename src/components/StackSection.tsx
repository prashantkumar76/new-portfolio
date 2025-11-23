import { SKILLS } from "@/lib/Constant"
import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react"

interface RadialProgressProps {
    level: number
    color: string
    size?: number
}

const RadialProgress = forwardRef<{ triggerHover: () => void }, RadialProgressProps>(
    ({ level, color, size = 40 }, ref) => {
    const radius = (size - 8) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (level / 100) * circumference
    
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-50px" })
    const controls = useAnimation()
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (isInView && !hasAnimated) {
            controls.start({
                strokeDashoffset: offset,
                transition: { duration: 1.2, ease: "easeOut" }
            })
            setHasAnimated(true)
        } else if (!isInView) {
            controls.set({ strokeDashoffset: circumference })
            setHasAnimated(false)
        }
    }, [isInView, controls, offset, circumference, hasAnimated])

    const triggerHover = () => {
        // Reset slightly and animate again for hover effect
        controls.start({
            strokeDashoffset: circumference * 0.9,
            transition: { duration: 0.1 }
        }).then(() => {
            controls.start({
                strokeDashoffset: offset,
                transition: { duration: 0.6, ease: "easeOut" }
            })
        })
    }

    useImperativeHandle(ref, () => ({
        triggerHover
    }))

    return (
        <div 
            ref={containerRef}
            className="relative inline-flex items-center justify-center" 
            style={{ width: size, height: size }}
        >
            <svg
                className="transform -rotate-90"
                width={size}
                height={size}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-border/30"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                    animate={controls}
                />
            </svg>
            <motion.span 
                className="absolute text-[10px] font-semibold" 
                style={{ color }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: hasAnimated ? 1 : 0,
                    scale: hasAnimated ? 1 : 0.8
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {level}%
            </motion.span>
        </div>
    )
})

RadialProgress.displayName = "RadialProgress"

export default function StackSection() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4">
            {SKILLS.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    )
}

function SkillCard({ skill }: { skill: { id: number; name: string; level: number; color: string } }) {
    const progressRef = useRef<{ triggerHover: () => void }>(null)

    return (
        <div
            className={cn(
                "flex items-center gap-3 p-2 rounded-xl border border-border/50 dark:border-gray-800",
                "bg-card/30 hover:bg-accent/20 transition-colors cursor-default"
            )}
            onMouseEnter={() => {
                progressRef.current?.triggerHover()
            }}
        >
            <RadialProgress 
                ref={progressRef}
                level={skill.level} 
                color={skill.color} 
                size={40} 
            />
            <span className="text-sm font-medium text-center">{skill.name}</span>
        </div>
    )
}
