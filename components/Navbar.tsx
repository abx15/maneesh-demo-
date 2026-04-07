"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass border-b border-[#2a2a2a]'
            : 'bg-transparent'
        } flex justify-between items-center px-6 md:px-16 py-4`}
      >
        {/* Left side - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
            <span className="font-display text-[#080808] text-base">MY</span>
          </div>
          <span className="hidden md:block text-xs text-silver tracking-widest uppercase">
            Maneesh Yadav
          </span>
        </div>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[13px] text-silver tracking-wider uppercase hover:text-gold transition-colors duration-200 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToContact}
            className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70 text-xs tracking-widest uppercase"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-silver hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#080808]/98 backdrop-blur-xl flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-silver hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-display text-5xl tracking-widest text-[#f0f0f0] hover:text-gold transition-colors duration-200"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-px bg-[#2a2a2a] mb-4" />
            <p className="text-[10px] text-[#333] tracking-widest uppercase text-center">
              © Maneesh Yadav
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
