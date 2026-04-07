"use client"

import { Settings2, Wrench, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      tag: "Analysis",
      title: "Reverse Engineering",
      icon: <Settings2 className="w-6 h-6 text-gold" />,
      desc: "Accurately analyzing and recreating existing mechanical parts through advanced measurement and CAD reconstruction — capturing every tolerance."
    },
    {
      tag: "Tooling",
      title: "Tool Reverse Engineering",
      icon: <Wrench className="w-6 h-6 text-gold" />,
      desc: "Detailed reverse engineering of industrial tooling — capturing geometry, tolerances, and material specs for exact replication or improvement."
    },
    {
      tag: "Design",
      title: "Part Design & Tool Design",
      icon: <Layers className="w-6 h-6 text-gold" />,
      desc: "End-to-end design of mechanical parts and manufacturing tools, optimized for performance, manufacturability, and cost-efficiency."
    }
  ]

  return (
    <section className="bg-[#0a0a0a] py-28 px-6 md:px-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <span className="section-pill">What I Do</span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-3xl md:text-5xl font-bold"
          >
            My <span className="gold-gradient">Specializations</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-silver text-sm max-w-md mx-auto text-center leading-relaxed"
          >
            Precision-driven services built on technical expertise and attention to detail.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -6 }}
            >
              <Card className="bg-[#111] border border-[#2a2a2a] rounded-2xl hover:border-gold/30 transition-all duration-400 group cursor-default overflow-hidden relative">
                <CardContent className="p-8">
                  {/* Top-right corner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse,rgba(201,168,76,0.07)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Tag line (top) */}
                  <div className="text-[10px] text-gold/60 tracking-[0.2em] uppercase mb-4">
                    {service.tag}
                  </div>

                  {/* Icon box */}
                  <div className="w-12 h-12 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6b6b6b] text-sm leading-[1.75] group-hover:text-silver transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Bottom bar */}
                  <div className="mt-8 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent group-hover:w-full transition-all duration-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
