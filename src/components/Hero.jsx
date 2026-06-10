import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const words = ["Web Developer.", "UI/UX Designer.", "Problem Solver."];

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    let timer;

    const typeSpeed = isDeleting ? 40 : 80;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx]);

  return (
    <span style={{ position: 'relative' }}>
      <span style={{ color: 'var(--color-primary)' }}>{text}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{
          display: 'inline-block',
          marginLeft: '4px',
          width: '3px',
          height: '1.1em',
          background: 'var(--color-secondary)',
          verticalAlign: 'middle'
        }}
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
      
      {/* Background Soft Glow Blobs */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-content"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hero-tagline"
              style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}
            >
              Creative Web Developer
            </motion.p>
            
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Hi, I'm <span className="gradient-text">Tushar Pant</span>
              <br />
              From India
            </h1>

            <div className="hero-subtitle" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 700, minHeight: '40px', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
              I am a <TypingEffect />
            </div>
            
            <p className="hero-description" style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', maxWidth: '540px', marginBottom: '2.5rem' }}>
              Crafting beautiful, modern, and highly interactive user experiences with clean code and cutting-edge web technologies.
            </p>
            
            <div className="hero-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Let's Talk <ArrowRight size={18} />
              </a>
              <a href="/images/my-cv.pdf" download className="btn btn-secondary">
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>
          
          {/* Right Column: Animated Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="hero-image-container"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="image-frame-wrapper"
              style={{ position: 'relative', width: 'min(380px, 90vw)', aspectRatio: '1', borderRadius: '50%', padding: '8px', background: 'var(--gradient-accent)' }}
            >
              <div 
                className="image-frame-inner"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '4px solid var(--bg-secondary)'
                }}
              >
                <img 
                  src="/images/developer-avatar.png" 
                  alt="Developer Avatar" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transform: 'scale(1.05) translateY(5px)',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15) translateY(0px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(5px)'}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
