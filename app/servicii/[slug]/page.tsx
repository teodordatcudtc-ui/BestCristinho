import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ServiceDetailContent from '@/components/ServiceDetailContent'
import CTA from '@/components/CTA'

const servicesData: Record<string, any> = {
  'diagnoza-auto': {
    title: 'Diagnoză Auto Completă',
    shortDescription: 'Diagnosticare completă a vehiculului folosind echipamente moderne și tehnologie avansată.',
    fullDescription: 'Serviciul nostru de diagnoză auto oferă o analiză completă și precisă a stării tehnice a vehiculului dumneavoastră. Folosim echipamente de ultimă generație și software profesional pentru a identifica rapid orice problemă, chiar și cele mai mici defecte care ar putea afecta performanța sau siguranța mașinii.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
    features: [
      'Diagnosticare electronică cu scanere profesionale OBD2',
      'Verificare completă sistem motor și transmisie',
      'Analiză detaliată sisteme de siguranță (ABS, ESP, Airbag)',
      'Verificare sisteme de climatizare și încălzire',
      'Testare baterie și sistem de încărcare',
      'Diagnosticare erori ascunse în sistemul electronic',
      'Raport detaliat cu recomandări și estimări de cost',
      'Consiliere profesională pentru reparații necesare',
    ],
    benefits: [
      'Identificare rapidă a problemelor',
      'Prevenirea defecțiunilor costisitoare',
      'Siguranță sporită pentru șofer și pasageri',
      'Optimizare consum combustibil',
      'Prelungire durată de viață a vehiculului',
    ],
    duration: '30-60 minute',
    price: 'De la 150 lei',
  },
  'schimb-ului-si-filtre': {
    title: 'Schimb Ulei și Filtre',
    shortDescription: 'Schimb ulei și filtre cu produse de calitate superioară pentru protecția optimă a motorului.',
    fullDescription: 'Întreținerea regulată a motorului prin schimbul periodic de ulei și filtre este esențială pentru performanța și longevitatea vehiculului dumneavoastră. Oferim servicii complete de schimb ulei și filtre folosind doar produse premium de la producători de încredere.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
    features: [
      'Schimb ulei motor cu produse premium (Mobil, Castrol, Shell)',
      'Schimb filtru ulei original sau echivalent',
      'Schimb filtru aer cu filtre de calitate',
      'Schimb filtru combustibil pentru protecție optimă',
      'Schimb filtru habitaclu pentru aer curat în mașină',
      'Verificare completă nivel lichide (răcire, frână, direcție)',
      'Consiliere pentru tipul de ulei potrivit motorului',
      'Verificare starea generală a motorului',
    ],
    benefits: [
      'Protecție optimă pentru motor',
      'Reducere consum combustibil',
      'Performanță îmbunătățită',
      'Prelungire durată de viață motor',
      'Siguranță și fiabilitate sporită',
    ],
    duration: '30-45 minute',
    price: 'De la 200 lei',
  },
  'reparatii-mecanice': {
    title: 'Reparații Mecanice Complete',
    shortDescription: 'Reparații complete pentru toate sistemele mașinii: motor, transmisie, suspensie, frâne, direcție.',
    fullDescription: 'Echipa noastră de mecanici specializați oferă servicii complete de reparații mecanice pentru toate sistemele vehiculului. Cu peste 10 ani de experiență, lucrăm pe toate mărcile și modelele de automobile, folosind piese originale sau echivalente de calitate.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    features: [
      'Reparații motor complet (pistoane, biele, chiulasa)',
      'Reparații transmisie manuală și automată',
      'Reparații suspensie și amortizoare',
      'Reparații sistem de frânare (plăcuțe, discuri, etrieri)',
      'Reparații direcție și geometrie roți',
      'Reparații sistem electric și electronic',
      'Reparații sistem de răcire și încălzire',
      'Reparații sistem de evacuare',
    ],
    benefits: [
      'Experiență vastă pe toate mărcile',
      'Piese de calitate garantate',
      'Garanție pentru toate lucrările',
      'Diagnosticare precisă înainte de reparație',
      'Prețuri corecte și transparente',
    ],
    duration: 'Variabil (în funcție de complexitate)',
    price: 'Estimare gratuită',
  },
  'verificari-tehnice': {
    title: 'Verificări Tehnice și ITP',
    shortDescription: 'Verificări tehnice periodice și ITP pentru siguranța și conformitatea vehiculului.',
    fullDescription: 'Oferim servicii complete de verificare tehnică și pregătire pentru ITP. Echipa noastră verifică toate sistemele vehiculului pentru a asigura conformitatea cu standardele legale și siguranța pe drum.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    features: [
      'Pregătire completă pentru ITP',
      'Verificare sistem de frânare',
      'Verificare direcție și geometrie',
      'Verificare emisii poluante (CO, NOx)',
      'Verificare sisteme de siguranță',
      'Verificare iluminat și semnalizare',
      'Verificare suspensie și caroserie',
      'Consultanță pentru conformitate legală',
    ],
    benefits: [
      'Succes garantat la ITP',
      'Siguranță sporită pe drum',
      'Conformitate cu standardele legale',
      'Prevenire amenzilor',
      'Păstrare valoare vehicul',
    ],
    duration: '60-90 minute',
    price: 'De la 100 lei',
  },
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-20">
      <ServiceDetailContent service={service} />
      <CTA />
    </div>
  )
}
