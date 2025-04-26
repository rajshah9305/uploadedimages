"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  width?: number
  height?: number
}

export function AnimatedImage({
  src,
  alt,
  fill = false,
  className,
  priority = false,
  sizes,
  width,
  height,
}: AnimatedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <motion.div
        className={cn("absolute inset-0 bg-slate-800", isLoading ? "opacity-100" : "opacity-0")}
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={cn("relative", fill ? "h-full w-full" : "", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={fill}
          priority={priority}
          sizes={sizes}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={className}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </motion.div>
    </>
  )
}
