"use client"

import { useState } from "react"
import { AnimatedImage } from "./animated-image"
import { ScrollAnimation } from "./scroll-animation"
import { Camera, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface PhotographerStoryProps {
  name: string
  image: string
  bio: string
  story: string
  camera: {
    model: string
    lens: string
    settings: string
  }
  location: {
    name: string
    country: string
  }
  className?: string
}

export function PhotographerStory({ name, image, bio, story, camera, location, className }: PhotographerStoryProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={cn("bg-slate-800/50 rounded-lg overflow-hidden", className)}>
      <ScrollAnimation animation="fade">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <AnimatedImage src={image} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold mb-2">{name}</h3>
              <p className="text-slate-300 text-sm mb-4">
                {bio.substring(0, expanded ? bio.length : 150)}
                {!expanded && bio.length > 150 && "..."}
              </p>
              {bio.length > 150 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-yellow-400 text-sm hover:text-yellow-300 underline underline-offset-2"
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              )}

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-yellow-400" />
                  <span className="text-slate-300">{camera.model}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  <span className="text-slate-300">
                    {location.name}, {location.country}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-playfair text-lg font-bold mb-3 border-l-2 border-yellow-400 pl-3">
              The Story Behind the Image
            </h4>
            <p className="text-slate-300 leading-relaxed">{story}</p>
          </div>

          <div className="mt-6 bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-sm">Technical Details</h4>
            <div className="text-sm text-slate-300">
              <p>
                <span className="text-yellow-400">Camera:</span> {camera.model}
              </p>
              <p>
                <span className="text-yellow-400">Lens:</span> {camera.lens}
              </p>
              <p>
                <span className="text-yellow-400">Settings:</span> {camera.settings}
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
