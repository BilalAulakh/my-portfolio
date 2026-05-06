"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Project = {
  num: string
  title: string
  desc: string
  stack: string[]
  link?: string
}

const projects: Project[] = [
  {
    num: "/01",
    title: "Salveo Well — Wellness E-commerce & Affiliate Platform",
    desc: "Organic supplement store with multi-tier membership (Gold/Silver/Platinum), MLM power-leg structure, leaderboards, and dashboards for orders, commissions, and team growth.",
    stack: ["React.js", "Redux Toolkit", "Vite", "SASS"],
    link: "https://salveowell.com/",
  },
  {
    num: "/02",
    title: "Boshna — Multi-Vendor & Admin Dashboard",
    desc: "Multi-role management system with separate Admin/Vendor portals, real-time order lifecycle (accept/reject/deliver), RBAC, Recharts analytics, and Google Maps delivery tracking.",
    stack: ["React 19", "Redux Toolkit", "Formik + Yup", "Recharts"],
    link: "https://admin.boshna.sa",
  },
  {
    num: "/03",
    title: "Enterprise B2B Multi-Vendor Booking Ecosystem",
    desc: "B2B marketplace bridging vendors and corporate clients across stays, fleet, and experiences — multi-tenant vendor workspaces, decoupled Next.js client portal + React vendor suite, RBAC, and a Node.js engine handling bulk bookings, contracts, and multi-vendor payouts.",
    stack: ["Next.js", "React.js", "Node.js + Express", "Tailwind CSS"],
  },
  {
    num: "/04",
    title: "AsianFX — Forex & Crypto Trading Signals Platform",
    desc: "FinTech platform broadcasting real-time Buy/Sell signals (entry, target, stop-loss) for BTC, Gold, and Silver. Free + premium subscription tiers, Socket.io live updates with a live-clients counter, breaking-news countdowns, and an admin-managed wallet & deposit system.",
    stack: ["Next.js", "Redux Toolkit", "Node.js", "PostgreSQL"],
  },
  {
    num: "/05",
    title: "Instagram-style Social Media App",
    desc: "Full-stack social platform with photo posts, feed, likes, comments, follows, and real-time interactions — built mobile-first with a Next.js frontend and a Node.js/Express API.",
    stack: ["Next.js", "Node.js + Express", "MongoDB", "REST API"],
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
              href={p.link ?? "#contact"}
              {...(p.link
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group grid grid-cols-[80px_1fr] gap-8 py-10 border-b border-border items-center transition-[padding] duration-300 hover:pl-4 ${
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
