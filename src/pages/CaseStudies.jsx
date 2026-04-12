import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { caseStudiesData } from '../constants';

const pageStyle = { maxWidth: '800px', margin: '140px auto 100px', padding: '0 24px', lineHeight: 1.8, color: 'var(--text-soft)' };
const pageHeadStyle = { color: 'var(--primary)', marginBottom: '32px', fontSize: '42px', letterSpacing: '-0.03em' };

export function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies & Impact | Bharat Pursuit architectural reviews</title>
        <meta name="description" content="Explore Bharat Pursuit's successful engagements. Our case studies highlight how we've architected commercial impact for global enterprises." />
        <meta name="keywords" content="Bharat Pursuit case studies, strategic impact, enterprise transformation reviews, tech consultancy results" />
        <link rel="canonical" href="https://bharatpursuit.com/case-studies" />
        <meta property="og:title" content="Case Studies | Bharat Pursuit" />
        <meta property="og:description" content="Architecting measurable commercial impact for industry leaders." />
      </Helmet>
      {/* Hero Banner Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 80px',
        background: '#0a0a0a',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#a0aab5',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>Our Work</div>
          <h1 className="reveal-up" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '800', lineHeight: 1.1, margin: '0 0 24px 0', letterSpacing: '-0.02em', maxWidth: '800px' }}>
            Transforming ambition into measurable <span style={{ color: 'var(--secondary)' }}>commercial impact.</span>
          </h1>
          <p className="reveal-up" style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '640px' }}>
            Read how we have partnered with industry leaders and fast-growing organizations to solve complex strategy, data, and engineering challenges.
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: '0', right: '0', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      </section>

      {/* Grid Section */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {caseStudiesData.map((c) => (
              <article key={c.id} className="case-card reveal-up">
                <div>
                  <span className="tag-pill tag-pill-primary" style={{ marginBottom: '16px' }}>{c.tag}</span>
                </div>
                <h3 style={{ margin: '0 0 16px 0', color: 'var(--primary)', fontSize: '22px', fontWeight: '800', lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ color: 'var(--text-soft)', marginBottom: '0', fontSize: '15px', lineHeight: 1.7 }}>{c.summary}</p>

                <div className="case-metric-box">
                  <span className="case-metric-highlight">{c.metric}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-soft)', fontWeight: '500' }}>{c.metricLabel}</span>
                </div>

                <Link to={`/case-studies/${c.id}`} onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid var(--secondary)', paddingBottom: '4px', width: 'fit-content' }}>
                  Read architectural review <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '16px' }}>Have a similar strategic challenge?</h2>
          <p style={{ color: 'var(--text-soft)', marginBottom: '32px', fontSize: '16px' }}>Let's discuss how our cross-functional teams can architect a solution.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }} className="btn btn-primary" style={{ padding: '0 32px' }}>Start the conversation</a>
        </div>
      </section>
    </>
  );
}

export function CaseStudyDetailPage() {
  const { id } = useParams();
  const c = caseStudiesData.find(cs => cs.id === id);

  if (!c) {
    return (
      <div style={pageStyle}>
        <h1 style={pageHeadStyle}>Case Study Not Found</h1>
        <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <article style={{ background: 'var(--bg)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
      <Helmet>
        <title>{`${c.title} | Case Study | Bharat Pursuit`}</title>
        <meta name="description" content={c.summary} />
        <link rel="canonical" href={`https://bharatpursuit.com/case-studies/${c.id}`} />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.summary} />
      </Helmet>
      {/* Detail Hero */}
      <header style={{ padding: 'clamp(100px, 15vh, 160px) 0 clamp(60px, 10vh, 100px)', background: '#0a0a0a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontWeight: '600' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span> Back to Work
          </Link>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '20px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.tag}</span>
          </div>
          <h1 className="reveal-up" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', lineHeight: 1.15, margin: '0 0 40px 0', maxWidth: '900px' }}>
            {c.title}
          </h1>

          {/* Hero Metrics Strip */}
          <div className="reveal-scale" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 40px', padding: 'clamp(20px, 4vw, 32px)', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '900px', backdropFilter: 'blur(10px)' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--secondary)', lineHeight: 1 }}>{c.metric}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', marginTop: '8px' }}>{c.metricLabel}</div>
            </div>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(196, 166, 100, 0.1) 0%, transparent 70%)', transform: 'translate(20%, -20%)', pointerEvents: 'none' }}></div>
      </header>

      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'clamp(40px, 8vw, 80px)' }}>
        {/* Context Section */}
        <section className="reveal-up" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(196, 166, 100, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">radar</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>The Challenge & Context</h2>
          </div>
          <p style={{ fontSize: '18px', color: 'var(--text-soft)', lineHeight: 1.8 }}>{c.context}</p>
        </section>

        {/* Architecture Section */}
        <section className="reveal-up" style={{ marginBottom: '80px', padding: '60px', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(196, 166, 100, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">account_tree</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>The Architectural Approach</h2>
          </div>
          <p style={{ fontSize: '18px', color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '32px' }}>{c.architecture}</p>
        </section>

        {/* Results Section */}
        <section className="reveal-up">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(196, 166, 100, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">verified</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>Commercial Outcomes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {c.results.map((result, i) => (
              <div key={i} style={{ padding: '24px', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '16px', display: 'flex', gap: '16px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>check_circle</span>
                <span style={{ fontSize: '16px', color: 'var(--primary)', fontWeight: '600', lineHeight: 1.5 }}>{result}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>Want to discuss this further?</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }} className="btn btn-gold">Connect with a Partner</a>
          </div>
        </section>
      </div>
    </article>
  );
}
