"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedIconButtonProps {
  icon: ReactNode
  label: string
  onClick?: () => void
  className?: string
}

export function AnimatedIconButton({ icon, label, onClick, className = "" }: AnimatedIconButtonProps) {
  return (
    <motion.button
      className={`group flex flex-col items-center justify-center rounded-lg p-4 transition-colors ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="mb-3 rounded-full bg-blue-100 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  )
}
