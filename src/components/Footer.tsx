
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-edge py-6 md:py-0">
      <div className="container-width flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/1sisodiyaji"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Golu Singh
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/1sisodiyaji/portfolio-golu"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="/llms.txt" target="_blank" className="hover:underline underline-offset-4">
            llms.txt
          </a>
          <span>•</span>
          <a href="/sitemap.xml" target="_blank" className="hover:underline underline-offset-4">
            sitemap.xml
          </a>
        </div>
      </div>
    </footer>
  )
}
