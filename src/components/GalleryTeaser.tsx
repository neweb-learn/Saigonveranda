import React from 'react';
import { siteContent } from '../data/content';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const GalleryTeaser = () => {
  // Combine gallery images with menu images to create a fuller grid for visual effect
  const allImages = [
    ...siteContent.galleryTeaser.images,
    siteContent.menuHighlights.items[0].image,
    siteContent.menuHighlights.items[1].image,
    siteContent.menuHighlights.items[2].image
  ].filter(Boolean); // Ensure no undefined

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            {siteContent.galleryTeaser.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 text-lg mb-8">
            {siteContent.story.body}
          </p>
          <Link to={siteContent.galleryTeaser.cta.link}>
            <Button variant="outline">
                {siteContent.galleryTeaser.cta.label}
            </Button>
          </Link>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {allImages.map((src, index) => (
            <div key={index} className="break-inside-avoid relative rounded-2xl overflow-hidden group">
              <img 
                src={src} 
                alt="Gallery" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
