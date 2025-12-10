
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-edge py-6 md:py-0">
      <div className="container-width flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          
          
          © 2024 Abhipsa Mallick. All rights reserved.
        </p>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-right">
          
          
         Thanks for scrolling this far 🙌
        </p>
        
      </div>
    </footer>
  )
}
