"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings2, Mail, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function Hero() {
  const titles = ["Reverse Engineering", "Tool Reverse Engineering", "Part Design & Tool Design"]
  const [displayed, setDisplayed] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayed(currentTitle.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2200)
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(currentTitle.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
      }
    }, isDeleting ? 28 : 55)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex, titles])

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background layers */}
      {/* Layer 1 - BG Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Layer 2 - Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808]/95 via-[#080808]/85 to-[#080808]/70" />
      
      {/* Layer 3 - Grid pattern */}
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40" />
      
      {/* Layer 4 - Gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.08)_0%,transparent_65%)] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN (text) */}
        <div>
          {/* Animated pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="section-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"/>
              Available for Projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display tracking-wider leading-none mt-5"
          >
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-[#f0f0f0]">
              MANEESH
            </span>
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] shimmer-text">
              YADAV
            </span>
          </motion.h1>

          {/* Role divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="h-px w-12 bg-gold/50"/>
            <span className="text-silver text-sm tracking-[0.25em] uppercase font-light">
              Design Engineer
            </span>
            <div className="h-px flex-1 bg-[#2a2a2a]"/>
          </motion.div>

          {/* Typewriter text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-5 text-base md:text-lg text-silver font-light min-h-[28px] tracking-wide"
          >
            {displayed}<span className="cursor-blink text-gold ml-0.5">|</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex gap-3 flex-wrap"
          >
            <Button
              onClick={(e) => scrollToSection(e, '#services')}
              className="bg-gold text-[#080808] hover:bg-gold-light font-semibold text-sm tracking-wide px-8 py-3 rounded-full h-auto shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-105 transition-all duration-200"
            >
              View My Work →
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="border border-gold/35 text-gold hover:bg-gold/8 hover:border-gold/60 font-medium text-sm tracking-wide px-8 py-3 rounded-full h-auto transition-all duration-200"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex gap-8 flex-wrap"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gold font-display tracking-wider">50+</span>
              <span className="text-[11px] text-[#555] uppercase tracking-widest mt-0.5">Projects</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-[#2a2a2a]"/>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gold font-display tracking-wider">3+</span>
              <span className="text-[11px] text-[#555] uppercase tracking-widest mt-0.5">Years</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-[#2a2a2a]"/>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gold font-display tracking-wider">100%</span>
              <span className="text-[11px] text-[#555] uppercase tracking-widest mt-0.5">Precision</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (visual card) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Main card */}
          <Card className="glass rounded-2xl p-8 w-full max-w-sm border border-[#2a2a2a] hover:border-gold/20 transition-all duration-500">
            {/* Top row */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                <Settings2 className="text-gold w-5 h-5" />
              </div>
              <span className="text-xs text-silver">Design Engineer</span>
            </div>
            
            {/* Divider */}
            <div className="my-5 border-t border-[#2a2a2a]" />
            
            {/* Three service tags */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <span className="text-sm text-silver hover:text-gold transition-colors">Reverse Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <span className="text-sm text-silver hover:text-gold transition-colors">Tool Reverse Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <span className="text-sm text-silver hover:text-gold transition-colors">Part & Tool Design</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="my-5 border-t border-[#2a2a2a]" />
            
            {/* Contact info */}
            <div className="flex items-center gap-2 text-[13px] text-[#555]">
              <Mail className="w-3.5 h-3.5" />
              <span>maneeshyadav1517@gmail.com</span>
            </div>
            
            {/* Bottom */}
            <div className="mt-3 flex items-center justify-between">
              <a 
                href="https://instagram.com/@___pbx17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[13px] text-gold/70 hover:text-gold transition-colors"
              >
                @___pbx17
              </a>
              <Badge variant="outline" className="border-gold/30 text-gold/70 text-[10px]">
                Open to work
              </Badge>
            </div>
          </Card>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-gold/8 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full border border-gold/5 pointer-events-none" />
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-16 z-10 flex items-center gap-3"
      >
        <div className="w-8 h-px bg-gold/40 animate-pulse" />
        <span className="text-[10px] text-[#444] tracking-[0.25em] uppercase">Scroll to explore</span>
      </motion.div>
    </section>
  )
}
