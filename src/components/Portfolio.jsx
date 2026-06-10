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
      link: 'https://cure-link-49xojek8q-tushar-pants-projects.vercel.app/',
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
                className="portfolio-card"
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--glow-card)',
                  aspectRatio: '16/9',
                  backgroundColor: project.bgColor || 'var(--bg-secondary)',
                  cursor: 'pointer',
                  touchAction: 'manipulation',
                  display: 'block'
                }}
              >
                {/* Background Project Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />

                {/* Glass Details Hover Overlay */}
                <div
                  className="portfolio-overlay"
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
