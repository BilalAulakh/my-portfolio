"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-6 backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/80" : "border-b border-transparent bg-background/80"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-8 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl italic font-medium tracking-tight">
            Muhammad Bilal<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex gap-10 list-none">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group relative text-sm font-medium tracking-wide text-text-dim hover:text-accent transition-colors"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 text-text-dim hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <div className="relative z-50 flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
