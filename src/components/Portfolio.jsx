import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      img: '/images/snapcaption.png',
      title: 'Snap Caption AI',
      desc: 'An AI-powered image captioning web app built with React, Node.js, Gemini Vision API, and ImageKit cloud storage. Features secure JWT authentication.',
      link: 'https://snapcaption-ai.vercel.app/',
      bgColor: '#0c0d14'
    },
    {
      img: '/images/curelink.png',
      title: 'CureLink',
      desc: 'A full-stack doctor appointment booking application built with React.js, Node.js, Express.js, and MongoDB. Includes patient registration, doctor search, and appointment booking.',
      link: 'https://cure-link-zeta.vercel.app/',
      bgColor: '#ffffff'
    },
    {
      img: '/images/quorapost.png',
      title: 'Quora Post Clone',
      desc: 'A Quora-like community web app built with HTML, CSS, JavaScript, Express.js, EJS, and REST APIs. Implements full CRUD posts and dynamic rendering.',
      link: 'https://quora-post-jvcz.onrender.com/posts',
      bgColor: '#f4f4f4'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="sub-title">My Work</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="portfolio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={projectVariants}
              className="portfolio-card-wrapper"
              style={{ display: 'block' }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card-container"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--glow-card)',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                {/* Image & Desktop Overlay Wrapper */}
                <div
                  className="portfolio-card-media"
                  style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    backgroundColor: project.bgColor || 'var(--bg-secondary)'
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                  />

                  {/* Desktop Hover Glass Overlay */}
                  <div
                    className="portfolio-desktop-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(11, 15, 25, 0.98) 20%, rgba(99, 102, 241, 0.75) 100%)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '30px',
                      color: 'white',
                      textAlign: 'left'
                    }}
                  >
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>{project.title}</h3>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                      {project.desc}
                    </p>
                    <div
                      className="project-link-btn"
                      style={{
                        alignSelf: 'flex-start',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'white',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transition: 'transform 0.2s ease, background-color 0.2s ease'
                      }}
                    >
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                {/* Mobile Details Panel (Visible on mobile/tablet, hidden on desktop) */}
                <div
                  className="portfolio-mobile-details"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    textAlign: 'left'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {project.desc}
                  </p>
                  <div
                    className="btn btn-primary"
                    style={{
                      alignSelf: 'flex-start',
                      padding: '8px 18px',
                      fontSize: '0.85rem',
                      gap: '6px',
                      marginTop: '5px'
                    }}
                  >
                    Visit Project <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
        >
          <a href="#" className="btn btn-secondary" style={{ padding: '14px 40px' }}>
            See more work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
