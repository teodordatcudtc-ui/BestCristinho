'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, DollarSign, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Garanție Completă',
    description: 'Oferim garanție pentru toate lucrările efectuate, asigurându-vă că veți fi mulțumiți de rezultate.',
  },
  {
    icon: Zap,
    title: 'Servicii Rapide',
    description: 'Rezolvăm majoritatea problemelor în aceeași zi, minimizând timpul de așteptare.',
  },
  {
    icon: DollarSign,
    title: 'Prețuri Transparente',
    description: 'Fără surprize neplăcute. Oferim estimări clare și prețuri corecte pentru toate serviciile.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suport 24/7',
    description: 'Echipa noastră este disponibilă pentru consultanță și asistență oricând aveți nevoie.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            De Ce Să Ne Alegeți?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suntem dedicați să oferim cea mai bună experiență posibilă
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-6 text-center card-hover"
              >
                <div className="bg-accent-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent-red" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

