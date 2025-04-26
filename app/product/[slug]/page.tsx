import Image from "next/image"
import { notFound } from "next/navigation"
import { ShoppingCart, Heart, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Product data
const products = [
  {
    id: 1,
    title: "Northern Lights Over Mountains",
    description: "Aurora borealis dancing over snow-capped peaks",
    price: 79.99,
    image: "/images/northern-lights-1.png",
    slug: "northern-lights-mountains",
    details:
      "This breathtaking photograph captures the mesmerizing dance of the aurora borealis over a snow-covered mountain range. The vibrant green and blue hues of the northern lights contrast beautifully with the serene white of the snow and the deep blue of the night sky, creating a scene of otherworldly beauty.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 2,
    title: "Sunset at Mountain Lake",
    description: "Golden hour reflections with canoes",
    price: 69.99,
    image: "/images/lake-sunset.png",
    slug: "sunset-mountain-lake",
    details:
      "This stunning photograph captures the magical moment when the setting sun bathes the mountain peaks in golden light, creating a perfect reflection on the calm lake waters. The wooden canoes in the foreground add a touch of adventure and scale to this serene wilderness scene.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 3,
    title: "Aurora Valley",
    description: "Northern lights illuminating a mountain valley",
    price: 79.99,
    image: "/images/northern-lights-2.png",
    slug: "aurora-valley",
    details:
      "This captivating image showcases the ethereal beauty of the northern lights as they illuminate a pristine mountain valley. The vibrant green aurora dances across the night sky, creating a magical atmosphere above the rugged mountain peaks and reflecting in the partially frozen waters below.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 4,
    title: "Watercolor Lake",
    description: "Artistic rendering of mountain lake with canoes",
    price: 59.99,
    image: "/images/watercolor-lake.png",
    slug: "watercolor-lake",
    details:
      "This beautiful watercolor-style image depicts a tranquil mountain lake scene at sunset. The warm golden light illuminates the mountain peaks while canoes rest peacefully at the shore, inviting viewers to imagine themselves in this serene wilderness setting.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 5,
    title: "Banff Night Sky",
    description: "Aurora borealis over Banff National Park",
    price: 89.99,
    image: "/images/banff-night.png",
    slug: "banff-night-sky",
    details:
      "This spectacular photograph captures the magic of Banff National Park under the dancing northern lights. The vibrant aurora borealis illuminates the night sky with swirling greens and purples, while the full moon adds an additional source of light, creating a truly magical scene over the iconic Canadian Rockies.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 6,
    title: "Winter Aurora",
    description: "Northern lights over frozen mountain stream",
    price: 79.99,
    image: "/images/winter-aurora.png",
    slug: "winter-aurora",
    details:
      "This breathtaking winter scene captures the northern lights dancing above a partially frozen mountain stream. The vibrant green aurora contrasts beautifully with the deep blue night sky and snow-covered landscape, while the moonlight creates a magical glow on the icy waters below.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 7,
    title: "Moraine Lake Sunrise",
    description: "Golden light on mountains with canoes",
    price: 69.99,
    image: "/images/moraine-lake.png",
    slug: "moraine-lake-sunrise",
    details:
      "This iconic photograph captures the breathtaking beauty of Moraine Lake at sunrise. The golden morning light bathes the mountain peaks in warm hues, creating a stunning contrast with the turquoise waters of the lake. Traditional wooden canoes rest on the shore, adding a sense of adventure to this peaceful wilderness scene.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
  {
    id: 8,
    title: "Pastel Mountain Sunset",
    description: "Vibrant sunset colors reflecting on alpine lake",
    price: 69.99,
    image: "/images/sunset-mountains.png",
    slug: "pastel-mountain-sunset",
    details:
      "This stunning digital artwork captures the magical moment of sunset in the mountains. The pastel pinks and oranges of the sky create a dreamlike atmosphere as they reflect perfectly in the still waters of the alpine lake. Tall evergreen trees frame the scene, adding depth and scale to this breathtaking landscape.",
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  // Related products (excluding current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  return (
    <div className="container mx-auto py-12 px-4">
      <Link href="/gallery" className="inline-flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gallery
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" priority />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{product.description}</p>
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
              <Button size="lg" className="w-full">
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
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-16">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <Card className="p-6">
            <p className="text-lg leading-relaxed">{product.details}</p>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="mt-6">
          <Card className="p-6">
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
        </TabsContent>
        <TabsContent value="shipping" className="mt-6">
          <Card className="p-6">
            <ul className="space-y-4">
              <li>
                <span className="font-medium">Shipping:</span> {product.specs.shipping}
              </li>
              <li>
                <span className="font-medium">Processing Time:</span> 1-3 business days
              </li>
              <li>
                <span className="font-medium">Delivery Time:</span> 3-7 business days (domestic), 7-14 business days
                (international)
              </li>
              <li>
                <span className="font-medium">Returns:</span> 30-day money-back guarantee. Return shipping is free for
                defective items.
              </li>
            </ul>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="overflow-hidden group">
              <Link href={`/product/${relatedProduct.slug}`}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{relatedProduct.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{relatedProduct.description}</p>
                  <span className="font-medium">${relatedProduct.price.toFixed(2)}</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
