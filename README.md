# Maneesh Yadav - Design Engineer Portfolio

A world-class dark portfolio website built with Next.js 15 App Router, Tailwind CSS v3, Framer Motion, and NodeMailer.

## 🌟 Live Demo

[View Live Portfolio](https://your-deployment-url.com) *(Update with actual deployment URL)*

## 🚀 Features

- **Modern Dark Theme** with premium gold accents
- **Smooth Animations** using Framer Motion
- **Responsive Design** optimized for all devices
- **Contact Form** with email notifications via NodeMailer
- **Visitor Tracking** with real-time email alerts
- **Typewriter Effect** for dynamic text display
- **Scroll-based Navbar** with backdrop blur effects
- **SEO Optimized** with proper meta tags

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: NodeMailer
- **Notifications**: React Hot Toast
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

## 🗝 Environment Setup

Create a `.env.local` file in the root directory:

```env
GMAIL_USER=maneeshyadav1517@gmail.com
GMAIL_PASS=your_app_password_here
NOTIFY_EMAIL=maneeshyadav1517@gmail.com
```

**Important**: For Gmail, you need to:
1. Enable 2-factor authentication
2. Generate an App Password from Google Account settings
3. Use the App Password (not your regular password) in `GMAIL_PASS`

📖 **See `EMAIL_SETUP.md` for detailed setup instructions**

## 🖼 Images Required

Place these images in the `/public` directory:
- `bg.jpg` - Background image for hero section
- `profile.jpg` - Professional headshot for about section

## 🚀 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🏗 Build

```bash
npm run build
```

## 📧 Email Features

### Contact Form
- Sends detailed contact information to your email
- Includes name, email, phone, Instagram, and message
- Styled HTML email template matching the site theme

### Visitor Tracking
- Automatically sends email notification when someone visits the site
- Includes timestamp in Asia/Kolkata timezone
- Helps you track portfolio engagement

## 🎨 Design System

### Colors
- **brand-dark**: #080808 (main background)
- **brand-card**: #111111 (card backgrounds)
- **brand-border**: #2a2a2a (borders)
- **brand-silver**: #a0a0a0 (secondary text)
- **brand-white**: #f0f0f0 (primary text)
- **brand-accent**: #c9a84c (gold accent)

### Typography
- **Font**: Inter (300, 400, 500, 600, 700, 800 weights)
- **Smooth scrolling** throughout the site
- **Custom scrollbar** with gold accent

## 📱 Sections

1. **Hero**: Eye-catching introduction with background image and typewriter effect
2. **About**: Two-column layout with profile image and statistics
3. **Services**: Three specialization cards with hover effects
4. **Contact**: Contact form with validation and info section
5. **Footer**: Simple footer with social links

## ⚡ Performance

- Optimized build with minimal bundle size
- Static generation for better performance
- Responsive images and lazy loading
- Smooth animations with GPU acceleration

## 🔧 Customization

- Update colors in `tailwind.config.ts`
- Modify content in respective component files
- Add new sections by creating components and importing in `app/page.tsx`
- Customize email templates in API routes

## 📄 License

© 2025 Maneesh Yadav. All rights reserved.
