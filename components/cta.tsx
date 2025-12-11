"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const handleScheduleClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
      // Set consultation mode in contact form
      const event = new CustomEvent("showConsultation")
      window.dispatchEvent(event)
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          <div className="px-8 py-16 text-center lg:px-16 lg:py-24">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-5xl">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-pretty">
              Let's collaborate to bring your vision to life. Our team is ready to deliver exceptional results tailored
              to your business needs.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group" onClick={handleScheduleClick}>
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
