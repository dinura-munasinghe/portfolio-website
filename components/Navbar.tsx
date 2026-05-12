"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? 'glass' : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">&lt;Dinura /&gt;</span>
        </Link>
        
        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/experience" className={styles.navLink}>Experience</Link>
          <Link href="/certifications" className={styles.navLink}>Certifications</Link>
          <Link href="/resume" className={styles.navLink}>Resume</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {isOpen && (
        <div className={`${styles.mobileMenu} glass`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className={styles.navLink} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/experience" className={styles.navLink} onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="/certifications" className={styles.navLink} onClick={() => setIsOpen(false)}>Certifications</Link>
          <Link href="/resume" className={styles.navLink} onClick={() => setIsOpen(false)}>Resume</Link>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
