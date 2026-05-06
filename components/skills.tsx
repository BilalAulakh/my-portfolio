"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    num: "01 / Frontend",
    title: "Frontend Development",
    desc: "Building responsive, performant user interfaces with React and Next.js, styled with modern CSS frameworks.",
    tags: ["React.js", "Next.js", "TailwindCSS", "Material UI"],
  },
  {
    num: "02 / Backend",
    title: "Backend Engineering",
    desc: "Designing scalable REST APIs and server architectures using Node.js and Express with clean separation of concerns.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    num: "03 / Database",
    title: "Database & Data",
    desc: "Working with both relational and NoSQL databases, designing schemas and writing optimized queries.",
    tags: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
  },
  {
    num: "04 / Tools",
    title: "Tools & Workflow",
    desc: "Comfortable with modern development workflows, version control, and collaborative team practices.",
    tags: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    num: "05 / AI Integration",
    title: "AI-Powered Apps",
    desc: "Building intelligent web applications by integrating LLMs and AI APIs — chatbots, content generation, smart assistants, and automation.",
    tags: ["OpenAI API", "Claude API", "LangChain", "Gemini"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            <span className="w-7 h-px bg-accent" />
            Expertise
          </div>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] mb-5 text-[clamp(2.2rem,4vw,3.2rem)]">
            Technical <em className="italic text-accent">capabilities</em>.
          </h2>
          <p className="text-[1.05rem] text-text-dim max-w-[580px]">
            A focused MERN stack toolkit refined over three years of shipping
            production software.
          </p>
        </div>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-bg-card border border-border rounded-sm p-8 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-accent-soft"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--accent), transparent)",
                }}
              />
              <div className="font-mono text-xs text-text-muted mb-6 tracking-[0.1em]">
                {s.num}
              </div>
              <h4 className="font-serif text-[1.4rem] font-medium mb-4">{s.title}</h4>
              <p className="text-text-dim text-[0.95rem] mb-6 leading-[1.7]">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.7rem] px-3 py-1 rounded-sm bg-accent/[0.08] text-accent tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
