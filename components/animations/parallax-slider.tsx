"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ParallaxSliderProps {
  images: string[]
  titles?: string[]
  autoSlide?: boolean
  autoSlideInterval?: number
  className?: string
}

export function ParallaxSlider({
  images,
  titles = [],
  autoSlide = true,
  autoSlideInterval = 2000,
  className = "",
}: ParallaxSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  // Auto slide effect
  useEffect(() => {
    if (!autoSlide) return

    const interval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, autoSlideInterval, nextSlide])

  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  // Parallax effect for background image
  const backgroundVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "10%" : "-10%",
      scale: 1.2,
    }),
    center: {
      x: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-10%" : "10%",
      scale: 1.2,
    }),
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Background Image with Parallax Effect */}
      <motion.div
        key={`bg-${currentIndex}`}
        custom={direction}
        variants={backgroundVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
        }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <motion.div
        key={`content-${currentIndex}`}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 },
        }}
        className="relative z-20 flex h-full items-center justify-center p-8 text-center text-white"
      >
        {titles[currentIndex] && (
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {titles[currentIndex]}
          </motion.h2>
        )}
      </motion.div>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
