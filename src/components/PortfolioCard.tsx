'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export type PortfolioCardProps = {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  badge?: string;
  priority?: boolean;
  animationDelay?: number;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  subtitle,
  category,
  year,
  badge,
  priority = false,
  animationDelay = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: animationDelay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-400/30 hover:bg-white/10"
    >
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-85" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-xs text-white/90 bg-black/50 rounded-full px-2 py-1 border border-white/10">{year}</span>
          {badge && (
            <span className="text-xs text-orange-300 bg-orange-500/20 rounded-full px-2 py-1 border border-orange-500/30">{badge}</span>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm text-blue-300 mb-1">{category}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{subtitle}</p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-end justify-between p-5 pointer-events-none"
      >
        <div />
        <div className="pointer-events-auto w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default PortfolioCard;


