import { ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  category: "Development" | "UI/UX Prototype" | "Graphic Design";
  shortDesc: string;
  fullDesc: string;
  features: string[];
  link: string;
  coverImage: string;
  galleryImages?: string[];
  techStack?: string[];
  website?: string;
};

export const projects: Project[] = [
  // Development Projects
  {
    id: "providerplus-mobileapp",
    title: "Provider+ Mobile App",
    category: "Development",
    shortDesc: "A cross platform mobile application for service providing.",
    fullDesc: "Led end-to-end design and development of a cross-platform service marketplace covering frontend,backend architecture, and project planning.The application features comprehensive user flows for both service providers and customers.",
    features: ["Ai Chatbot ", "Service Provider & Customer Features", "Modern UI/UX Design", "End-to-end Development"],
    website: "www.providerplus.lk",
    techStack: ["React Native", "Node.js", "MySQL", "Figma"],
    link: "https://github.com/dinura-munasinghe/ProviderPlus",
    coverImage: "/WhatsApp Image 2026-03-11 at 23.34.35.jpeg"
  },
  {
    id: "health-wellness-website",
    title: "Health & Wellness Website",
    category: "Development",
    shortDesc: "Fully responsive website with accessible navigation and consistent UX.",
    fullDesc: "A front-end web project focused on delivering a clean, accessible, and responsive user experience for a health and wellness brand. Designed with mobile-first principles, ensuring the layout perfectly adapts across all device sizes.",
    features: ["Responsive Design", "Cross-browser Compatibility", "Web Accessibility (a11y)", "Modern UI Animations"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/dinura-munasinghe/L4-WebDev-GCW-",
    coverImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"
  },
  {
    id: "portfolio-nextjs",
    title: "Modern Tech Portfolio",
    category: "Development",
    shortDesc: "My personal high-tech portfolio website built with Next.js and Framer Motion.",
    fullDesc: "A premium, dynamic multi page portfolio website showcasing my work across Development, UI/UX, and Graphic Design. It features a dark neon aesthetic, glassmorphism, Framer Motion scroll animations, and dynamic project routing.",
    website: "https://dinuramunasinghe.vercel.app/",
    features: ["Dynamic Next.js App Router", "Framer Motion Animations", "CSS Modules & Glassmorphism", "Responsive Layout"],
    techStack: ["Next.js", "React", "TypeScript", "Framer Motion"],
    link: "https://github.com/dinura-munasinghe/portfolio-website",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
  },
  {
    id: "traffic-data-analysis",
    title: "Traffic Data Analysis System",
    category: "Development",
    shortDesc: "Desktop application to process, categorise, and visualise vehicle count data.",
    fullDesc: "A comprehensive Python based desktop application built using Tkinter for UI. The system allows users to input, process, categorise, and visualise complex vehicle count data efficiently. It also includes data export functionality for further analysis, greatly speeding up the manual data entry and calculation process.",
    features: ["Data Processing & Categorisation", "Interactive Data Visualisation", "Export to CSV/Excel", "User-friendly Tkinter GUI"],
    techStack: ["Python", "Tkinter", "Data Visualisation", "Pandas"],
    link: "https://github.com/dinura-munasinghe",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
  },


  // UI/UX Prototypes
  {
    id: "provider-plus-app",
    title: "Provider+ Mobile App",
    category: "UI/UX Prototype",
    shortDesc: "A comprehensive UI/UX design prototype for a service marketplace.",
    fullDesc: "Led the end-to-end design and development of a cross platform service marketplace covering frontend, backend architecture, and project planning. The Figma prototype contains full user flows for both service providers and customers.",
    features: ["Comprehensive User Flows", "Modern Minimalist UI", "Interactive Prototyping", "Design System Implementation"],
    techStack: ["Figma", "React Native", "Node.js", "MySQL"],
    link: "https://www.figma.com/design/sfR9vTkFaSDAWNX5tM7af5/SDGP-Prototype?node-id=0-1&t=sFuIJpyTt6qeA8ef-1",
    coverImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80"
  },
  {
    id: "learn-steer-website",
    title: "Learn Steer 2.0 Website",
    category: "UI/UX Prototype",
    shortDesc: "A comprehensive UI/UX design prototype for a Learning Management System.",
    fullDesc: "Designed a modern, responsive web interface focused on seamless navigation and an intuitive user experience. The Figma prototype showcases clean layout structures, a cohesive design system, and structured user flows tailored for desktop users.",
    features: ["Responsive Web Layout", "Clean & Modern Aesthetic", "Intuitive Navigation Flow", "Scalable Component Library"],
    techStack: ["Figma", "Web Design", "UI/UX"],
    link: "https://www.figma.com/design/Eduk5wQo1mr2tUuI4CkQtC/LS-Web?node-id=0-1&t=9ZkVD0DeCGxavt4i-1",
    coverImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80"
  },

  {
    id: "the-day-app",
    title: "The Day App",
    category: "UI/UX Prototype",
    shortDesc: "A comprehensive UI/UX design prototype for a All in one News App.",
    fullDesc: "Designed an intuitive and highly engaging mobile interface focused on real-time content delivery and seamless user interactions. The Figma prototype features high-fidelity screens, optimized readability layouts, and smooth navigation flows engineered for modern mobile experiences.",
    features: ["Dynamic Content Layouts", "Optimized Mobile Readability", "Seamless User Navigation", "Cohesive Component Architecture"],
    techStack: ["Figma", "Mobile Design", "UI/UX"],
    link: "https://www.figma.com/design/CwnWUaMNRWcYdLBzbyz2z8/day-app?node-id=0-1&t=MNfjlOb4lHdDpWLN-1",
    coverImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80"
  },

  // Graphic Design
  {
    id: "event-flyers",
    title: "AIESEC & IEEE Event Flyers",
    category: "Graphic Design",
    shortDesc: "A collection of promotional flyers and branding for national events.",
    fullDesc: "Designed creative strategies and digital content for multiple global volunteer campaigns and national events including Voyage'25, ADAPTIQ, Model X, INSL, Sherlock 3.0, and Codesprint 11.",
    features: ["Visual Identity", "Typography & Layouts", "Brand Consistency", "Social Media Kits"],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    link: "https://drive.google.com/drive/folders/1PwaDVs0_I4rRyuvUeXFU6ti_ZPn7WG9o?usp=sharing",
    coverImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
    galleryImages: [
      "/projects/finalist2 (1).png",
      "/projects/IMG-20260213-WA0055.jpg",
      "/projects/final2.png",
      "/projects/IEEE WIE NOMINATIONS.png",
      "/projects/workshop1.png"
    ]
  }
];

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};
