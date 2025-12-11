export function Stats() {
  const stats = [
    {
      value: "150+",
      label: "Projects Delivered",
      company: "Fortune 500 Clients",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      company: "Repeat Customers",
    },
    {
      value: "10x",
      label: "Faster Development",
      company: "With Modern Stack",
    },
    {
      value: "24/7",
      label: "Support Available",
      company: "Global Coverage",
    },
  ]

  return (
    <section className="border-y border-border bg-card/50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-2 text-4xl font-bold tracking-tight lg:text-5xl">{stat.value}</div>
              <div className="mb-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
