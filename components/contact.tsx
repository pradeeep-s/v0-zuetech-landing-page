"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function Contact() {
  const [isConsultation, setIsConsultation] = useState(false)

  useEffect(() => {
    const handleShowConsultation = () => {
      setIsConsultation(true)
    }

    window.addEventListener("showConsultation", handleShowConsultation)

    return () => {
      window.removeEventListener("showConsultation", handleShowConsultation)
    }
  }, [])

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {isConsultation ? "Schedule a Consultation" : "Let's Work Together"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {isConsultation
              ? "Choose your preferred date and time for our consultation call."
              : "Have a project in mind? Get in touch and let's discuss how we can help bring your vision to life."}
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl border-border/50 bg-card/50 backdrop-blur-sm">
          <form className="space-y-6 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your company (optional)"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {isConsultation && (
              <>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    id="time"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a time slot</option>
                    <option value="9am">9:00 AM - 10:00 AM</option>
                    <option value="10am">10:00 AM - 11:00 AM</option>
                    <option value="11am">11:00 AM - 12:00 PM</option>
                    <option value="2pm">2:00 PM - 3:00 PM</option>
                    <option value="3pm">3:00 PM - 4:00 PM</option>
                    <option value="4pm">4:00 PM - 5:00 PM</option>
                  </select>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder={isConsultation ? "Tell us what you'd like to discuss..." : "Tell us about your project..."}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {isConsultation ? "Book Consultation" : "Send Message"}
            </Button>
          </form>
        </Card>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border/50 bg-card/30 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">zuetech.com@gmail.com</p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/30 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Phone</h3>
            <p className="mt-1 text-sm text-muted-foreground">+91 8056407030</p>
            <p className="mt-1 text-sm text-muted-foreground">+91 6381507591</p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/30 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Location</h3>
            <p className="mt-1 text-sm text-muted-foreground">C86V+3J2, Nadupalayam</p>
            <p className="mt-1 text-sm text-muted-foreground">Kurumandhur,Nambiyur</p>
            <p className="mt-1 text-sm text-muted-foreground">638457</p>
          </div>
        </div>
      </div>
    </section>
  )
}
