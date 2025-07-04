# Lombard Tech - Recruitment Website

A modern, minimalist recruitment website built for Lombard Tech, inspired by clean aesthetic design with sophisticated animations and premium user experience.

## 🚀 Features

- **Modern Design System**: Clean, monochromatic design with bold typography
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Ready**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG AA compliant with proper focus management
- **Cookie Consent**: GDPR compliant cookie banner
- **Form Handling**: Contact forms with validation and file upload
- **Type Safe**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Font**: Inter (variable font)
- **Language**: TypeScript
- **Deployment**: Vercel ready

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page with forms
│   ├── services/          # Services page
│   └── privacy-policy/    # Legal pages
├── components/            # Reusable components
│   ├── navigation/        # Navigation components
│   ├── sections/          # Page sections
│   ├── forms/            # Form components
│   ├── ui/               # Basic UI components
│   ├── footer.tsx        # Footer component
│   └── cookie-consent.tsx # Cookie banner
├── lib/                  # Utilities and configuration
│   ├── animations.ts     # Framer Motion variants
│   ├── constants.ts      # Site-wide constants
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    ├── fonts/            # Font files
    └── images/           # Image assets
```

## 🎨 Design System

### Colors
- **Primary**: Pure black (#000000) and white (#FFFFFF)
- **Neutral**: Light gray (#F8F8F8), medium gray (#E5E5E5), text gray (#666666)
- **Accent**: Blue (#0066FF) with hover state (#0052CC)

### Typography
- **Font**: Inter variable font
- **Scale**: Responsive clamp() functions for fluid typography
- **Hero**: 48px - 120px (clamp)
- **Section**: 36px - 72px (clamp)
- **Body**: 16px and 20px variants

### Animations
- **Page Transitions**: Smooth opacity and position changes
- **Scroll Animations**: Intersection Observer triggered animations
- **Micro-interactions**: Hover states and button animations
- **Text Reveals**: Staggered word animations on hero section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lombard-tech-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is built mobile-first and tested on:
- Mobile: 320px, 375px
- Tablet: 768px
- Desktop: 1024px, 1440px+

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators (custom styled)
- Screen reader announcements
- Color contrast compliance (WCAG AA)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://lombard-tech.io
NEXT_PUBLIC_GA_TRACKING_ID=your-ga-id
```

### Customization

#### Colors
Update colors in `tailwind.config.js` and `app/globals.css`:

```css
:root {
  --primary-black: #000000;
  --accent-blue: #0066FF;
  /* ... other colors */
}
```

#### Content
Update site content in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Company',
  description: 'Your description',
  // ... other config
}
```

## 📈 Performance

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based splitting
- **Font Loading**: Optimized with next/font
- **Caching**: Proper cache headers and static generation

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

```bash
npm run build
```

Deploy the `.next` folder and `public` directory to your hosting provider.

## 🔍 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **Structured Data**: JSON-LD schema for organization
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Proper URL canonicalization

## 📊 Analytics

The website is ready for:
- Google Analytics 4
- Google Tag Manager
- Cookie consent integration

## 🔒 Security

- **Content Security Policy**: Headers for XSS protection
- **HTTPS**: SSL/TLS encryption ready
- **Input Validation**: Form validation and sanitization
- **File Upload**: Secure file handling with type/size validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

For questions or support:
- Email: tech@lombard-tech.io
- Documentation: See inline code comments
- Issues: GitHub Issues

---

Built with ❤️ for modern recruitment 