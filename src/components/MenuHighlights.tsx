import React from 'react';
import { siteContent } from '../data/content';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MenuHighlights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-2">
              {siteContent.menuHighlights.heading}
            </h2>
            <div className="h-1 w-24 bg-[#43A047]" />
          </div>
          <Link to={siteContent.menuHighlights.cta.link}>
            <Button variant="outline" className="gap-2 group">
                {siteContent.menuHighlights.cta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.menuHighlights.items.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl font-medium text-stone-900 group-hover:text-[#43A047] transition-colors">
                  {item.name}
                </h3>
                <span className="font-sans font-bold text-[#D32F2F] text-lg">{item.price}</span>
              </div>
              
              <p className="text-stone-500 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
