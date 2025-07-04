export const SITE_CONFIG = {
  name: 'Lombard Tech',
  description: 'Leading recruitment specialists connecting talent with opportunity in the technology sector.',
  url: 'https://lombard-tech.io',
  logo: 'Lombard Tech',
  tagline: 'Connecting Talent with Opportunity',
  email: 'hello@lombard-tech.io',
  phone: '+44 20 7123 4567',
  address: 'London, United Kingdom',
  social: {
    linkedin: 'https://linkedin.com/company/lombard-tech',
    twitter: 'https://twitter.com/lombardtech',
  },
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Market Coverage', href: '#market-coverage' },
  { name: 'Our Services', href: '#services' },
  { name: 'Candidates', href: '#candidates' },
  { name: 'Contact', href: '/contact' },
] as const

export const SERVICES = [
  {
    id: '01',
    title: 'Executive Search',
    description: 'Strategic leadership recruitment for C-level and senior executive positions.',
  },
  {
    id: '02',
    title: 'Technology Recruitment',
    description: 'Specialized recruitment for software engineers, developers, and tech specialists.',
  },
  {
    id: '03',
    title: 'Contract Staffing',
    description: 'Flexible staffing solutions for project-based and temporary technology roles.',
  },
  {
    id: '04',
    title: 'Talent Consulting',
    description: 'Strategic workforce planning and talent acquisition consulting services.',
  },
] as const

export const MARKET_COVERAGE = [
  'Software Engineering',
  'Data Science & Analytics',
  'Cybersecurity',
  'Cloud & DevOps',
  'Product Management',
  'Digital Marketing',
  'UX/UI Design',
  'Engineering Leadership',
] as const

export const HERO_WORDS = [
  'CONNECTING',
  'TALENT WITH',
  'OPPORTUNITY'
] as const

export const COLORS = {
  primary: {
    black: '#000000',
    white: '#FFFFFF',
  },
  neutral: {
    lightGray: '#F8F8F8',
    mediumGray: '#E5E5E5',
    textGray: '#666666',
  },
  accent: {
    blue: '#0066FF',
    hoverBlue: '#0052CC',
  },
} as const 