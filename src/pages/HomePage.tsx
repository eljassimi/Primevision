import { CTA } from '../components/sections/CTA'
import { Devices } from '../components/sections/Devices'
import { FAQ } from '../components/sections/FAQ'
import { Features } from '../components/sections/Features'
import { Hero } from '../components/sections/Hero'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Pricing } from '../components/sections/Pricing'
import { Testimonials } from '../components/sections/Testimonials'
import { TrustBar } from '../components/sections/TrustBar'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta({ path: '/' })

  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Devices />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
