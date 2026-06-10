import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar-scrolled glass-panel' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'padding 0.3s ease, background-color 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.5px' }}>
          <span style={{ color: 'var(--color-text)' }}>Tushar</span>
          <span className="gradient-text">Pant</span>
        </a>

        {/* Desktop Links */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '30px', listStyle: 'none', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="nav-link"
                style={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  position: 'relative',
                  padding: '5px 0'
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="menu-toggle" 
          aria-label="Toggle Menu"
          style={{ 
            minWidth: '44px', 
            minHeight: '44px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 999
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-drawer glass-panel"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '280px',
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 30px',
                gap: '25px',
                borderLeft: '1px solid var(--border-glass)',
                zIndex: 1000,
                boxShadow: 'var(--glow-card)'
              }}
            >
              <button 
                onClick={toggleMenu} 
                className="menu-toggle"
                style={{ 
                  alignSelf: 'flex-end', 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--color-text)', 
                  cursor: 'pointer',
                  marginBottom: '20px'
                }}
              >
                <X size={28} />
              </button>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="mobile-nav-link"
                  style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 600, 
                    padding: '12px 0', 
                    display: 'block',
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
