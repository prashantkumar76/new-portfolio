
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { ProjectCard } from "@/components/ProjectCard"
import Footer from "@/components/Footer"
import ExperienceSection from "@/components/Experience"
import CertificationsSection from "@/components/CertificationsSection"
import StackSection from "@/components/StackSection"
import GithubGraph from "@/components/GithubGraph"
import Contact from "@/components/Contact"
import { PROJECTS, EXPERIENCE_DATA, CERTIFICATION_DATA, AboutMeData } from "@/lib/Constant"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 relative">
      <div
        className="fixed inset-0 -z-50 w-full h-full bg-cover bg-center pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'url("/assets/background.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      ></div>
      <Header />

      <main className="container-width px-4 md:px-6 space-y-12 pb-20">
        <Hero />
        <section id="about" className="scroll-section space-y-2">
          <h2 className="section-title">{AboutMeData.text}</h2>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              {AboutMeData.description}
            </p>
          </div>
        </section>

        <hr className="border-edge" />

        <section id="github" className="scroll-section space-y-2">
          <h2 className="section-title">GitHub Activity</h2>
          <GithubGraph />
        </section>

        <hr className="border-edge" />

        <section id="stack" className="scroll-section space-y-2">
          <h2 className="section-title">Tech Stack</h2>
          <StackSection />
        </section>

        <hr className="border-edge" />

        <section id="experience" className="scroll-section space-y-2">
          <h2 className="section-title">Experience</h2>
          <ExperienceSection experiences={EXPERIENCE_DATA} />
        </section>

        <hr className="border-edge" />

        <section id="certifications" className="scroll-section space-y-2">
          <CertificationsSection certifications={CERTIFICATION_DATA} />
        </section>

        <hr className="border-edge" />

        <section id="projects" className="scroll-section space-y-2">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                liveUrl={project.url}
              />
            ))}
          </div>
        </section>

        <hr className="border-edge" />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default Index
