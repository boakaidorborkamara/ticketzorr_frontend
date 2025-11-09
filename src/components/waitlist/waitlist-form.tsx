"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would normally send this to your backend API
    console.log("Form submitted:", formData)

    // Show success message
    setIsSubmitted(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)

    // Scroll to success message
    const element = document.getElementById("success-message")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section id="waitlist" className="py-24 bg-orange-500">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          {isSubmitted && (
            <div
              id="success-message"
              className="bg-green-500 text-white p-4 rounded-xl text-center mb-6 font-semibold"
            >
              🎉 You're on the list! We'll notify you when we launch.
            </div>
          )}

          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-black">
            Join the Waitlist
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Be the first to know when we launch in Liberia. Get exclusive early
            access and special perks!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+231 XXX XXX XXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="role" className="mb-2 block">
                I'm interested in *
              </Label>
              <Select
                value={formData.role}
                onValueChange={(value) =>
                  setFormData({ ...formData, role: value })
                }
                required
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="attendee">
                    Discovering & attending events
                  </SelectItem>
                  <SelectItem value="organizer">Organizing events</SelectItem>
                  <SelectItem value="vendor">
                    Offering vendor services (DJ, catering, etc.)
                  </SelectItem>
                  <SelectItem value="venue">Listing my venue</SelectItem>
                  <SelectItem value="all">All of the above</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Join the Waitlist
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
