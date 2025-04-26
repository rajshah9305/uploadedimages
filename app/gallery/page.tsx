import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Product data
const products = [
  {
    id: 1,
    title: "Northern Lights Over Mountains",
    description: "Aurora borealis dancing over snow-capped peaks",
    price: 79.99,
    image: "/images/northern-lights-1.png",
    slug: "northern-lights-mountains",
  },
  {
    id: 2,
    title: "Sunset at Mountain Lake",
    description: "Golden hour reflections with canoes",
    price: 69.99,
    image: "/images/lake-sunset.png",
    slug: "sunset-mountain-lake",
  },
  {
    id: 3,
    title: "Aurora Valley",
    description: "Northern lights illuminating a mountain valley",
    price: 79.99,
    image: "/images/northern-lights-2.png",
    slug: "aurora-valley",
  },
  {
    id: 4,
    title: "Watercolor Lake",
    description: "Artistic rendering of mountain lake with canoes",
    price: 59.99,
    image: "/images/watercolor-lake.png",
    slug: "watercolor-lake",
  },
  {
    id: 5,
    title: "Banff Night Sky",
    description: "Aurora borealis over Banff National Park",
    price: 89.99,
    image: "/images/banff-night.png",
    slug: "banff-night-sky",
  },
  {
    id: 6,
    title: "Winter Aurora",
    description: "Northern lights over frozen mountain stream",
    price: 79.99,
    image: "/images/winter-aurora.png",
    slug: "winter-aurora",
  },
  {
    id: 7,
    title: "Moraine Lake Sunrise",
    description: "Golden light on mountains with canoes",
    price: 69.99,
    image: "/images/moraine-lake.png",
    slug: "moraine-lake-sunrise",
  },
  {
    id: 8,
    title: "Pastel Mountain Sunset",
    description: "Vibrant sunset colors reflecting on alpine lake",
    price: 69.99,
    image: "/images/sunset-mountains.png",
    slug: "pastel-mountain-sunset",
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Photography Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Browse our collection of premium mountain landscape prints, each capturing the breathtaking beauty of nature's
          most majestic scenes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <Link href={`/product/${product.slug}`}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">${product.price.toFixed(2)}</span>
                  <Button size="sm">View Details</Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
