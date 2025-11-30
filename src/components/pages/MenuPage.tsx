import React from 'react';
import { siteContent } from '../../data/content';

export const MenuPage = () => {
  return (
    <div className="py-24 container mx-auto px-4 md:px-8 bg-[#FEFDF5]">
      <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-16 text-center">Our Menu</h1>
      
      <div className="space-y-20 max-w-5xl mx-auto">
        {siteContent.fullMenu && siteContent.fullMenu.map((section, idx) => (
          <div key={idx}>
            <h2 className="font-serif text-3xl text-[#2E7D32] mb-8 border-b border-[#2E7D32]/20 pb-2 inline-block pr-12">
              {section.category}
            </h2>
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex gap-6 items-start group cursor-default">
                  <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-stone-100 shadow-sm">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-[#43A047] transition-colors">{item.name}</h3>
                      <span className="font-sans font-bold text-[#D32F2F] ml-4">{item.price}</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
