import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/images/northern-lights-1.png"
          alt="Northern Lights over mountains"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Majestic Mountain Landscapes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Breathtaking photography capturing the beauty of nature's most spectacular scenes
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/gallery">
              Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group">
            <Link href="/collections/aurora" className="block overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/northern-lights-2.png"
                  alt="Aurora Collection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Aurora Collection</h3>
                  <p>Northern lights over majestic peaks</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="group">
            <Link href="/collections/sunset" className="block overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/sunset-mountains.png"
                  alt="Sunset Collection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Sunset Collection</h3>
                  <p>Golden hour mountain landscapes</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="group">
            <Link href="/collections/lakes" className="block overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/moraine-lake.png"
                  alt="Alpine Lakes Collection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Alpine Lakes Collection</h3>
                  <p>Pristine mountain lakes and reflections</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">View All Prints</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Our Prints</h2>
            <p className="text-lg mb-8">
              Each photograph is carefully selected and printed on premium archival paper to ensure stunning color
              reproduction and longevity. Our prints are perfect for bringing the majesty of mountain landscapes into
              your home or office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Museum-Quality</h3>
                <p>Printed on premium archival paper</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Sustainably Sourced</h3>
                <p>Eco-friendly materials and packaging</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p>30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
