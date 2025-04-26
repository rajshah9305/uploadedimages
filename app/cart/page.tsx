"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    title: "Northern Lights Over Mountains",
    price: 79.99,
    image: "/images/northern-lights-1.png",
    size: "11×14″",
    frame: "No Frame",
    quantity: 1,
    slug: "northern-lights-mountains",
  },
  {
    id: 5,
    title: "Banff Night Sky",
    price: 89.99,
    image: "/images/banff-night.png",
    size: "16×20″",
    frame: "Black Frame",
    quantity: 1,
    slug: "banff-night-sky",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any prints to your cart yet.</p>
          <Button asChild size="lg">
            <Link href="/gallery">Browse Gallery</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative w-full sm:w-32 h-32 overflow-hidden rounded-md">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <Link href={`/product/${item.slug}`} className="font-medium hover:underline">
                              {item.title}
                            </Link>
                            <div className="text-sm text-muted-foreground mt-1">
                              Size: {item.size} • Frame: {item.frame}
                            </div>
                          </div>

                          <div className="mt-2 sm:mt-0 text-right">
                            <div className="font-medium">${item.price.toFixed(2)}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                              className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator className="my-3" />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" size="lg">
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/gallery">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
