'use client'

export default function ReactIntegrationPage() {
  return (
    <main className="bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">⚛️ React Integration</h1>
      <p className="text-gray-400 mb-6">
        Add SupportMind AI chat to your React application using our lightweight SDK.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Installation</h2>
        <pre className="bg-[#111] text-green-400 p-4 rounded-md text-sm overflow-auto">
          npm install @supportmind/react-sdk
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Usage</h2>
        <pre className="bg-[#111] text-green-400 p-4 rounded-md text-sm overflow-auto">
{`import { SupportMindChat } from '@supportmind/react-sdk'

function App() {
  return <SupportMindChat appId="YOUR_APP_ID" />
}`}
        </pre>
      </section>
    </main>
  )
}
