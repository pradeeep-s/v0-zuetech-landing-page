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
            <svg viewBox="0 0 512 512" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="117" cy="64" r="53" />
              <path d="M270 128H123c-15 0-28 9-33 23L10 320c-7 18 2 38 20 45 18 7 38-2 45-20l69-174v181l-45 119c-7 18 2 38 20 45 18 7 38-2 45-20l53-140 53 140c7 18 27 27 45 20 18-7 27-27 20-45l-45-119V171l69 174c7 18 27 27 45 20 18-7 27-27 20-45L304 151c-5-14-18-23-33-23z" />
              <rect x="362" y="298" width="150" height="43" rx="21.5" />
              <rect x="171" y="384" width="150" height="43" rx="21.5" />
              <rect x="362" y="384" width="150" height="43" rx="21.5" />
              <rect x="0" y="470" width="128" height="43" rx="21.5" />
              <rect x="171" y="470" width="150" height="43" rx="21.5" />
              <rect x="362" y="470" width="150" height="43" rx="21.5" />
              <path d="M488 43L384 107v186l104-64c16-10 24-28 24-47V90c0-19-8-37-24-47z" />
            </svg>
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
