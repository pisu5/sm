'use client'

import React from 'react'
import Link from 'next/link'
import { Code, ExternalLink } from 'lucide-react'

export default function WebsiteWidgetPage() {
  return (
    <main className="bg-black text-white px-6 py-12 md:px-16 max-w-5xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Website Widget Integration
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl">
          Add SupportMind AI to your website in seconds by pasting one line of code. No framework or backend required.
        </p>
      </section>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🚀 Quick Install</h2>
        <p className="text-gray-300 mb-2">Copy and paste the following code just before your <code className="text-green-400">&lt;/body&gt;</code> tag:</p>
        <CodeBlock
          code={`<script src="https://cdn.supportmind.ai/widget.js" data-app-id="YOUR_APP_ID"></script>`}
        />
        <p className="text-gray-500 mt-2 text-sm">Replace <code>YOUR_APP_ID</code> with your unique SupportMind App ID.</p>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 How It Works</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>The script renders a floating chat bubble on your site.</li>
          <li>When a visitor clicks it, a chat box opens with AI support.</li>
          <li>User messages are sent to our backend via <code>/api/sendMessage</code>.</li>
          <li>The backend returns an AI-generated response (OpenAI/Gemini).</li>
          <li>Everything happens in real-time. No page reloads needed.</li>
        </ul>
      </section>

      {/* Customization */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎨 Customization Options</h2>
        <p className="text-gray-300 mb-3">You can customize the widget appearance via data attributes:</p>
        <CodeBlock
          code={`<script
  src="https://cdn.supportmind.ai/widget.js"
  data-app-id="YOUR_APP_ID"
  data-color="#4f46e5"
  data-position="bottom-right"
  data-greeting="Hi there! How can I help?"
></script>`}
        />
        <ul className="list-disc ml-6 space-y-1 text-gray-400 text-sm mt-3">
          <li><strong>data-color</strong>: Chat bubble color (hex/rgb)</li>
          <li><strong>data-position</strong>: "bottom-right" or "bottom-left"</li>
          <li><strong>data-greeting</strong>: Custom welcome message</li>
        </ul>
      </section>

      {/* Message Format */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📤 Message Handling</h2>
        <p className="text-gray-300 mb-2">Messages are sent as JSON payloads to your backend:</p>
        <CodeBlock
          code={`POST /api/sendMessage
Content-Type: application/json

{
  "appId": "YOUR_APP_ID",
  "message": "Hello, I need help!"
}`}
        />
        <p className="text-gray-500 text-sm mt-2">The backend should return a JSON reply: <code>{`{ "reply": "Here to help you!" }`}</code></p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">❓ Common Questions</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>Q: Can I use this in WordPress?</strong><br />
            A: Yes! Just paste the script in your theme footer.
          </li>
          <li>
            <strong>Q: Can I disable the widget temporarily?</strong><br />
            A: Yes, just remove or comment out the script tag.
          </li>
          <li>
            <strong>Q: Can I change the AI model?</strong><br />
            A: Yes, inside your admin dashboard → AI Settings.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-400 mb-4">Need help or want to embed custom behavior?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-indigo-500 transition font-medium"
        >
          <ExternalLink size={18} /> Contact Our Team
        </Link>
      </section>
    </main>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-[#111] text-green-400 rounded-md p-4 text-sm whitespace-pre-wrap overflow-auto">
      {code}
    </pre>
  )
}
