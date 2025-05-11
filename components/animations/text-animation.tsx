"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextAnimation({ children, className = "", delay = 0 }: TextAnimationProps) {
  const text = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  }

  const character = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  // If children is a string, split it into characters
  if (typeof children === "string") {
    return (
      <motion.span className={className} variants={text} initial="initial" animate="animate">
        {children.split("").map((char, index) => (
          <motion.span key={index} variants={character} style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  // If children is not a string, just animate it as a whole
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
