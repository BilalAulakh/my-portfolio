"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/tilt-card"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that displays current conditions and forecasts with interactive charts and location-based services.",
    image: "/weather-dashboard.png",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
    image: "/creative-portfolio-website.png",
    technologies: ["Gatsby", "GraphQL", "GSAP", "Netlify"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-12 h-px bg-primary"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group [perspective:1200px]"
              >
                <TiltCard className="will-change-transform">
                  <Card className="overflow-hidden border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden relative">
                      <motion.img
                        src={project.image || "/placeholder.svg?height=720&width=1280&query=project thumbnail"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="flex gap-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.githubUrl}>
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <motion.h3
                          className="text-xl font-semibold text-foreground"
                          whileHover={{ color: "hsl(var(--primary))" }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.liveUrl} className="flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.githubUrl} className="flex items-center gap-2">
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
