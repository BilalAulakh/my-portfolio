"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-primary"></div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Contact</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-balance">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in discussing new opportunities, creative projects, or just having a chat about
              technology and design.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Your City, Country</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                    setTimeout(() => setSent(false), 2000)
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project inquiry" className="bg-background border-border" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden">
                    <motion.span
                      initial={false}
                      animate={sent ? { x: ["-110%", "110%"] } : { x: "-110%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-y-0 left-0 w-1/3 bg-white/20"
                    />
                    {sent ? "Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
