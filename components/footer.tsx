export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 backdrop-blur-md border-t border-white/20 text-black">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
                <svg
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-wide uppercase">zuetech</span>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              Building the future of software, one line of code at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black/90">Services</h3>
            <ul className="space-y-3 text-sm text-black/70">
              {["Full Stack Web Development","Mobile Apps","Custom Landing Page","Building Customized Tools",].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="transition-colors hover:text-black hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black/90">Company</h3>
            <ul className="space-y-3 text-sm text-black/70">
              {["About Us","Careers","Blog","Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-black hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black/90">Connect</h3>
            <ul className="space-y-3 text-sm text-black/70">
              {["Twitter","LinkedIn","GitHub"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="transition-colors hover:text-black hover:translate-x-1 inline-block"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 border-t border-white/20  text-center text-sm text-black/50">
          <p>© 2025 Zuetech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}