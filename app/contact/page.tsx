'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-darker text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactează-<span className="text-accent-red">ne</span>
            </h1>
            <p className="text-xl text-gray-300">
              Suntem aici să vă ajutăm. Contactați-ne pentru programări sau întrebări
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                Informații de Contact
              </h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-accent-red text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-dark mb-1">
                      Adresă
                    </h3>
                    <p className="text-gray-600">
                      Strada Constantin Dobrogeanu Gherea nr 1<br />
                      Pitești 117045
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="tel:0720011400"
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 block"
                >
                  <div className="bg-accent-red text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-dark mb-1">
                      Telefon
                    </h3>
                    <p className="text-gray-600 hover:text-accent-red transition-colors">
                      0720 011 400
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:contact@bestcristinho.ro"
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 block"
                >
                  <div className="bg-accent-red text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-dark mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 hover:text-accent-red transition-colors">
                      contact@bestcristinho.ro
                    </p>
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="font-semibold text-lg text-primary-dark mb-4">
                  Program
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Luni:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Marți:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Miercuri:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Joi:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Vineri:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sâmbătă:</span>
                    <span className="font-medium">09:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Duminică:</span>
                    <span className="font-medium">Închis</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              Locația Noastră
            </h2>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.9265062493996!2d24.830023176896187!3d44.884144571952824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bbb3fca075f5%3A0x5a65a9c25481d812!2sService%20auto%20Pitesti%20Best%20Cristinho%20SRL!5e0!3m2!1sen!2sro!4v1762424463440!5m2!1sen!2sro"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Locația Service Auto Best Cristinho"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

