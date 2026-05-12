"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, PlusCircle } from 'lucide-react';
import styles from './page.module.css';

export default function Certifications() {
  const certifications = [
    // Placeholder to show how it will look. User can update this later.
    {
      name: "ENGINEERING TEENS - ROBOTICS",
      issuer: "IDEA Engine (PVT) LTD.",
      year: "2019",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span className="text-gradient">Certifications</span>
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Professional achievements and courses.
        </motion.p>
      </section>

      <motion.section
        className={styles.certContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.certGrid}>
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className={`${styles.certCard} glass`}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'var(--accent-1)' }}
            >
              <Award size={32} className={styles.certIcon} />
              <div className={styles.certInfo}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <span className={styles.certYear}>{cert.year}</span>
              </div>
            </motion.a>
          ))}

          <motion.div
            className={`${styles.certCard} ${styles.addMoreCard} glass`}
            variants={itemVariants}
          >
            <PlusCircle size={32} className={styles.addIcon} />
            <p>More certifications coming soon...</p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
