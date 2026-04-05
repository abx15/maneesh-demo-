import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-xs text-[#555555]">
        © 2026 Maneesh Yadav. All rights reserved.
      </div>
      
      <a 
        href="https://www.instagram.com/___pbx17?igsh=a2QydDZvaXoydms4" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all duration-200"
      >
        <Instagram className="w-4 h-4" />
      </a>
    </footer>
  )
}
