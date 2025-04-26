"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            MountainPrints
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/gallery") ? "text-primary" : "text-muted-foreground"}`}
            >
              Gallery
            </Link>
            <Link
              href="/collections"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/collections") ? "text-primary" : "text-muted-foreground"}`}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
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
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/gallery" className="text-lg font-medium">
                  Gallery
                </Link>
                <Link href="/collections" className="text-lg font-medium">
                  Collections
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
                <Link href="/account" className="text-lg font-medium">
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
