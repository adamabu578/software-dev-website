"use client"

import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollFadeProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export function ScrollFade({ children, className = "", threshold = 0.2, delay = 0 }: ScrollFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
