export const SITE_CONFIG = {
  name: 'Lombard Tech',
  description: 'We help ambitious companies across the UK and Europe find the talent they need to grow. From VC-backed scale-ups to global listed groups, we bring clarity, pace, and market insight to every assignment.',
  url: 'https://lombard-tech.io',
  logo: 'Lombard Tech',
  tagline: 'Decisive hiring, delivered with clarity and integrity',
  email: 'Joseph.Marsden@lombard-tech.io',
  phone: '07917 442221', // Keep for backwards compatibility
  phones: {
    mobile: '07917 442221',
    ukOffice: '+44 20 3807 3032',
    franceOffice: '+33 1 84 80 35 61'
  },
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
    title: 'Network Engineering',
    description: 'We support global networks with the expertise to optimise speed, security, and resilience across complex architectures.',
    roles: 'Network Engineer, Network Architect, Network Automation Engineer, Wireless Engineer, SD-WAN Specialist, Load Balancing Engineer, BGP/MPLS Specialist, IP Fabric Engineer, WAN Optimisation, Network Security Engineer, SASE/Zero Trust Consultant, Network Monitoring Specialist, Data Centre Engineer, Service Provider Engineer'
  },
  {
    title: 'Trading Systems',
    description: 'We help financial institutions build and maintain ultra-low latency trading environments with specialist talent across engineering and support functions.',
    roles: 'Low Latency Network Engineer, FPGA Engineer, Market Data Specialist, SRE, Trading Platform Developer, FIX Protocol Engineer, EUC Engineer, Exchange Connectivity Engineer, Colocation Specialist'
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'We work with teams modernising their infrastructure, from on-prem to hybrid and cloud-native environments, ensuring security, scale, and uptime.',
    roles: 'Cloud Engineer, Cloud Architect, DevOps Engineer, Platform Engineer, Kubernetes Specialist, Infrastructure as Code (IaC) Specialist, Hybrid Cloud Engineer, Multi-Cloud Consultant (AWS, Azure, GCP), Data Centre Engineer, Storage & Backup Engineer, Cloud Security Specialist'
  },
  {
    title: 'Cyber Security',
    description: 'Security teams rely on technical depth, discretion, and speed of hire. We deliver all three.',
    roles: 'Security Analyst, SOC Analyst, Security Engineer, IAM Consultant, Red Team/Blue Team Specialist, Threat Intelligence Analyst, CISO, GRC Consultant, SIEM/SOAR Engineer, Endpoint Security Specialist, Certificate Management Specialist, NDR/XDR Engineer'
  },
  {
    title: 'Digital Workplace',
    description: 'We support end-user and collaboration environments that underpin secure, productive digital workplaces.',
    roles: 'M365 Consultant, Unified Communications Engineer, Endpoint Management Specialist, Teams Telephony Engineer, VDI Specialist, Mobile Device Management (MDM) Consultant, Intune Engineer, Collaboration Tools Specialist'
  },
  {
    title: 'Future Markets',
    description: 'We are actively building our network and delivery capability in the following areas:',
    roles: 'Data & BI Engineering, Software Development, Machine Learning & AI'
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