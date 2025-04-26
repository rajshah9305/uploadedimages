"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have questions about our prints or need assistance with your order? We're here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">For general inquiries and support</p>
            <a href="mailto:info@mountainprints.com" className="text-primary hover:underline">
              info@mountainprints.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">Monday to Friday, 9am to 5pm PST</p>
            <a href="tel:+18005551234" className="text-primary hover:underline">
              +1 (800) 555-1234
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Our studio is located in</p>
            <span className="text-primary">Banff, Alberta, Canada</span>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
