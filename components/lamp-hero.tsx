"use client"
import { motion } from "framer-motion"
import { LampContainer } from "./ui/lamp"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LampHero() {
  return (
    <LampContainer className="h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 flex flex-col items-center justify-center space-y-6 text-center"
      >
        <h1 className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
          Majestic Mountain <br /> Landscapes
        </h1>
        <p className="max-w-2xl text-xl text-slate-300 md:text-2xl">
          Breathtaking photography capturing the beauty of nature's most spectacular scenes
        </p>
        <Button asChild size="lg" className="text-lg mt-4">
          <Link href="/gallery">
            Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </LampContainer>
  )
}
