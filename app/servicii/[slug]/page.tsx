import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ServiceDetailContent from '@/components/ServiceDetailContent'
import CTA from '@/components/CTA'

const servicesData: Record<string, any> = {
  'mecanica-usoara-intretinere': {
    title: 'Mecanică Ușoară și Întreținere',
    shortDescription: 'Servicii complete de întreținere și reparații ușoare pentru menținerea vehiculului în stare optimă.',
    fullDescription: 'Oferim servicii profesionale de mecanică ușoară și întreținere pentru toate tipurile de vehicule. Echipa noastră de specialiști efectuează lucrări de calitate folosind piese și materiale de cea mai bună calitate, asigurându-vă că vehiculul dumneavoastră rămâne în stare optimă de funcționare.',
    image: '/images/mecanica-usoara.jpg',
    features: [
      'Schimb ulei și filtre cu produse premium',
      'Înlocuire plăcuțe și discuri de frână',
      'Reglaje și verificări generale',
      'Verificare nivel lichide (răcire, frână, direcție)',
      'Verificare sistem de iluminat',
      'Verificare sistem de suspensie',
      'Consiliere pentru întreținere preventivă',
    ],
    benefits: [
      'Prelungire durată de viață a vehiculului',
      'Siguranță sporită pe drum',
      'Reducere consum combustibil',
      'Prevenire defecțiuni costisitoare',
      'Menținere valoare vehicul',
    ],
    duration: 'Variabil (în funcție de serviciu)',
    price: '200 lei/oră + TVA',
  },
  'reparatii-motoare': {
    title: 'Reparații Motoare',
    shortDescription: 'Reparații complete pentru motoare, de la lucrări standard la reparații complexe.',
    fullDescription: 'Echipa noastră de mecanici specializați oferă servicii complete de reparații motoare pentru toate mărcile și modelele de automobile. Lucrăm atât pe lucrări standard, cât și pe reparații complexe, folosind tehnologie modernă și piese de calitate garantate.',
    image: '/images/reparatii-motoare.jpg',
    features: [
      'Înlocuire motoare complete',
      'Segmentare motoare',
      'Reparații componente interne (pistoane, biele, chiulasa)',
      'Reparații sistem de distribuție',
      'Reparații sistem de răcire',
      'Reparații sistem de admisie și evacuare',
      'Diagnosticare completă înainte de reparație',
    ],
    benefits: [
      'Experiență vastă pe toate mărcile',
      'Piese de calitate garantate',
      'Garanție pentru toate lucrările',
      'Diagnosticare precisă',
      'Prețuri transparente',
    ],
    duration: 'Variabil (evaluare în service)',
    price: '200 lei/oră + TVA (lucrări standard), evaluare pentru reparații complexe',
  },
  'sistem-electric-electronic': {
    title: 'Sistem Electric și Electronic',
    shortDescription: 'Diagnosticare și reparații pentru toate sistemele electrice și electronice ale vehiculului.',
    fullDescription: 'Oferim servicii complete de diagnosticare și reparații pentru toate sistemele electrice și electronice ale vehiculului. Folosim echipamente moderne de diagnosticare computerizată pentru a identifica rapid orice problemă și a oferi soluții eficiente.',
    image: '/images/sistem-electric.jpg',
    features: [
      'Diagnosticare computerizată cu echipamente profesionale',
      'Înlocuire baterii, alternatoare, demaroare',
      'Reparații sisteme electrice',
      'Reparații sisteme electronice (ECU, senzori)',
      'Reparații sistem de iluminat',
      'Reparații sistem de climatizare',
      'Reparații sisteme de siguranță (ABS, ESP, Airbag)',
    ],
    benefits: [
      'Diagnosticare precisă și rapidă',
      'Echipamente moderne și profesionale',
      'Reparații eficiente și durabile',
      'Garanție pentru toate lucrările',
      'Consiliere profesională',
    ],
    duration: 'Variabil (evaluare în service pentru diagnoză și reparații complexe)',
    price: '200 lei/oră + TVA (lucrări standard), evaluare pentru diagnoză și reparații complexe',
  },
  'tinichigerie-vopsitorie': {
    title: 'Tinichigerie și Vopsitorie',
    shortDescription: 'Servicii complete de reparație caroserie, vopsire și restaurări estetice.',
    fullDescription: 'Oferim servicii profesionale de tinichigerie și vopsitorie pentru a restabili aspectul original al vehiculului dumneavoastră. Echipa noastră de specialiști lucrează cu atenție la detalii pentru a obține rezultate de calitate superioară.',
    image: '/images/tinichigerie.jpg',
    features: [
      'Repararea caroseriei (indoițuri, zgârieturi, lovituri)',
      'Vopsire și retușuri profesionale',
      'Restaurări estetice complete',
      'Pregătire suprafață pentru vopsire',
      'Aplicare vopsea originală sau echivalentă',
      'Lacare și protecție finală',
      'Consiliere pentru opțiuni de reparație',
    ],
    benefits: [
      'Restaurare aspect original',
      'Protecție împotriva coroziunii',
      'Menținere valoare vehicul',
      'Rezultate profesionale',
      'Garanție pentru lucrări efectuate',
    ],
    duration: 'Variabil (evaluare în service)',
    price: 'Evaluare în service',
  },
  'alte-servicii-specializate': {
    title: 'Alte Servicii Specializate',
    shortDescription: 'Servicii personalizate și specializate conform nevoilor specifice ale vehiculului dumneavoastră.',
    fullDescription: 'Oferim servicii specializate și personalizate pentru nevoile specifice ale fiecărui vehicul. Echipa noastră de experți poate aborda orice provocare tehnică, oferind soluții adaptate pentru fiecare situație particulară.',
    image: '/images/alte-servicii.jpg',
    features: [
      'Schimb ambreiaje și transmisii',
      'Servicii pentru suspensie și direcție',
      'Alte lucrări personalizate conform solicitării',
      'Reparații transmisie manuală și automată',
      'Reparații sistem de direcție',
      'Reparații suspensie și amortizoare',
      'Consultanță tehnică specializată',
    ],
    benefits: [
      'Soluții personalizate',
      'Experiență vastă în domeniu',
      'Atenție la detalii',
      'Calitate garantată',
      'Flexibilitate în abordare',
    ],
    duration: 'Variabil (evaluare în service)',
    price: 'Evaluare în service',
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
