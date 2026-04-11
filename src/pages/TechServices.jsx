import React from 'react';
import { Helmet } from 'react-helmet-async';
import { techServices } from '../constants';

export default function TechServicesPage() {
  return (
    <>
      <Helmet>
        <title>Best AI Engineering & Digital Studio | Bharat Pursuit</title>
        <meta name="description" content="Bharat Pursuit is recognized as the best AI engineering studio for ambitious enterprises. We build high-scale digital products, AI systems, and cloud infrastructure with elite precision." />
        <meta name="keywords" content="best AI engineering, top digital studio, custom software development agency, enterprise AI agents, cloud architecture experts" />
        <link rel="canonical" href="https://bharatpursuit.com/tech" />
        <meta property="og:title" content="Best AI Engineering & Digital Studio | Bharat Pursuit" />
        <meta property="og:description" content="Recognized among the world's best for scalable AI products and enterprise engineering." />
      </Helmet>
      {/* Hero Banner Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 80px',
        background: '#0a0a0a',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(196, 166, 100, 0.1)',
              color: 'var(--secondary)',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              border: '1px solid rgba(196, 166, 100, 0.2)'
            }}>The Best AI-Driven Digital Studio</div>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '800', lineHeight: 1.1, margin: '0 0 24px 0', letterSpacing: '-0.02em' }}>
              Building <span style={{ color: 'var(--secondary)' }}>digital products</span> & AI systems that scale enterprises.
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '640px' }}>
              We don't just write code. We architect solutions. From intelligent AI agents to scalable cloud infrastructure, we deliver end-to-end engineering excellence with precision and agility.
            </p>
          </div>
        </div>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(196,166,100,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      </section>

      {/* Services Grid Section */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {techServices.map((t) => (
              <div key={t.id} className="tech-card">
                <div className="tech-card-number">{t.number}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>{t.icon}</span>
                  <h3 style={{ margin: 0, fontSize: '24px', color: 'var(--primary)', fontWeight: '800' }}>{t.title}</h3>
                </div>
                <p style={{ color: 'var(--text-soft)', lineHeight: 1.7, margin: '0 0 16px 0', fontSize: '15px' }}>{t.summary}</p>

                <div className="tech-tags">
                  {t.tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-soft)', marginBottom: '12px' }}>Capabilities</div>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.8 }}>
                    {t.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>

                <div className="tech-metric">
                  <div className="tech-metric-value">{t.metric.value}</div>
                  <div className="tech-metric-label">{t.metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)', margin: '0 0 16px 0' }}>Calm, predictable, no-chaos delivery.</h2>
            <p style={{ color: 'var(--text-soft)', fontSize: '16px', lineHeight: 1.8 }}>Launching a product is only step one. Our process keeps you in the loop with tight feedback cycles without drowning you in endless calls.</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-step-num">1</div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--primary)' }}>Discovery & Scope</h4>
              <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.6 }}>Deep-dive into product requirements, user behavior, and constraints. We ask the hard strategic questions upfront.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">2</div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--primary)' }}>Architecture & Design</h4>
              <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.6 }}>Scalable system architecture, UX/UI wireframes, and a clear roadmap. We design for current needs and future runway without overengineering.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">3</div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--primary)' }}>Build & Integrate</h4>
              <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.6 }}>Full-stack development and AI model integration executed in tight, weekly transparent sprints.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">4</div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--primary)' }}>Launch & Scale</h4>
              <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.6 }}>Deploy infrastructure, harden security, monitor telemetry, and optimize workflows via automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#0a0a0a', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '40px', color: 'white', marginBottom: '24px' }}>Ready to architect your digital future?</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }} className="btn btn-gold" style={{ padding: '0 32px', fontSize: '16px', minHeight: '56px' }}>Book a Tech Strategy Call</a>
        </div>
      </section>
    </>
  );
}
