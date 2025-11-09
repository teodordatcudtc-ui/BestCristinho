'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Clock } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Calitate Superioară',
    description: 'Folosim doar piese și materiale de cea mai bună calitate pentru toate reparațiile.',
  },
  {
    icon: Users,
    title: 'Echipă Experiențată',
    description: 'Mecanici cu peste 17 ani de experiență în domeniul auto, certificați și dedicați.',
  },
  {
    icon: Target,
    title: 'Prețuri Corecte',
    description: 'Oferim prețuri transparente și competitive, fără surprize neplăcute.',
  },
  {
    icon: Clock,
    title: 'Rapiditate',
    description: 'Rezolvăm majoritatea problemelor în aceeași zi, respectând termenele stabilite.',
  },
]

export default function DespreNoi() {
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
              Despre <span className="text-accent-red">Noi</span>
            </h1>
            <p className="text-xl text-gray-300">
              Service auto profesional în Pitești, dedicat excelenței și satisfacției clienților
            </p>
          </motion.div>
        </div>
      </section>

      {/* Istoric */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                Istoricul Nostru
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Service Auto Best Cristinho a fost înființat în 2008 cu pasiune pentru automobile și
                  dedicare față de clienți. De peste 17 ani, oferim servicii complete de reparații
                  și întreținere auto în Pitești și împrejurimi.
                </p>
                <p>
                  Am început ca un mic atelier local, dar prin muncă susținută, profesionalism și
                  atenție la detalii, am crescut și am devenit unul dintre cele mai de încredere
                  service-uri auto din regiune.
                </p>
                <p>
                  Astăzi, suntem mândri să oferim servicii de diagnoză auto, schimb ulei, reparații
                  mecanice complete și verificări tehnice, folosind tehnologie modernă și echipamente
                  de ultimă generație.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valori */}
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
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center card-hover"
                >
                  <div className="text-accent-red mb-4 flex justify-center">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Echipa */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-6 text-center">
              Echipa Noastră
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Echipa noastră este formată din mecanici profesioniști, certificați și cu experiență
                vastă în domeniul auto. Fiecare membru al echipei este dedicat să ofere servicii de
                cea mai bună calitate și să asigure satisfacția completă a clienților.
              </p>
              <p>
                Continuăm să ne perfecționăm prin cursuri de specializare și să ne adaptăm la
                tehnologiile moderne din industria auto, pentru a vă oferi cele mai bune soluții
                pentru vehiculul dumneavoastră.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistici */}
      <section className="section-padding bg-gradient-to-br from-accent-red to-accent-orange text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cifre Care Vorbesc
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Rezultatele noastre demonstrează calitatea serviciilor oferite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Ani de Experiență', icon: Clock },
              { number: '5000+', label: 'Clienți Mulțumiți', icon: Users },
              { number: '15+', label: 'Mecanici Specializați', icon: Award },
              { number: '98%', label: 'Rata de Satisfacție', icon: Target },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8"
                >
                  <div className="mb-4 flex justify-center">
                    <Icon size={48} />
                  </div>
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-white/90">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Misiune și Viziune */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-3xl font-bold text-primary-dark mb-4">
                Misiunea Noastră
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Să oferim servicii auto de cea mai înaltă calitate, folosind tehnologie modernă și
                experiență vastă, pentru a menține vehiculele clienților noștri în condiții optime
                de funcționare.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ne angajăm să oferim transparență totală, prețuri corecte și servicii rapide, punând
                siguranța și satisfacția clienților pe primul loc.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-3xl font-bold text-primary-dark mb-4">
                Viziunea Noastră
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Să devenim cel mai de încredere service auto din regiune, recunoscut pentru
                excelență, inovație și angajament față de clienți.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vrem să construim relații pe termen lung cu clienții noștri, bazate pe încredere,
                profesionalism și rezultate de calitate superioară.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

