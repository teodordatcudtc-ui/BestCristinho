import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre Noi - Service Auto Best Cristinho | Echipa și Valori',
  description: 'Află mai multe despre Service Auto Best Cristinho din Pitești. Peste 10 ani de experiență în reparații auto, echipă profesională și valori de încredere.',
  keywords: 'despre service auto Pitești, echipă reparații auto, Best Cristinho despre noi',
}

export default function DespreNoiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

