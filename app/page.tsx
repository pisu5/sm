'use client';

import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

// Lazy-load heavy icons
const Brain = dynamic(() => import('lucide-react').then(mod => mod.Brain), { ssr: false });
const Zap = dynamic(() => import('lucide-react').then(mod => mod.Zap), { ssr: false });
const MessageCircle = dynamic(() => import('lucide-react').then(mod => mod.MessageCircle), { ssr: false });
const Scale = dynamic(() => import('lucide-react').then(mod => mod.Scale), { ssr: false });
const BarChart = dynamic(() => import('lucide-react').then(mod => mod.BarChart), { ssr: false });
const Gem = dynamic(() => import('lucide-react').then(mod => mod.Gem), { ssr: false });

const FeatureCard = memo(({ Icon, title, description }: { Icon: any; title: string; description: string }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-600 transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="text-indigo-400 mb-4 flex justify-center">
      <Icon className="w-12 h-12 group-hover:animate-bounce-subtle" />
    </div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
));

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 text-gray-100 font-inter">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 p-6">
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
          <div className="text-2xl font-bold text-indigo-400 tracking-wide">SupportMind<span className="text-gray-500">.AI</span></div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-300 hover:text-indigo-400 transition duration-300">Features</a>
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition duration-300">About Us</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">Contact</a>
            <a href="#" className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
              Sign In
            </a>
          </div>
          <button className="md:hidden text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-0 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-400 to-purple-500 animate-gradient-text">
            Intelligent Support, <br className="hidden sm:inline" />Effortless Solutions.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Leverage the power of AI to transform your company's user support. Instant answers, smart resolutions, and seamless experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group">
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium flex items-center space-x-2">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-400">Features Designed for the Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard Icon={Brain} title="Intelligent Understanding" description="Our AI comprehends complex queries, extracting intent and context to provide accurate, relevant support." />
            <FeatureCard Icon={Zap} title="Instant Resolution" description="Automate common issues and FAQs, delivering immediate solutions to your users 24/7." />
            <FeatureCard Icon={MessageCircle} title="Seamless Integration" description="Easily integrate with your existing platforms and workflows, enhancing your current support ecosystem." />
            <FeatureCard Icon={Scale} title="Scalable Performance" description="Handle unlimited support requests without compromising on quality or speed, even during peak times." />
            <FeatureCard Icon={BarChart} title="Actionable Analytics" description="Gain deep insights into user needs and support trends to continuously improve your service." />
            <FeatureCard Icon={Gem} title="Personalized Experiences" description="Deliver tailored support, remembering user history and preferences for a truly personalized touch." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-900 to-indigo-900 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Transform Your Support?</h2>
          <p className="text-lg md:text-xl text-indigo-200 mb-10 leading-relaxed">
            Join companies leveraging SupportMind.AI to provide unparalleled support and unlock new levels of efficiency.
          </p>
          <div className="flex justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-sky-400 to-blue-500 text-gray-900 font-extrabold rounded-full shadow-2xl hover:shadow-sky-500/50 transform hover:scale-105 transition-all duration-500 flex items-center space-x-3 group">
              <span>Try SupportMind.AI Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 px-4 text-center text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold text-indigo-400">SupportMind.AI</div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-300">Sitemap</a>
          </div>
          <div>&copy; {new Date().getFullYear()} SupportMind.AI. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
};

export default memo(App);
