export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">Now accepting new projects</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance lg:text-7xl">
            Building exceptional software <span className="text-primary">for the modern web</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty lg:text-xl">
            Transform your vision into reality with cutting-edge development solutions. We craft scalable,
            high-performance applications that drive business growth.
          </p>
        </div>
      </div>
    </section>
  )
}
