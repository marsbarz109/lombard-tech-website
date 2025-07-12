import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { MarketCoverageSection } from '@/components/sections/market-coverage-section'
import { CandidatesSection } from '@/components/sections/candidates-section'
import { JoinUsSection } from '@/components/sections/join-us-section'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MarketCoverageSection />
      <ServicesSection />
      <CandidatesSection />
      <JoinUsSection />
      <CTASection />
    </>
  )
} 