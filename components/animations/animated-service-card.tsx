"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function AnimatedServiceCard({ icon, title, description, delay = 0 }: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: [0, 5, 0, -5, 0],
      transition: {
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  }

  // Border gradient animation
  const borderVariants = {
    initial: {
      background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
      opacity: 0,
    },
    hover: {
      background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%)",
      opacity: 1,
      backgroundSize: "200% 100%",
      transition: {
        backgroundPosition: {
          x: ["-100%", "100%"],
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror" as const,
          duration: 2,
          ease: "linear",
        },
      },
    },
  }

  return (
    <motion.div
      className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        variants={borderVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{ padding: "2px" }}
      >
        <div className="h-full w-full rounded-lg bg-white"></div>
      </motion.div>

      {/* Card content */}
      <div className="relative z-10">
        <motion.div
          className="mb-4"
          variants={iconVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {icon}
        </motion.div>
        <motion.h3
          className="mb-3 text-xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.4 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}
