"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Figma, ExternalLink, Palette, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import { projects } from '@/data/projects';

export default function Projects() {
  const devProjects = projects.filter(p => p.category === "Development");
  const uiProjects = projects.filter(p => p.category === "UI/UX Prototype");
  const graphicDesignProjects = projects.filter(p => p.category === "Graphic Design");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const ProjectCard = ({ project, icon }: { project: any, icon: any }) => (
    <Link href={`/projects/${project.id}`} passHref legacyBehavior>
      <motion.a 
        className={`${styles.projectCard} glass`}
        variants={itemVariants}
        whileHover={{ y: -5, borderColor: 'var(--accent-1)' }}
      >
        <div className={styles.cardHeader}>
          {icon}
          <ArrowRight size={20} className={styles.linkIcon} />
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <span className={styles.projectCategory}>{project.category}</span>
        <p className={styles.projectDesc}>{project.shortDesc}</p>
      </motion.a>
    </Link>
  );

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Click on any project to see detailed features and links.
        </motion.p>
      </section>

      <motion.section 
        className={styles.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Development Section */}
        <div className={styles.categorySection}>
          <h2 className={styles.categoryTitle}><Github className={styles.categoryIcon} /> Development</h2>
          <div className={styles.projectGrid}>
            {devProjects.map((project) => (
              <ProjectCard key={project.id} project={project} icon={<Github size={24} className={styles.accentIcon} />} />
            ))}
          </div>
        </div>

        {/* 2. UI/UX & Figma Section */}
        <div className={styles.categorySection}>
          <h2 className={styles.categoryTitle}><Figma className={styles.categoryIcon} /> UI/UX Prototypes</h2>
          <div className={styles.projectGrid}>
            {uiProjects.map((project) => (
              <ProjectCard key={project.id} project={project} icon={<Figma size={24} className={styles.accentIcon} />} />
            ))}
          </div>
        </div>

        {/* 3. Graphic Design Section */}
        <div className={styles.categorySection}>
          <h2 className={styles.categoryTitle}><Palette className={styles.categoryIcon} /> Graphic Design</h2>
          <div className={styles.projectGrid}>
            {graphicDesignProjects.map((project) => (
              <ProjectCard key={project.id} project={project} icon={<Palette size={24} className={styles.accentIcon} />} />
            ))}
          </div>
        </div>

      </motion.section>
    </main>
  );
}
