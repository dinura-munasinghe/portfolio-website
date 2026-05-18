"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Palette, Smartphone, Terminal, Layout } from 'lucide-react';
import styles from './page.module.css';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}<span className={styles.cursor}>|</span></span>;
};

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.profileWrapper}>
            <Image
              src="https://github.com/dinura-munasinghe.png"
              alt="Dinura Munasinghe"
              width={180}
              height={180}
              className={styles.profilePic}
              priority
            />
            <div className={styles.profileGlow}></div>
          </div>

          <h1 className={styles.title}>
            Hi, I'm <span className="text-gradient"><TypewriterText text="Diinura Munasinghe" /></span>
          </h1>
          <p className={styles.subtitle}>
            Graphic Designer & Developer
          </p>
          <p className={styles.bio}>
            Computer Science undergraduate at the University of Westminster (IIT Campus) specialising in software development and UI/UX design. Hands-on experience across frontend and backend technologies with strong cross-functional leadership through AIESEC and IEEE. Passionate about building accessible, user-centred digital solutions.
          </p>

          <div className={styles.actionButtons}>
            <Link href="/projects" className={styles.primaryBtn}>
              Explore My Work <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>

          {/* Technical Skills Section */}
          <motion.div
            className={styles.skillsContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className={styles.skillsTitle}>Technical Toolkit</h3>
            <motion.div
              className={styles.skillsGrid}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.skillBadge}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -3, borderColor: "var(--accent-1)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={skill.icon} alt={skill.name} width={20} height={20} />
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
