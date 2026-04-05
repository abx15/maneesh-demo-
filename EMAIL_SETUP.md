# Email Setup Guide

To enable email functionality for the contact form and visitor tracking, you need to set up a Gmail App Password.

## 📧 Gmail App Password Setup

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account settings](https://myaccount.google.com/)
2. Click on "Security"
3. Under "Signing in to Google", enable "2-Step Verification"

### Step 2: Generate App Password
1. In the same Security section, click on "App passwords"
2. Under "Select app", choose "Other (Custom name)"
3. Enter a name like "Maneesh Portfolio"
4. Click "Generate"
5. Copy the 16-character password (this is your `GMAIL_PASS`)

### Step 3: Update Environment Variables
Open `.env.local` and update:
```env
GMAIL_USER=maneeshyadav1517@gmail.com
GMAIL_PASS=your_16_character_app_password_here
NOTIFY_EMAIL=maneeshyadav1517@gmail.com
```

### Step 4: Restart Development Server
```bash
npm run dev
```

## 🔍 Testing Email Functionality

### Test Contact Form
1. Visit http://localhost:3002
2. Navigate to Contact section
3. Fill out the form and submit
4. Check your email for the message

### Test Visitor Tracking
1. Visit http://localhost:3002 in a new browser session
2. Check your email for visitor notification

## 🚨 Troubleshooting

### "Email disabled" Messages
If you see messages like "email disabled" or "email failed", it means:
- Environment variables are not set correctly
- Gmail App Password is invalid
- 2-Factor Authentication is not enabled

### Common Issues
1. **Invalid credentials**: Double-check your Gmail App Password
2. **2FA not enabled**: Make sure 2-Step Verification is turned on
3. **Firewall issues**: Check if your network blocks SMTP connections

### Debug Mode
To see detailed error messages, check the terminal where your development server is running.

## 📧 Email Templates

### Contact Form Email
- Subject: 📩 New Message from [Name] — Portfolio
- Includes: Name, Email, Phone, Instagram, Message
- Styled with dark theme matching the website

### Visitor Tracking Email
- Subject: 👀 New Portfolio Visitor!
- Includes: Timestamp in Asia/Kolkata timezone
- Sent on every new site visit

## 🔄 Production Deployment

When deploying to production:
1. Set environment variables in your hosting platform
2. Use the same Gmail App Password
3. Test email functionality after deployment

## 📝 Notes

- Gmail App Passwords are 16 characters long
- They contain letters and numbers (no spaces)
- Store them securely in your environment variables
- Never commit `.env.local` to version control
