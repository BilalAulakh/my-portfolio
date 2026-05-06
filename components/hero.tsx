"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="hero relative min-h-screen flex items-center pt-32 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1240px] w-full mx-auto px-8">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 mb-8 font-mono text-xs uppercase tracking-[0.15em] text-accent">
              <span
                className="pulse-dot inline-block w-2 h-2 rounded-full bg-accent"
                style={{ boxShadow: "0 0 12px var(--accent)" }}
              />
              Available for new projects
            </div>

            <h1 className="font-serif font-normal leading-[0.98] tracking-[-0.03em] mb-8 text-[clamp(3rem,7vw,5.5rem)]">
              Building <em className="italic font-light text-accent">scalable</em> web apps with the MERN stack &amp; AI.
            </h1>

            <p className="text-[1.1rem] text-text-dim max-w-[540px] mb-10 leading-[1.7]">
              Hi, I&apos;m Muhammad Bilal — a MERN Stack Developer with 3+ years of
              experience building modern web applications and AI-powered products
              using React, Node.js, and the latest LLM APIs.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-accent text-background text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foreground hover:-translate-y-0.5"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-transparent text-foreground border border-border text-sm font-medium tracking-wide transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative bg-bg-card border border-border rounded-sm p-8 overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-[3px] h-full bg-accent" />

            <div className="flex gap-1.5 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28ca42]" />
            </div>

            <pre className="font-mono text-[0.85rem] leading-[1.8] text-text-dim whitespace-pre-wrap">
              <span className="text-text-muted italic">{"// developer.profile"}</span>
              {"\n"}
              <span className="text-[#c5897e]">const</span> bilal = {"{"}
              {"\n  "}name: <span className="text-[#a3b886]">{"'Muhammad Bilal'"}</span>,
              {"\n  "}role: <span className="text-[#a3b886]">{"'MERN + AI Developer'"}</span>,
              {"\n  "}stack: [<span className="text-[#a3b886]">{"'React'"}</span>,{" "}
              <span className="text-[#a3b886]">{"'Node'"}</span>,{" "}
              <span className="text-[#a3b886]">{"'AI'"}</span>],
              {"\n  "}experience: <span className="text-accent">3</span>,
              {"\n  "}buildsWith: <span className="text-[#a3b886]">{"'LLMs & APIs'"}</span>,
              {"\n  "}available: <span className="text-[#c5897e]">true</span>
              {"\n"}
              {"};"}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
