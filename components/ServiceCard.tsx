'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  service: {
    id: string
    slug: string
    title: string
    description: string
    features: string[]
    image: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 bg-white rounded-lg shadow-lg overflow-hidden`}
    >
      <div className="w-full lg:w-1/2 h-64 lg:h-96 relative">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-gray-600 mb-6 flex-grow">
          {service.description}
        </p>
        <ul className="space-y-3 mb-6">
          {service.features.slice(0, 4).map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start space-x-3"
            >
              <Check className="text-accent-red flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
        <Link href={`/servicii/${service.slug}`}>
          <motion.button
            className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Află mai multe</span>
            <ArrowRight size={18} />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

