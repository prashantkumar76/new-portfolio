import { SKILL_LIST_DATA } from "@/lib/Constant"
import { cn } from "@/lib/utils"

export default function StackSection() {
    return (
        <div className="grid grid-cols-1  gap-6">
            {SKILL_LIST_DATA.map((category) => (
                <div
                    key={category.title}
                    className="flex flex-col gap-4 p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-accent/20 transition-colors"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {/* Render icon if it's a valid element */}
                            {category.icon}
                        </div>
                        <h3 className="font-semibold tracking-tight">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <span
                                key={skill}
                                className={cn(
                                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default"
                                )}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
