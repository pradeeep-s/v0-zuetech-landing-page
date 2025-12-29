"use client"

import type React from "react"

interface HeaderProps {
  onContactClick?: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onContactClick) {
      onContactClick()
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center">
              <svg viewBox="0 0 512 512" className="h-10 w-10" fill="currentColor">
                <circle cx="117" cy="69" r="69" />
                <path d="M271 128H122c-42 0-80 23-99 60L1 228c-6 10-1 23 10 28 10 6 23 1 28-10l22-40c13-24 38-39 66-39h49v102c0 29 17 55 43 67l77 34c10 5 22 0 27-10s0-22-10-27l-77-34c-13-6-21-19-21-33V167h55c13 0 23-10 23-23s-10-16-23-16z" />
                <path d="M235 295c-6-11-20-14-30-9-11 6-14 20-9 30l44 80c8 14 22 24 38 27l83 15c12 2 23-6 25-18s-6-23-18-25l-83-15c-8-2-14-7-19-13l-31-72zM90 341c-6-11-20-14-30-9-11 6-14 20-9 30l29 53c8 14 22 24 38 27l83 15c12 2 23-6 25-18s-6-23-18-25l-83-15c-8-2-14-7-19-13l-16-45zM485 293H362c-13 0-23 10-23 23s10 23 23 23h123c13 0 23-10 23-23s-10-23-23-23zM485 384H362c-13 0-23 10-23 23s10 23 23 23h123c13 0 23-10 23-23s-10-23-23-23zM128 469H5c-13 0-23 10-23 23s10 23 23 23h123c13 0 23-10 23-23s-10-23-23-23zM317 469H194c-13 0-23 10-23 23s10 23 23 23h123c13 0 23-10 23-23s-10-23-23-23zM506 469H383c-13 0-23 10-23 23s10 23 23 23h123c13 0 23-10 23-23s-10-23-23-23z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">zuetech</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
