"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedImage } from "@/components/animated-image"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"

// Collection categories
const collections = [
  { id: "all", name: "All Prints" },
  { id: "aurora", name: "Aurora Collection" },
  { id: "sunset", name: "Sunset Collection" },
  { id: "lakes", name: "Alpine Lakes" },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter products based on active filter and search query
  const filteredProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.title.toLowerCase().includes(activeFilter.toLowerCase())
    const matchesSearch =
      searchQuery === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className="container mx-auto py-24 px-4">
      <ScrollAnimation animation="slide-up" className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-playfair text-4xl font-bold mb-4">Photography Gallery</h1>
        <p className="text-lg text-slate-300">
          Browse our collection of premium mountain landscape prints, each capturing the breathtaking beauty of nature's
          most majestic scenes.
        </p>
      </ScrollAnimation>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {collections.map((collection) => (
              <Button
                key={collection.id}
                variant={activeFilter === collection.id ? "default" : "outline"}
                onClick={() => setActiveFilter(collection.id)}
                className={activeFilter === collection.id ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""}
              >
                {collection.name}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search prints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">No prints found</h2>
          <p className="text-slate-300 mb-8">Try adjusting your search or filter criteria.</p>
          <Button
            onClick={() => {
              setActiveFilter("all")
              setSearchQuery("")
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ScrollAnimation key={product.id} animation="fade" className="h-full">
              <Card className="overflow-hidden group h-full bg-slate-800 border-slate-700">
                <Link href={`/product/${product.slug}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <AnimatedImage
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                    <p className="text-sm text-slate-300 mb-2">{product.description}</p>
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                  </div>
                </Link>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      )}
    </div>
  )
}
