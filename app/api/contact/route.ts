import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      )
    }

    // Check if environment variables are properly set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || !process.env.NOTIFY_EMAIL) {
      console.log('Environment variables not properly configured for email sending')
      return NextResponse.json({ 
        success: true, 
        message: 'Message received (email disabled - check server logs)' 
      }, { status: 200 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFY_EMAIL,
      subject: `📩 New Message from ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #111111; color: #f0f0f0; padding: 20px; border-radius: 8px;">
          <h2 style="color: #c9a84c; border-bottom: 1px solid #2a2a2a; padding-bottom: 10px;">New Message!</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a; color: #a0a0a0; width: 100px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a; color: #a0a0a0;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a; color: #a0a0a0;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a;">${phone || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="color: #a0a0a0; margin-bottom: 5px;">Message:</p>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #2a2a2a;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    // Don't fail the request completely, return a graceful response
    return NextResponse.json({ 
      success: true, 
      message: 'Message received (email failed - check server logs)' 
    }, { status: 200 })
  }
}
