import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const collections = [
  {
    id: "aurora",
    title: "Aurora Collection",
    description: "Witness the magical dance of the northern lights over majestic mountain landscapes.",
    image: "/images/northern-lights-2.png",
    count: 3,
  },
  {
    id: "sunset",
    title: "Sunset Collection",
    description: "Experience the breathtaking beauty of golden hour in the mountains.",
    image: "/images/sunset-mountains.png",
    count: 3,
  },
  {
    id: "lakes",
    title: "Alpine Lakes Collection",
    description: "Discover the serene beauty of pristine mountain lakes and their perfect reflections.",
    image: "/images/moraine-lake.png",
    count: 4,
  },
]

export default function CollectionsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
        <p className="text-lg text-muted-foreground">
          Browse our curated collections of mountain landscape photography, each capturing a different aspect of
          nature's majesty.
        </p>
      </div>

      <div className="space-y-16">
        {collections.map((collection) => (
          <div key={collection.id} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{collection.title}</h2>
              <p className="text-lg mb-6">{collection.description}</p>
              <p className="text-muted-foreground mb-8">{collection.count} prints in this collection</p>
              <Button asChild size="lg">
                <Link href={`/collections/${collection.id}`}>View Collection</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
