"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "Build lightning-fast, scalable web applications using React, Next.js, Node.js, and modern frameworks that deliver exceptional user experiences. From dynamic frontends to robust backends, we handle everything to bring your vision to life.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Create beautiful native and cross-platform mobile apps that engage users and drive business growth on iOS and Android. Our mobile strategies focus on smooth UX, performance, and long-term maintainability.",
    },
    {
      icon: Cloud,
      title: "Custom Landing Page",
      description:
        "Develop responsive, conversion-focused landing pages designed to boost sign-ups, sales, and user interaction. We combine clean design with proven marketing techniques to maximize impact.",
    },
    {
      icon: Sparkles,
      title: "Building Customized Tools",
      description:
        "Develop tailored software tools designed to streamline workflows, automate repetitive tasks, and solve your unique business challenges. Empower your team with efficient and intuitive solutions.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Cycle cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section
      id="services"
      className="py-20 lg:py-32 relative bg-gradient-to-b from-indigo-700/20 to-purple-700/10"
    >
      <div className="container mx-auto px-6 lg:px-8 min-h-[480px]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-black lg:text-5xl">
            Services built for scale
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70">
            Comprehensive development solutions designed to accelerate your digital transformation and deliver measurable results.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[380px] flex justify-center items-center">
          {services.map((service, idx) => {
            const isActive = idx === currentIndex
            const isPrev = idx === (currentIndex - 1 + services.length) % services.length
            const isNext = idx === (currentIndex + 1) % services.length

            // Base glass card styles
            let classNames =
              "absolute top-0 w-[320px] p-8 rounded-xl bg-white/10 backdrop-blur-md shadow-lg transition-all duration-700 ease-in-out"

            if (isActive) {
              classNames +=
                " z-30 scale-100 opacity-100 border-2 border-primary shadow-[0_0_30px_rgba(79,70,229,0.4)]"
            } else if (isPrev) {
              classNames +=
                " z-20 -translate-x-40 scale-75 opacity-50 blur-sm border border-white/30 shadow-none"
            } else if (isNext) {
              classNames +=
                " z-20 translate-x-40 scale-75 opacity-50 blur-sm border border-white/30 shadow-none"
            } else {
              classNames +=
                " opacity-0 scale-50 pointer-events-none"
            }

            return (
              <Card key={idx} className={classNames}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary transition-transform group-hover:rotate-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-black">{service.title}</h3>
                <p className="text-black/80 leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Floating blob backgrounds */}
      <div className="absolute -z-10 left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -z-10 right-1/3 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl animate-blob" />

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  )
}