"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

export const LampContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = rect.left + width / 2
      const centerY = rect.top + height / 2
      const x = (e.clientX - centerX) / width
      const y = (e.clientY - centerY) / height
      mouseX.current = x
      mouseY.current = y
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    let animationId: number
    const animate = () => {
      if (isHovered && containerRef.current) {
        const x = mouseX.current * 20
        const y = mouseY.current * 20
        controls.start({
          backgroundPosition: `${51.5 + x * 0.5}% ${50 + y * 0.5}%`,
        })
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animationId)
  }, [isHovered, controls])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-slate-950 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-transparent via-slate-100/10 to-transparent bg-[length:200%_200%] opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundPosition: "50% 50%",
        }}
      />
      <div className="relative z-10 flex min-h-[80vh] w-full flex-col items-center justify-center">
        <div className="absolute top-1/2 h-56 w-[30rem] -translate-y-1/2 rounded-full bg-slate-400/25 blur-[80px]" />
        {children}
      </div>
    </div>
  )
}
