
import { Experience } from "@/lib/Types"
import { Badge } from "./ui/badge"

interface ExperienceSectionProps {
    experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <div className="space-y-8">
            {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-border/50">
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{exp.duration}</span>
                    </div>
                    <div className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-4">
                        {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
