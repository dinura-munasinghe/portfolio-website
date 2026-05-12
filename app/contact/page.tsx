"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here!
    // Get one for free at https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error", error);
      setStatus("error");
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind? Drop me a message below!
        </motion.p>
      </section>

      <motion.section 
        className={styles.formContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className={`${styles.contactBox} glass`}>
          <div className={styles.infoSide}>
            <div className={styles.profileSection}>
              <Image 
                src="https://github.com/dinura-munasinghe.png" 
                alt="Dinura Munasinghe" 
                width={120} 
                height={120} 
                className={styles.contactPic} 
              />
              <h2>Dinura Munasinghe</h2>
              <p>Computer Science undergraduate & Designer available for freelance work.</p>
            </div>

            <div className={styles.contactMethods}>
              <a href="mailto:dinuramunasinghe04@gmail.com" className={styles.contactMethod}>
                <Mail className={styles.accentIcon} /> dinuramunasinghe04@gmail.com
              </a>
              <div className={styles.socialGrid}>
                <a href="https://linkedin.com/in/dinura-munasinghe" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/dinura-munasinghe" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Github size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="How can I help you?"></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? 'Sending...' : <><Send size={18} /> Send Message</>}
            </button>

            {status === "success" && (
              <p className={styles.successMessage}><CheckCircle size={18} /> Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}><AlertCircle size={18} /> Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </motion.section>
    </main>
  );
}
