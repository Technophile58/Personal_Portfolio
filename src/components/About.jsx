import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' }
  ];

  const tabContents = {
    skills: [
      { title: 'Web Development', desc: 'HTML, CSS, JavaScript, React.js, Node.js, Express.js, EJS, MongoDB, Bootstrap, Tailwind CSS' },
      { title: 'Programming Languages', desc: 'C, Java, C++, Python, SQL' },
      { title: 'Tools & Platforms', desc: 'Git, GitHub, VS Code' }
    ],
    experience: [
      { date: 'June 2, 2025 - July 31, 2025', title: 'MERN Developer Intern', desc: 'Codec Technology, Mumbai (Virtual) — Built full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed RESTful APIs and optimized performance/responsiveness.' },
      { date: 'July 2, 2023 - Aug 2, 2023', title: 'Frontend Development Intern', desc: 'Barrownz Learning Academy, Lucknow — Designed and developed the frontend of a website using HTML, CSS, JavaScript, and Bootstrap. Enhanced application responsiveness and UX.' }
    ],
    education: [
      { date: '2024 - 2026', title: 'Master of Computer Applications (MCA)', desc: 'KIET Group of Institutions, Delhi-NCR, Ghaziabad. CGPA: 7.9 (1st Year)' },
      { date: '2021 - 2024', title: 'Bachelor of Computer Applications (BCA)', desc: 'MLK PG College, Balrampur. CGPA: 7.7' },
      { date: '2020', title: 'Class XII (UP Board)', desc: 'CMS Inter College, Balrampur. Percentage: 64%' }
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }}>
          
          <div className="about-columns">
            
            {/* Left Column: Stylized Image Frame */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-image-wrapper"
              style={{ position: 'relative' }}
            >
              <div 
                className="about-image-frame glass-panel"
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  padding: '12px',
                  boxShadow: 'var(--glow-card)',
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg) scale(1)'}
              >
                <img 
                  src="images/developer-avatar.png" 
                  alt="Developer Avatar" 
                  style={{ width: '100%', borderRadius: '12px', display: 'block', filter: 'grayscale(20%)' }}
                />
              </div>
            </motion.div>

            {/* Right Column: Narrative Bio & Tabs */}
            <div className="about-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="sub-title">About Me</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Hello! My name is <strong>Tushar Pant</strong>. I am a passionate, self-taught web developer with core expertise in crafting modular frontend applications. With a foundation in modern UI/UX design principles, I combine artistic layouts with clean, semantic, and efficient code to deliver functional web applications that make an impact. Let's connect and design something incredible together!
                </p>
              </motion.div>

              {/* Tab Switcher Headers */}
              <div 
                className="tab-switcher" 
                style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  marginBottom: '2rem', 
                  borderBottom: '1px solid var(--border-glass)', 
                  paddingBottom: '10px', 
                  position: 'relative',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        padding: '8px 12px',
                        position: 'relative',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {tab.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          style={{
                            position: 'absolute',
                            bottom: '-11px',
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: 'var(--gradient-accent)',
                            borderRadius: '2px'
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Contents */}
              <div className="tab-contents-panel" style={{ minHeight: '220px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    {activeTab === 'skills' && (
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {tabContents.skills.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '1.05rem' }}>{item.title}</span>
                            <span style={{ color: 'var(--color-text-muted)' }}>{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {activeTab === 'experience' && (
                      <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderLeft: '2px solid var(--border-glass)', paddingLeft: '20px', marginLeft: '5px' }}>
                        {tabContents.experience.map((item, idx) => (
                          <div key={idx} className="timeline-item" style={{ position: 'relative' }}>
                            <div 
                              className="timeline-bullet"
                              style={{ 
                                position: 'absolute', 
                                left: '-27px', 
                                top: '6px', 
                                width: '12px', 
                                height: '12px', 
                                borderRadius: '50%', 
                                background: 'var(--color-secondary)',
                                border: '2px solid var(--bg-primary)'
                              }}
                            />
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: '600' }}>{item.date}</span>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '4px 0' }}>{item.title}</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'education' && (
                      <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderLeft: '2px solid var(--border-glass)', paddingLeft: '20px', marginLeft: '5px' }}>
                        {tabContents.education.map((item, idx) => (
                          <div key={idx} className="timeline-item" style={{ position: 'relative' }}>
                            <div 
                              className="timeline-bullet"
                              style={{ 
                                position: 'absolute', 
                                left: '-27px', 
                                top: '6px', 
                                width: '12px', 
                                height: '12px', 
                                borderRadius: '50%', 
                                background: 'var(--color-primary)',
                                border: '2px solid var(--bg-primary)'
                              }}
                            />
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>{item.date}</span>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '4px 0' }}>{item.title}</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
