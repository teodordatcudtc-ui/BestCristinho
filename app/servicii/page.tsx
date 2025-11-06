import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const services = [
  {
    id: 'diagnoza',
    slug: 'diagnoza-auto',
    title: 'Diagnoză Auto',
    icon: 'Gauge',
    description: 'Diagnosticare completă a vehiculului folosind echipamente moderne și tehnologie avansată. Identificăm rapid orice problemă și oferim soluții eficiente.',
    features: [
      'Diagnosticare electronică cu scanere profesionale',
      'Verificare sistem motor și transmisie',
      'Analiză sisteme de siguranță',
      'Raport detaliat cu recomandări',
    ],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  },
  {
    id: 'schimb-ului',
    slug: 'schimb-ului-si-filtre',
    title: 'Schimb Ulei și Filtre',
    icon: 'Wrench',
    description: 'Schimb ulei și filtre cu produse de calitate superioară pentru protecția optimă a motorului. Folosim doar uleiuri și filtre originale sau echivalente.',
    features: [
      'Schimb ulei motor cu produse premium',
      'Schimb filtru ulei, aer și combustibil',
      'Verificare nivel lichide',
      'Consiliere pentru tipul de ulei potrivit',
    ],
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
  },
  {
    id: 'reparatii',
    slug: 'reparatii-mecanice',
    title: 'Reparații Mecanice',
    icon: 'Car',
    description: 'Reparații complete pentru toate sistemele mașinii: motor, transmisie, suspensie, frâne, direcție. Lucrăm pe toate mărcile și modelele de automobile.',
    features: [
      'Reparații motor și transmisie',
      'Reparații suspensie și direcție',
      'Reparații sistem de frânare',
      'Reparații sistem electric și electronic',
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  },
  {
    id: 'verificari',
    slug: 'verificari-tehnice',
    title: 'Verificări Tehnice',
    icon: 'CheckCircle',
    description: 'Verificări tehnice periodice și ITP pentru siguranța și conformitatea vehiculului. Pregătim mașina pentru inspecție tehnică cu succes garantat.',
    features: [
      'Pregătire ITP completă',
      'Verificări tehnice periodice',
      'Verificare emisii poluante',
      'Consultanță pentru conformitate',
    ],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  },
]

export default function Servicii() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-darker text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Serviciile <span className="text-accent-red">Noastre</span>
            </h1>
            <p className="text-xl text-gray-300">
              Oferim o gamă completă de servicii auto profesionale pentru toate nevoile dumneavoastră
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}

