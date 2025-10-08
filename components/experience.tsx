"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "TechCorp",
    description:
      "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    period: "2022 — 2024",
    title: "Frontend Developer",
    company: "StartupXYZ",
    description:
      "Developed and maintained the company's main web application, focusing on user experience and performance optimization. Collaborated with design team to implement pixel-perfect interfaces.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    period: "2020 — 2022",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description:
      "Built custom web applications for various clients, from e-commerce platforms to corporate websites. Managed projects from conception to deployment.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <div className="w-12 h-px bg-primary"></div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Experience</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-4 gap-6 lg:gap-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="lg:col-span-1">
                  <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                </div>

                <div className="lg:col-span-3 space-y-4 relative">
                  <div className="absolute -left-5 top-1 bottom-1 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden lg:block" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
