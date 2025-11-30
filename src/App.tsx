import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/pages/HomePage';
import { MenuPage } from './components/pages/MenuPage';
import { StoryPage } from './components/pages/StoryPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { VisitPage } from './components/pages/VisitPage';
import { BookPage } from './components/pages/BookPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
