import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        width: '100%', 
        textAlign: 'center', 
        padding: '30px 0', 
        borderTop: '1px solid var(--border-glass)',
        marginTop: '60px',
        backgroundColor: 'rgba(11, 15, 25, 0.4)'
      }}
    >
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          Copyright &copy; {currentYear} Tushar Pant. Made with{' '}
          <Heart size={16} fill="var(--color-accent)" color="var(--color-accent)" style={{ display: 'inline', animation: 'heartbeat 1.5s infinite' }} />{' '}
          in India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
