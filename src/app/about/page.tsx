'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      {/* Enhanced Navigation Header with better blur effects */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-blue-800/40 shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.min(0.3 + scrollPosition * 0.001, 0.8)})`,
          backdropFilter: `blur(${Math.min(12 + scrollPosition * 0.01, 20)}px)`
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
                <Link href="/about" className="text-orange-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></span>
                </Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
              <Link href="/about" className="text-orange-400 block px-3 py-2 text-base font-medium">About</Link>
              <Link href="/portfolio" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Portfolio</Link>
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

      

      {/* Intro Section (formerly Our Story) */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm">
                About Clearview Marketing
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                We build{' '}
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">transparent, data‑driven growth</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We’re a team of strategists, designers, and marketers who believe great marketing should be
                both beautiful and measurable. No fluff—just performance you can see.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Every strategy we create and campaign we run is backed by data and aligned to your business
                goals, so you know exactly what’s working and why.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-orange-400 mb-1">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              What Drives{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Everything We Do
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These core principles guide every decision we make and every strategy we create.
            </p>
          </div>

                     {/* Values List (modern, no cards) */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Transparency */}
            <div className="relative group pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-white/10 rounded-full transition-colors group-hover:bg-orange-500/60"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ring-1 ring-white/5">
                  <svg className="w-6 h-6 text-white/90 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Transparency</h3>
                  <p className="text-gray-300 leading-relaxed mt-2">We believe in complete transparency. You'll always know exactly what we're doing, why we're doing it, and how it's performing.</p>
                  <div className="mt-4 h-px bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Data-Driven */}
            <div className="relative group pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-white/10 rounded-full transition-colors group-hover:bg-orange-500/60"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ring-1 ring-white/5">
                  <svg className="w-6 h-6 text-white/90 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Data-Driven</h3>
                  <p className="text-gray-300 leading-relaxed mt-2">Every decision we make is backed by data. We analyze, optimize, and iterate based on real performance metrics.</p>
                  <div className="mt-4 h-px bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Results-Focused */}
            <div className="relative group pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-white/10 rounded-full transition-colors group-hover:bg-orange-500/60"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ring-1 ring-white/5">
                  <svg className="w-6 h-6 text-white/90 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Results-Focused</h3>
                  <p className="text-gray-300 leading-relaxed mt-2">We build campaigns that drive measurable business results and ROI, not just beautiful visuals.</p>
                  <div className="mt-4 h-px bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="relative group pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-white/10 rounded-full transition-colors group-hover:bg-orange-500/60"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ring-1 ring-white/5">
                  <svg className="w-6 h-6 text-white/90 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Partnership</h3>
                  <p className="text-gray-300 leading-relaxed mt-2">We work as an extension of your team. Your goals become ours, and we win together.</p>
                  <div className="mt-4 h-px bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Innovation */}
            <div className="relative group pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-white/10 rounded-full transition-colors group-hover:bg-orange-500/60"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ring-1 ring-white/5">
                  <svg className="w-6 h-6 text-white/90 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h5a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h5zM9 4v1h6V4H9z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Innovation</h3>
                  <p className="text-gray-300 leading-relaxed mt-2">We stay ahead of the curve, constantly learning and adapting to new technologies and trends.</p>
                  <div className="mt-4 h-px bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Reliability */}
            <div className="relative group pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-white/10 rounded-full transition-colors group-hover:bg-orange-500/60"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ring-1 ring-white/5">
                  <svg className="w-6 h-6 text-white/90 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Reliability</h3>
                  <p className="text-gray-300 leading-relaxed mt-2">Count on us to deliver, communicate proactively, and be there when you need us.</p>
                  <div className="mt-4 h-px bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm">
              Meet Our Founder
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Leading With Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Clearview Marketing is led by a founder who blends strategy, creativity, and performance to drive measurable growth.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Founder Image */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/20">
                    <span className="text-white text-4xl font-bold">SM</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Founder Content */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Sarah Mitchell</h3>
                    <p className="text-orange-400 font-medium">Founder & CEO</p>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Sarah founded Clearview Marketing with a vision to bring transparency and measurable results to digital growth. 
                    With over 8 years in performance marketing, she's helped hundreds of businesses scale through data-driven strategies.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">8+ Years</p>
                          <p className="text-gray-400 text-sm">Performance Marketing</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">200+ Campaigns</p>
                          <p className="text-gray-400 text-sm">Successfully Launched</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">ROI Focused</p>
                          <p className="text-gray-400 text-sm">Transparent Results</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">Speaker & Mentor</p>
                          <p className="text-gray-400 text-sm">Startup Community</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.94 6.5A1.94 1.94 0 114 4.56 1.94 1.94 0 016.94 6.5zM4.5 8.25H9v12H4.5zM13.5 8.25h4.2v1.64h.06c.58-1.1 2-2.26 4.11-2.26 4.39 0 5.2 2.89 5.2 6.65v5.97H22.6v-5.29c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.38H13.5z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      Read Founder Story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Enhanced background effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-500/10 via-gray-600/10 to-gray-500/10 rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-lg"></div>
              
              <div className="relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Work with{' '}
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Our Team?
                  </span>
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how our team can help transform your digital presence and drive real business growth.
                </p>
                
                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-gray-400 text-sm">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free Consultation
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No Obligation
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Results Guaranteed
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://okconsulting.as.me/?appointmentType=59448363" 
                    className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Schedule a Call
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <Link 
                    href="/portfolio" 
                    className="group px-8 py-4 border border-white/20 hover:border-orange-400 text-white hover:text-orange-300 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      View Our Work
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            {/* Brand + socials */}
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
                <li><Link href="/about" className="text-orange-400 font-medium">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/#services" className="hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                <li><Link href="/#faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Newsletter (compact) */}
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

          {/* Bottom bar */}
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
