"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Home() {
  const [showContact, setShowContact] = useState(false)

  const handleContactClick = () => {
    setShowContact(true)
    setTimeout(() => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <main className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <Hero />
      <About />
      <Services />
      <CTA />
      {showContact && <Contact />}
      <Footer />
    </main>
  )
}
