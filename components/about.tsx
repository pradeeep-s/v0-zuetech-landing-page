"use client"

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative bg-gradient-to-b from-indigo-700/10 to-purple-700/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-black">
              Who We Are
            </h2>
            <div className="space-y-6 text-black/70 text-lg leading-relaxed">
              <p>
                Zuetech is a forward-thinking software development company dedicated to transforming ideas into powerful
                digital solutions. We specialize in creating custom software that drives business growth and innovation.
              </p>
              <p>
                Our team of experienced developers and designers work closely with clients to understand their unique
                needs and deliver solutions that exceed expectations. From web development to mobile apps and custom
                tools, we bring technical expertise and creative problem-solving to every project.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, providing ongoing support and guidance
                as their businesses evolve. Quality, innovation, and client satisfaction are at the core of everything
                we do.
              </p>
            </div>
          </div>

          {/* Right: Glass Cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black">Our Mission</h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive efficiency, growth, and
                competitive advantage in the digital age.
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black">Our Vision</h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                To be the trusted technology partner for businesses worldwide, known for delivering innovative solutions
                that make a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating blob backgrounds */}
      <div className="absolute -z-10 left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute -z-10 right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl animate-blob" />

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
      `}</style>
    </section>
  )
}