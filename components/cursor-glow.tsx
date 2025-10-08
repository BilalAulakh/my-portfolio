"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const glow = ref.current
    if (!glow) return

    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      // ease the glow to the target position for a buttery smooth feel
      x += (tx - x) * 0.15
      y += (ty - y) * 0.15
      if (glow) glow.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-40 h-[300px] w-[300px] rounded-full opacity-30 blur-3xl"
      style={{
        background: "radial-gradient(closest-side, hsl(var(--primary)/0.35), transparent 70%)",
      }}
    />
  )
}
