'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Ion Popescu',
    rating: 5,
    text: 'Servicii excelente! Am adus mașina pentru o reparație urgentă și au rezolvat problema rapid și profesional. Recomand cu încredere!',
    location: 'Pitești',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    rating: 5,
    text: 'Echipa foarte profesionistă și prietenoasă. Prețuri corecte și lucrare de calitate. Voi reveni cu siguranță.',
    location: 'Pitești',
  },
  {
    id: 3,
    name: 'Alexandru Georgescu',
    rating: 5,
    text: 'Cel mai bun service din Pitești! Diagnosticare precisă, reparații rapide și garanție pentru lucrările efectuate.',
    location: 'Pitești',
  },
  {
    id: 4,
    name: 'Elena Radu',
    rating: 5,
    text: 'Mulțumită de serviciile oferite. Personalul este foarte atent și explică totul în detaliu. Recomand!',
    location: 'Pitești',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-primary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Suntem mândri de feedback-ul pozitiv al clienților noștri
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-darker rounded-lg p-8 md:p-12 shadow-xl"
          >
            <Quote className="text-accent-red mb-4" size={40} />
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={20}
                />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-200 mb-6 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-400">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-accent-red w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

