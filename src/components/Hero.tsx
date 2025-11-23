import { motion } from "framer-motion"
import { socialIcons } from "@/lib/Constant"
import { ProfileCover } from "./ProfileCover"
import { FlipSentences } from "./FlipSentences"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="flex flex-col w-full max-w-3xl mx-auto">
            <ProfileCover />

            <div className="flex border-x border-b border-edge bg-background">
                <div className="shrink-0 border-r border-edge p-4 flex items-start">
                    <div className="relative">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border relative z-10 bg-muted">
                            <img src="/android-chrome-512x512.png" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 z-20">
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-background"></span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="flex flex-col p-4 gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground font-mono">@golu-singh</span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-green-500/10 text-green-500">
                                Available for work
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Golu Singh
                        </h1>
                    </div>

                    <div className="border-t border-edge p-4 bg-muted/20">
                        <FlipSentences className="text-lg text-muted-foreground font-mono h-8">
                            {[
                                "Full Stack Developer",
                                "Open Source Enthusiast",
                                "UI/UX Designer",
                                "Problem Solver"
                            ]}
                        </FlipSentences>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-x border-edge">
                {socialIcons.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 border-b border-edge hover:bg-accent/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <span className="p-2 bg-muted rounded-md group-hover:bg-background transition-colors">
                                {social.icon}
                            </span>
                            <div className="flex flex-col">
                                <span className="font-medium text-foreground text-sm">{social.name || "Social"}</span>
                            </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                ))}
            </div>
        </section>
    )
}
