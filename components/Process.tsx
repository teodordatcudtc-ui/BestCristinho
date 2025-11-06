'use client'

import { motion } from 'framer-motion'
import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: '1. Contactează-ne',
    description: 'Sună-ne sau completează formularul pentru a programa o consultație.',
  },
  {
    icon: Calendar,
    title: '2. Programare',
    description: 'Stabilim o dată și oră convenabilă pentru diagnosticarea vehiculului.',
  },
  {
    icon: Wrench,
    title: '3. Reparație',
    description: 'Echipa noastră efectuează lucrările necesare cu profesionalism și atenție.',
  },
  {
    icon: CheckCircle,
    title: '4. Gata!',
    description: 'Vehiculul tău este gata și poți continua să conduci cu încredere.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-darker text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cum Funcționează?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Procesul nostru simplu în 4 pași pentru servicii rapide și eficiente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                  <div className="bg-accent-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-accent-orange" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

