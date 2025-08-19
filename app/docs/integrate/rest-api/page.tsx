'use client'

import React from 'react'
import Link from 'next/link'
import { Code2 } from 'lucide-react'

export default function RestApiDocsPage() {
  return (
    <main className="bg-black text-white px-6 py-12 md:px-16 max-w-6xl mx-auto">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 text-transparent bg-clip-text">
          REST API Integration
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl">
          Use SupportMind AI’s REST API to programmatically send messages, receive bot replies, and manage sessions.
        </p>
      </section>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">🚀 Quick Start</h2>
        <p className="text-gray-400 mb-4">Here's how to send a message to the AI via HTTP POST:</p>
        <CodeBlock
          code={`POST https://api.supportmind.ai/v1/message

Headers:
  Authorization: Bearer YOUR_API_KEY
  Content-Type: application/json

Body:
{
  "userId": "user_123",
  "message": "I need help with my order"
}`}
        />
      </section>

      {/* Endpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">📘 Endpoints</h2>

        {/* Message Endpoint */}
        <EndpointBlock
          method="POST"
          path="/v1/message"
          description="Send user messages and receive bot responses."
          params={[
            { name: 'userId', type: 'string', required: true, description: 'Unique user identifier' },
            { name: 'message', type: 'string', required: true, description: 'Text message from the user' },
          ]}
        />

        {/* Session Endpoint */}
        <EndpointBlock
          method="GET"
          path="/v1/session/:userId"
          description="Retrieve conversation history for a given user."
          params={[
            { name: 'userId', type: 'string', required: true, description: 'User ID to fetch session' },
          ]}
        />
      </section>

      {/* Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">🔐 Authentication</h2>
        <p className="text-gray-400 mb-4">
          Use your API Key (found in your dashboard) to authenticate every request using the Bearer token header.
        </p>
        <CodeBlock code={`Authorization: Bearer YOUR_API_KEY`} />
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-xl font-bold mb-3">Need help or want to extend the API?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-violet-400 transition font-medium"
        >
          <Code2 size={18} /> Contact Developer Support
        </Link>
      </section>
    </main>
  )
}

// 🧩 CodeBlock Component
const CodeBlock = ({ code }: { code: string }) => (
  <pre className="bg-[#111] text-green-400 rounded-md p-4 text-sm whitespace-pre-wrap overflow-auto">
    {code}
  </pre>
)

// 🧩 EndpointBlock Component
const EndpointBlock = ({
  method,
  path,
  description,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  description: string
  params: { name: string; type: string; required: boolean; description: string }[]
}) => (
  <div className="mb-8 p-4 rounded-md bg-[#1a1a1a] border border-gray-700">
    <h3 className="text-lg font-bold mb-1">
      <span className="text-blue-500">{method}</span> {path}
    </h3>
    <p className="text-gray-400 mb-3">{description}</p>
    <div className="text-sm">
      <p className="text-gray-300 mb-2 font-semibold">Parameters:</p>
      <ul className="space-y-1">
        {params.map((param, index) => (
          <li key={index} className="text-gray-400">
            <code className="text-blue-400">{param.name}</code>{' '}
            <span className="text-yellow-300">({param.type})</span>{' '}
            {param.required && <span className="text-red-400">*</span>} — {param.description}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
