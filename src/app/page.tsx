'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                O-K Consulting
              </div>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </div>
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover-lift">
                Book A Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors">Contact</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors">FAQ</a>
              <div className="pt-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 block text-center">
                  Book A Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              ONE TO WATCH
            </div>
            
            {/* Award Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <span className="text-lg">🏆</span>
              Web Design Agency of 2025
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Strategic Storytelling
              <br />
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                for Bold Brands.
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              We specialise in building clean & responsive websites at speed. The more engaging your website is, the more people want to interact with it. Higher engagement translates to greater chance of conversion.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-lg hover-lift transform">
                Connect With Us
              </a>
              <a href="#" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover-lift transform">
                How Can We Help You?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">Swipe To See Our Clients</p>
          </div>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {/* Client Logos - Using placeholder divs for now */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 sm:h-20 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover-lift cursor-pointer group"
              >
                <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600 transition-colors">
                  Client {index + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${
                    index === 0 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
