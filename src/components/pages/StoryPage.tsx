import React from 'react';
import { siteContent } from '../../data/content';

export const StoryPage = () => {
  return (
    <div className="py-24 container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D32F2F] uppercase tracking-widest text-sm font-medium block mb-4">Est. 1985</span>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8">Our Story</h1>
        </div>

        <div className="grid gap-12 items-center">
           <div className="prose prose-lg prose-stone mx-auto text-center">
              <p className="text-xl leading-relaxed mb-8">
                {siteContent.story.body}
              </p>
              <p className="text-stone-600 mb-6">
                Our journey started not in a professional kitchen, but in a small family courtyard in Ho Chi Minh City. 
                It was here that three generations gathered every evening to share meals, stories, and laughter. 
                The "Veranda" is a tribute to that space—a place where time slows down, and the food takes center stage.
              </p>
              <p className="text-stone-600">
                Today, we continue to honor our heritage by refusing to cut corners. Our broths are still simmered overnight, 
                our herbs are hand-picked for crispness, and our smiles are as genuine as the ones that greeted neighbors 
                passing by our old iron gate.
              </p>
           </div>

           <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="aspect-[3/4] rounded-full overflow-hidden border-4 border-stone-100 shadow-xl translate-y-8">
                 <img 
                    src="https://images.unsplash.com/photo-1764175760456-7d7cb1b7e1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc2NDQ4MzYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Interior" 
                    className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-full overflow-hidden border-4 border-stone-100 shadow-xl -translate-y-8">
                 <img 
                    src="https://images.unsplash.com/photo-1728240257876-dd4fc7398043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtZXNlJTIwY29va2luZyUyMHBvdCUyMGJyb3RofGVufDF8fHx8MTc2NDQ4MzYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Cooking" 
                    className="w-full h-full object-cover"
                />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
