"use client"

import type React from "react"

import { motion, useMotionValue, animate } from "framer-motion"
import { useRef } from "react"

export function TiltCard({
  children,
  className,
  max = 12,
}: {
  children: React.ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * max * 2)
    rotateX.set(-(py - 0.5) * max * 2)
  }

  const onLeave = () => {
    animate(rotateX, 0, { duration: 0.4 })
    animate(rotateY, 0, { duration: 0.4 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" as any }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
