'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { links } from "@/widgets/header/links"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
      <header className="container mx-auto py-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center max-w-[88px] max-h-[88px] overflow-hidden">
          <Image
              src="/logo.svg"
              alt="Kulan IT HUB"
              width={50}
              height={50}
              className="object-contain mb-1"
          />
          <span className="text-sm font-bold truncate">
          Kulan IT HUB
        </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.title}
              </Link>
          ))}
        </nav>

        {/* Burger icon */}
        <button
            onClick={() => setIsOpen(true)}
            className="md:hidden"
            aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>

        {/* Sidebar & overlay */}
        <AnimatePresence>
          {isOpen && (
              <>
                {/* Overlay */}
                <motion.div
                    className="fixed inset-0 bg-black/60 z-40"
                    onClick={closeMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                {/* Sidebar */}
                <motion.aside
                    className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#202020] text-white z-50 shadow-xl flex flex-col p-6"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Close button */}
                  <div className="flex justify-end mb-6">
                    <button onClick={closeMenu} aria-label="Close Menu">
                      <X size={28} />
                    </button>
                  </div>

                  {/* Links */}
                  <nav className="flex flex-col gap-5 text-lg">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="hover:text-primary transition-colors"
                        >
                          {link.title}
                        </Link>
                    ))}
                  </nav>
                </motion.aside>
              </>
          )}
        </AnimatePresence>
      </header>
  )
}
