/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lt-navy': '#061129',
        'lt-gold': '#D4C49E',
        'lt-ivory': '#FAF9F7',
        'lt-slate': '#64748b',
        'deep-navy': '#061129',
        'company-gold': '#D4C49E',
        'pure-white': '#FAF9F7',
        'light-gray': '#F5F5F5',
        'medium-gray': '#E5E5E5',
        'text-gray': '#64748b',
        'primary-black': '#061129',
        'accent-blue': '#D4C49E',
        'hover-blue': '#C2B896',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lombard': ['Cinzel', 'serif'],
      },
      fontSize: {
        'hero': 'clamp(48px, 8vw, 120px)',
        'section': 'clamp(36px, 5vw, 72px)',
        'sub-heading': 'clamp(24px, 3vw, 36px)',
        'large-body': '20px',
        'regular-body': '16px',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.03em',
      },
      lineHeight: {
        'hero': '0.9',
        'body': '1.6',
      },
      animation: {
        'slideUp': 'slideUp 0.6s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'stagger': 'fadeInUp 0.6s ease-out forwards',
        'fadeInDelayed': 'fadeInDelayed 0.6s ease-out 0.6s forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInDelayed: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 