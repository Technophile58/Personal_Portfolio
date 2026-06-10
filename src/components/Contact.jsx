import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Download, Github, Code2 } from 'lucide-react';
import emailjs from "@emailjs/browser";
const Contact = () => {
  // CONFIGURATION: Replace with your actual Google Apps Script web app URL
  // const scriptURL = '#'; 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('success'); // 'success' | 'error' | 'info'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Check if configuration is set
  //   if (!scriptURL || scriptURL === '#') {
  //     setIsSubmitting(true);
  //     setStatusType('info');
  //     setStatus('Sending... (Demo Simulation)');
      
  //     // Simulate successful submission for demonstration
  //     setTimeout(() => {
  //       setIsSubmitting(false);
  //       setStatusType('success');
  //       setStatus('Demo: Message sent successfully! (Configure scriptURL in Contact.jsx for real submissions)');
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //       setTimeout(() => setStatus(''), 7000);
  //     }, 1200);
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setStatusType('info');
  //   setStatus('Sending your message...');

  //   const formData = new FormData();
  //   formData.append('Name', name);
  //   formData.append('Email', email);
  //   formData.append('Message', message);

  //   fetch(scriptURL, { method: 'POST', body: formData })
  //     .then(response => {
  //       setStatusType('success');
  //       setStatus('Message sent successfully!');
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //       setTimeout(() => setStatus(''), 5000);
  //     })
  //     .catch(error => {
  //       console.error('Error!', error.message);
  //       setStatusType('error');
  //       setStatus('Error: Could not submit form. Please check scriptURL settings.');
  //       setTimeout(() => setStatus(''), 6000);
  //     })
  //     .finally(() => {
  //       setIsSubmitting(false);
  //     });
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setStatusType("info");
  setStatus("Sending your message...");

  try {
    await emailjs.send(
      "service_8ge27il",
      "template_3p4bpvg",
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      "saWCITvxB2FNiUpTR"
    );

    setStatusType("success");
    setStatus("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setStatus("");
    }, 5000);
  } catch (error) {
    console.error(error);

    setStatusType("error");
    setStatus("Failed to send message.");

    setTimeout(() => {
      setStatus("");
    }, 5000);
  }

  setIsSubmitting(false);
};
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px' }}>
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-left-col"
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <h2 className="sub-title">Contact Me</h2>
            
            <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--color-primary)', background: 'rgba(99, 102, 241, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                  <a href="mailto:tusharchandrapant484@gmail.com" style={{ fontSize: '1.05rem', fontWeight: 600 }}>tusharchandrapant484@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Connect with me</h4>
              <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
                {[
                  { icon: <Github size={20} />, href: 'https://github.com/Technophile58', label: 'GitHub' },
                  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/tushar-pant15', label: 'LinkedIn' },
                  { icon: <Code2 size={20} />, href: 'https://leetcode.com/u/Tushar_pant85', label: 'LeetCode' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    title={social.label}
                    whileHover={{ y: -5, color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-muted)',
                      transition: 'border-color 0.2s, color 0.2s'
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <a href="images/my-cv.pdf" download className="btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-right-col"
          >
            <form onSubmit={handleSubmit} className="glass-panel contact-form" style={{ padding: '40px', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '20px' }}>Send a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', marginTop: '10px' }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'} <Send size={16} />
              </button>

              {status && (
                <div
                  style={{
                    marginTop: '20px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    backgroundColor: 
                      statusType === 'success' ? 'rgba(16, 185, 129, 0.15)' : 
                      statusType === 'error' ? 'rgba(244, 63, 94, 0.15)' : 
                      'rgba(99, 102, 241, 0.15)',
                    color: 
                      statusType === 'success' ? '#10b981' : 
                      statusType === 'error' ? '#f43f5e' : 
                      '#818cf8',
                    border: '1px solid currentColor'
                  }}
                >
                  {status}
                </div>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
