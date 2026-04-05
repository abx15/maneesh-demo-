"use client"

import { Settings2, Wrench, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Reverse Engineering",
      icon: <Settings2 className="w-10 h-10 text-[#c9a84c] mb-6" />,
      desc: "Accurately analyzing and recreating existing mechanical parts through advanced measurement and CAD reconstruction techniques."
    },
    {
      title: "Tool Reverse Engineering",
      icon: <Wrench className="w-10 h-10 text-[#c9a84c] mb-6" />,
      desc: "Detailed reverse engineering of industrial tooling — capturing geometry, tolerances, and material specs for exact replication or improvement."
    },
    {
      title: "Part Design & Tool Design",
      icon: <Layers className="w-10 h-10 text-[#c9a84c] mb-6" />,
      desc: "End-to-end design of new mechanical parts and manufacturing tools, optimized for performance, manufacturability, and cost-efficiency."
    }
  ]

  return (
    <section id="services" className="bg-[#0d0d0d] py-24 px-6 md:px-16">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        
        <span className="inline-block px-4 py-1 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs tracking-[0.2em] uppercase">
          What I Do
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mt-5 text-center leading-tight">
          My Specializations
        </h2>
        
        <p className="text-[#a0a0a0] text-sm text-center mt-3 max-w-xl mx-auto leading-relaxed">
          Precision-driven services built on technical expertise and attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c9a84c]/40 hover:bg-[#161616] transition-all duration-300 group cursor-default"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#f0f0f0] mb-3">{service.title}</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="w-full mt-16 border-t border-[#2a2a2a]"></div>
        
      </div>
    </section>
  )
}
