
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 group border-border/50", className)}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-muted-foreground">
            No Image
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">{title}
          {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
          )}
          </CardTitle>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {description}
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" className="w-full gap-2" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}