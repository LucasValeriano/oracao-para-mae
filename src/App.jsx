import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Heart, Sparkles, BookHeart, CheckCircle2, Lock, ArrowRight, ChevronDown, HandHeart } from 'lucide-react';
import { copy } from './copy';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}>{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} color="var(--color-primary)" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ margin: 0 }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="app-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container text-center hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero-tag">{copy.hero.tag}</span>
            <h1 style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem', opacity: '0.4' }}>🕊️</span>
              {copy.hero.title} <span>{copy.hero.titleHighlight}</span>
            </h1>
            <p className="hero-subtitle">
              {copy.hero.subtitle}
            </p>
            <a href="#oferta" className="btn-primary pulse">
              <HandHeart size={24} />
              {copy.hero.button}
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problem-section">
        <div className="container">
          <motion.div 
            className="problem-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="problem-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)', opacity: 0.5, zIndex: -1 }}></div>
              <img src="/assets/book_mockup.png" alt="Guia Orações Poderosas" style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(183,110,121,0.25))', transform: 'rotate(2deg)' }} />
            </div>
            <div className="problem-text">
              <h2>{copy.problem.title}</h2>
              <p>{copy.problem.p1}</p>
              <p>{copy.problem.p2}</p>
              <p>{copy.problem.p3} <strong>{copy.problem.p3Highlight}</strong></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="symptoms-section" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            <h2 style={{ color: 'var(--color-primary-dark)' }}>{copy.symptoms.title}</h2>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>{copy.symptoms.subtitle}</p>
          </motion.div>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {copy.symptoms.items.map((symptom, idx) => (
              <motion.div key={idx} className="glass-card" variants={fadeUp} style={{ padding: '1.5rem', borderLeft: '4px solid var(--color-accent)' }}>
                <p style={{ margin: 0, fontWeight: '500', color: 'var(--color-text)', textAlign: 'left' }}>{symptom}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>{copy.benefits.title}</h2>
            <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>{copy.benefits.subtitle}</p>
          </motion.div>

          <motion.div 
            className="benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="benefit-card glass-card" variants={fadeUp}>
              <div className="benefit-icon">
                <Shield size={32} />
              </div>
              <h3>{copy.benefits.items[0].title}</h3>
              <p>{copy.benefits.items[0].text}</p>
            </motion.div>
            
            <motion.div className="benefit-card glass-card" variants={fadeUp}>
              <div className="benefit-icon">
                <Sparkles size={32} />
              </div>
              <h3>{copy.benefits.items[1].title}</h3>
              <p>{copy.benefits.items[1].text}</p>
            </motion.div>

            <motion.div className="benefit-card glass-card" variants={fadeUp}>
              <div className="benefit-icon">
                <Heart size={32} />
              </div>
              <h3>{copy.benefits.items[2].title}</h3>
              <p>{copy.benefits.items[2].text}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INSIDE THE GUIDE SECTION */}
      <section className="inside-section" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'white' }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            <h2>{copy.inside.title}</h2>
            <p className="hero-subtitle">{copy.inside.subtitle}</p>
          </motion.div>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {copy.inside.modules.map((module, index) => (
              <motion.div key={index} className="module-card glass-card" variants={fadeUp} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                <h3 style={{ color: 'var(--color-primary-dark)', borderBottom: '2px solid var(--color-primary-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{module.title}</h3>
                <p style={{ textAlign: 'justify' }}>{module.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="oferta" className="offer-section" style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-primary-light))' }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            <h2 style={{ color: 'var(--color-primary-dark)' }}>{copy.offer.title}</h2>
            <p className="hero-subtitle" style={{ color: 'var(--color-text)', maxWidth: '800px', margin: '0 auto' }}>{copy.offer.subtitle}</p>
          </motion.div>

          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'stretch' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {copy.offer.packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className="offer-card glass-card"
                style={{ 
                  border: pkg.isPopular ? '2px solid var(--color-primary)' : '1px solid #ddd', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  padding: '0',
                  flex: '1 1 280px',
                  maxWidth: '500px',
                  transform: pkg.isPopular ? 'scale(1.02)' : 'scale(1)',
                  zIndex: pkg.isPopular ? 2 : 1
                }}
                variants={fadeUp}
              >
                <div style={{ background: pkg.isPopular ? 'var(--color-primary)' : '#888', color: 'white', padding: '0.8rem', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {pkg.cardTag}
                </div>
                
                <div style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: 'calc(100% - 40px)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{pkg.cardTitle}</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>{pkg.cardSubtitle}</p>
                  </div>

                  <div style={{ textAlign: 'left', background: 'rgba(250, 249, 246, 0.5)', padding: '1.5rem', borderRadius: '12px', flex: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {pkg.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} color="var(--color-primary)" /> <span style={{ flex: 1 }}><strong>{item.text.split(':')[0]}{item.text.includes(':') ? ':' : ''}</strong> {item.text.includes(':') ? item.text.split(':')[1] : ''} (Valor: {item.value})</span></li>
                      ))}
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}><span>Valor Total do Pacote: <strike style={{ color: '#aaa', fontWeight: 'normal' }}>{pkg.totalValue}</strike></span></li>
                    </ul>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                    <div className="price-old" style={{ textDecoration: 'line-through', color: '#999', fontSize: '1.1rem' }}>{pkg.oldPriceText}</div>
                    <div className="price" style={{ color: 'var(--color-accent)', fontSize: '3.5rem', fontWeight: '900', lineHeight: '1', margin: '0.5rem 0' }}>{pkg.price}</div>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{pkg.installments}</p>
                  </div>
                  
                  <div style={{ marginTop: '0.5rem' }}>
                    <a href="#" style={{ width: '100%', marginBottom: '1rem', padding: '1.2rem', fontSize: '1.1rem', textTransform: 'uppercase' }} className={`btn-primary ${pkg.isPopular ? 'pulse' : ''}`}>
                      {pkg.button}
                      <ArrowRight size={20} />
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.85rem' }}>
                      <Lock size={14} /> {pkg.secureText}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="guarantee-section">
        <div className="container">
          <motion.div 
            className="guarantee-content glass-card"
            style={{ padding: 'var(--spacing-xl) var(--spacing-lg)', border: '2px dashed var(--color-accent)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="guarantee-image" style={{ marginBottom: 'var(--spacing-md)' }}>
              <img src="/assets/garantia_15_dias.png" alt="15 Dias de Garantia" style={{ width: '180px', height: 'auto', mixBlendMode: 'multiply' }} />
            </div>
            <h2>{copy.guarantee.title}</h2>
            <p><strong>{copy.guarantee.secureTag}</strong> {copy.guarantee.text}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>{copy.faq.title}</h2>
            <p className="hero-subtitle">{copy.faq.subtitle}</p>
          </motion.div>
          
          <motion.div 
            className="faq-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {copy.faq.items.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <FaqItem 
                  question={item.question}
                  answer={item.answer}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>{copy.footer.copyright}</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{copy.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
