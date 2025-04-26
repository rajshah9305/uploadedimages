"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, User, Search } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl border-l-4 border-yellow-400 pl-2">
            <span className="font-playfair">MOUNTAIN</span>
            <span className="text-yellow-400">SCAPES</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${isActive("/") ? "text-yellow-400" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${isActive("/gallery") ? "text-yellow-400" : "text-muted-foreground"}`}
            >
              Gallery
            </Link>
            <Link
              href="/collections"
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${isActive("/collections") ? "text-yellow-400" : "text-muted-foreground"}`}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${isActive("/about") ? "text-yellow-400" : "text-muted-foreground"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${isActive("/contact") ? "text-yellow-400" : "text-muted-foreground"}`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-medium text-black">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>

          <Link href="/account">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-slate-800">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-yellow-400">
                  Home
                </Link>
                <Link href="/gallery" className="text-lg font-medium hover:text-yellow-400">
                  Gallery
                </Link>
                <Link href="/collections" className="text-lg font-medium hover:text-yellow-400">
                  Collections
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-yellow-400">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-yellow-400">
                  Contact
                </Link>
                <Link href="/account" className="text-lg font-medium hover:text-yellow-400">
                  Account
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
