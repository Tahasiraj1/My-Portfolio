"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

interface HeroCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
  showControls?: boolean
}

export default function ProjectCarousel({ images, autoPlayInterval = 5000, showControls = true }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [goToNext, autoPlayInterval, isAutoPlaying])

  // Pause auto-play when user interacts with carousel
  const handleInteraction = () => {
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div
      className="relative w-full h-[300px] md:h-full lg:h-full overflow-hidden rounded-xl bg-transparent"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel slides */}
      <div className="h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={() => {
              goToPrevious()
              handleInteraction()
            }}
            className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => {
              goToNext()
              handleInteraction()
            }}
            className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>
        </>
      )}

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                handleInteraction()
              }}
              className={`h-2 w-6 md:w-8 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
