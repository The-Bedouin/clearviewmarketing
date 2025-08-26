'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Navigation Header with better blur effects */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-blue-800/40 shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.min(0.3 + (typeof window !== 'undefined' ? window.scrollY : 0) * 0.001, 0.8)})`,
          backdropFilter: `blur(${Math.min(12 + (typeof window !== 'undefined' ? window.scrollY : 0) * 0.01, 20)}px)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with enhanced hover effects */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105">
                Clearview Marketing
              </Link>
            </div>
            
            {/* Desktop Navigation Links with improved animations */}
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
                <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="text-orange-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></span>
                </Link>
                <Link href="/#faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
            
            {/* Enhanced Desktop CTA Button */}
            <div className="hidden md:block">
              <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
                Book A Consultation
              </a>
            </div>

            {/* Mobile menu button */}
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

        {/* Enhanced Mobile menu with blur effects */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-blue-800/40">
              <Link href="/" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Home</Link>
              <Link href="/about" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">About</Link>
              <Link href="/portfolio" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Portfolio</Link>
              <Link href="/#services" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Services</Link>
              <Link href="/contact" className="text-orange-400 block px-3 py-2 text-base font-medium">Contact</Link>
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

      {/* Hero */}
      <section className="pt-28 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-4 backdrop-blur-sm">
              Get in touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Let's build your next growth chapter.</h1>
            <p className="text-gray-300 text-lg max-w-2xl">Tell us about your goals. We’ll reply within one business day with next steps and a tailored plan.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pt-6 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-4">Contact details</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">📧</span>
                  hello@clearviewmarketing.co
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">📞</span>
                  +44 20 0000 0000
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">📍</span>
                  London, UK (Remote-first)
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://okconsulting.as.me/?appointmentType=59448363" className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium hover:from-orange-600 hover:to-orange-700">Book a call</a>
                <Link href="/portfolio" className="px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/5">View work</Link>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-4">Why work with us?</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Data-driven strategies</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Transparent reporting</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Dedicated account manager</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Proven ROI and case studies</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-500/10 via-gray-600/10 to-gray-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold mb-6">Tell us about your project</h3>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="sm:col-span-1">
                    <label className="block text-sm text-gray-300 mb-2">Full name</label>
                    <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="Jane Doe" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="jane@example.com" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm text-gray-300 mb-2">Company</label>
                    <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="Acme Inc." />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm text-gray-300 mb-2">Budget</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/40">
                      <option className="bg-black">Select budget range</option>
                      <option className="bg-black">Under $1,000</option>
                      <option className="bg-black">$1,000 - $5,000</option>
                      <option className="bg-black">$5,000 - $10,000</option>
                      <option className="bg-black">$10,000+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm text-gray-300 mb-2">How can we help?</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="Tell us about your goals, timelines, and challenges..." />
                  </div>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                    <div className="text-xs text-gray-400">By submitting, you agree to our <a className="text-orange-400 hover:text-orange-300" href="#">Privacy Policy</a>.</div>
                    <button type="button" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-gray-400 text-sm leading-relaxed mb-5">Performance-driven digital marketing. We turn attention into measurable growth.</p>
              <div className="flex items-center gap-3">
                <a aria-label="Twitter" href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.29 4.29 0 00-7.31 3.91A12.18 12.18 0 013 4.79a4.29 4.29 0 001.33 5.73 4.26 4.26 0 01-1.95-.54v.05a4.29 4.29 0 003.44 4.2c-.47.13-.97.16-1.48.06a4.3 4.3 0 004.01 2.98A8.61 8.61 0 012 19.54 12.15 12.15 0 008.56 21c7.4 0 11.45-6.13 11.45-11.45 0-.17 0-.34-.01-.52A8.18 8.18 0 0022 5.92z"/></svg>
                </a>
                <a aria-label="LinkedIn" href="#" className="w-9 h-9 rounded-full bg.white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 6.5A1.94 1.94 0 114 4.56 1.94 1.94 0 016.94 6.5zM4.5 8.25H9v12H4.5zM13.5 8.25h4.2v1.64h.06c.58-1.1 2-2.26 4.11-2.26 4.39 0 5.2 2.89 5.2 6.65v5.97H22.6v-5.29c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.38H13.5z"/></svg>
                </a>
                <a aria-label="Instagram" href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm6-2a1 1 0 110 2 1 1 0 010-2z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <div className="text-white font-semibold mb-4">Explore</div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/#services" className="hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-orange-400 font-medium">Contact</Link></li>
                <li><Link href="/#faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-4">Stay Updated</div>
              <p className="text-gray-400 text-sm mb-3">Monthly tips and case studies. No spam.</p>
              <form className="flex items-center gap-2">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40" />
                <button type="button" className="px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-colors">Subscribe</button>
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

