'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Clock, Shield, Wrench, Phone } from 'lucide-react'

interface ServiceDetailContentProps {
  service: {
    title: string
    shortDescription: string
    fullDescription: string
    image: string
    features: string[]
    benefits: string[]
    duration: string
    price: string
  }
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-darker text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/servicii"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Înapoi la servicii
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">
                  Despre acest serviciu
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Ce include serviciul
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="text-accent-red flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Beneficii
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Shield className="text-accent-orange flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-lg p-6 sticky top-24"
              >
                <h3 className="text-2xl font-bold text-primary-dark mb-6">
                  Informații serviciu
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="text-accent-red flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary-dark">Durată</p>
                      <p className="text-gray-600">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Wrench className="text-accent-red flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary-dark">Preț</p>
                      <p className="text-gray-600">{service.price}</p>
                    </div>
                  </div>
                </div>
                <motion.a
                  href="tel:0720011400"
                  className="btn-primary w-full flex items-center justify-center space-x-2 mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  <span>Programează-te</span>
                </motion.a>
                <Link href="/contact">
                  <motion.button
                    className="btn-secondary w-full mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Trimite mesaj
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

