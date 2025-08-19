'use client'

import React from 'react'
import Link from 'next/link'
import { PlugZap } from 'lucide-react'

// ✅ IntegrationBlock reusable component
const IntegrationBlock = ({
  title,
  description,
  code,
  comingSoon = false,
  linkHref,
}: {
  title: string
  description: string
  code: string
  comingSoon?: boolean
  linkHref?: string
}) => {
  return (
    <div
      className={`rounded-xl border ${
        comingSoon ? 'bg-[#0e0e0e] border-gray-800 opacity-60' : 'bg-[#1a1a1a] border-gray-700'
      } p-6`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <pre className="bg-[#111] text-green-400 rounded-md p-4 text-sm whitespace-pre-wrap overflow-auto mb-4">
        {code}
      </pre>

      {!comingSoon && linkHref && (
        <Link href={linkHref} className="text-blue-400 hover:underline text-sm">
          Read Full Docs →
        </Link>
      )}

      {comingSoon && <p className="text-yellow-400 mt-2 text-sm">Coming Soon</p>}
    </div>
  )
}

// ✅ Main Integrate Page
export default function IntegratePage() {
  // Config array
  const integrations = [
    {
      title: '🔌 Website Widget',
      description: 'Copy and paste a single line of code into your website to instantly activate the chat widget.',
      code: `<script src="https://cdn.supportmind.ai/widget.js" data-app-id="YOUR_APP_ID"></script>`,
      linkHref: '/docs/integrate/website',
    },
    {
      title: '⚛️ React SDK',
      description: 'Add the SupportMind chat component into your React app with just a few lines of code.',
      code: `import { SupportMindChat } from '@supportmind/react-sdk';\n\n<SupportMindChat appId="YOUR_APP_ID" />`,
      linkHref: '/docs/integrate/react',
    },
    {
      title: '🌐 REST API',
      description: 'Send/receive messages, user intents, and manage conversations programmatically.',
      code: `POST /api/v1/message\n{\n  "userId": "123",\n  "message": "Hi, I need help"\n}`,
      linkHref: '/docs/integrate/rest-api',
    },
    {
      title: '📱 WhatsApp',
      description: 'Connect your WhatsApp Business using Twilio or 360Dialog.',
      code: `1. Go to Dashboard → Integrations → WhatsApp\n2. Connect Twilio/360Dialog\n3. Map message triggers`,
      linkHref: '/docs/integrate/whatsapp',
    },
    {
      title: '📲 Mobile SDK (Android/iOS)',
      description: 'Coming soon: Native mobile SDKs for Android & iOS (v2.0, July 2025).',
      code: `// Coming Soon — Android/iOS SDK\n// Contact us if you want early access.`,
      comingSoon: true,
    },
    {
      title: '🧩 CRM Integrations',
      description: 'Sync tickets and leads to HubSpot, Zoho, and Freshdesk.',
      code: `// HubSpot + Zoho CRM plugins launching in Q3 2025.`,
      comingSoon: true,
    },
  ]

  return (
    <main className="bg-black text-white px-6 py-12 md:px-16 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          How to Integrate SupportMind AI
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Use these plug-and-play methods to connect SupportMind AI with your product or platform.
        </p>
      </section>

      {/* Integration Blocks */}
      <div className="space-y-16">
        {integrations.map((integration, index) => (
          <IntegrationBlock key={index} {...integration} />
        ))}
      </div>

      {/* CTA */}
      <section className="text-center mt-24">
        <h2 className="text-2xl font-bold mb-3">Need a Custom Integration?</h2>
        <p className="text-gray-400 mb-6">Talk to our dev team to build integrations for your stack or product.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-indigo-500 transition font-medium"
        >
          <PlugZap size={18} /> Contact Us
        </Link>
      </section>
    </main>
  )
}
