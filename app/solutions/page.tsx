'use client'

import React from 'react'
import Link from 'next/link'

const solutions = [
  {
    title: 'E-Commerce Support',
    desc: 'Automate customer queries, order status, returns, and product recommendations using AI agents.',
    icon: '🛍️',
    href: '/solutions/ecommerce',
    status: 'live',
  },
  {
    title: 'SaaS Customer Success',
    desc: '24/7 onboarding, troubleshooting, and renewals through intelligent chatflows trained on your docs.',
    icon: '💻',
    href: '/solutions/saas',
    status: 'live',
  },
  {
    title: 'EdTech & Student Helpdesk',
    desc: 'Guide students through course content, deadlines, and FAQs using AI teaching assistants.',
    icon: '🎓',
    href: '/solutions/edtech',
    status: 'live',
  },
  {
    title: 'HR & Internal Helpdesk',
    desc: 'Answer employees’ queries around leave policy, benefits, onboarding, and internal tools.',
    icon: '🏢',
    href: '/solutions/hr',
    status: 'hidden', // for MVP
  },
  {
    title: 'Healthcare Assistant',
    desc: 'Provide patients with appointment info, medication reminders, and health FAQs.',
    icon: '🩺',
    href: '/solutions/healthcare',
    status: 'hidden',
  },
  {
    title: 'Govt/Public Service AI',
    desc: 'Simplify public grievance redressal, document status, and citizen queries.',
    icon: '🏛️',
    href: '/solutions/govt',
    status: 'hidden',
  },
]

export default function SolutionsPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Solutions powered by AI Agents
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          SupportMind AI is built to serve diverse industries with automation, intelligence, and empathy.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((sol) =>
          sol.status === 'live' ? (
            <Link key={sol.title} href={sol.href} className="bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-xl p-6 shadow-lg transition group">
              <div className="text-4xl mb-4">{sol.icon}</div>
              <h2 className="text-xl font-semibold group-hover:text-pink-400 transition">{sol.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{sol.desc}</p>
            </Link>
          ) : null
        )}
      </section>

      {/* Coming Soon */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold mb-6 text-pink-500">Coming Soon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 pointer-events-none select-none">
          {solutions
            .filter((s) => s.status === 'hidden')
            .map((sol) => (
              <div key={sol.title} className="bg-[#111] rounded-xl p-6 shadow-md border border-gray-800">
                <div className="text-4xl mb-4">{sol.icon}</div>
                <h2 className="text-lg font-semibold">{sol.title}</h2>
                <p className="text-gray-500 text-sm mt-2">{sol.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h3 className="text-3xl font-bold mb-4">Have a use-case in mind?</h3>
        <p className="text-gray-400 mb-6">Let’s work together and build custom AI support for your business.</p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-indigo-500 transition font-medium"
        >
          Talk to Us
        </Link>
      </section>
    </main>
  )
}
