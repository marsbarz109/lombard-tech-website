export const SITE_CONFIG = {
  name: 'Lombard Tech',
  description: 'We help ambitious companies across the UK and Europe find the talent they need to grow. From VC-backed scale-ups to global listed groups, we bring clarity, pace, and market insight to every assignment.',
  url: 'https://lombard-tech.io',
  logo: 'Lombard Tech',
  tagline: 'Decisive hiring, delivered with clarity and integrity',
  email: 'Joseph.Marsden@lombard-tech.io',
  phone: '07917 442221',
  address: '71–75 Shelton Street, London, WC2H 9JQ',
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
  { name: 'Join Us', href: '#join-us' },
  { name: 'Contact', href: '/contact' },
] as const

export const SERVICES = [
  {
    id: '01',
    title: 'Permanent Hiring',
    description: 'Full-time recruitment across all technical disciplines, from individual contributor roles to senior leadership positions.',
  },
  {
    id: '02',
    title: 'Contract Hiring',
    description: 'Flexible contractor support for project delivery, urgent cover, or interim transformation roles.',
  },
  {
    id: '03',
    title: 'Statement of Works',
    description: 'Defined-outcome project delivery, giving clients control over scope, cost, and timelines without the overhead of permanent hires.',
  },
] as const

export const MARKET_COVERAGE = [
  {
    title: 'Data Science & Analytics',
    description: 'We help businesses unlock insights and build data capability with the right people.',
    roles: 'Data Scientist, Data Analyst, Machine Learning Engineer, AI Specialist, Data Engineer, Quant Analyst'
  },
  {
    title: 'Cybersecurity',
    description: 'Security teams rely on technical depth, discretion, and speed of hire. We deliver all three.',
    roles: 'Security Analyst, Security Engineer, Penetration Tester, Threat Intelligence, GRC Consultant, CISO'
  },
  {
    title: 'Cloud & DevOps',
    description: 'We support digital infrastructure teams across build, scale, and optimisation.',
    roles: 'DevOps Engineer, Cloud Engineer, Cloud Architect, Platform Engineer, Site Reliability Engineer'
  },
  {
    title: 'UX/UI Design',
    description: 'We support the design function with talent that balances creativity and usability.',
    roles: 'UX Designer, UI Designer, Design Lead, User Researcher'
  },
  {
    title: 'Engineering Leadership',
    description: 'We deliver senior leadership across engineering, transformation, and technical strategy.',
    roles: 'CTO, VP Engineering, Head of Engineering, Director of Software, Programme Director'
  },
  {
    title: 'Future Markets',
    description: 'Emerging technology roles and forward-thinking positions that drive innovation and digital transformation.',
    roles: 'AI/ML Engineer, Blockchain Developer, IoT Specialist, Quantum Computing Researcher, AR/VR Developer'
  },
] as const

export const CANDIDATE_SERVICES = [
  {
    title: 'Career Strategy',
    description: 'Personalised advice to help you plan your next move and accelerate your long-term growth.',
  },
  {
    title: 'Market Insights',
    description: 'We keep you up to date with salary benchmarks, in-demand skills, and what employers are really looking for.',
  },
  {
    title: 'Interview Preparation',
    description: 'Clear, honest prep and feedback to help you perform confidently in both technical and behavioural interviews.',
  },
  {
    title: 'Network Building',
    description: 'Connect with relevant hiring managers and peers within the tech community through our active network.',
  },
] as const

export const HERO_WORDS = [
  'SPECIALIST RECRUITMENT',
  'ACROSS INFRASTRUCTURE,',
  'CYBERSECURITY, DATA &',
  'SOFTWARE DEVELOPMENT'
] as const

export const HERO_SPECIALIZATIONS = [
  'Infrastructure',
  'Cybersecurity', 
  'Data',
  'Software Development'
] as const

export const COMPANY_VALUES = [
  {
    title: 'Excellence and Accountability',
    description: 'We prioritise quality, speed, and clear communication throughout every search.',
    icon: 'target'
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and discretion. Confidentiality and mutual respect guide all our work.',
    icon: 'shield'
  },
  {
    title: 'Human-First',
    description: 'Recruitment is about people. We focus on long-term relationships over short-term wins.',
    icon: 'users'
  },
  {
    title: 'Team Spirit',
    description: 'We support one another, work hard, and celebrate success together.',
    icon: 'heart'
  },
  {
    title: 'Freedom to Operate',
    description: 'As an independent firm, we work without internal conflicts or restrictions, giving clients the access and responsiveness they need.',
    icon: 'unlock'
  }
] as const

export const COLORS = {
  primary: {
    navy: '#0A1628',
    gold: '#C9B037',
    white: '#FFFFFF',
  },
  neutral: {
    lightGray: '#F5F5F5',
    mediumGray: '#E5E5E5',
    textGray: '#666666',
  },
  accent: {
    gold: '#C9B037',
    hoverGold: '#B8A032',
  },
} as const 