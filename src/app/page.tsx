'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import ShinyText from "../components/ShinyText";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [showBottomBlur, setShowBottomBlur] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    setIsHydrated(true);
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show blur when scrolling and not at the very bottom
      const isScrolling = scrollTop > 50; // Started scrolling
      const notAtBottom = scrollTop + windowHeight < documentHeight - 100; // Not at bottom
      
      setShowBottomBlur(isScrolling && notAtBottom);
      setScrollY(scrollTop);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize values on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed mobile carousel handlers in favor of ScrollStack vert experience

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Floating Blue Gradient Components */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating gradient blobs with improved positioning */}
        <div 
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/3 -right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-600/25 to-blue-400/15 rounded-full blur-3xl animate-pulse" 
          style={{
            animationDelay: '2s',
            animationDuration: '6s',
            transform: `translateY(${scrollY * -0.05}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-blue-500/10 rounded-full blur-3xl animate-pulse" 
          style={{
            animationDelay: '4s',
            animationDuration: '5s',
            transform: `translateY(${scrollY * 0.08}px)`
          }}
        ></div>
        
        {/* Additional smaller floating elements for more depth */}
        <div 
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/40 to-blue-400/30 rounded-full blur-2xl animate-bounce" 
          style={{
            animationDelay: '1s',
            animationDuration: '3s',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-l from-blue-600/35 to-blue-500/25 rounded-full blur-2xl animate-bounce" 
          style={{
            animationDelay: '3s',
            animationDuration: '4s',
            transform: `translateY(${scrollY * -0.12}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-blue-600/20 rounded-full blur-2xl animate-bounce" 
          style={{
            animationDelay: '5s',
            animationDuration: '3.5s',
            transform: `translateY(${scrollY * 0.06}px)`
          }}
        ></div>
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      </div>

      {/* Enhanced Navigation Header with better blur effects */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-blue-800/40 shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.min(0.3 + scrollY * 0.001, 0.8)})`,
          backdropFilter: `blur(${Math.min(12 + scrollY * 0.01, 20)}px)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with enhanced hover effects */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105">
                Clearview Marketing
              </div>
            </div>
            
            {/* Desktop Navigation Links with improved animations */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="./" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="./about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="./portfolio" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="./#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="./contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="./#faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
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
                onClick={() => isHydrated && setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              <a href="./" className="text-white block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Home</a>
              <a href="./about" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">About</a>
              <a href="./portfolio" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Portfolio</a>
              <a href="./#services" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Services</a>
              <a href="./contact" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">Contact</a>
              <a href="./#faq" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-blue-400 transition-all duration-200">FAQ</a>
              <div className="pt-4">
                <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 block text-center">
                  Book A Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section with scroll-triggered animations */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Enhanced Badge with better styling */}
            <div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up shadow-lg shadow-orange-500/25"
              style={{
                animationDelay: '0.1s',
                transform: `translateY(${Math.max(0, scrollY * 0.1)}px)`
              }}
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              DIGITAL MARKETING EXPERTS
            </div>
            
            {/* Enhanced Award Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up border border-white/20" 
              style={{
                animationDelay: '0.2s',
                transform: `translateY(${Math.max(0, scrollY * 0.08)}px)`
              }}
            >
              <span className="text-lg">🏆</span>
              Digital Marketing Agency of 2025
            </div>
            
            {/* Enhanced Verification Badge */}
            <div 
              className="mb-8 animate-fade-in-up" 
              style={{
                animationDelay: '0.3s',
                transform: `translateY(${Math.max(0, scrollY * 0.06)}px)`
              }}
            >
              <a href="https://www.designrush.com/agency/digital-marketing/uk/london" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>VERIFIED AGENCY</span>
                <span className="text-xs opacity-75">DESIGNRUSH.COM</span>
              </a>
            </div>
            
            {/* Enhanced Main Headline with scroll parallax */}
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" 
              style={{
                animationDelay: '0.4s',
                transform: `translateY(${Math.max(0, scrollY * 0.04)}px)`
              }}
            >
              Digital Marketing
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                That Drives Results.
              </span>
            </h1>
            
            {/* Enhanced Description with scroll parallax */}
            <p 
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" 
              style={{
                animationDelay: '0.5s',
                transform: `translateY(${Math.max(0, scrollY * 0.02)}px)`
              }}
            >
              We specialize in Google Ads, social media advertising, SEO optimization, and social media management. Our data-driven strategies increase your online visibility and drive qualified leads to your business.
            </p>
            
            {/* Enhanced CTA Buttons with scroll parallax */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" 
              style={{
                animationDelay: '0.6s',
                transform: `translateY(${Math.max(0, scrollY * 0.01)}px)`
              }}
            >
              <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
                Get Free Consultation
              </a>
              <a href="./about" className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/5 backdrop-blur-sm transform hover:scale-105">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Public Projects Section - ScrollStack vertical stack */}
      <section className="relative z-10">
        <ScrollStack className="bg-black/30 backdrop-blur-sm" stackPosition="10%" itemDistance={450} itemStackDistance={50} enableSmoothScroll={false} snapOnStack useStickyPin itemScale={0} baseScale={1} rotationAmount={0} blurAmount={0}>
          {/* Card 1 */}
          <ScrollStackItem>
            <Link href="/portfolio/packmate" className="block">
              <div className="stack-card-content relative p-0">
                <div className="absolute inset-0">
                  <Image src="https://packmateindustries.com/assets/storage-a7be23a8.jpg" alt="Packmate Industries" fill className="object-cover" unoptimized />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/80 text-sm">2025</span>
                    <div className="w-1 h-1 bg-white/70 rounded-full" />
                    <span className="text-white/80 text-sm">Social Media Management</span>
                  </div>
                  <ShinyText text="Packmate Industries" className="orange text-2xl font-bold" speed={5} />
                  <div className="flex items-center gap-3 mt-1 text-sm">
                    <span className="text-blue-300 font-medium">Packaging Solutions</span>
                    <span className="text-white/80">B2B Marketing</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollStackItem>

          {/* Card 2 */}
          <ScrollStackItem>
            <div className="stack-card-content relative p-0">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-5xl">🎨</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/80 text-sm">2025</span>
                  <div className="w-1 h-1 bg-white/70 rounded-full" />
                  <span className="text-white/80 text-sm">Social Media</span>
                </div>
                <ShinyText text="Project LGW" className="orange text-2xl font-bold" speed={5} />
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="text-green-300 font-medium">Art Events</span>
                  <span className="text-white/80">Consumer Analytics</span>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 3 */}
          <ScrollStackItem>
            <div className="stack-card-content relative p-0">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-5xl">☕</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/80 text-sm">2025</span>
                  <div className="w-1 h-1 bg-white/70 rounded-full" />
                  <span className="text-white/80 text-sm">SEO Optimization</span>
                </div>
                <ShinyText text="Project Wonderlost" className="orange text-2xl font-bold" speed={5} />
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="text-purple-300 font-medium">Family Cafe</span>
                  <span className="text-white/80">Brochure Website</span>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>

      {/* Enhanced Client Logo Carousel */}
      <section className="py-16 bg-black/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">Trusted by Leading Brands</p>
          </div>
          
          {/* Enhanced Logo Grid with better hover effects */}
          <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 scrollbar-hide">
            {/* Client Logos - Using placeholder divs for now */}
            {Array.from({ length: 17 }).map((_, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                  Client {index + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Carousel Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do for Our Clients Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4">Our Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What We Do for
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don't just create campaigns, we build digital growth engines. Our data-driven strategies 
              transform your business goals into measurable results across all digital channels.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 services-grid">
            {/* Google Ads */}
            <div className="service-card group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105" style={{"--gradient-color": "#f97316"} as React.CSSProperties}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-orange-500/30">
                      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                        Google Ads
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">PPC & Search Marketing</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    Strategic Google Ads campaigns that target high-intent customers. We optimize for conversions, 
                    not just clicks, ensuring every dollar spent drives measurable ROI.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Search & Display Campaigns
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Shopping & Remarketing
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Conversion Optimization
                    </li>
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">Starting at $500/mo</span>
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                    <svg className="w-5 h-5 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="service-card group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105" style={{"--gradient-color": "#f97316"} as React.CSSProperties}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-orange-500/30">
                      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                        SEO Optimization
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">Search Engine Rankings</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    Comprehensive SEO strategies that improve your search visibility and drive organic traffic. 
                    We focus on technical optimization, content quality, and user experience.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Technical SEO Audit
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Content Strategy
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Local SEO & Citations
                    </li>
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">Starting at $800/mo</span>
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                    <svg className="w-5 h-5 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="service-card group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105" style={{"--gradient-color": "#f97316"} as React.CSSProperties}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-orange-500/30">
                      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                        Social Media
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">Management & Advertising</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    Complete social media management including content creation, community engagement, 
                    and paid advertising across all major platforms to build your brand presence.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Content Creation & Curation
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Paid Social Advertising
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Community Management
                    </li>
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">Starting at $600/mo</span>
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                    <svg className="w-5 h-5 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Marketing */}
            <div className="service-card group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105" style={{"--gradient-color": "#f97316"} as React.CSSProperties}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-orange-500/30">
                      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                        Email Marketing
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">Automation & Campaigns</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    Strategic email marketing campaigns that nurture leads and drive conversions. 
                    We create personalized automation sequences that turn subscribers into customers.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Welcome Sequences
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Abandoned Cart Recovery
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Newsletter & Promotions
                    </li>
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">Starting at $400/mo</span>
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                    <svg className="w-5 h-5 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Marketing */}
            <div className="service-card group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105" style={{"--gradient-color": "#f97316"} as React.CSSProperties}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-orange-500/30">
                      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                        Content Marketing
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">Blogs & Video Content</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    High-quality content that educates, entertains, and converts. From blog posts to video content, 
                    we create engaging material that builds authority and drives organic traffic.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Blog Writing & SEO
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Video Content Creation
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Infographics & Visuals
                    </li>
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">Starting at $700/mo</span>
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                    <svg className="w-5 h-5 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="service-card group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105" style={{"--gradient-color": "#f97316"} as React.CSSProperties}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-orange-500/30">
                      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                        Analytics & Reporting
                      </h3>
                      <p className="text-orange-400/80 text-sm font-medium">Data-Driven Insights</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    Comprehensive analytics and reporting that track your campaign performance. 
                    We provide actionable insights to optimize your marketing strategies and maximize ROI.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Performance Tracking
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Monthly Reports
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      ROI Optimization
                    </li>
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">Included with all plans</span>
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                    <svg className="w-5 h-5 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern CTA Section - Compact */}
          <div className="text-center mt-8 sm:mt-16">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              
              {/* Main content container */}
              <div className="relative bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.3'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm text-orange-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-orange-500/30">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">Start Your Digital Transformation</span>
                    <span className="sm:hidden">Digital Transformation</span>
                  </div>

                  {/* Main heading */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Ready to
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mx-2 sm:mx-3">
                      Transform
                    </span>
                    Your Digital Presence?
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                    <span className="hidden sm:inline">Let's discuss how our comprehensive digital marketing services can drive growth and deliver measurable results for your business.</span>
                    <span className="sm:hidden">Let's discuss how our digital marketing services can drive growth for your business.</span>
                  </p>

                  {/* Stats row - Compact */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-orange-500/20 backdrop-blur-sm">
                      <div className="text-lg sm:text-2xl font-bold text-orange-400">500+</div>
                      <div className="text-gray-300 text-xs">Happy Clients</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-blue-500/20 backdrop-blur-sm">
                      <div className="text-lg sm:text-2xl font-bold text-blue-400">300%</div>
                      <div className="text-gray-300 text-xs">Average ROI</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-purple-500/20 backdrop-blur-sm">
                      <div className="text-lg sm:text-2xl font-bold text-purple-400">95%</div>
                      <div className="text-gray-300 text-xs">Success Rate</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://okconsulting.as.me/?appointmentType=59448363" 
                      className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 border border-white/15 text-center"
                    >
                      Schedule a Discovery Call
                    </a>
                    <a 
                      href="./#services" 
                      className="bg-transparent border border-white/15 hover:border-white/30 text-white/90 hover:text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 text-center"
                    >
                      View Packages & Services
                    </a>
                  </div>

                  {/* Trust indicators - Compact */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-400 text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs">No Setup Fees</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs">30-Day Guarantee</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs">Dedicated Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative z-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm text-orange-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              Why Leading Brands Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mx-4">
                Advantage
              </span>
              That Drives Results
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just create campaigns—we build digital growth engines that deliver measurable results. 
              Here's what sets us apart in the competitive digital marketing landscape.
            </p>
          </div>

          {/* Why Choose Us Content - Horizontal Layout */}
          <div className="space-y-24">
            {/* Row 1: Data-Driven Results */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Data-Driven Results</h3>
                        <p className="text-orange-400 text-lg">Measurable Success</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Every campaign is backed by comprehensive analytics and real-time data. We track, measure, 
                      and optimize for maximum ROI, ensuring your marketing budget delivers exceptional returns.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                        <div className="text-2xl font-bold text-orange-400">300%</div>
                        <div className="text-sm text-gray-300">Average ROI</div>
                      </div>
                      <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                        <div className="text-2xl font-bold text-orange-400">24/7</div>
                        <div className="text-sm text-gray-300">Real-time Tracking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Data Analytics Dashboard" 
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Expert Team */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Expert Team</h3>
                        <p className="text-green-400 text-lg">Certified Professionals</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Our team consists of certified Google Ads specialists, SEO experts, and creative strategists 
                      with years of experience driving results for businesses across all industries.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">Google Certified</span>
                      <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">5+ Years Experience</span>
                      <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">Industry Experts</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Professional Team" 
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Proven Track Record */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Proven Track Record</h3>
                        <p className="text-purple-400 text-lg">Success Stories</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Our portfolio speaks for itself. We've helped hundreds of businesses achieve their digital 
                      marketing goals with consistent, measurable results across all industries.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">500+</div>
                        <div className="text-sm text-gray-300">Clients Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400">95%</div>
                        <div className="text-sm text-gray-300">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">$2M+</div>
                        <div className="text-sm text-gray-300">Revenue Generated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Success Metrics" 
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="relative">
              {/* Enhanced background effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-500/10 via-gray-600/10 to-gray-500/10 rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-lg"></div>
              
              <div className="relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Experience the{' '}
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Difference?
                  </span>
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of successful businesses that have transformed their digital presence with our 
                  proven strategies and expert team.
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
                      Start Your Success Story
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a 
                    href="./portfolio" 
                    className="group px-8 py-4 border border-white/20 hover:border-orange-400 text-white hover:text-orange-300 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      View Case Studies
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How a Project Works Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative z-10 overflow-hidden">
        {/* Minimal background (removed pattern for a cleaner look) */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/10">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
              How a Project Works
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Start with a discovery call or pick a package. We then plan, execute, and iterate with transparent feedback until goals are met.
            </p>
          </div>

          {/* Steps - Modern timeline (no cards) */}
          <div className="relative mx-auto max-w-6xl">
            {/* Connector lines */}
            <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-white/10"></div>
            <div className="lg:hidden absolute left-5 top-0 bottom-0 w-px bg-white/10"></div>

            <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
              {/* Step 1 */}
              <li className="relative flex items-start gap-4 lg:flex-col lg:items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 font-semibold">1</div>
                <div className="lg:text-center">
                  <h3 className="text-lg font-semibold text-white">Discovery Call</h3>
                  <p className="text-gray-400 text-sm">Or pick a package</p>
                  <p className="text-gray-300 text-sm mt-2">We learn about your business, audience, and goals, or you can select a ready package to speed up onboarding.</p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="relative flex items-start gap-4 lg:flex-col lg:items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 font-semibold">2</div>
                <div className="lg:text-center">
                  <h3 className="text-lg font-semibold text-white">Plan & Strategy</h3>
                  <p className="text-gray-400 text-sm">Clear roadmap</p>
                  <p className="text-gray-300 text-sm mt-2">We define scope, timelines, and KPIs, then confirm the best plan to reach your targets efficiently.</p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="relative flex items-start gap-4 lg:flex-col lg:items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 font-semibold">3</div>
                <div className="lg:text-center">
                  <h3 className="text-lg font-semibold text-white">Execution</h3>
                  <p className="text-gray-400 text-sm">Build, launch, iterate</p>
                  <p className="text-gray-300 text-sm mt-2">We run campaigns and deliverables in sprints, sharing progress and insights frequently for fast iteration.</p>
                </div>
              </li>

              {/* Step 4 */}
              <li className="relative flex items-start gap-4 lg:flex-col lg:items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 font-semibold">4</div>
                <div className="lg:text-center">
                  <h3 className="text-lg font-semibold text-white">Review & Scale</h3>
                  <p className="text-gray-400 text-sm">Measure and grow</p>
                  <p className="text-gray-300 text-sm mt-2">We review results, refine the approach, and scale winning tactics to maximize performance and ROI.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://okconsulting.as.me/?appointmentType=59448363" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 text-center"
            >
              Schedule a Discovery Call
            </a>
            <a 
              href="./#services" 
              className="border-2 border-white/20 hover:border-orange-400 text-white hover:text-orange-300 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm transform hover:scale-105 text-center"
            >
              View Packages & Services
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative z-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm text-orange-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Got
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mx-4">
                Questions?
              </span>
              We've Got Answers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our digital marketing services, processes, and what makes us different.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(0)}
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        How long does it take to see results from digital marketing?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <svg 
                          className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${openFAQ === 0 ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={`px-8 pb-6 text-gray-300 leading-relaxed overflow-hidden transition-all duration-300 ${openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p>Results vary by service and industry, but here's what you can expect:</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Google Ads:</strong> Immediate visibility, conversions within 1-2 weeks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>SEO:</strong> 3-6 months for significant organic growth</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Social Media:</strong> 1-3 months for engagement and brand awareness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(1)}
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        What makes your digital marketing services different?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <svg 
                          className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={`px-8 pb-6 text-gray-300 leading-relaxed overflow-hidden transition-all duration-300 ${openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p>We stand out through our data-driven approach and personalized strategies:</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Custom Strategies:</strong> Tailored to your specific industry and goals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Real-time Optimization:</strong> Continuous monitoring and improvement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Transparent Reporting:</strong> Clear insights into your campaign performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Dedicated Support:</strong> Direct access to your account manager</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(2)}
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        How much do your digital marketing services cost?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <svg 
                          className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={`px-8 pb-6 text-gray-300 leading-relaxed overflow-hidden transition-all duration-300 ${openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p>Our pricing is transparent and based on the services you need:</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Google Ads Management:</strong> Starting at $500/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>SEO Services:</strong> Starting at $800/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Social Media Management:</strong> Starting at $600/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Full-Service Packages:</strong> Custom pricing based on your needs</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-orange-400 font-medium">No setup fees • 30-day results guarantee • Cancel anytime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(3)}
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        Do you work with small businesses or only large companies?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <svg 
                          className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${openFAQ === 3 ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={`px-8 pb-6 text-gray-300 leading-relaxed overflow-hidden transition-all duration-300 ${openFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p>We work with businesses of all sizes, from startups to Fortune 500 companies. Our approach is scalable:</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Small Businesses:</strong> Cost-effective strategies to establish online presence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Medium Businesses:</strong> Growth-focused campaigns to expand market reach</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Large Enterprises:</strong> Comprehensive digital transformation and optimization</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-orange-400 font-medium">Every client gets the same level of attention and expertise!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(4)}
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        What industries do you specialize in?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <svg 
                          className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${openFAQ === 4 ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={`px-8 pb-6 text-gray-300 leading-relaxed overflow-hidden transition-all duration-300 ${openFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p>We have experience across diverse industries and can adapt our strategies to any sector:</p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>E-commerce & Retail</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Healthcare & Medical</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Real Estate</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Technology & SaaS</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Professional Services</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Manufacturing</span>
                      </div>
                    </div>
                    <p className="mt-4 text-orange-400 font-medium">Don't see your industry? We can create custom strategies for any business!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="mt-16 text-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our team is here to help! Schedule a free consultation to discuss your specific needs and get personalized answers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://okconsulting.as.me/?appointmentType=59448363" 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105"
                  >
                    Schedule Free Consultation
                  </a>
                  <a 
                    href="./contact" 
                    className="border-2 border-orange-500/30 hover:border-orange-400 text-orange-400 hover:text-orange-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm transform hover:scale-105"
                  >
                    Contact Us Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10">
        {/* Accent gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600/80"></div>

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
                <li><a href="./" className="hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="./about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="./portfolio" className="hover:text-orange-400 transition-colors">Portfolio</a></li>
                <li><a href="./#services" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="./contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="./#faq" className="hover:text-orange-400 transition-colors">FAQ</a></li>
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

      {/* Bottom Blur Overlay */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-40">
        <div 
          className={`h-16 w-full backdrop-blur-sm transition-opacity duration-300 ${
            showBottomBlur ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)'
          }}
        />
      </div>
    </div>
  );
}
