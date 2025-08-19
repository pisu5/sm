'use client'

import { Sparkles, Cpu, ShieldCheck, Bot } from 'lucide-react'

const features = [
  {
    title: 'Intelligent Ticket Routing',
    description: 'Automatically classify and route support queries using AI-driven NLP models.',
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
  },
  {
    title: 'ML-Based Sentiment Analysis',
    description: 'Understand user emotions and prioritize critical support cases in real-time.',
    icon: <Cpu className="w-6 h-6 text-violet-500" />,
  },
  {
    title: 'AI Chat Assistant',
    description: 'Respond instantly with contextual answers using generative AI capabilities.',
    icon: <Bot className="w-6 h-6 text-pink-500" />,
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with multi-layered AI threat detection and encryption.',
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
  },
]

export default function Features() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-[#0f0f0f] via-[#111111] to-[#0c0c0c] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          Built with Deep Intelligence
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          SupportMind AI brings cutting-edge machine learning to elevate your customer support workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-white/10 rounded-xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
