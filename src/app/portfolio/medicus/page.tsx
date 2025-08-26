'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MedicusCaseStudyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-blue-800/40 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300">
                Clearview Marketing
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300">About</Link>
                <Link href="/portfolio" className="text-orange-400 px-3 py-2 text-sm font-medium">Portfolio</Link>
                <Link href="/#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300">Contact</Link>
                <Link href="/#faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300">FAQ</Link>
              </div>
            </div>

            <div className="hidden md:block">
              <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300">
                Book A Consultation
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-300 hover:text-white">
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-blue-800/40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400">Home</Link>
              <Link href="/about" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400">About</Link>
              <Link href="/portfolio" className="text-orange-400 block px-3 py-2 text-base font-medium">Portfolio</Link>
              <Link href="/#services" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400">Services</Link>
              <Link href="/contact" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400">Contact</Link>
              <Link href="/#faq" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400">FAQ</Link>
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
            Medicus: Health & Beauty Care Excellence
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Our agency partnered with Medicus Industries Limited, a trusted leader in health and beauty care since 1987, to modernize their visual identity and establish a compelling digital presence across Nigeria.
          </p>
        </div>
      </header>

      {/* Project Overview */}
      <section className="pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/60 via-gray-900/40 to-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/0 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
                  alt="Medicus beauty and health care products"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-4">
              Project Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Elevating a legacy brand through modern design and digital presence</h2>
            <p className="text-gray-300 leading-relaxed">
              Medicus sought to refresh their visual identity and expand their digital footprint to reach new markets across Nigeria. We developed a comprehensive brand system, modernized their product packaging, and created engaging digital content that celebrates their heritage while positioning them for future growth.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-3">The Challenge</div>
            <h3 className="text-3xl font-semibold">Modernizing a heritage brand for digital-first consumers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Outdated visual identity</h4>
              <p className="text-gray-400 text-sm">Brand assets and packaging design needed modernization to appeal to younger demographics.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Limited digital presence</h4>
              <p className="text-gray-400 text-sm">No cohesive digital strategy to showcase products and engage with customers online.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">Market expansion needs</h4>
              <p className="text-gray-400 text-sm">Required visual tools to support rapid expansion across Nigeria's diverse regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/80 via-gray-900/60 to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10 mb-3">Our Solution</div>
            <h3 className="text-3xl font-semibold">A comprehensive visual system and digital strategy</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3">Graphics & Branding</h4>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li><span className="text-white/80 font-medium">Brand refresh:</span> Modernized logo and visual identity while preserving heritage elements.</li>
                <li><span className="text-white/80 font-medium">Product packaging:</span> Redesigned Habiba® baby jelly packaging with contemporary aesthetics.</li>
                <li><span className="text-white/80 font-medium">Color system:</span> Developed a cohesive palette reflecting health, beauty, and trust.</li>
                <li><span className="text-white/80 font-medium">Typography:</span> Selected fonts that balance professionalism with approachability.</li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3">Digital Presence</h4>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li><span className="text-white/80 font-medium">Social media strategy:</span> Content calendar showcasing product benefits and lifestyle integration.</li>
                <li><span className="text-white/80 font-medium">Visual content:</span> Professional product photography and lifestyle imagery.</li>
                <li><span className="text-white/80 font-medium">Digital assets:</span> Consistent templates for social media, web, and marketing materials.</li>
                <li><span className="text-white/80 font-medium">Brand guidelines:</span> Comprehensive style guide for internal and external use.</li>
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
            <h3 className="text-3xl font-semibold">Enhanced brand perception and market reach</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">+180%</div>
              <div className="text-gray-400 text-xs">Social Engagement</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">+65%</div>
              <div className="text-gray-400 text-xs">Brand Recognition</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">+42%</div>
              <div className="text-gray-400 text-xs">Market Expansion</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">+89%</div>
              <div className="text-gray-400 text-xs">Digital Reach</div>
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
                "Clearview transformed our brand identity while honoring our 35-year heritage. Their design work and digital strategy have been instrumental in our expansion across Nigeria."
              </p>
              <footer className="mt-4 text-sm text-white/80">Marketing Director, Medicus Industries Limited</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Explore more results or start your project</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">See how we elevate brands through design and digital presence, or get a personalized plan for your goals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/portfolio" className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 border border-white/15 text-center">View Portfolio</Link>
            <Link href="/contact" className="bg-transparent border border-white/15 hover:border-white/30 text-white/90 hover:text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 text-center">Start a Project</Link>
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
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Performance-driven digital marketing. We turn attention into measurable growth.
              </p>
            </div>

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
