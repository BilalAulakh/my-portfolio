"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">About</h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              Passionate about creating digital experiences
            </h3>
          </motion.div>

          <motion.div
            className="space-y-6 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p>
              Currently, I'm a Senior Front-End Engineer at <span className="text-primary font-medium">TechCorp</span>,
              specializing in accessibility. I contribute to the creation and maintenance of UI components that power
              our platform's frontend, ensuring our platform meets web accessibility standards and best practices to
              deliver an inclusive user experience.
            </p>

            <p>
              In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
              <span className="text-primary font-medium">advertising agencies</span> and{" "}
              <span className="text-primary font-medium">large corporations</span> to{" "}
              <span className="text-primary font-medium">start-ups</span> and{" "}
              <span className="text-primary font-medium">small digital product studios</span>. Additionally, I also
              released a <span className="text-primary font-medium">comprehensive video course</span> a few years ago,
              guiding learners through building a web app with modern technologies.
            </p>

            <p>
              In my spare time, I'm usually climbing, reading, hanging out with my family, or exploring new technologies
              and frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
