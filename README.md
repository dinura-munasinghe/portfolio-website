# 🚀 Dinura Munasinghe | Modern Portfolio Website

Welcome to the technical documentation for my personal portfolio. This document outlines the technology stack, architectural logic, and design principles used to build this high-performance web application.

---

## 💻 1. Technology Stack

This project was built using a modern, industry-standard web development stack:

- **Framework:** **Next.js 14 (App Router)** - Chosen for its powerful server-side rendering (SSR) capabilities, optimized image loading, and seamless file-based routing.
- **Library:** **React (v18)** - The core library for building interactive, component-driven user interfaces.
- **Language:** **TypeScript** - Used to enforce strict type-checking across project data and components, ensuring a highly reliable and bug-free codebase.
- **Styling:** **Vanilla CSS Modules** - Used instead of Tailwind to create a completely custom, granular "Dark Neon" design system. CSS Modules perfectly scope styles to individual components to prevent CSS conflicts.
- **Animations:** **Framer Motion** - Implemented for complex, physics-based UI animations, page transitions, and staggered loading effects.
- **Icons:** **Lucide React** (UI icons) and **Devicon SVGs** (Technical toolkit branding).

---

## 🏗️ 2. Architectural Logic & Core Mechanics

### A. The Next.js App Router (File-Based Routing)
The application utilizes the Next.js `app` directory structure. Every page is a separate route, ensuring fast initial load times and excellent SEO.
- `/app/page.tsx` -> `domain.com/` (Homepage)
- `/app/projects/page.tsx` -> `domain.com/projects`
- `/app/experience/page.tsx` -> `domain.com/experience`

### B. Dynamic Project Routing (`[id]`)
Instead of hardcoding individual HTML pages for every graphic design or dev project, I built a highly scalable **Dynamic Route**.
1. **The Logic**: The route `/app/projects/[id]/page.tsx` acts as a dynamic template.
2. **The Data**: All project information (titles, descriptions, arrays of images) is stored in a central database file (`/data/projects.ts`).
3. **The Execution**: When a user clicks a project card, Next.js reads the unique `id` from the URL, fetches the matching JSON data from the database, and injects it into the template. This makes adding 100 new projects as easy as typing a few lines of text.

### C. The Lightbox Gallery Logic
To solve the issue of varying image aspect ratios (Portrait flyers vs Landscape dashboards), a custom Lightbox was engineered:
- **Thumbnails**: Images are initially mapped into a responsive CSS Grid and forced into a `1/1` aspect ratio using `object-fit: cover`.
- **State Management**: Using React's `useState`, clicking a thumbnail sets the `selectedImage` state.
- **The Modal**: An `AnimatePresence` modal from Framer Motion listens for this state. When triggered, it overlays the screen and renders the image using `object-fit: contain`, allowing the user to view the full, uncropped image regardless of its original dimensions.

### D. Component Modularity
Global elements like the `Navbar` and `Footer` were extracted into the `/components` folder and injected directly into the root `/app/layout.tsx`. This ensures they wrap every page automatically without needing to rewrite the code on every route.

---

## 🎨 3. Design System (Dark Neon)

The UI was crafted with a focus on modern tech aesthetics:

- **Glassmorphism**: Achieved using CSS `backdrop-filter: blur(10px)` and semi-transparent `rgba(18, 18, 26, 0.6)` backgrounds to create frosted glass effects.
- **Neon Gradients**: Important elements use a custom linear gradient transitioning from Cyan (`#00f0ff`) to Purple (`#8a2be2`).
- **Typography**: The layout prioritizes readability with high-contrast text and a clean, sans-serif font hierarchy.
- **Micro-interactions**: Hovering over interactive elements triggers subtle `transform: translateY(-2px)` and `box-shadow` animations, providing immediate tactile feedback to the user.

---

## ⚙️ 4. Local Development

To run this project locally:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

cd C:\Users\mmdsm\.gemini\antigravity\scratch\portfolio-nextjs
npm run dev

