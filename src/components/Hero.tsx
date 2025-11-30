import React from 'react';
import { siteContent } from '../data/content';
import { Button } from './ui/Button';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 order-2 md:order-1"
          >
            <span className="block font-medium text-[#D32F2F] tracking-widest uppercase text-sm mb-4">
              {siteContent.hero.eyebrow}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-stone-900 mb-6 leading-[0.9]">
              {siteContent.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-md font-light">
              {siteContent.hero.subhead}
            </p>
            <Link to={siteContent.hero.cta.link}>
                <Button size="lg">
                {siteContent.hero.cta.label}
                </Button>
            </Link>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 md:order-2 flex justify-center"
          >
            {/* Decorative Tile Background Pattern Circle/Shape */}
            <div className="absolute inset-0 bg-pattern-tiles opacity-10 rounded-full scale-110 -z-10 rotate-12" />
            
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full rounded-b-[10rem] shadow-2xl">
              <img 
                src={siteContent.hero.image.src} 
                alt={siteContent.hero.image.alt}
                className="h-full w-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Elements (Simulated) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-[#FEFDF5] p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block"
            >
               <p className="font-serif text-xl text-[#2E7D32] italic">"Soulful &<br/>Authentic"</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
