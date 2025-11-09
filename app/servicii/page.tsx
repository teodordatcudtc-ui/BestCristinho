import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const services = [
  {
    id: 'mecanica-usoara',
    slug: 'mecanica-usoara-intretinere',
    title: 'Mecanică Ușoară și Întreținere',
    icon: 'Wrench',
    description: 'Servicii complete de întreținere și reparații ușoare pentru menținerea vehiculului în stare optimă. Preț: 200 lei/oră + TVA.',
    features: [
      'Schimb ulei și filtre',
      'Înlocuire plăcuțe și discuri de frână',
      'Reglaje și verificări generale',
    ],
    image: '/images/mecanica-usoara.jpg',
  },
  {
    id: 'reparatii-motoare',
    slug: 'reparatii-motoare',
    title: 'Reparații Motoare',
    icon: 'Car',
    description: 'Reparații complete pentru motoare, de la lucrări standard la reparații complexe. Preț: 200 lei/oră + TVA pentru lucrări standard.',
    features: [
      'Înlocuire motoare',
      'Segmentare motoare',
      'Reparații componente interne',
    ],
    image: '/images/reparatii-motoare.jpg',
  },
  {
    id: 'sistem-electric',
    slug: 'sistem-electric-electronic',
    title: 'Sistem Electric și Electronic',
    icon: 'Gauge',
    description: 'Diagnosticare și reparații pentru toate sistemele electrice și electronice ale vehiculului. Preț: 200 lei/oră + TVA pentru lucrări standard.',
    features: [
      'Diagnosticare computerizată',
      'Înlocuire baterii, alternatoare, demaroare',
      'Reparații sisteme electrice',
    ],
    image: '/images/sistem-electric.jpg',
  },
  {
    id: 'tinichigerie',
    slug: 'tinichigerie-vopsitorie',
    title: 'Tinichigerie și Vopsitorie',
    icon: 'CheckCircle',
    description: 'Servicii complete de reparație caroserie, vopsire și restaurări estetice pentru a-ți restabili aspectul original al vehiculului.',
    features: [
      'Repararea caroseriei',
      'Vopsire și retușuri',
      'Restaurări estetice',
    ],
    image: '/images/tinichigerie.jpg',
  },
  {
    id: 'alte-servicii',
    slug: 'alte-servicii-specializate',
    title: 'Alte Servicii Specializate',
    icon: 'Wrench',
    description: 'Servicii personalizate și specializate conform nevoilor specifice ale vehiculului dumneavoastră.',
    features: [
      'Schimb ambreiaje și transmisii',
      'Servicii pentru suspensie și direcție',
      'Alte lucrări personalizate conform solicitării',
    ],
    image: '/images/alte-servicii.jpg',
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
