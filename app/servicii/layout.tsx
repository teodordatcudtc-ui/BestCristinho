import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii - Service Auto Best Cristinho | Reparații Auto Pitești',
  description: 'Servicii complete auto în Pitești: diagnoză auto, schimb ulei, reparații mecanice, verificări tehnice. Prețuri corecte și lucrare de calitate.',
  keywords: 'servicii auto Pitești, diagnoză auto, schimb ulei, reparații mecanice, verificări tehnice, service auto complet',
}

export default function ServiciiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

