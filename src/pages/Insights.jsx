import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { insightsData } from '../constants';

const pageStyle = { maxWidth: '800px', margin: '140px auto 100px', padding: '0 24px', lineHeight: 1.8, color: 'var(--text-soft)' };
const pageHeadStyle = { color: 'var(--primary)', marginBottom: '32px', fontSize: '42px', letterSpacing: '-0.03em' };

export function InsightsPage() {
  return (
    <div style={{ background: 'var(--bg)', paddingBottom: '120px' }}>
      <Helmet>
        <title>Insights & Perspectives | Bharat Pursuit | Strategic Capital</title>
        <meta name="description" content="Deep-dive frameworks, architectural blueprints, and strategic market analysis from the partners at Bharat Pursuit." />
        <meta name="keywords" content="Bharat Pursuit blog, strategic insights, market analysis, enterprise frameworks, business newsletters" />
        <link rel="canonical" href="https://bharatpursuit.com/blogs" />
        <meta property="og:title" content="Insights | Bharat Pursuit" />
        <meta property="og:description" content="Intellectual capital and strategic perspectives for enterprises." />
      </Helmet>
      <section style={{ padding: '160px 0 80px', background: '#0a0a0a', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div className="eyebrow-pill" style={{ color: '#a0aab5', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', marginBottom: '24px' }}>Intellectual Capital</div>
          <h1 className="reveal-up" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '800', lineHeight: 1.1, margin: '0 0 24px 0' }}>Our Research & <span style={{ color: 'var(--secondary)' }}>Perspectives.</span></h1>
          <p className="reveal-up" style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: 0 }}>
            Deep-dive frameworks, architectural blueprints, and strategic market analysis from the partners at Bharat Pursuit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {insightsData.map((insight) => (
              <Link to={`/blogs/${insight.id}`} key={insight.id} className="insight-card reveal-up" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} onClick={() => window.scrollTo(0, 0)}>
                <div style={{ overflow: 'hidden', borderRadius: '16px', marginBottom: '24px', position: 'relative', aspectRatio: '16/9' }}>
                  <img
                    src={insight.image}
                    alt={insight.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), filter 0.7s ease', filter: 'grayscale(40%)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'grayscale(40%)'; }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{insight.type}</span>
                  <span style={{ color: 'var(--text-soft)', fontSize: '13px' }}>{insight.readTime}</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', lineHeight: 1.4, color: 'var(--primary)', marginBottom: '16px', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}>
                  {insight.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function InsightDetailPage() {
  const { id } = useParams();
  const insight = insightsData.find(i => i.id === id);

  if (!insight) {
    return (
      <div style={pageStyle}>
        <h1 style={pageHeadStyle}>Insight Not Found</h1>
        <Link to="/blogs" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Back to Insights</Link>
      </div>
    );
  }

  return (
    <article style={{ background: 'var(--bg)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
      <Helmet>
        <title>{`${insight.title} | Insights | Bharat Pursuit`}</title>
        <meta name="description" content={insight.content.substring(0, 160)} />
        <link rel="canonical" href={`https://bharatpursuit.com/blogs/${insight.id}`} />
        <meta property="og:title" content={insight.title} />
        <meta property="og:description" content={insight.content.substring(0, 160)} />
      </Helmet>
      <header style={{ padding: 'clamp(100px, 15vh, 160px) 0 80px', background: '#0a0a0a', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Link to="/blogs" style={{ color: 'var(--secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontWeight: '600' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span> Back to Perspectives
          </Link>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '20px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{insight.type}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', lineHeight: 1.2, marginBottom: '32px' }}>{insight.title}</h1>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>{insight.readTime} • Published March 2026</div>
        </div>
      </header>

      <div className="container" style={{ maxWidth: '800px', margin: '-60px auto 0', position: 'relative', zIndex: 2 }}>
        <img
          src={insight.image}
          alt={insight.title}
          style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 32px 64px rgba(0,0,0,0.2)', marginBottom: '80px' }}
        />
        <div style={{ fontSize: '18px', lineHeight: 1.9, color: 'var(--text-soft)', whiteSpace: 'pre-line' }}>
          {insight.content}
        </div>

        <div style={{ marginTop: '100px', padding: '60px', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--line)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>Want to discuss these strategic implications?</h3>
          <p style={{ color: 'var(--text-soft)', marginBottom: '32px' }}>Our partners help leadership teams translate market insights into commercial execution.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }} className="btn btn-gold">Connect with a Partner</a>
        </div>
      </div>
    </article>
  );
}
