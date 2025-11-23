
import { Star, GitFork } from "lucide-react"
import { Button } from "./ui/button"

// Mock data for now, ideally this would come from GitHub API or Constant.tsx
const REPOS = [
    {
        name: "portfolio-golu",
        description: "My personal portfolio website built with React and Vite.",
        stars: 12,
        forks: 4,
        language: "TypeScript",
        url: "https://github.com/golu-kumar/portfolio-golu"
    },
    {
        name: "craftfosslabs",
        description: "Open source platform for developer tools and resources.",
        stars: 45,
        forks: 12,
        language: "Next.js",
        url: "https://github.com/craftfosslabs/platform"
    },
    {
        name: "react-components",
        description: "A collection of reusable React components.",
        stars: 89,
        forks: 23,
        language: "React",
        url: "https://github.com/golu-kumar/react-components"
    }
]

export default function GithubStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REPOS.map((repo) => (
                <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 border border-border/50 rounded-lg hover:bg-accent/30 transition-colors"
                >
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{repo.name}</h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Star className="h-3 w-3" /> {repo.stars}
                            </span>
                            <span className="flex items-center gap-1">
                                <GitFork className="h-3 w-3" /> {repo.forks}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {repo.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        {repo.language}
                    </div>
                </a>
            ))}
            <div className="flex items-center justify-center p-4 border border-border/50 border-dashed rounded-lg">
                <Button variant="ghost" asChild>
                    <a href="https://github.com/golu-kumar" target="_blank" rel="noopener noreferrer">
                        View all repositories →
                    </a>
                </Button>
            </div>
        </div>
    )
}
