import { Inter, Geist } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import VisitorPing from '@/components/VisitorPing'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Maneesh Yadav | Design Engineer',
  description: 'Design Engineer specializing in Reverse Engineering, Part Design, and Tool Design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} font-sans antialiased bg-[#080808] text-[#f0f0f0]`}>
        <VisitorPing />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#111',
              color: '#f0f0f0',
              border: '1px solid #2a2a2a',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
