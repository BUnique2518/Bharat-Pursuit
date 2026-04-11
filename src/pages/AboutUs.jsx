import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function LeadershipRoster() {
  const partners = [
    {
      name: 'Elena Rostova',
      role: 'Managing Partner, Strategy',
      bio: 'Former Engagement Manager at McKinsey. 15+ years advising Fortune 500 tech firms on global expansion and market positioning.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'David Chen',
      role: 'Partner, Cloud & AI Architecture',
      bio: 'Ex-AWS Principal Architect. Specializes in designing highly resilient, scalable data platforms and implementing enterprise AI pipelines.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marcus Thorne',
      role: 'Partner, Go-to-Market Integration',
      bio: 'Former VP Marketing at Snowflake. Master architect of Category Creation and complex B2B narrative systems.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--surface)', padding: '120px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container reveal-up">
        <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
          <div className="eyebrow-pill">Our Pedigree</div>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.2, margin: 0 }}>
            Led by strategists and engineers from the world’s most demanding firms.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {partners.map((partner, i) => (
            <div key={i} className="partner-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden' }}>
                <img
                  src={partner.image}
                  alt={partner.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)', transition: 'filter 0.5s ease, transform 0.5s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', margin: '0 0 8px 0' }}>{partner.name}</h3>
                <div style={{ color: 'var(--secondary)', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>{partner.role}</div>
                <p style={{ color: 'var(--text-soft)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                  {partner.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industryBgImages = {
  'Technology': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80")',
  'B2B SaaS': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80")',
  'Healthcare': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80")',
  'Financial Services': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80")',
  'Manufacturing': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80")',
  'Hiring': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80")',
  'Enterprise Software': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80")',
  'Emerging Tech': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80")'
};

const industries = [
  { name: 'Technology', color: '#3B82F6', description: 'SaaS platforms, cloud infrastructure, and tech innovation' },
  { name: 'B2B SaaS', color: '#8B5CF6', description: 'Enterprise software and subscription models' },
  { name: 'Healthcare', color: '#EC4899', description: 'Life sciences, health tech, and medical devices' },
  { name: 'Financial Services', color: '#F59E0B', description: 'Fintech, banks, and investment firms' },
  { name: 'Manufacturing', color: '#10B981', description: 'Industrial tech and smart manufacturing' },
  { name: 'Hiring', color: '#06B6D4', description: 'Consulting, legal, and accounting firms' },
  { name: 'Enterprise Software', color: '#6366F1', description: 'ERP, CRM, and enterprise platforms' },
  { name: 'Emerging Tech', color: '#D946EF', description: 'AI, blockchain, and cutting-edge innovation' }
];

export default function AboutUsPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('Technology');
  const [showArchitectureModal, setShowArchitectureModal] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>About Us | Bharat Pursuit | Strategy & Positioning Pedigree</title>
        <meta name="description" content="Learn about Bharat Pursuit, an elite consultancy led by former McKinsey and Snowflake strategists. We specialize in narrative architecture and global market expansion." />
        <meta name="keywords" content="Bharat Pursuit team, Elena Rostova, strategy leadership, narrative architecture, consulting pedigree" />
        <link rel="canonical" href="https://bharatpursuit.com/about" />
        <meta property="og:title" content="About Us | Bharat Pursuit" />
        <meta property="og:description" content="Elite strategy and positioning led by enterprise experts." />
      </Helmet>
      {/* Hero Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px', animation: 'fadeIn 0.6s ease' }}>
              About Bharat Pursuit
            </div>
            <h1 style={{
              fontSize: '52px',
              fontWeight: '800',
              marginBottom: '24px',
              color: 'transparent',
              lineHeight: 1.2,
              animation: 'slideUpAndColor 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              background: 'linear-gradient(to right, var(--primary) 0%, var(--secondary) 50%, #3B82F6 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = 'right';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = 'left';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              Strategy. Positioning. Global Growth.
            </h1>
            <p style={{ fontSize: '20px', color: 'var(--text-soft)', lineHeight: 1.8, animation: 'fadeIn 1s ease 0.2s backwards' }}>
              We partner with ambitious enterprises to build market positioning that commands trust, craft narratives that convert, and execute go-to-market strategies that scale globally.
            </p>
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="responsive-2col" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '24px', color: 'var(--primary)' }}>
                Why we are the best strategic agency for global growth
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-soft)', marginBottom: '16px' }}>
                Bharat Pursuit was founded on a singular belief: <strong>premium market positioning is a strategic imperative, not a marketing tactic.</strong> We built a firm dedicated to helping ambitious enterprises across borders clarify their competitive differentiation and execute with market confidence.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-soft)', marginBottom: '16px' }}>
                Every consulting engagement reflects our commitment to architectural excellence—disciplined strategy, clear narratives, and measurable outcomes. We don't believe in generic positioning. We believe in strategic clarity.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-soft)' }}>
                We serve enterprise clients across Technology, Healthcare, B2B SaaS, Financial Services, Manufacturing, and Professional Services. We help them think sharper, position stronger, and grow globally.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(196, 166, 100, 0.1) 0%, rgba(196, 166, 100, 0.05) 100%)',
              borderRadius: '16px',
              padding: '60px',
              textAlign: 'center',
              border: '1px solid rgba(196, 166, 100, 0.2)',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
              onClick={() => setShowArchitectureModal(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
                const animElements = e.currentTarget.querySelectorAll('.ai-particle, .ai-connection');
                animElements.forEach((el) => {
                  el.style.opacity = '0.6';
                  if (el.classList.contains('ai-particle')) {
                    el.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
                    el.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                  } else {
                    el.style.transform = `scaleX(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`;
                    el.style.transition = 'all 1s ease-in-out';
                  }
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
                e.currentTarget.style.boxShadow = 'none';
                const animElements = e.currentTarget.querySelectorAll('.ai-particle, .ai-connection');
                animElements.forEach(el => {
                  el.style.opacity = '0';
                  el.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
                });
              }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div className="ai-particle" style={{ top: '20%', left: '30%' }}></div>
                <div className="ai-particle" style={{ top: '60%', left: '70%' }}></div>
                <div className="ai-particle" style={{ top: '80%', left: '40%' }}></div>
                <div className="ai-connection" style={{ top: '40%', left: '50%', width: '100px' }}></div>
                <div className="ai-connection" style={{ top: '70%', left: '55%', width: '80px' }}></div>
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--secondary)', marginBottom: '8px' }}>
                  Architecture
                </div>
                <div style={{ fontSize: '16px', color: 'var(--text-soft)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Over Strategy
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '32px', lineHeight: 1.8 }}>
                  We believe consulting excellence comes from disciplined thinking, clear narrative architecture, and senior-led execution. That's how we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff' }}>
              Our Vision & Mission
            </h2>
          </div>
          <div className="responsive-2col">
            <div className="reveal-card-container">
              <img src="/vision-card.png" alt="Vision" className="reveal-card-image" />
              <div className="reveal-card-content">
                <h3 className="reveal-card-title">Our Vision</h3>
                <p className="reveal-card-desc">
                  To be the most trusted strategic consulting partner for enterprises seeking market clarity, competitive differentiation, and sustainable global growth.
                </p>
              </div>
            </div>
            <div className="reveal-card-container">
              <img src="/mission-card.png" alt="Mission" className="reveal-card-image" />
              <div className="reveal-card-content">
                <h3 className="reveal-card-title">Our Mission</h3>
                <p className="reveal-card-desc">
                  Deliver positioning architecture, go-to-market strategy, and executive advisory that transform how ambitious firms compete, communicate, and grow across international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Roster */}
      {/* <LeadershipRoster /> */}

      {/* How We Operate - Video Section */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)' }}>
              How We Operate
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-soft)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
              Watch how our structured methodology delivers transformation at every stage.
            </p>
          </div>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            background: '#000',
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0
          }}>
            <video
              width="100%"
              height="auto"
              style={{ display: 'block', borderRadius: '16px' }}
              controls autoPlay muted loop playsInline
              poster="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80"
            >
              <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{
        padding: '100px 0',
        background: industryBgImages[selectedIndustry],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        borderTop: '1px solid var(--line)',
        transition: 'background 0.6s ease',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'white' }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
              Click on any industry to explore how we serve that sector.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {industries.map((industry, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndustry(industry.name)}
                style={{
                  background: selectedIndustry === industry.name ? industry.color : 'var(--surface)',
                  border: `2px solid ${selectedIndustry === industry.name ? industry.color : 'var(--line)'}`,
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: selectedIndustry === industry.name ? 'scale(1.05) translateY(-8px)' : 'scale(1)',
                  boxShadow: selectedIndustry === industry.name ? '0 12px 24px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: selectedIndustry === industry.name ? '#fff' : 'var(--primary)',
                  transition: 'all 0.3s ease'
                }}>
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            animation: 'fadeIn 0.4s ease'
          }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '12px' }}>
              {selectedIndustry}
            </div>
            <p style={{ fontSize: '16px', color: 'var(--text-soft)', margin: 0, lineHeight: 1.8 }}>
              {industries.find(ind => ind.name === selectedIndustry)?.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, rgba(196, 166, 100, 0.1) 0%, rgba(196, 166, 100, 0.05) 100%)`,
        borderTop: '1px solid var(--line)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)', marginBottom: '24px' }}>
            Ready to Transform Your Market Positioning?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-soft)', marginBottom: '32px', lineHeight: 1.8 }}>
            Let's discuss how Bharat Pursuit can help your firm build premium positioning, strengthen market narratives, and accelerate global growth.
          </p>
          <a href="#" style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: 'var(--secondary)',
            color: 'var(--white)',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'opacity 0.2s ease'
          }}
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Schedule a Strategy Call
          </a>
        </div>
      </section>

      {/* Architecture Modal */}
      {showArchitectureModal && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'var(--bg)', opacity: 0.95, display: 'flex',
            alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            backdropFilter: 'blur(4px)', animation: 'fadeIn 0.3s ease',
            paddingLeft: '20px', paddingRight: '20px'
          }}
          onClick={() => setShowArchitectureModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)', borderRadius: '16px',
              border: '1px solid var(--line)', padding: '48px',
              maxWidth: '1000px', width: '100%', color: 'var(--primary)',
              boxShadow: '0 25px 50px var(--shadow)', animation: 'slideInUp 0.4s ease',
              maxHeight: '90vh', overflowY: 'auto', position: 'relative'
            }}
          >
            <button
              onClick={() => setShowArchitectureModal(false)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'rgba(196, 166, 100, 0.15)', border: 'none',
                borderRadius: '50%', width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--secondary)', transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--secondary)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(196, 166, 100, 0.15)'; e.currentTarget.style.color = 'var(--secondary)'; }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
            </button>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'rgba(196, 166, 100, 0.1)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                color: 'var(--secondary)'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>account_tree</span>
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px' }}>Architecture Over Strategy</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-soft)', lineHeight: 1.8 }}>
                Strategy dictates where you want to go. Architecture dictates exactly how the components of your enterprise interact to get you there.
              </p>
            </div>

            <div style={{
              background: 'var(--bg)', borderRadius: '16px', padding: '24px',
              marginBottom: '40px', position: 'relative', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--line)', boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.2)'
            }}>
              <img
                src="/assets/architectural_diagram.png"
                alt="Architectural Blueprint"
                style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', borderRadius: '8px', animation: 'fadeIn 0.8s ease' }}
              />
            </div>

            <div className="responsive-2col" style={{ gap: '30px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--secondary)' }}>
                  1. Structural Diagnosis
                </h4>
                <p style={{ color: 'var(--text-soft)', lineHeight: 1.8 }}>
                  We evaluate the fundamental building blocks of your brand equity to identify silos, misalignments, and friction points in your market communication.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--secondary)' }}>
                  2. Systems Engine
                </h4>
                <p style={{ color: 'var(--text-soft)', lineHeight: 1.8 }}>
                  Instead of disconnected marketing tactics, we build interconnected ecosystems that map directly to enterprise sales pipelines and KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
