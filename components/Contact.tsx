"use client"

import { useState } from 'react'
import { Mail, Instagram, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

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
    <section id="contact" className="bg-[#080808] py-24 px-6 md:px-16">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        
        <span className="inline-block px-4 py-1 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs tracking-[0.2em] uppercase">
          Contact
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mt-5 text-center leading-tight">
          Let's Work <span className="text-[#c9a84c]">Together</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-14 w-full">
          
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-10 max-w-sm">
              Have a project in mind? I'd love to hear about it. 
              Send me a message or reach out directly.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#c9a84c]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm text-[#a0a0a0]">maneeshyadav1517@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#c9a84c]">
                  <Instagram className="w-5 h-5" />
                </div>
                <a 
                  href="https://www.instagram.com/___pbx17?igsh=a2QydDZvaXoydms4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#a0a0a0] hover:text-[#c9a84c] transition-colors"
                >
                  @___pbx17
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-[#a0a0a0] mb-2 tracking-wide uppercase">Full Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0f0f0] text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[#a0a0a0] mb-2 tracking-wide uppercase">Email Address*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0f0f0] text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-[#a0a0a0] mb-2 tracking-wide uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Your phone number (optional)"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0f0f0] text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-xs font-medium text-[#a0a0a0] mb-2 tracking-wide uppercase">Instagram ID</label>
                <input 
                  type="text" 
                  id="instagram" 
                  name="instagram" 
                  placeholder="@your_instagram (optional)"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0f0f0] text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#a0a0a0] mb-2 tracking-wide uppercase">Message*</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0f0f0] text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#c9a84c] text-[#080808] font-semibold text-sm tracking-wide hover:bg-[#e0bb6a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
