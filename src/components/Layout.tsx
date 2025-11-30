import React from 'react';
import { Menu, Instagram, Facebook } from 'lucide-react';
import { siteContent } from '../data/content';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FEFDF5] font-sans text-stone-800 selection:bg-[#43A047] selection:text-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        
        :root {
          --font-serif: 'Cormorant Garamond', serif;
          --font-sans: 'Montserrat', sans-serif;
        }

        .font-serif { font-family: var(--font-serif); }
        .font-sans { font-family: var(--font-sans); }
        
        .bg-pattern-tiles {
          background-image: url('${siteContent.galleryTeaser.images[2]}');
          background-size: 400px;
          background-repeat: repeat;
          background-blend-mode: overlay;
        }
      `}} />

      <nav className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#FEFDF5]/90 backdrop-blur-md transition-all">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-[#2E7D32]">
            THE SAIGON VERANDA
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteContent.navigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    location.pathname === link.path ? "text-[#43A047]" : "text-stone-600 hover:text-[#43A047]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book">
                <Button size="sm" variant="primary">
                Book a Table
                </Button>
            </Link>
          </div>

          <button className="md:hidden text-stone-800">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-stone-200 bg-[#FEFDF5] py-16">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-3 md:px-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2E7D32] mb-4">THE SAIGON VERANDA</h3>
            <p className="text-stone-600 max-w-xs">
              Authentic Vietnamese flavors served in an open-air courtyard setting. Experience the art of balance.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider text-stone-900 mb-4 text-sm">Visit Us</h4>
            <p className="text-stone-600 mb-2">{siteContent.footer.address}</p>
            <p className="text-stone-600">{siteContent.footer.hours}</p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-stone-900 mb-4 text-sm">Follow Us</h4>
            <div className="flex gap-4">
              {siteContent.footer.socials.map((social) => (
                <a key={social} href="#" className="text-stone-400 hover:text-[#43A047] transition-colors">
                  {social === 'Instagram' && <Instagram className="h-5 w-5" />}
                  {social === 'Facebook' && <Facebook className="h-5 w-5" />}
                  {/* No TikTok icon in lucide-react by default sometimes, using text if needed or generic */}
                  {social === 'TikTok' && <span className="text-xs font-bold border border-current px-1 rounded">TK</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 border-t border-stone-100 pt-8 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} The Saigon Veranda. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
