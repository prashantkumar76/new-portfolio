
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="scroll-section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm currently available for freelance work and full-time positions.
                        If you have a project that needs some creative touch, or just want to say hi,
                        feel free to send me a message!
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:contact@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                            <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center">
                                <Send className="w-5 h-5" />
                            </div>
                            <span>contact@example.com</span>
                        </a>
                        {/* Add more contact info if needed */}
                    </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message..."
                            rows={5}
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}
