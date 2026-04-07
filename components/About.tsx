"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-[#080808] py-28 px-6 md:px-16 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.04)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center"
        >
          <span className="section-pill">About Me</span>
        </motion.div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-14">
          
          {/* LEFT — Image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-fit mx-auto md:mx-0"
          >
            {/* Main image container */}
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border border-[#2a2a2a]">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Maneesh Yadav" 
                fill 
                className="object-cover"
              />
              
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent" />
            </div>
            
            {/* Decorative border (behind image) */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-gold/20 -z-10" />
            
            {/* Gold dot pattern (top-right) */}
            <div 
              className="absolute -top-3 -right-3 w-20 h-20"
              style={{
                background: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
                backgroundSize: '8px 8px',
                opacity: 0.3
              }}
            />
            
            {/* Badge (bottom-left of image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-3 -left-3 z-10"
            >
              <Badge className="bg-gold text-[#080808] font-semibold px-3 py-1.5 text-xs shadow-lg shadow-gold/30">
                Design Engineer
              </Badge>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-[#f0f0f0] leading-tight mb-6"
            >
              Crafting Precision.
              <br/>
              <span className="gold-gradient">Engineering Excellence.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-silver text-[15px] leading-[1.8] mb-3"
            >
              With a deep passion for mechanical design and reverse engineering, 
              I transform complex components into precise CAD models and manufacturing-ready 
              tooling designs. My work bridges the gap between existing parts and innovative 
              new solutions — ensuring every design meets the highest standards of accuracy.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-silver text-[15px] leading-[1.8] mb-3"
            >
              I specialize in reverse engineering complex mechanical parts, analyzing 
              tolerances and material properties to create exact replicas or improved designs. 
              Whether it's tool reverse engineering or end-to-end part design, I bring 
              precision engineering expertise to every project.
            </motion.p>

            <Separator className="my-8 bg-[#2a2a2a]" />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap"
            >
              <Card className="flex-1 min-w-[90px] bg-[#111] border border-[#2a2a2a] rounded-xl px-5 py-4 hover:border-gold/25 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-gold font-display tracking-wide">50+</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-widest mt-1">Projects</div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[90px] bg-[#111] border border-[#2a2a2a] rounded-xl px-5 py-4 hover:border-gold/25 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-gold font-display tracking-wide">3+</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-widest mt-1">Years Exp</div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[90px] bg-[#111] border border-[#2a2a2a] rounded-xl px-5 py-4 hover:border-gold/25 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-gold font-display tracking-wide">100%</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-widest mt-1">Precision</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
