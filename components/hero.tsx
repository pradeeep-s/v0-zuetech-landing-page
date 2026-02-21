"use client"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-gradient-to-tr from-pink-400/30 to-yellow-400/30 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-5 py-2 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-80" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <span className="text-sm text-black/80 font-medium">Now accepting new projects</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-black border-white lg:text-7xl">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">exceptional software</span>
            <br />
            <span className="text-primary">for the modern web</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-white/90 lg:text-xl">
            Transform your vision into reality with cutting-edge development solutions. We craft scalable,
            high-performance applications that drive business growth.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}