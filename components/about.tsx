"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 bg-bg-soft" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] relative rounded-sm overflow-hidden border border-border bg-gradient-to-br from-bg-card to-border"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0, transparent 10px, rgba(212,165,116,0.04) 10px, rgba(212,165,116,0.04) 11px)",
              }}
            />
            <Image
              src="/profile.png"
              alt="Muhammad Bilal"
              fill
              priority
              className="object-cover transition-[filter] duration-500 grayscale-[15%] contrast-[1.05] hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
              <span className="w-7 h-px bg-accent" />
              About Me
            </div>

            <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] mb-5 text-[clamp(2.2rem,4vw,3.2rem)]">
              A developer who <em className="italic text-accent">cares</em> about clean code.
            </h2>

            <h3 className="font-serif text-[1.6rem] font-normal mb-6 leading-[1.3]">
              Three plus years of building real-world MERN stack applications.
            </h3>

            <p className="text-text-dim mb-5 leading-[1.8]">
              I&apos;m Muhammad Bilal, a full-stack JavaScript developer based in
              Pakistan. I specialize in the MERN stack and have spent the last few
              years shipping production applications — from internal tools to
              customer-facing platforms.
            </p>

            <p className="text-text-dim mb-5 leading-[1.8]">
              Beyond traditional web development, I also build{" "}
              <strong className="text-accent font-medium">AI-powered applications</strong>{" "}
              by integrating LLMs like OpenAI and Claude into modern web stacks —
              chatbots, smart assistants, content generators, and intelligent
              automation tools.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {[
                { num: "3+", label: "Years Experience" },
                { num: "2", label: "Companies" },
                { num: "10+", label: "Projects Shipped" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-[2.5rem] font-normal text-accent leading-none mb-2">
                    {s.num}
                  </div>
                  <div className="text-sm text-text-muted tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
