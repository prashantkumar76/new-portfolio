import * as React from "react"
import {
  Moon,
  Sun,
  Laptop,
  Home,
  Briefcase,
  Code,
  User,
  Github,
  Mail,
  Award,
  FileText
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useTheme } from "next-themes"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const runCommand = React.useCallback((command: () => void) => {
    console.log("Running command...")
    setOpen(false)
    // Small delay to ensure dialog closes before scrolling
    setTimeout(() => {
      console.log("Executing command action...")
      command()
    }, 150)
  }, [])

  return (
    <>
      <button
        onClick={() => {
          console.log("Search button clicked")
          setOpen(true)
        }}
        className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem
              value="home"
              onSelect={() => {
                console.log("Home selected");
                runCommand(() => window.scrollTo({ top: 0, behavior: "smooth" }));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              value="about"
              onSelect={() => {
                console.log("About selected");
                runCommand(() => scrollToSection("about"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <User className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem
              value="github"
              onSelect={() => {
                console.log("Github selected");
                runCommand(() => scrollToSection("github"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub Activity</span>
            </CommandItem>
            <CommandItem
              value="stack"
              onSelect={() => {
                console.log("Stack selected");
                runCommand(() => scrollToSection("stack"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Tech Stack</span>
            </CommandItem>
            <CommandItem
              value="experience"
              onSelect={() => {
                console.log("Experience selected");
                runCommand(() => scrollToSection("experience"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </CommandItem>
            <CommandItem
              value="certifications"
              onSelect={() => {
                console.log("Certifications selected");
                runCommand(() => scrollToSection("certifications"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Award className="mr-2 h-4 w-4" />
              <span>Certifications</span>
            </CommandItem>
            <CommandItem
              value="projects"
              onSelect={() => {
                console.log("Projects selected");
                runCommand(() => scrollToSection("projects"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem
              value="contact"
              onSelect={() => {
                console.log("Contact selected");
                runCommand(() => scrollToSection("contact"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              value="theme-light"
              onSelect={() => {
                console.log("Theme Light selected");
                runCommand(() => setTheme("light"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem
              value="theme-dark"
              onSelect={() => {
                console.log("Theme Dark selected");
                runCommand(() => setTheme("dark"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem
              value="theme-system"
              onSelect={() => {
                console.log("Theme System selected");
                runCommand(() => setTheme("system"));
              }}
              className="cursor-pointer aria-selected:cursor-pointer"
            >
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
