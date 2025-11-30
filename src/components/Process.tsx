import React from 'react';
import { siteContent } from '../data/content';
import { Clock, Leaf, CookingPot } from 'lucide-react';

export const Process = () => {
  const icons = {
    Clock: Clock,
    Leaf: Leaf,
    Soup: CookingPot
  };

  return (
    <section className="py-24 bg-[#FEFDF5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-tiles opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D32F2F] uppercase tracking-widest text-sm font-medium block mb-2">Our Method</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            {siteContent.process.heading}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-[#43A047]/20 -z-10" />

            {siteContent.process.steps.map((step, index) => {
                // @ts-ignore
                const Icon = icons[step.icon];
                return (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border-2 border-[#43A047]/20 flex items-center justify-center mb-6 shadow-sm relative">
                             {/* Dot on line */}
                             <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-2 h-2 bg-white md:hidden" />
                             
                             <Icon className="w-10 h-10 text-[#43A047]" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-2xl text-stone-900 mb-3">{step.title}</h3>
                        <p className="text-stone-600 max-w-xs">{step.description}</p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};
