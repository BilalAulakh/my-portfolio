import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-12 border-t border-border text-center">
        <div className="max-w-[1240px] mx-auto px-8">
          <p className="text-text-muted text-[0.85rem] font-mono tracking-wide">
            © 2026 Muhammad Bilal — MERN Stack &amp; AI Developer.
          </p>
        </div>
      </footer>
    </main>
  )
}
