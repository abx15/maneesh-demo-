import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    // Check if environment variables are properly set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || !process.env.NOTIFY_EMAIL) {
      console.log('Environment variables not properly configured for email sending')
      return NextResponse.json({ success: true, message: 'Visitor recorded (email disabled)' }, { status: 200 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFY_EMAIL,
      subject: `👀 New Portfolio Visitor!`,
      text: `Someone just visited your portfolio.\nTime: ${time}`
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending visitor ping:', error)
    // Don't fail the request, just log the error
    return NextResponse.json({ success: true, message: 'Visitor recorded (email failed)' }, { status: 200 })
  }
}
