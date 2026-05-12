"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import styles from './page.module.css';

export default function Resume() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span className="text-gradient">Resume</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          View or download my professional experience.
        </motion.p>
      </section>

      <motion.section 
        className={styles.resumeContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className={styles.actions}>
          <a href="/resume.pdf" download className={styles.downloadBtn}>
            <Download size={20} /> Download PDF
          </a>
        </div>
        
        <div className={`${styles.viewerWrapper} glass`}>
          {/* Note: Ensure resume.pdf is placed in the public/ directory */}
          <iframe 
            src="/resume.pdf" 
            className={styles.pdfViewer}
            title="Resume Preview"
          />
          <div className={styles.fallback}>
            <FileText size={48} className={styles.fallbackIcon} />
            <p>If the PDF does not load, you can <a href="/resume.pdf" target="_blank" className="text-gradient">view it here</a>.</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
