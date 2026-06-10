import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      icon: <Code size={40} className="service-icon" />,
      title: 'Web Development',
      desc: 'Crafting responsive, high-performance web applications using modern stacks. Focused on clean code structures, fast rendering speeds, and cross-browser compatibility.'
    },
    {
      icon: <Layout size={40} className="service-icon" />,
      title: 'UI/UX Design',
      desc: 'Designing intuitive user interfaces based on user psychology. Wireframing, building interactive prototypes, and creating structured user journeys for maximum conversion.'
    },
    {
      icon: <Database size={40} className="service-icon" />,
      title: 'Backend & APIs',
      desc: 'Building robust, secure server architectures and database schemas using Node.js, Express.js, and MongoDB. Designing RESTful API endpoints and integrating authentication frameworks.'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="sub-title">My Services</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="services-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px', 
            marginTop: '40px' 
          }}
        >
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                borderColor: 'var(--color-primary)',
                boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.3)'
              }}
              className="glass-panel service-card"
              style={{
                padding: '40px',
                borderRadius: '16px',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '1px solid var(--border-glass)'
              }}
            >
              <div 
                className="icon-container" 
                style={{ 
                  color: 'var(--color-primary)', 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}
              >
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {service.desc}
              </p>
              <a 
                href="#contact" 
                style={{ 
                  color: 'var(--color-primary)', 
                  fontWeight: '600', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '5px', 
                  marginTop: 'auto',
                  fontSize: '0.9rem' 
                }}
                className="learn-more-link"
              >
                Learn more &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
