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
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-indigo-600/30 to-purple-600/20 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/20 bg-card/40 p-8 sm:p-16 lg:p-24">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/20 blur-lg" />

          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black lg:text-5xl">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-black/80">
              Let’s collaborate to bring your vision to life. Our team is ready to deliver exceptional results tailored
              to your business needs.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative flex items-center gap-3 rounded-full bg-primary text-white font-semibold py-3 px-8 transition-all hover:scale-105 hover:shadow-lg"
                onClick={handleScheduleClick}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}