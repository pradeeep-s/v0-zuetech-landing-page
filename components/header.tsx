"use client"

import { useState } from "react"
import type React from "react"
import { Transition } from "@headlessui/react"

interface HeaderProps {
  onContactClick?: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onContactClick) {
      onContactClick()
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-transparent bg-gradient-to-r from-indigo-600/80 to-purple-600/80 backdrop-blur-md shadow-lg transition-colors">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-105">
              <img src="/icon.png" alt="Zuetech Logo" className="h-10 w-10" />
            </div>
            <span className="text-2xl font-extrabold text-white tracking-wide uppercase">
              zuetech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {["Services", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-indigo-600/90 backdrop-blur-md border-t border-white/20">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {["Services", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-medium hover:text-white/90 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              Contact
            </a>
          </nav>
        </div>
      </Transition>
    </header>
  )
}