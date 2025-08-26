'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function AmabillsCaseStudyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-blue-800/40 shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.min(0.3 + (typeof window !== 'undefined' ? window.scrollY : 0) * 0.001, 0.8)})`,
          backdropFilter: `blur(${Math.min(12 + (typeof window !== 'undefined' ? window.scrollY : 0) * 0.01, 20)}px)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105">
                Clearview Marketing
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/portfolio" className="text-orange-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></span>
                </Link>
                <Link href="/#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/#faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
                Book A Consultation
              </a>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-800/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {!isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-blue-800/40">
              <Link href="/" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Home</Link>
              <Link href="/about" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">About</Link>
              <Link href="/portfolio" className="text-orange-400 block px-3 py-2 text-base font-medium">Portfolio</Link>
              <Link href="/#services" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Services</Link>
              <Link href="/contact" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Contact</Link>
              <Link href="/#faq" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">FAQ</Link>
              <div className="pt-4">
                <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 block text-center">
                  Book A Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="pt-28 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2 bg-white/5 text-gray-200 px-4 py-2 rounded-full text-sm border border-white/10">
            Case Study
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3">
            Amabills Technologies: Digital Transformation Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Our agency partnered with Amabills Technologies, a leading software development company in Nigeria, to establish their digital presence and drive growth across multiple sectors including oil & gas, agriculture, finance, and transportation.
          </p>
        </div>
      </header>

      {/* Project Overview (Hero) */}
      <section className="pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/60 via-gray-900/40 to-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Visual */}
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/0 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                  alt="Amabills Technologies software development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-4">
              Project Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Establishing a leading software development brand in Nigeria's tech ecosystem</h2>
            <p className="text-gray-300 leading-relaxed">
              Amabills Technologies needed to position themselves as the premier ICT solutions provider in Nigeria. We developed a comprehensive digital strategy to showcase their expertise across multiple sectors and attract enterprise clients seeking cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-3">The Challenge</div>
            <h3 className="text-3xl font-semibold">Building credibility in Nigeria's competitive tech landscape</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Limited brand recognition</h4>
              <p className="text-gray-400 text-sm">New company competing against established software development firms in Nigeria's growing tech sector.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Diverse service portfolio</h4>
              <p className="text-gray-400 text-sm">Complex messaging needed to communicate expertise across multiple sectors (oil & gas, agriculture, finance, transportation).</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Enterprise client acquisition</h4>
              <p className="text-gray-400 text-sm">Need to attract high-value B2B clients while building trust in a market where relationships matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/80 via-gray-900/60 to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-3">Our Solution</div>
            <h3 className="text-3xl font-semibold">Strategic content marketing + targeted digital presence</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Strategy */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3">Content Marketing Strategy</h4>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li><span className="text-white/80 font-medium">Sector-specific content:</span> Dedicated content pillars for each industry (oil & gas, agriculture, finance, transportation).</li>
                <li><span className="text-white/80 font-medium">Technical thought leadership:</span> In-depth articles showcasing expertise in modern software development technologies.</li>
                <li><span className="text-white/80 font-medium">Case study development:</span> Detailed project showcases highlighting successful implementations across sectors.</li>
                <li><span className="text-white/80 font-medium">Educational content:</span> Tutorials and guides demonstrating technical capabilities and industry knowledge.</li>
              </ul>
            </div>

            {/* Digital Presence */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3">Digital Presence Optimization</h4>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li><span className="text-white/80 font-medium">Professional website:</span> Modern, responsive design showcasing technical expertise and sector experience.</li>
                <li><span className="text-white/80 font-medium">LinkedIn strategy:</span> B2B-focused content targeting decision-makers in target industries.</li>
                <li><span className="text-white/80 font-medium">SEO optimization:</span> Technical and local SEO to rank for industry-specific keywords in Nigeria.</li>
                <li><span className="text-white/80 font-medium">Client testimonials:</span> Strategic placement of client success stories to build credibility and trust.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-3">The Results</div>
            <h3 className="text-3xl font-semibold">Established market leadership in Nigeria's tech sector</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">+450%</div>
              <div className="text-gray-400 text-xs">Website Traffic</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">23</div>
              <div className="text-gray-400 text-xs">Enterprise Clients</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">+280%</div>
              <div className="text-gray-400 text-xs">Lead Generation</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">4</div>
              <div className="text-gray-400 text-xs">Sectors Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/80 via-gray-900/60 to-black/40">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-xl"></div>
            <blockquote className="relative bg-black/40 border border-white/10 rounded-3xl p-8 text-gray-300">
              <p className="text-lg leading-relaxed">
                "Clearview Marketing helped us establish our brand as a trusted software development partner in Nigeria. Their content strategy and digital presence optimization have been instrumental in attracting enterprise clients across multiple sectors. We've seen remarkable growth in our client base and market recognition."
              </p>
              <footer className="mt-4 text-sm text-white/80">CEO, Amabills Technologies</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Next Steps / CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to establish your tech brand?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">See how we help software companies build credibility and attract enterprise clients, or get a personalized plan for your goals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/portfolio" className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 border border-white/15 text-center">View Portfolio</Link>
            <Link href="/contact" className="bg-transparent border border-white/15 hover:border-white/30 text-white/90 hover:text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 text-center">Start a Project</Link>
          </div>
        </div>
      </section>

      {/* Footer (reuse style) */}
      <footer className="relative z-10 bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/10">
                  <span className="text-white text-sm font-bold">CM</span>
                </div>
                <div className="text-white font-semibold">Clearview Marketing</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Performance-driven digital marketing. We turn attention into measurable growth.
              </p>
              <div className="flex items-center gap-3">
                <a aria-label="Twitter" href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.29 4.29 0 00-7.31 3.91A12.18 12.18 0 013 4.79a4.29 4.29 0 001.33 5.73 4.26 4.26 0 01-1.95-.54v.05a4.29 4.29 0 003.44 4.2c-.47.13-.97.16-1.48.06a4.3 4.3 0 004.01 2.98A8.61 8.61 0 012 19.54 12.15 12.15 0 008.56 21c7.4 0 11.45-6.13 11.45-11.45 0-.17 0-.34-.01-.52A8.18 8.18 0 0022 5.92z"/></svg>
                </a>
                <a aria-label="LinkedIn" href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 6.5A1.94 1.94 0 114 4.56 1.94 1.94 0 016.94 6.5zM4.5 8.25H9v12H4.5zM13.5 8.25h4.2v1.64h.06c.58-1.1 2-2.26 4.11-2.26 4.39 0 5.2 2.89 5.2 6.65v5.97H22.6v-5.29c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.38H13.5z"/></svg>
                </a>
                <a aria-label="Instagram" href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm6-2a1 1 0 110 2 1 1 0 010-2z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="text-white font-semibold mb-4">Explore</div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="text-orange-400 font-medium">Portfolio</Link></li>
                <li><Link href="/#services" className="hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                <li><Link href="/#faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <div className="text-white font-semibold mb-4">Stay Updated</div>
              <p className="text-gray-400 text-sm mb-3">Monthly tips and case studies. No spam.</p>
              <form className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                />
                <button 
                  type="button" 
                  className="px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Clearview Marketing. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
