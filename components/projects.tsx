"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    num: "/01",
    title: "Salveo Well — Wellness E-commerce & Affiliate Platform",
    desc: "Organic supplement store with multi-tier membership (Gold/Silver/Platinum), MLM power-leg structure, leaderboards, and dashboards for orders, commissions, and team growth.",
    stack: ["React.js", "Redux Toolkit", "Vite", "SASS"],
  },
  {
    num: "/02",
    title: "Boshna — Multi-Vendor & Admin Dashboard",
    desc: "Multi-role management system with separate Admin/Vendor portals, real-time order lifecycle (accept/reject/deliver), RBAC, Recharts analytics, and Google Maps delivery tracking.",
    stack: ["React 19", "Redux Toolkit", "Formik + Yup", "Recharts"],
  },
  {
    num: "/03",
    title: "Task Management App",
    desc: "Team collaboration tool with real-time updates, drag-and-drop boards, and notifications.",
    stack: ["Next.js", "Socket.io", "MongoDB", "JWT"],
  },
  {
    num: "/04",
    title: "AI-Powered Chatbot Platform",
    desc: "Custom chatbot solution with LLM integration, context-aware responses, and admin dashboard for training.",
    stack: ["Next.js", "OpenAI API", "MongoDB", "Node.js"],
  },
  {
    num: "/05",
    title: "Booking & Scheduling System",
    desc: "End-to-end booking platform with calendar integration, payment processing, and email reminders.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Stripe"],
  },
]

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 bg-bg-soft" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            <span className="w-7 h-px bg-accent" />
            Selected Work
          </div>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] mb-5 text-[clamp(2.2rem,4vw,3.2rem)]">
            Recent <em className="italic text-accent">projects</em>.
          </h2>
          <p className="text-[1.05rem] text-text-dim max-w-[580px]">
            A small selection of MERN stack projects built across the past few years.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group grid grid-cols-[80px_1fr_auto] gap-8 py-10 border-b border-border items-center transition-[padding] duration-300 hover:pl-4 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <div className="font-mono text-[0.85rem] text-text-muted">{p.num}</div>
              <div>
                <h3 className="font-serif text-[1.6rem] font-normal mb-2 transition-colors duration-300 group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="text-text-dim text-[0.95rem] mb-3">{p.desc}</p>
                <div className="flex gap-3 flex-wrap font-mono text-xs text-text-muted tracking-wide">
                  {p.stack.map((s, idx) => (
                    <span key={s} className="flex items-center gap-3">
                      {s}
                      {idx < p.stack.length - 1 && <span aria-hidden>•</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div className="font-serif text-2xl text-text-dim transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
