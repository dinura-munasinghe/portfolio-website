"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import styles from './page.module.css';

export default function Experience() {
  const experiences = [
    {
      role: "Vice President, oGX B2C",
      organization: "AIESEC in IIT",
      period: "2026 – Present",
      description: "Leading B2C marketing strategy and departmental operations to drive global exchange participation and achieve Official Expansion status.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/AIESEC_Logo.png"
    },
    {
      role: "National Showcasing Team, Graphic Designer",
      organization: "AIESEC in Sri Lanka",
      period: "2026 – Present",
      description: "Producing national-level visual content representing AIESEC Sri Lanka’s brand across digital platforms.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/AIESEC_Logo.png"
    },
    {
      role: "Design Team Lead, Digital Experience Function",
      organization: "AIESEC in IIT",
      period: "2025",
      description: "Directed creative strategy and managed a design team producing digital content for global volunteer campaigns.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/AIESEC_Logo.png"
    },
    {
      role: "Organizing Committee Vice President, Marketing",
      organization: "AIESEC in IIT (Voyage’25)",
      period: "2025",
      description: "Oversaw event branding and promotional strategy to maximise audience reach and engagement.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/AIESEC_Logo.png"
    },
    {
      role: "Executive Committee Member, Design & Marketing",
      organization: "Hult Prize at IIT",
      period: "2025",
      description: "Created visual identities and digital collateral to drive student engagement and event registration.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hult_Prize_Logo.png/1200px-Hult_Prize_Logo.png"
    },
    {
      role: "Volunteer Designer",
      organization: "IEEE Student Branch at IIT",
      period: "2024 – 2025",
      description: "Branding, digital content, and design support across six national-level events (IX’25, ADAPTIQ, Model X, INSL, Sherlock 3.0, Codesprint 11).",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png"
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
          My <span className="text-gradient">Experience</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My volunteering and extracurricular leadership roles.
        </motion.p>
      </section>

      <section className={styles.timelineContainer}>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.timelineDot}>
                <Briefcase size={20} />
              </div>
              <div className={`${styles.timelineContent} glass`}>
                <div className={styles.orgHeader}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {exp.logo && <img src={exp.logo} alt={exp.organization} className={styles.orgLogo} />}
                  <div>
                    <h4 className={styles.org}>{exp.organization}</h4>
                    <span className={styles.period}><Calendar size={14}/> {exp.period}</span>
                  </div>
                </div>
                
                <h3 className={styles.roleTitle}>{exp.role}</h3>
                <p className={styles.desc}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
