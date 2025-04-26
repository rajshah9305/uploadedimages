import Image from "next/image"
import Link from "next/link"
import { Camera, Award, Truck, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] overflow-hidden">
        <Image src="/images/banff-night.png" alt="Mountain landscape" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About MountainPrints</h1>
          <p className="text-xl max-w-2xl">Bringing the majesty of mountain landscapes into your home</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            MountainPrints was born from a passion for capturing the breathtaking beauty of mountain landscapes. Our
            founder, an avid hiker and photographer, spent years exploring the world's most majestic mountain ranges,
            from the Canadian Rockies to the Alps, the Himalayas to the Andes.
          </p>
          <p className="text-lg mb-6">
            What began as a personal journey to document these awe-inspiring scenes evolved into a mission to share this
            natural beauty with others. We believe that bringing these landscapes into your home can create a daily
            connection to the grandeur of nature, even when you're miles away from the mountains.
          </p>
          <p className="text-lg">
            Each photograph in our collection has been carefully selected for its ability to transport viewers to these
            magnificent locations. Whether it's the ethereal glow of the northern lights dancing above snow-capped peaks
            or the golden hour sun bathing alpine lakes in warm light, our prints capture those magical moments that
            showcase nature at its most spectacular.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Commitment</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We use only the finest archival papers and inks to ensure your prints maintain their vibrant colors for
                decades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to eco-friendly practices, using sustainable materials and minimizing our environmental
                footprint.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                We offer free worldwide shipping on all orders, carefully packaged to ensure your prints arrive in
                perfect condition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Satisfaction Guarantee</h3>
              <p className="text-muted-foreground">
                If you're not completely satisfied with your purchase, we offer a 30-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to bring the mountains home?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Browse our collection of premium mountain landscape prints and find the perfect piece for your space.
        </p>
        <Button asChild size="lg">
          <Link href="/gallery">Explore Our Gallery</Link>
        </Button>
      </section>
    </div>
  )
}
