import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Service Auto Best Cristinho - Reparații Auto Pitești | Service Complet',
  description: 'Service auto profesional în Pitești. Oferim diagnoză auto, schimb ulei, reparații mecanice și verificări tehnice. Contact: 0720011400',
  keywords: 'service auto Pitești, reparații auto Pitești, diagnoză mașini Pitești, service auto complet, Best Cristinho',
  authors: [{ name: 'Service Auto Best Cristinho' }],
  openGraph: {
    title: 'Service Auto Best Cristinho - Reparații Auto Pitești',
    description: 'Service auto profesional în Pitești. Oferim servicii complete de reparații și întreținere auto.',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  )
}

