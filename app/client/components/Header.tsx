'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react' // Import Menu and Close icons

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="backdrop-blur-md bg-[#0f0f0fa0] border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            SupportMind
          </span>
          <span className="text-white">AI</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`md:flex gap-8 text-sm font-medium text-gray-300 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/docs/integrate/widgets" className="hover:text-white transition">Integrations</Link>
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/api" className="hover:text-white transition">API</Link>
          <Link href="/docs" className="hover:text-white transition">Docs</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/get-started"
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-indigo-400 transition font-semibold text-sm"
          >
            Launch App
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
