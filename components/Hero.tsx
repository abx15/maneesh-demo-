"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const titles = ["Reverse Engineering", "Tool Reverse Engineering", "Part Design & Tool Design"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden" 
      style={{ 
        backgroundImage: "url('/bg.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#080808]"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs tracking-[0.2em] uppercase"
        >
          Design Engineer
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#f0f0f0] leading-none"
        >
          Maneesh<br/>
          <span className="text-[#c9a84c]">Yadav</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-[#a0a0a0] font-light min-h-[32px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTitleIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentTitleIndex]}
            </motion.span>
          </AnimatePresence>
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="ml-[2px]"
          >
            |
          </motion.span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex gap-4 mt-10 flex-wrap justify-center"
        >
          <a href="#services" className="px-8 py-3 rounded-full bg-[#c9a84c] text-[#080808] font-semibold text-sm tracking-wide hover:bg-[#e0bb6a] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#c9a84c]/20">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-[#c9a84c]/50 text-[#c9a84c] font-semibold text-sm tracking-wide hover:bg-[#c9a84c]/10 hover:scale-105 transition-all duration-200">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a84c]/60"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
