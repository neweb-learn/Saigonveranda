# Project Guidelines: The Saigon Veranda

This document serves as the source of truth for "The Saigon Veranda" web application. It provides the architectural blueprint, design system, and coding standards required for LLMs and developers to maintain consistency and reuse existing patterns.

## 1. Project Overview

"The Saigon Veranda" is a restaurant website concept blending Vietnamese street food culture with Indochine aesthetics. The site is informational (Menu, Story, Gallery, Reservations) and strictly non-transactional (no e-commerce).

**Key Aesthetics:**
- **Theme**: "Crisp Herbs & Slow-Cooked Broth."
- **Vibe**: Open-air courtyard, rustic yet elegant, warm, welcoming.
- **Visuals**: High-quality photography, masonry grids, organic transitions.

## 2. Tech Stack

- **Core**: React (Functional Components + Hooks).
- **Styling**: Tailwind CSS v4.0.
- **Routing**: `react-router-dom` (Client-side routing).
- **Animation**: `motion/react` (Imported as `motion`).
- **Icons**: `lucide-react`.
- **Layouts**: `react-responsive-masonry` (Grid systems).
- **UI Library**: Shadcn UI (Located in `/components/ui`).

## 3. Design System & Tokens

### Colors
- **Background Cream**: `#FEFDF5` (Primary canvas).
- **Herb Green**: 
  - Dark: `#2E7D32` (Headings, borders).
  - Light/Accent: `#43A047` (Hovers, highlights).
- **Chili Red**: `#D32F2F` (Price tags, CTAs, accents).
- **Text**: Stone grays (`text-stone-900` for headings, `text-stone-600` for body).

### Typography
Defined via CSS variables in `Layout.tsx` and `globals.css`.
- **Headings**: `font-serif` (Cormorant Garamond) - Elegant, high-contrast serif.
- **Body**: `font-sans` (Montserrat) - Clean, geometric sans-serif.

### UI Patterns
- **Buttons**: Rounded corners (`rounded-xl` or pill-shaped), typically filled Green or outlined Stone.
- **Images**: `rounded-xl` or `rounded-2xl` with `shadow-sm`. Hover effects often include subtle scaling (`scale-105`).
- **Cards**: Minimalist, often transparent or white with soft borders.

## 4. Project Structure

```text
/
├── App.tsx                 # Routing configuration (Routes, Route)
├── components/
│   ├── Layout.tsx          # Global wrapper (Navbar, Font Styles)
│   ├── ScrollToTop.tsx     # Utility to reset scroll on route change
│   ├── pages/              # Full page views (HomePage, MenuPage, etc.)
│   ├── ui/                 # Shadcn UI components (Do not modify logic)
│   └── [Features].tsx      # Section components (Hero, Process, etc.)
├── data/
│   └── content.ts          # Centralized content (Text, Image URLs)
└── styles/
    └── globals.css         # Tailwind imports and base styles
```

## 5. Coding Standards

### Data Driven
- **Centralized Source**: All static text, menu items, and image URLs must reside in `/data/content.ts`.
- **Usage**: Components should import `siteContent` from `../data/content` to render data. Avoid hardcoding text in components.

### Styling
- **Tailwind First**: Use utility classes for everything.
- **Overrides**: Only use `style={{ }}` for dynamic values (e.g., background images from data).
- **Typography**: Always use `font-serif` for headings and `font-sans` for body text.

### Images
- **Source**: Use Unsplash for placeholders.
- **Masonry**: Use `react-responsive-masonry` for image galleries to maintain the "courtyard" aesthetic.
- **Motion**: Images often enter with a fade-up animation using `motion.div`.

### Routing
- **Library**: `react-router-dom`.
- **Links**: Use `<Link to="/path">` instead of `<a>` tags for internal navigation.
- **Scroll**: Ensure `ScrollToTop` is active in `App.tsx`.

### Imports (CRITICAL)
- **Relative Paths Only**: ALWAYS use relative paths (e.g., `../../components/ui/Button`).
- **No Aliases**: NEVER use `@/` (e.g., `@/components/...`). This causes build failures.

## 6. Extension Guidelines

1.  **Adding Pages**: 
    - Create a new component in `/components/pages/`.
    - Add a Route in `App.tsx`.
    - Update `siteContent.navigation` in `/data/content.ts` if it needs to appear in the nav.
2.  **New Components**:
    - Check `/components/ui` first.
    - Compose larger sections using atomic UI components.
3.  **Animations**:
    - Default Entrance: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`.
    - Transitions: Smooth, duration ~0.5s to 0.8s.
