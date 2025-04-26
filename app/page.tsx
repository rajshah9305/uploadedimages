"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowDown, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedImage } from "@/components/animated-image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { MapComponent } from "@/components/map-component"
import { products } from "@/data/products"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const featuredRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  // Map locations for all products
  const mapLocations = products.map((product) => ({
    id: product.id,
    title: product.title,
    coordinates: product.location.coordinates,
    image: product.image,
    slug: product.slug,
    location: {
      name: product.location.name,
      country: product.location.country,
    },
  }))

  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section with Fullscreen Image and Animation */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/images/northern-lights-1.png"
            alt="Mountain landscape with northern lights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <motion.div className="relative z-10 container mx-auto px-4 text-center" style={{ opacity, scale, y }}>
          <motion.h1
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Majesty of Mountain Landscapes
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Witness nature's grandeur through our premium photography collection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="text-lg bg-yellow-400 text-black hover:bg-yellow-500">
              <Link href="/gallery">
                Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={scrollToFeatured}
              className="flex flex-col items-center text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 scroll-indicator" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Story Section */}
      <section ref={featuredRef} className="bg-slate-900 py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="slide-up" className="max-w-4xl mx-auto">
            <h2 className="nat-geo-border font-playfair text-4xl md:text-5xl font-bold mb-8">
              Capturing the Northern Lights
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              The aurora borealis—nature's most spectacular light show—transforms the night sky into a canvas of
              swirling colors. Our collection captures these ethereal displays dancing above majestic mountain
              landscapes, creating scenes of otherworldly beauty that connect viewers to the wild heart of nature.
            </p>
          </ScrollAnimation>

          {/* Visual separator */}
          <div className="w-full max-w-4xl mx-auto mb-12 border-b border-slate-700"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation animation="fade">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <AnimatedImage
                  src="/images/northern-lights-2.png"
                  alt="Northern lights over mountains"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h3 className="font-playfair text-2xl font-bold mb-4">The Dance of Light and Shadow</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Photographing the aurora requires patience, preparation, and a bit of luck. These images were captured
                during the peak of solar activity, when charged particles from the sun collide with gases in Earth's
                atmosphere, creating these vivid displays of green, purple, and blue.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Each photograph in our collection represents hours of waiting in sub-zero temperatures, often in remote
                wilderness locations far from light pollution, to capture the perfect moment when the lights dance most
                vividly across the sky.
              </p>
              <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                <Link href="/collections/aurora">
                  Explore Aurora Collection <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Parallax Image Section - Fix animation timing */}
      <ParallaxSection imageUrl="/images/banff-night.png" height="80vh">
        <div className="w-full">
          <ScrollAnimation animation="fade" threshold={0.3} className="max-w-2xl">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-shadow">
              Witness the Wonder of Banff
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              The iconic Canadian Rockies transform under the mystical glow of the northern lights, creating scenes of
              primordial beauty that stir the soul.
            </p>
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Link href={`/product/${products[4].slug}`}>View This Print</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </ParallaxSection>

      {/* Image Grid Section with Animations */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="slide-up" className="mb-16">
            <h2 className="nat-geo-border font-playfair text-4xl font-bold max-w-4xl">Our Collection</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ScrollAnimation key={product.id} animation="fade" delay={index * 0.1} className="group relative">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <AnimatedImage
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-playfair text-lg font-bold mb-1 text-shadow">{product.title}</h3>
                    <p className="text-sm text-slate-300 mb-4">{product.description}</p>
                    <Button asChild size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500">
                      <Link href={`/product/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Improved styling */}
      <section ref={mapRef} className="py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="slide-up" className="mb-12">
            <h2 className="nat-geo-border font-playfair text-4xl font-bold mb-6 max-w-4xl">Explore Our Locations</h2>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl">
              Our collection spans some of the most breathtaking mountain landscapes across the globe. Explore the map
              to discover where each photograph was taken.
            </p>
            <Button
              onClick={scrollToMap}
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            >
              View Locations
            </Button>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" className="h-[600px] rounded-lg overflow-hidden">
            <MapComponent
              locations={mapLocations}
              className="h-full"
              onLocationClick={(location) => {
                const product = products.find((p) => p.id === location.id)
                if (product) {
                  window.location.href = `/product/${product.slug}`
                }
              }}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Story Carousel Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="slide-up" className="mb-12">
            <h2 className="nat-geo-border font-playfair text-4xl font-bold mb-6 max-w-4xl">
              The Stories Behind the Images
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl">
              Every photograph has a story—a moment in time when light, landscape, and photographer aligned to capture
              something extraordinary.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <AnimatedImage
                  src={products[activeIndex].image || "/placeholder.svg"}
                  alt={products[activeIndex].title}
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h3 className="font-playfair text-3xl font-bold mb-4">{products[activeIndex].title}</h3>
              <p className="text-slate-300 mb-4 text-lg leading-relaxed">
                By {products[activeIndex].photographer.name}
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">{products[activeIndex].story.substring(0, 300)}...</p>

              <div className="flex space-x-2 mb-8">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-yellow-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                    }`}
                    aria-label={`View story ${index + 1}`}
                  />
                ))}
              </div>

              <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                <Link href={`/product/${products[activeIndex].slug}`}>
                  Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quote Section - Fix animation */}
      <ParallaxSection imageUrl="/images/sunset-mountains.png" height="60vh" overlayOpacity={0.6} speed={0.3}>
        <div className="w-full">
          <ScrollAnimation animation="fade" threshold={0.1} once={false} className="max-w-3xl mx-auto text-center">
            <blockquote className="font-playfair text-3xl md:text-4xl italic font-medium mb-6 text-shadow">
              "In every walk with nature, one receives far more than he seeks."
            </blockquote>
            <cite className="text-xl text-slate-200">— John Muir</cite>
          </ScrollAnimation>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="slide-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to bring the mountains home?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Browse our collection of premium mountain landscape prints and find the perfect piece for your space.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Link href="/gallery">
                Explore Our Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
