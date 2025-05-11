"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingIconProps {
  children: ReactNode
  className?: string
  floatIntensity?: number
  rotateIntensity?: number
  duration?: number
}

export function FloatingIcon({
  children,
  className = "",
  floatIntensity = 10,
  rotateIntensity = 5,
  duration = 3,
}: FloatingIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [`-${floatIntensity}px`, `${floatIntensity}px`, `-${floatIntensity}px`],
        rotate: [-rotateIntensity, rotateIntensity, -rotateIntensity],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
