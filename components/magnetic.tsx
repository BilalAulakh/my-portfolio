"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: React.ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate3d(${relX * strength}px, ${relY * strength}px, 0)`
    }
    const onLeave = () => {
      el.style.transform = "translate3d(0,0,0)"
    }
    el.addEventListener("mousemove", onMove as any)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove as any)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [strength])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
