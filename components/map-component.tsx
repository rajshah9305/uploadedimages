"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import { AnimatedImage } from "./animated-image"
import { ScrollAnimation } from "./scroll-animation"
import { cn } from "@/lib/utils"

interface Location {
  id: number
  title: string
  coordinates: [number, number] // [longitude, latitude]
  image: string
  slug?: string
  location?: {
    name: string
    country: string
  }
}

interface MapComponentProps {
  locations: Location[]
  className?: string
  initialZoom?: number
  activeLocationId?: number
  onLocationClick?: (location: Location) => void
}

export function MapComponent({ locations, className, activeLocationId, onLocationClick }: MapComponentProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    locations.find((loc) => loc.id === activeLocationId) || null,
  )
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    if (onLocationClick) {
      onLocationClick(location)
    }
  }

  // Create a world map with adjusted coordinates
  // This is a simplified approach - in a real app you'd use a proper mapping library
  const normalizeCoordinates = (coords: [number, number]) => {
    // Convert longitude (-180 to 180) to x (0 to 100)
    const x = ((coords[0] + 180) / 360) * 100

    // Convert latitude (90 to -90) to y (0 to 100)
    // Flip the y-axis since latitude increases northward but y increases downward
    const y = ((90 - coords[1]) / 180) * 100

    return { x, y }
  }

  return (
    <div className={cn("relative rounded-lg overflow-hidden bg-slate-900", className)}>
      <div className="w-full h-full p-6">
        <h3 className="text-xl font-bold mb-6">Explore Our Photography Locations</h3>

        {/* Visual map with background */}
        <div className="relative w-full h-[400px] border border-slate-700 rounded-lg overflow-hidden">
          {/* World map background */}
          <div
            className={cn(
              "absolute inset-0 bg-slate-800 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center transition-opacity duration-500",
              isLoaded ? "opacity-30" : "opacity-0",
            )}
          />

          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-slate-600 border-t-yellow-400 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Location pins */}
          {isLoaded &&
            locations.map((location) => {
              const { x, y } = normalizeCoordinates(location.coordinates)

              return (
                <div
                  key={location.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity: isLoaded ? 1 : 0,
                    transform: `translate(-50%, -50%) ${isLoaded ? "scale(1)" : "scale(0.5)"}`,
                  }}
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="relative group">
                    <MapPin
                      className={`h-8 w-8 ${
                        selectedLocation?.id === location.id ? "text-yellow-400" : "text-white"
                      } hover:text-yellow-400 transition-colors`}
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/80 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
                        {location.title}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

          {/* Selected location info */}
          {isLoaded && selectedLocation && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 rounded-lg flex items-center gap-4">
              <div className="w-20 h-20 relative rounded overflow-hidden flex-shrink-0">
                <AnimatedImage src={selectedLocation.image} alt={selectedLocation.title} fill />
              </div>
              <div>
                <h3 className="font-bold text-lg">{selectedLocation.title}</h3>
                <p className="text-sm text-slate-300">
                  {selectedLocation.location?.name}, {selectedLocation.location?.country}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Location grid */}
        <div className="mt-8">
          <h4 className="text-lg font-medium mb-4">All Locations</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((location) => (
              <ScrollAnimation key={location.id} animation="fade" className="h-full">
                <div
                  className={cn(
                    "p-4 rounded-lg cursor-pointer h-full transition-colors",
                    selectedLocation?.id === location.id
                      ? "bg-yellow-400/20 border border-yellow-400"
                      : "bg-slate-800 hover:bg-slate-700 border border-slate-700",
                  )}
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="relative h-32 mb-3 rounded overflow-hidden">
                    <AnimatedImage src={location.image} alt={location.title} fill className="object-cover" />
                  </div>
                  <h5 className="font-medium">{location.title}</h5>
                  {location.location && (
                    <p className="text-sm text-slate-300 mt-1">
                      {location.location.name}, {location.location.country}
                    </p>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
