"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"

const contactItems = [
  { label: "Email", value: "bilalaulakh.dev@gmail.com", href: "mailto:bilalaulakh.dev@gmail.com" },
  { label: "Location", value: "Faisalabad, Pakistan" },
  { label: "Experience", value: "3+ Years" },
  { label: "Status", value: "Open to opportunities" },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            <span className="w-7 h-px bg-accent" />
            Get in Touch
          </div>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,4vw,3.2rem)]">
            Let&apos;s build something <em className="italic text-accent">together</em>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[1.05rem] text-text-dim mb-8 leading-[1.8]">
              Have a project in mind or looking for a MERN stack developer for your
              team? I&apos;d love to hear from you. I read every message and reply
              within a day.
            </p>

            <ul className="list-none mt-10">
              {contactItems.map((item, i) => (
                <li
                  key={item.label}
                  className={`py-5 border-b border-border flex justify-between items-center ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground text-[0.95rem] hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-foreground text-[0.95rem]">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-bg-card border border-border rounded-sm p-10"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <FormField id="name" label="Your Name" type="text" />
              <FormField id="email" label="Email" type="email" />
            </div>
            <div className="mb-6">
              <FormField id="subject" label="Subject" type="text" />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block font-mono text-[0.7rem] text-text-muted tracking-[0.1em] uppercase mb-2.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                className="w-full bg-background border border-border rounded-sm px-4 py-3.5 text-foreground text-[0.95rem] resize-y min-h-[120px] focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-accent text-background text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foreground hover:-translate-y-0.5"
            >
              {submitted ? "Thanks for reaching out!" : "Send Message"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  type,
}: {
  id: string
  label: string
  type: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[0.7rem] text-text-muted tracking-[0.1em] uppercase mb-2.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="w-full bg-background border border-border rounded-sm px-4 py-3.5 text-foreground text-[0.95rem] focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  )
}
