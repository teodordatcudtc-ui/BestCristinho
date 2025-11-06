'use client'

import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigare: [
      { href: '/', label: 'Acasă' },
      { href: '/despre-noi', label: 'Despre noi' },
      { href: '/servicii', label: 'Servicii' },
      { href: '/contact', label: 'Contact' },
    ],
    servicii: [
      { href: '/servicii#diagnoza', label: 'Diagnoză Auto' },
      { href: '/servicii#schimb-ului', label: 'Schimb Ulei' },
      { href: '/servicii#reparatii', label: 'Reparații Mecanice' },
      { href: '/servicii#verificari', label: 'Verificări Tehnice' },
    ],
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Despre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">
              <span className="text-accent-red">Best</span> Cristinho
            </h3>
            <p className="text-gray-400 mb-4">
              Service auto profesional în Pitești, oferind servicii complete de reparații și întreținere auto de peste 10 ani.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-darker rounded-full flex items-center justify-center hover:bg-accent-red transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-darker rounded-full flex items-center justify-center hover:bg-accent-red transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigare */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2">
              {footerLinks.navigare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Servicii */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              {footerLinks.servicii.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent-red mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  Strada Constantin Dobrogeanu Gherea nr 1<br />
                  Pitești 117045
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent-red flex-shrink-0" size={20} />
                <a
                  href="tel:0720011400"
                  className="text-gray-400 hover:text-accent-orange transition-colors"
                >
                  0720 011 400
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent-red flex-shrink-0" size={20} />
                <a
                  href="mailto:contact@bestcristinho.ro"
                  className="text-gray-400 hover:text-accent-orange transition-colors"
                >
                  contact@bestcristinho.ro
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Service Auto Best Cristinho. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

