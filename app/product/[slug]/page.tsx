"use client"

import { useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart, Heart, Share2, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AnimatedImage } from "@/components/animated-image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { MapComponent } from "@/components/map-component"
import { PhotographerStory } from "@/components/photographer-story"
import { products } from "@/data/products"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  const [activeTab, setActiveTab] = useState("description")

  // Check if the product exists
  if (!product) {
    notFound()
  }

  // Related products (excluding current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  // Map locations for this product and related products
  const mapLocations = [
    {
      id: product.id,
      title: product.title,
      coordinates: product.location.coordinates,
      image: product.image,
      slug: product.slug,
      location: {
        name: product.location.name,
        country: product.location.country,
      },
    },
    ...relatedProducts.map((p) => ({
      id: p.id,
      title: p.title,
      coordinates: p.location.coordinates,
      image: p.image,
      slug: p.slug,
      location: {
        name: p.location.name,
        country: p.location.country,
      },
    })),
  ]

  return (
    <div className="container mx-auto py-24 px-4">
      <Link href="/gallery" className="inline-flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gallery
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <ScrollAnimation animation="fade" className="relative aspect-square overflow-hidden rounded-lg">
          <AnimatedImage
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-right" delay={0.2}>
          <h1 className="font-playfair text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-slate-300 mb-4">{product.description}</p>
          <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Select Size</h3>
              <RadioGroup defaultValue="11×14″">
                {product.specs.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-3">Select Frame</h3>
              <RadioGroup defaultValue="none">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="frame-none" />
                  <Label htmlFor="frame-none">No Frame</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="black" id="frame-black" />
                  <Label htmlFor="frame-black">Black Frame</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="white" id="frame-white" />
                  <Label htmlFor="frame-white">White Frame</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="natural" id="frame-natural" />
                  <Label htmlFor="frame-natural">Natural Wood Frame</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-5 w-5" />
                  Save
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-16">
        <TabsList className="grid w-full md:w-auto grid-cols-4 bg-slate-800">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="photographer">Photographer</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <ScrollAnimation animation="fade">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <p className="text-lg leading-relaxed">{product.details}</p>
            </Card>
          </ScrollAnimation>
        </TabsContent>
        <TabsContent value="photographer" className="mt-6">
          <ScrollAnimation animation="fade">
            <PhotographerStory
              name={product.photographer.name}
              image={product.photographer.image}
              bio={product.photographer.bio}
              story={product.story}
              camera={product.camera}
              location={product.location}
            />
          </ScrollAnimation>
        </TabsContent>
        <TabsContent value="location" className="mt-6">
          <ScrollAnimation animation="fade">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="font-playfair text-xl font-bold mb-4">
                {product.location.name}, {product.location.country}
              </h3>
              <p className="mb-6">{product.location.description}</p>
              <div className="h-[500px] rounded-lg overflow-hidden">
                <MapComponent locations={mapLocations} activeLocationId={product.id} className="h-full" />
              </div>
            </Card>
          </ScrollAnimation>
        </TabsContent>
        <TabsContent value="details" className="mt-6">
          <ScrollAnimation animation="fade">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <ul className="space-y-4">
                <li>
                  <span className="font-medium">Print Sizes:</span> {product.specs.sizes.join(", ")}
                </li>
                <li>
                  <span className="font-medium">Paper Type:</span> {product.specs.paper}
                </li>
                <li>
                  <span className="font-medium">Framing Options:</span> {product.specs.framing}
                </li>
                <li>
                  <span className="font-medium">Care Instructions:</span> Avoid direct sunlight and high humidity. Clean
                  with a soft, dry cloth.
                </li>
              </ul>
            </Card>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>

      <section className="mt-20">
        <ScrollAnimation animation="fade">
          <h2 className="font-playfair text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ScrollAnimation key={relatedProduct.id} animation="slide-up" delay={index * 0.1} className="h-full">
                <Card className="overflow-hidden group h-full bg-slate-800 border-slate-700">
                  <Link href={`/product/${relatedProduct.slug}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <AnimatedImage
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{relatedProduct.title}</h3>
                      <p className="text-sm text-slate-300 mb-2">{relatedProduct.description}</p>
                      <span className="font-medium">${relatedProduct.price.toFixed(2)}</span>
                    </div>
                  </Link>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}
