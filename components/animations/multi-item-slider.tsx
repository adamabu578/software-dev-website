"use client"

import { useState, useEffect, useCallback, type ReactNode } from "react"
import { motion, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MultiItemSliderProps {
  children: ReactNode[]
  itemsPerView?: number
  gap?: number
  autoSlide?: boolean
  autoSlideInterval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
}

export function MultiItemSlider({
  children,
  itemsPerView = 3,
  gap = 16,
  autoSlide = true,
  autoSlideInterval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
}: MultiItemSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const childrenArray = Array.isArray(children) ? children : [children]
  const controls = useAnimation()

  // Calculate how many slides we need based on items per view
  const slideCount = Math.max(0, childrenArray.length - itemsPerView + 1)

  // Adjust items per view for smaller screens
  const [actualItemsPerView, setActualItemsPerView] = useState(itemsPerView)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setActualItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setActualItemsPerView(Math.min(2, itemsPerView))
      } else {
        setActualItemsPerView(itemsPerView)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [itemsPerView])

  const nextSlide = useCallback(() => {
    if (currentIndex < slideCount - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0) // Loop back to the beginning
    }
  }, [currentIndex, slideCount])

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(slideCount - 1) // Loop to the end
    }
  }, [currentIndex, slideCount])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Update animation when current index changes
  useEffect(() => {
    controls.start({
      x: `calc(-${(currentIndex * 100) / actualItemsPerView}% - ${currentIndex * gap}px)`,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }, [currentIndex, controls, gap, actualItemsPerView])

  // Auto slide effect
  useEffect(() => {
    if (!autoSlide) return

    const interval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, autoSlideInterval, nextSlide])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div className="flex" style={{ gap: `${gap}px` }} animate={controls}>
        {childrenArray.map((child, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `calc(${100 / actualItemsPerView}% - ${(gap * (actualItemsPerView - 1)) / actualItemsPerView}px)`,
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      {showArrows && slideCount > 1 && (
        <>
          <motion.button
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
            disabled={currentIndex === slideCount - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && slideCount > 1 && (
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <motion.button
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
