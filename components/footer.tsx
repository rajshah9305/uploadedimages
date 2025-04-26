import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MountainPrints</h3>
            <p className="text-muted-foreground">
              Premium mountain landscape photography prints for your home or office.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Prints
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/aurora"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aurora Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sunset"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sunset Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/lakes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Alpine Lakes Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MountainPrints. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
