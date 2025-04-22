'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const Hero = () => {
  return (
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
        >
          <div className="flex justify-center mb-6">
            <Image src="/logo.svg" alt="Kulan IT HUB" width={80} height={80} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Добро пожаловать в <span className="text-primary">Kulan IT HUB</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Платформа, где встречаются айтишники, клавагонщики, мемчики и друзья
          </p>
        </motion.div>
      </section>
  )
}
