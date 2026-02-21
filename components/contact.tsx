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
    return () => window.removeEventListener("showConsultation", handleShowConsultation)
  }, [])

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-gradient-to-b from-indigo-700/10 to-purple-700/5">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-black">
            {isConsultation ? "Schedule a Consultation" : "Let's Work Together"}
          </h2>
          <p className="mt-4 text-lg text-black/70">
            {isConsultation
              ? "Choose your preferred date and time for our consultation call."
              : "Have a project in mind? Get in touch and let's discuss how we can help bring your vision to life."}
          </p>
        </div>

        {/* Contact Form Card */}
        <Card className="mx-auto mt-12 max-w-2xl rounded-2xl border border-black/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all">
          <form className="space-y-6 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-black">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-black/30 bg-white/10 px-4 py-2 text-black/90 placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-black/30 bg-white/10 px-4 py-2 text-black/90 placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-black">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your company (optional)"
                className="w-full rounded-lg border border-black/30 bg-white/10 px-4 py-2 text-black/90 placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              />
            </div>

            {isConsultation && (
              <>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-black">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full rounded-lg border border-black/30 bg-white/10 px-4 py-2 text-black/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-black">
                    Preferred Time Slot
                  </label>
                  <select
                    id="time"
                    className="w-full rounded-lg border border-black/30 bg-white/10 px-4 py-2 text-black/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
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
              <label htmlFor="message" className="text-sm font-medium text-black">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder={isConsultation ? "Tell us what you'd like to discuss..." : "Tell us about your project..."}
                className="w-full rounded-lg border border-black/30 bg-white/10 px-4 py-2 text-black/90 placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {isConsultation ? "Book Consultation" : "Send Message"}
            </Button>
          </form>
        </Card>

        {/* Contact Info Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Email",
              icon: (
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              lines: ["zuetech.com@gmail.com"],
            },
            {
              title: "Phone",
              icon: (
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              ),
              lines: ["+91 8056407030", "+91 6381507591"],
            },
            {
              title: "Location",
              icon: (
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
              ),
              lines: ["C86V+3J2, Nadupalayam", "Kurumandhur,Nambiyur", "638457"],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-black/30 bg-white/10 backdrop-blur-md shadow-lg text-center p-6 hover:shadow-2xl transition-all"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                {card.icon}
              </div>
              <h3 className="font-semibold text-black">{card.title}</h3>
              {card.lines.map((line, i) => (
                <p key={i} className="mt-1 text-sm text-black/80">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}