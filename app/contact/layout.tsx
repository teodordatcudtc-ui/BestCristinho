import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Service Auto Best Cristinho | Programări și Informații',
  description: 'Contactați Service Auto Best Cristinho din Pitești. Telefon: 0720011400. Adresă: Strada Constantin Dobrogeanu Gherea nr 1, Pitești 117045.',
  keywords: 'contact service auto Pitești, programări auto, Best Cristinho contact, telefon service auto',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

