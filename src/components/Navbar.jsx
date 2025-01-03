import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/inspect_logo.png'



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/submission', label: 'Submission' },
    { href: '/important-dates', label: 'Important Dates' },
    { href: '/call-for-papers', label: 'Call For Papers' },
    { href: '/committee', label: 'Committee' },
    { href: '/registration', label: 'Registration' },
    { href: '/student-grant', label: 'Student Grant' },
    { href: '/awards', label: 'Awards' },
  ]

  return (
    <nav className="w-full bg-gradient-to-r from-[#E469B6] via-[#924FD4] to-[#6C85ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mr-32">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src={logo}
                alt="INSPECT Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-[#E469B6] via-[#924FD4] to-[#6C85ED]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

