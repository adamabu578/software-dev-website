"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ServiceGridProps {
  children: ReactNode
  className?: string
}

export function ServiceGrid({ children, className = "" }: ServiceGridProps) {
  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
