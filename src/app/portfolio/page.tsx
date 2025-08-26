'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from '@/components/TiltedCard';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

type PortfolioItem = {
  id: string;
  title: string;
  year: string;
  category: 'Google Ads' | 'SEO' | 'Social' | 'Content' | 'Analytics' | 'Web';
  subtitle: string;
  badge?: string;
  image: string;
};

const ITEMS: PortfolioItem[] = [
  {
    id: 'packmate',
    title: 'Packmate Industries',
    year: '2025',
    category: 'Social',
    subtitle: 'Social Media Management',
    badge: 'Full Funnel',
    image: 'https://packmateindustries.com/assets/storage-a7be23a8.jpg',
  },
  {
    id: 'medicus',
    title: 'Medicus',
    year: '2025',
    category: 'Content',
    subtitle: 'Graphics & Digital Presence',
    badge: 'Branding',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'citycenterbarbershop',
    title: 'City Center Barbershop',
    year: '2024',
    category: 'Google Ads',
    subtitle: 'Advertising & SEO',
    badge: 'Local SEO',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'amabills',
    title: 'Amabills Technologies',
    year: '2024',
    category: 'Content',
    subtitle: 'Content Marketing & Digital Presence',
    badge: 'Tech',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
];

const FILTERS = ['All', 'Google Ads', 'SEO', 'Social', 'Content', 'Analytics', 'Web'] as const;
type Filter = typeof FILTERS[number];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Mobile section snap helpers
  const heroRef = useRef<HTMLElement | null>(null);
  const nextSectionRef = useRef<HTMLElement | null>(null);
  const startSentinelRef = useRef<HTMLDivElement | null>(null);
  const endSentinelRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768; // md breakpoint
    if (!isMobile) return;

    const handleScroll = () => {
      lastScrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const prevY = lastScrollYRef.current;
          const currentY = window.scrollY;
          const goingDown = currentY > prevY;
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            if (target === endSentinelRef.current && goingDown) {
              // Snap to next section when finishing cards
              nextSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (target === startSentinelRef.current && !goingDown) {
              // Snap back to hero when scrolling up past cards
              heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (startSentinelRef.current) observer.observe(startSentinelRef.current);
    if (endSentinelRef.current) observer.observe(endSentinelRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return ITEMS;
    return ITEMS.filter(i => i.category === filter);
  }, [filter]);

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

      {/* Hero */}
      <section ref={(el) => { heroRef.current = el; }} className="pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-4 backdrop-blur-sm">
              Our Work
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Results you can see.
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              A curated selection of campaigns, websites, and growth systems we built to drive measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          {/* Mobile gradient edge masks for horizontal filter scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black to-transparent sm:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black to-transparent sm:hidden" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2 sm:flex-wrap overflow-x-auto whitespace-nowrap -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x"
          >
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm border snap-start flex-shrink-0 ${filter === f ? 'border-orange-400 text-orange-300 bg-orange-500/10' : 'border-white/15 text-gray-300 hover:border-white/30 hover:bg-white/5'}`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: ScrollStack experience */}
          <div className="md:hidden">
            <div ref={startSentinelRef} className="h-1 w-1 opacity-0" />
            <ScrollStack className="bg-black/20" stackPosition="12%" itemDistance={420} itemStackDistance={50} baseScale={0.9} itemScale={0.03} enableSmoothScroll useStickyPin>
              {ITEMS.map((item) => (
                <ScrollStackItem key={item.id}>
                  {item.id === 'packmate' ? (
                    <Link href="/portfolio/packmate" className="block">
                      <div className="stack-card-content relative p-0 overflow-hidden rounded-3xl">
                        <div className="absolute inset-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{item.year}</span>
                          {item.badge && (
                            <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{item.badge}</span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ) : item.id === 'medicus' ? (
                    <Link href="/portfolio/medicus" className="block">
                      <div className="stack-card-content relative p-0 overflow-hidden rounded-3xl">
                        <div className="absolute inset-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{item.year}</span>
                          {item.badge && (
                            <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{item.badge}</span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ) : item.id === 'citycenterbarbershop' ? (
                    <Link href="/portfolio/citycenterbarbershop" className="block">
                      <div className="stack-card-content relative p-0 overflow-hidden rounded-3xl">
                        <div className="absolute inset-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{item.year}</span>
                          {item.badge && (
                            <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{item.badge}</span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ) : item.id === 'amabills' ? (
                    <Link href="/portfolio/amabills" className="block">
                      <div className="stack-card-content relative p-0 overflow-hidden rounded-3xl">
                        <div className="absolute inset-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{item.year}</span>
                          {item.badge && (
                            <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{item.badge}</span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="stack-card-content relative p-0 overflow-hidden rounded-3xl">
                      <div className="absolute inset-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{item.year}</span>
                        {item.badge && (
                          <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{item.badge}</span>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  )}
                </ScrollStackItem>
              ))}
            </ScrollStack>
            <div ref={endSentinelRef} className="h-1 w-1 opacity-0" />
          </div>

          {/* Tablet/Desktop: Grid */}
          <div className="hidden md:block">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
            >
              {filtered.map((item, idx) => (
                <div key={item.id} className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[18/11]">
                  {item.id === 'packmate' ? (
                    <Link href="/portfolio/packmate" className="block h-full">
                      <TiltedCard
                        imageSrc={item.image}
                        altText={item.title}
                        captionText={`${item.title} — ${item.category}`}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.08}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={(
                          <div className="w-full px-6 pb-5 self-end">
                            <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.subtitle}</p>
                          </div>
                        )}
                      />
                    </Link>
                  ) : item.id === 'medicus' ? (
                    <Link href="/portfolio/medicus" className="block h-full">
                      <TiltedCard
                        imageSrc={item.image}
                        altText={item.title}
                        captionText={`${item.title} — ${item.category}`}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.08}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={(
                          <div className="w-full px-6 pb-5 self-end">
                            <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.subtitle}</p>
                          </div>
                        )}
                      />
                    </Link>
                  ) : item.id === 'citycenterbarbershop' ? (
                    <Link href="/portfolio/citycenterbarbershop" className="block h-full">
                      <TiltedCard
                        imageSrc={item.image}
                        altText={item.title}
                        captionText={`${item.title} — ${item.category}`}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.08}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={(
                          <div className="w-full px-6 pb-5 self-end">
                            <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.subtitle}</p>
                          </div>
                        )}
                      />
                    </Link>
                  ) : item.id === 'amabills' ? (
                    <Link href="/portfolio/amabills" className="block h-full">
                      <TiltedCard
                        imageSrc={item.image}
                        altText={item.title}
                        captionText={`${item.title} — ${item.category}`}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.08}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={(
                          <div className="w-full px-6 pb-5 self-end">
                            <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.subtitle}</p>
                          </div>
                        )}
                      />
                    </Link>
                  ) : (
                    <TiltedCard
                      imageSrc={item.image}
                      altText={item.title}
                      captionText={`${item.title} — ${item.category}`}
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      rotateAmplitude={8}
                      scaleOnHover={1.08}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                      overlayContent={(
                        <div className="w-full px-6 pb-5 self-end">
                          <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.subtitle}</p>
                        </div>
                      )}
                    />
                  )}

                  {/* top-left chips (year/badge) */}
                  <div className="pointer-events-none absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{item.year}</span>
                    {item.badge && (
                      <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{item.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={(el) => { nextSectionRef.current = el; }} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-gray-500/10 via-gray-600/10 to-gray-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want results like these?</h3>
              <p className="text-gray-300 mb-8">Book a free strategy call and we'll map the fastest path to ROI for your brand.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://okconsulting.as.me/?appointmentType=59448363" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold">Schedule a Call</a>
                <Link href="/about" className="border border-white/20 hover:border-orange-400 text-white hover:text-orange-300 px-6 py-3 rounded-full font-semibold hover:bg-orange-500/10">View Services</Link>
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
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="text-orange-400 font-medium">Portfolio</Link></li>
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


