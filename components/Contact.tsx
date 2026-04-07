"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Camera, Send, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      instagram: formData.get('instagram'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        toast.success("Message sent! Maneesh will get back to you soon.")
        ;(e.target as HTMLFormElement).reset()
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#080808] py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <span className="section-pill">Contact</span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-3xl md:text-5xl font-bold"
          >
            Let's Work <span className="gold-gradient">Together</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-14">
          
          {/* LEFT (col-span-2) — Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <p className="text-silver text-[15px] leading-relaxed mb-10">
              Have a project in mind? I'd love to hear about it. 
              Send me a message or reach out directly. I typically respond within 24 hours.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-gold shrink-0 hover:border-gold/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#444] uppercase tracking-widest mb-1">Email</div>
                  <div className="text-sm text-silver hover:text-gold transition-colors">
                    maneeshyadav1517@gmail.com
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-gold shrink-0 hover:border-gold/30 transition-colors">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#444] uppercase tracking-widest mb-1">Instagram</div>
                  <a 
                    href="https://instagram.com/@___pbx17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-silver hover:text-gold transition-colors"
                  >
                    @___pbx17
                  </a>
                </div>
              </motion.div>
            </div>

            <Separator className="mt-10 mb-8 bg-[#2a2a2a]" />

            {/* "Quick Reach" section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-[10px] text-[#444] uppercase tracking-widest mb-4">Quick Reach</div>
              <div className="flex gap-3">
                <a 
                  href="mailto:maneeshyadav1517@gmail.com"
                  className="text-[13px] text-silver border border-[#2a2a2a] rounded-full px-4 py-2 hover:border-gold/40 hover:text-gold transition-all duration-200 inline-flex items-center gap-2"
                >
                  ✉ Email Me
                </a>
                <a 
                  href="https://instagram.com/@___pbx17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] text-silver border border-[#2a2a2a] rounded-full px-4 py-2 hover:border-gold/40 hover:text-gold transition-all duration-200 inline-flex items-center gap-2"
                >
                  <Camera className="w-3.5 h-3.5" />
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT (col-span-3) — Form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="bg-[#111] border border-[#2a2a2a] rounded-2xl">
              <CardContent className="p-8">
                {/* Form title */}
                <div className="text-lg font-semibold text-[#f0f0f0] mb-1">
                  Send a Message
                </div>
                <p className="text-[13px] text-[#555] mb-7">
                  I typically respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Two columns row for Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-[#666] uppercase tracking-widest mb-2 block font-medium">
                        Name
                      </label>
                      <Input
                        name="name"
                        required
                        className="bg-[#1a1a1a] border-[#2a2a2a] text-[#f0f0f0] placeholder:text-[#383838] focus:border-gold/40 focus:ring-1 focus:ring-gold/15 rounded-xl h-11 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#666] uppercase tracking-widest mb-2 block font-medium">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="bg-[#1a1a1a] border-[#2a2a2a] text-[#f0f0f0] placeholder:text-[#383838] focus:border-gold/40 focus:ring-1 focus:ring-gold/15 rounded-xl h-11 transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-widest mb-2 block font-medium">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#f0f0f0] placeholder:text-[#383838] focus:border-gold/40 focus:ring-1 focus:ring-gold/15 rounded-xl h-11 transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Instagram ID */}
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-widest mb-2 block font-medium">
                      Instagram ID
                    </label>
                    <Input
                      name="instagram"
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#f0f0f0] placeholder:text-[#383838] focus:border-gold/40 focus:ring-1 focus:ring-gold/15 rounded-xl h-11 transition-all duration-200"
                      placeholder="@your_instagram"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-widest mb-2 block font-medium">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      required
                      rows={4}
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#f0f0f0] placeholder:text-[#383838] focus:border-gold/40 focus:ring-1 focus:ring-gold/15 rounded-xl resize-none transition-all duration-200"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-[#080808] hover:bg-gold-light font-semibold text-sm tracking-wide py-3 h-auto rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
