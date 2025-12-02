# Project Guidelines & Coding Structure

This document outlines the architecture, coding standards, and structural patterns for "The Saigon Veranda" web application. It is intended to guide LLMs and developers in maintaining consistency across the codebase.

## 1. Tech Stack

- **Framework**: React (Functional Components, Hooks)
- **Styling**: Tailwind CSS (v4.0)
- **Routing**: react-router-dom
- **Animations**: motion/react (Imported as `motion`)
- **Icons**: lucide-react
- **Components**: Shadcn UI (located in `/components/ui`)
- **Grid Layouts**: react-responsive-masonry

## 2. Directory Structure

```text
/
├── App.tsx                 # Main entry point, handles Routing
├── lib/
│   └── utils.ts            # CN utility for class merging
├── data/
│   └── content.ts          # Centralized text and image content
├── components/
│   ├── Layout.tsx          # Main layout wrapper (Nav, Footer context)
│   ├── Hero.tsx            # Landing page hero
│   ├── pages/              # Route-specific page components
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── StoryPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── VisitPage.tsx
│   │   └── BookPage.tsx
│   ├── ui/                 # Reusable Shadcn UI primitives (Do not modify logic)
│   └── figma/              # Figma specific utilities
└── styles/
    └── globals.css         # Global Tailwind directives & Font definitions
```

## 3. Core Patterns & Rules

### Imports
- **Strict Relative Paths**: ALWAYS use relative paths (e.g., `../../components/ui/Button`).
- **No Aliases**: Do NOT use `@/` aliases; they will break the build.
- **External Packages**: Import directly from the package name.
  - *Exception*: `motion/react` should be used for animations.

### Content Management (`/data/content.ts`)
- All static text, image URLs, and structured data (menu items, features) must reside in `siteContent` object.
- Components should accept data via props or import `siteContent` directly if global.
- **Goal**: Decouple content from presentation to allow easy updates.

### Components
- **Functional**: Use functional components with named exports.
- **Shadcn UI**: Use existing components in `/components/ui` (e.g., Button, Input) before creating custom ones.
- **Lego Philosophy**: Build pages (`/components/pages`) by composing smaller, distinct sections (like `Hero`, `MenuHighlights`, `Process`).

### Styling & Typography
- **Fonts**:
  - Headers: `font-serif` (Cormorant Garamond)
  - Body: `font-sans` (Montserrat)
- **Colors**: Use Tailwind utility classes.
  - Primary Green: `#2E7D32` / `#43A047`
  - Accent Red: `#D32F2F`
  - Background Cream: `#FEFDF5`
- **Tailwind**: Do not create a `tailwind.config.js`. Use `globals.css` for CSS variables if strictly necessary, but prefer utility classes.

### Navigation & Routing
- Use `Link` from `react-router-dom` for internal navigation.
- Ensure `ScrollToTop` component is active in `App.tsx` to reset scroll position on route change.

## 4. LLM Generation Instructions

When generating new code or modifying existing files:

1.  **Check Existing**: Look for existing components in `/components/ui` to avoid duplication.
2.  **Consistenty**: Match the "Indochine/Street Food" aesthetic (Cream, Green, Serif fonts).
3.  **Mock Data**: If new content is needed, add it to `data/content.ts` first (or mock it inline if temporary), then reference it.
4.  **Images**: Use `unsplash_tool` to find high-quality, relevant images.
5.  **Motion**: Use `motion.div` for entrance animations (fade up, stagger).

## 5. Key Components

- **Layout**: Wraps pages, contains the sticky Navigation and Font definitions.
- **Hero**: Full-width image/video background with overlay text.
- **Masonry Gallery**: Uses `react-responsive-masonry` for organic image grids.
- **Forms**: Use standard HTML inputs styled with Tailwind or Shadcn `Input`/`Select` components.

---
*Auto-generated for project context preservation.*
