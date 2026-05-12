"use client";
import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { getProjectById } from '@/data/projects';
import styles from './project.module.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id as string);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <motion.div
          className={styles.backNav}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/projects" className={styles.backBtn}>
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </motion.div>

        <motion.div
          className={`${styles.heroImageContainer} glass`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.coverImage} alt={project.title} className={styles.heroImage} />
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.mainContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.category}>{project.category}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.fullDesc}</p>

            <h2 className={styles.subTitle}>Key Features</h2>
            <ul className={styles.featuresList}>
              {project.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>

            {project.galleryImages && (
              <div className={styles.gallery}>
                <h2 className={styles.subTitle}>Gallery</h2>
                <div className={styles.galleryGrid}>
                  {project.galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      className={styles.imgWrapper}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(img)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={`Gallery ${i}`} className={styles.galleryImg} />
                      <div className={styles.imgOverlay}>
                        <span>Click to view full size</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className={styles.sidebar}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={`${styles.infoCard} glass`}>
              <h3 className={styles.cardTitle}>Project Info</h3>

              {project.techStack && (
                <div className={styles.techStack}>
                  <h4>Technologies</h4>
                  <div className={styles.tags}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={styles.tag}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <a href={project.link} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                View Full Project <ExternalLink size={18} />
              </a>
              {project.website && (
                <a href={project.website.startsWith('http') ? project.website : `https://${project.website}`} target="_blank" rel="noreferrer" className={styles.secondaryBtn} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', padding: '1rem', borderRadius: '8px', border: '1px solid var(--accent-1)', color: 'var(--accent-1)', textDecoration: 'none' }}>
                  Visit Live Website <ExternalLink size={18} style={{ marginLeft: '0.5rem' }} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Full size"
              className={styles.lightboxImg}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
