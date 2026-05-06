"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const items = [
  {
    period: "Current · 2 Years 4 Months",
    role: "MERN Stack Developer",
    company: "Bixosoft",
    desc: "Working on scalable web applications using React, Next.js, Node.js, and Express. Building robust REST APIs, integrating PostgreSQL and MongoDB databases, and crafting responsive UIs with TailwindCSS and Material UI. Collaborating with cross-functional teams to deliver production-grade software.",
  },
  {
    period: "7 Months",
    role: "Web Developer",
    company: "ASDEV Tech",
    desc: "Started my professional career building MERN stack applications. Gained hands-on experience with React.js, Node.js, Express, and MongoDB. Worked on full-stack features end-to-end, from database design to UI implementation, while developing strong fundamentals in modern web development.",
  },
]

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            <span className="w-7 h-px bg-accent" />
            Career
          </div>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] mb-5 text-[clamp(2.2rem,4vw,3.2rem)]">
            Professional <em className="italic text-accent">journey</em>.
          </h2>
          <p className="text-[1.05rem] text-text-dim max-w-[580px]">
            Where I&apos;ve worked and what I&apos;ve built along the way.
          </p>
        </div>

        <div className="relative pl-8 border-l border-border">
          {items.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 py-6 pb-10"
            >
              <span
                aria-hidden
                className="absolute -left-[2.4rem] top-8 w-3 h-3 rounded-full bg-accent"
                style={{ boxShadow: "0 0 0 4px var(--background)" }}
              />
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-2">
                {item.period}
              </div>
              <h3 className="font-serif text-[1.5rem] font-medium mb-1">{item.role}</h3>
              <div className="text-[0.95rem] font-medium text-accent-soft mb-3">
                {item.company}
              </div>
              <p className="text-text-dim text-[0.95rem] leading-[1.7]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
