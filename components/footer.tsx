import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-slate-300">
      <div className="container py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="font-bold text-xl border-l-4 border-yellow-400 pl-2 inline-block mb-4">
              <span className="font-playfair text-white">MOUNTAIN</span>
              <span className="text-yellow-400">SCAPES</span>
            </Link>
            <p className="text-slate-400">
              Premium mountain landscape photography prints capturing nature's most spectacular scenes.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-white">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gallery" className="hover:text-yellow-400 transition-colors">
                  All Prints
                </Link>
              </li>
              <li>
                <Link href="/collections/aurora" className="hover:text-yellow-400 transition-colors">
                  Aurora Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/sunset" className="hover:text-yellow-400 transition-colors">
                  Sunset Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/lakes" className="hover:text-yellow-400 transition-colors">
                  Alpine Lakes Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-white">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-yellow-400 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="https://instagram.com" className="hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-slate-400 text-sm">Subscribe to our newsletter for exclusive offers and updates.</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MountainScapes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
