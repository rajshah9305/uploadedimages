"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children?: React.ReactNode
  overlayOpacity?: number
  speed?: number
}

export function ParallaxSection({
  imageUrl,
  height = "100vh",
  children,
  overlayOpacity = 0.4,
  speed = 0.5,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height, bottom } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is in view
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true)
        const scrollPosition = top
        const newOffset = scrollPosition * speed
        setOffset(newOffset)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ height }}>
      <div
        className="absolute inset-0 transition-transform duration-200"
        style={{
          transform: `translateY(${offset}px)`,
          willChange: "transform",
        }}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover"
          priority={isVisible}
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">{children}</div>
    </section>
  )
}
