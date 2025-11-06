'use client'

import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-accent-red to-accent-orange text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata să începem?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Programează-te acum pentru o consultație gratuită sau contactează-ne direct
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <motion.button
                className="bg-white text-accent-red font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Programează-te</span>
              </motion.button>
            </Link>
            <motion.a
              href="tel:0720011400"
              className="bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 hover:bg-primary-darker transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              <span>0720 011 400</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

