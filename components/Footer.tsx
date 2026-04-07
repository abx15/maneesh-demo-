"use client"

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#060606] border-t border-[#1a1a1a] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-center flex-wrap gap-4"
        >
          {/* Left: Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
              <span className="font-display text-[#080808] text-base">MY</span>
            </div>
            <span className="text-xs text-silver tracking-widest uppercase">
              Maneesh Yadav
            </span>
          </div>

          {/* Right: Nav links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[12px] text-[#444] hover:text-gold transition-colors tracking-wider uppercase"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>

        <Separator className="my-6 bg-[#1a1a1a]" />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-between items-center flex-wrap gap-4"
        >
          {/* Left: Copyright */}
          <div className="text-[12px] text-[#333]">
            &copy; 2026 Maneesh Yadav. All rights reserved.
          </div>

          {/* Right: Credits */}
          <div className="text-[12px] text-[#333]">
            Design and developed by <a href="mailto:arun.builds.tech@gmail.com" className="hover:text-gold transition-colors">Arun Kumar Bind</a>
          </div>

          {/* Right: Instagram icon */}
          <a
            href="https://instagram.com/@___pbx17"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#333] hover:text-gold hover:border-gold/30 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
