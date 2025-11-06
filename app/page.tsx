import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Service Auto Best Cristinho - Reparații Auto Pitești | Servicii de Încredere',
  description: 'Service auto profesional în Pitești. Oferim diagnoză auto, schimb ulei, reparații mecanice și verificări tehnice. Contact: 0720011400',
  keywords: 'service auto Pitești, reparații auto Pitești, diagnoză mașini Pitești, service auto complet, Best Cristinho',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}

