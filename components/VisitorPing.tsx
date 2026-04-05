"use client"

import { useEffect } from 'react'

export default function VisitorPing() {
  useEffect(() => {
    fetch('/api/visitor').catch(console.error)
  }, [])

  return null
}
