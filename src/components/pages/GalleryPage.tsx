import React from 'react';
import { siteContent } from '../../data/content';
import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const GalleryPage = () => {
  return (
    <div className="py-24 container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Life at the Veranda</h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            A collection of moments, flavors, and the vibrant atmosphere that makes our space unique.
        </p>
      </div>

      {siteContent.galleryPage && (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="24px">
                {siteContent.galleryPage.images.map((src, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={src}
                            style={{width: "100%", display: "block"}}
                            alt={`Gallery item ${i}`}
                            className="hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};
