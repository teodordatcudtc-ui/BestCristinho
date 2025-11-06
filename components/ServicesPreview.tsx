'use client'

import { motion } from 'framer-motion'
import { Wrench, Gauge, Car, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Gauge,
    title: 'Diagnoză Auto',
    description: 'Diagnosticare completă a mașinii folosind echipamente moderne și tehnologie avansată.',
    color: 'text-accent-red',
    slug: 'diagnoza-auto',
  },
  {
    icon: Wrench,
    title: 'Schimb Ulei',
    description: 'Schimb ulei și filtre cu produse de calitate superioară pentru protecția motorului.',
    color: 'text-accent-orange',
    slug: 'schimb-ului-si-filtre',
  },
  {
    icon: Car,
    title: 'Reparații Mecanice',
    description: 'Reparații complete pentru toate sistemele mașinii: motor, transmisie, suspensie.',
    color: 'text-accent-red',
    slug: 'reparatii-mecanice',
  },
  {
    icon: CheckCircle,
    title: 'Verificări Tehnice',
    description: 'Verificări tehnice periodice și ITP pentru siguranța și conformitatea vehiculului.',
    color: 'text-accent-orange',
    slug: 'verificari-tehnice',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferim o gamă completă de servicii auto pentru toate nevoile dumneavoastră
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg p-6 card-hover flex flex-col h-full"
              >
                <div className={`${service.color} mb-4`}>
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link
                  href={`/servicii/${service.slug}`}
                  className="text-accent-red font-medium hover:text-accent-orange transition-colors inline-flex items-center mt-auto"
                >
                  Află mai mult <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/servicii">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vezi toate serviciile
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
