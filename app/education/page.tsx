"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import styles from './page.module.css';

export default function Education() {
  const educationData = [
    {
      degree: "BSc (Hons) Computer Science",
      institution: "University of Westminster",
      campus: "IIT Campus, Colombo",
      period: "2024 – Present",
      logo: "/westminster-university-logo.jpg",
      description: "Undergraduate degree focusing on software engineering principles, UI/UX design, database systems, and modern web technologies."
    },
    {
      degree: "Secondary Education",
      institution: "Saranath College",
      campus: "Kuliyapitiya",
      period: "2015 – 2023",
      logo: "/images.jpeg",
      description: "Completed secondary education. Participated in various extracurricular activities and developed early interests in technology and design."
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span className="text-gradient">Education</span>
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Academic background and university studies.
        </motion.p>
      </section>

      <section className={styles.educationContainer}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`${styles.eduCard} glass`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardTop}>
              <div className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={edu.logo} alt={edu.institution} className={styles.uniLogo} />
              </div>
              <div className={styles.headerInfo}>
                <h2 className={styles.degree}>{edu.degree}</h2>
                <h3 className={styles.institution}>{edu.institution}</h3>
              </div>
            </div>

            <div className={styles.metaData}>
              <div className={styles.metaItem}>
                <MapPin size={18} className={styles.accentIcon} />
                <span>{edu.campus}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={18} className={styles.accentIcon} />
                <span>{edu.period}</span>
              </div>
            </div>

            <div className={styles.descriptionBox}>
              <GraduationCap size={24} className={styles.bgIcon} />
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
