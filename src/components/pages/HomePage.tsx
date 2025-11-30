import React from 'react';
import { Hero } from '../Hero';
import { MenuHighlights } from '../MenuHighlights';
import { Process } from '../Process';
import { GalleryTeaser } from '../GalleryTeaser';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Process />
      <MenuHighlights />
      <GalleryTeaser />
    </>
  );
};
