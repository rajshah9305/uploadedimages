"use client"

import React, { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type CarouselProps = {
  images: {
    src: string
    alt: string
  }[]
  autoSlideInterval?: number
  className?: string
  aspectRatio?: "square" | "video" | "wide" | "custom"
  height?: string
  showArrows?: boolean
  showDots?: boolean
}

export function Carousel({
  images,
  autoSlideInterval = 5000,
  className,
  aspectRatio = "wide",
  height,
  showArrows = true,
  showDots = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    custom: "",
  }

  const prev = useCallback(() => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }, [currentIndex, images.length])

  const next = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, images.length])

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const slideInterval = setInterval(() => {
      next()
    }, autoSlideInterval)

    return () => clearInterval(slideInterval)
  }, [isAutoPlaying, next, autoSlideInterval])

  // Touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      next()
    }
    if (isRightSwipe) {
      prev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div
      className={cn(
        "relative group w-full overflow-hidden rounded-xl",
        aspectRatio !== "custom" ? aspectRatioClasses[aspectRatio] : "",
        className,
      )}
      style={height ? { height } : {}}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselContent
        className="w-full h-full transition-transform duration-500 ease-out flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full h-full flex-shrink-0">
            <div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {showArrows && (
        <>
          <CarouselPrevious
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn("relative flex overflow-hidden", className)} {...props} ref={ref} />
  ),
)
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn("relative flex w-full flex-shrink-0", className)} {...props} ref={ref} />
  ),
)
CarouselItem.displayName = "CarouselItem"

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        className,
      )}
    >
      {children}
    </button>
  ),
)
CarouselPrevious.displayName = "CarouselPrevious"

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        className,
      )}
    >
      {children}
    </button>
  ),
)
CarouselNext.displayName = "CarouselNext"
