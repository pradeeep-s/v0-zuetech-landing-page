import { Card } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Sparkles, Cpu } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Build lightning-fast, scalable web applications using React, Next.js, and modern frameworks that deliver exceptional user experiences.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Create beautiful native and cross-platform mobile apps that engage users and drive business growth on iOS and Android.",
    },
    {
      icon: Cloud,
      title: "Custom Landing Page",
      description:
        "Develop responsive, conversion-focused landing pages designed to boost sign-ups, sales, and user interaction.",
    },
    {
      icon: Sparkles,
      title: "Building Customized Tools",
      description:
        "Develop tailored software tools designed to streamline workflows, automate repetitive tasks, and solve your unique business challenges.",
    },
    {
      icon: Cpu,
      title: "Budget PC Build",
      description:
        "Design and assemble high-performance custom PC builds optimized for your specific needs and budget constraints.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-5xl">Services built for scale</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Comprehensive development solutions designed to accelerate your digital transformation and deliver
            measurable results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:border-primary/50"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />

              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">{service.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
