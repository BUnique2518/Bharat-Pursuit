import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services, proof, sectors, approach, reasons, companyLogos, insightsData } from '../constants';

// Custom hook for animated counter
function useAnimatedCounter(targetValue, duration = 2000, isVisible = true) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const numericValue = parseInt(targetValue);
    if (isNaN(numericValue)) {
      setCount(targetValue);
      return;
    }

    const startTime = Date.now();
    let animationFrameId;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.floor(progress * numericValue);
      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetValue, duration, isVisible]);

  return count;
}

function ProofCard({ item }) {
  const proofRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (proofRef.current) {
      observer.observe(proofRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animatedCount = useAnimatedCounter(item.value, 2000, isVisible);
  const suffix = item.value.replace(/[0-9]/g, '');

  return (
    <div className="proof-card" ref={proofRef}>
      <div className="proof-value">
        {animatedCount}{suffix}
      </div>
      <div className="proof-label">{item.label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <div className="eyebrow-pill">The Best Strategic Agency for Global Enterprises</div>
          <h1>Architecting future dominance through the world's best strategy and elite engineering.</h1>
          <p className="hero-text">
            Bharat Pursuit is the consulting partner for ambitious enterprises. We bridge the gap between high-level market positioning and deep technical execution, delivering end-to-end transformation that scales globally.
          </p>

          <div className="hero-actions">
            <a href="#" className="btn btn-gold" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }}>Schedule Strategy Consultation</a>
            <a href="#services" className="btn btn-outline">Discover Our Methodology</a>
          </div>

          <div className="hero-points">
            <div className="info-card">
              <h3>Strategic Design</h3>
              <p>Positioning rooted in buyer psychology and competitive differentiation.</p>
            </div>
            <div className="info-card">
              <h3>Engineering Execution</h3>
              <p>Scalable cloud infrastructure, AI integration, and robust solutions.</p>
            </div>
            <div className="info-card">
              <h3>Senior-Led Excellence</h3>
              <p>No junior handoff. Experienced partners drive every engagement.</p>
            </div>
          </div>
        </div>

        <div className="hero-panel-wrap reveal-scale">
          <div className="hero-panel tilt-card">
            <div className="panel-glow"></div>
            <div className="panel-content">
              <div className="panel-heading-row">
                <div>
                  <div className="panel-eyebrow">Enterprise-Grade Strategy</div>
                  <h2>Transform positioning into competitive advantage</h2>
                </div>
                <div className="mini-orb"></div>
              </div>

              <div className="proof-grid">
                {proof.map((item) => (
                  <ProofCard item={item} key={item.label} />
                ))}
              </div>

              <div className="panel-note">
                From diagnostic positioning audits through market narrative architecture to executive alignment and execution,
                we help firms command trust in sophisticated markets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesDualPillar() {
  return (
    <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', padding: '120px 0' }}>
      <div className="container reveal-up">
        <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
          <div className="eyebrow-pill">Our Unified Capabilities</div>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.2, marginBottom: '24px' }}>
            Recognized as the best agency for unified strategy and enterprise engineering.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '24px', padding: '48px', position: 'relative', overflow: 'hidden' }} className="reveal-tl">
            <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(196, 166, 100, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--secondary)', marginBottom: '24px' }}>strategy</span>
            <h3 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', marginBottom: '16px' }}>Strategic Design</h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
              We architect market-dominating positioning, narrative frameworks, and go-to-market strategies that resonate with enterprise buyers and global stakeholders.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Diagnostic Audits', 'Go-To-Market Strategy', 'Brand Architecture', 'Executive Alignment'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--primary)', fontWeight: '600' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '24px', padding: '48px', position: 'relative', overflow: 'hidden' }} className="reveal-tr">
            <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#3B82F6', marginBottom: '24px' }}>code_blocks</span>
            <h3 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', marginBottom: '16px' }}>Engineering Execution</h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
              Strategy requires execution. Our engineering pods build the scalable infrastructure, AI products, and data pipelines necessary to actualize your vision.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['AI & ML Integration', 'Cloud Architecture', 'Custom Software Development', 'Data Engineering'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--primary)', fontWeight: '600' }}>
                  <span className="material-symbols-outlined" style={{ color: '#3B82F6', fontSize: '20px' }}>check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const containerRef = React.useRef(null);
  const [selectedService, setSelectedService] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".service-animate");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedService]);

  const getAnimationClass = (index) => {
    switch (index) {
      case 0: return "reveal-tl";
      case 1: return "reveal-tr";
      case 2: return "reveal-bl";
      case 3: return "reveal-br";
      default: return "reveal-tl";
    }
  };

  return (
    <>
      <section className="section" id="services">
        <div className="container" ref={containerRef}>
          <div className="section-head">
            <div className="section-kicker">Core Consulting Services</div>
            <h2>Cornerstone engagements built to sharpen strategy, strengthen positioning, and sustain momentum.</h2>
            <p>
              Each service discipline is designed with enterprise complexity in mind. We reduce strategic ambiguity,
              establish clear competitive narratives, and equip leadership teams to execute with market confidence.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className={`service-card tilt-card service-animate ${getAnimationClass(index)}`}
                key={service.title}
                onClick={() => setSelectedService(service)}
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(20, 37, 56, 0.08)';
                  const iconCircle = e.currentTarget.querySelector('.icon-circle');
                  if (iconCircle) {
                    iconCircle.style.backgroundColor = 'var(--primary)';
                    iconCircle.style.color = 'var(--secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  const iconCircle = e.currentTarget.querySelector('.icon-circle');
                  if (iconCircle) {
                    iconCircle.style.backgroundColor = 'rgba(196, 166, 100, 0.15)';
                    iconCircle.style.color = 'var(--accent, var(--secondary))';
                  }
                }}
              >
                <div className="service-top">
                  <div className="icon-circle">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <div className="service-number">{service.number}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-link" onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}>Learn more</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="service-modal-overlay"
          onClick={() => setSelectedService(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg)',
            opacity: 0.95,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.3s ease',
            paddingLeft: '20px',
            paddingRight: '20px'
          }}
        >
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)',
              borderRadius: '16px',
              border: '1px solid var(--line)',
              padding: '48px',
              maxWidth: '700px',
              width: '100%',
              color: 'var(--primary)',
              boxShadow: '0 25px 50px var(--shadow)',
              animation: 'slideInUp 0.4s ease',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(196, 166, 100, 0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--secondary)',
                transition: 'all 0.2s ease'
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'rgba(196, 166, 100, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  fontSize: '32px'
                }}
              >
                <span className="material-symbols-outlined">{selectedService.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Service {selectedService.number}
                </div>
                <h2 style={{ margin: '0', fontSize: '28px', color: 'var(--primary)' }}>
                  {selectedService.title}
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-soft)' }}>
              {selectedService.details.overview}
            </p>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)' }}>
                Key Outcomes
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {selectedService.details.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '12px 0',
                      borderBottom: i < selectedService.details.outcomes.length - 1 ? `1px solid var(--line)` : 'none',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{ color: 'var(--secondary)', marginTop: '4px', minWidth: '20px' }}>✓</span>
                    <span style={{ color: 'var(--text-soft)' }}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)' }}>
                Our Process
              </h3>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'step' }}>
                {selectedService.details.process.map((step, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '12px 0 12px 36px',
                      borderBottom: i < selectedService.details.process.length - 1 ? `1px solid var(--line)` : 'none',
                      position: 'relative',
                      color: 'var(--text-soft)'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '12px',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'var(--secondary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="responsive-2col" style={{ padding: '24px 0', borderTop: `1px solid var(--line)` }}>
              <div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', fontWeight: '600', marginBottom: '8px' }}>
                  Best For
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.6' }}>
                  {selectedService.details.bestFor}
                </p>
              </div>
              <div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', fontWeight: '600', marginBottom: '8px' }}>
                  Typical Timeline
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.6' }}>
                  {selectedService.details.timeline}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setSelectedService(null);
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="btn btn-gold"
              style={{ display: 'block', marginTop: '24px', width: '100%', textAlign: 'center' }}
            >
              Schedule a Consultation for This Service
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Approach() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-flipped");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".flip-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-dark" id="approach">
      <div className="container approach-grid" ref={containerRef}>
        <div className="section-head dark">
          <div className="section-kicker">Our Methodology</div>
          <h2>Structured consulting architecture for disciplined growth execution.</h2>
          <p>
            Our approach combines strategic diagnosis with market intelligence, narrative engineering, and executable
            frameworks. We transform positioning thinking into organizational capability that compounds competitive advantage.
          </p>
        </div>

        <div className="approach-cards">
          {approach.map((item, index) => (
            <div className="flip-card" key={item.title}>
              <div
                className="flip-card-inner"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flip-card-front approach-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div style={{ fontSize: '42px', color: 'rgba(255, 255, 255, 0.12)', fontWeight: '800', lineHeight: 1 }}>0{index + 1}</div>
                  <h3 style={{ marginTop: '30px' }}>{item.title}</h3>
                </div>
                <div className="flip-card-back approach-card">
                  <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const [expanded, setExpanded] = React.useState(false);
  const [typingIndex, setTypingIndex] = React.useState(-1);
  const [typedChars, setTypedChars] = React.useState(reasons.map(() => 0));
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !expanded) {
          setExpanded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.6 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [expanded]);

  React.useEffect(() => {
    if (expanded && typingIndex === -1) {
      const timer = setTimeout(() => {
        setTypingIndex(0);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [expanded, typingIndex]);

  React.useEffect(() => {
    if (typingIndex >= 0 && typingIndex < reasons.length) {
      const currentText = reasons[typingIndex];
      const currentCharCount = typedChars[typingIndex];

      if (currentCharCount < currentText.length) {
        const timer = setTimeout(() => {
          setTypedChars(prev => {
            const next = [...prev];
            next[typingIndex] = currentCharCount + 1;
            return next;
          });
        }, 15);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setTypingIndex(prev => prev + 1);
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [typingIndex, typedChars]);

  return (
    <section className="section" id="sectors">
      <div className="container why-grid" ref={containerRef}>
        <div className="section-head">
          <div className="section-kicker">Why Enterprise Leaders Choose Us</div>
          <h2>Premium strategy execution without enterprise consulting pricing or overhead.</h2>
          <p>
            Our positioning, narrative discipline, and senior-led approach are built for firms competing at the highest tier.
            We deliver the sophistication of top-tier consulting with agility and focus.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((item, i) => {
            const textToDisplay = item.substring(0, typedChars[i]);
            const isContentVisible = typingIndex >= 0;

            return (
              <div className="reason-card-wrapper" key={i}>
                <div className={`reason-card-anim ${expanded ? 'is-expanded' : ''}`}>
                  <div className={`reason-card-content ${isContentVisible ? 'show-content' : ''}`}>
                    <span
                      className="check-dot"
                      style={{
                        opacity: typedChars[i] > 0 ? 1 : 0,
                        transform: `scale(${typedChars[i] > 0 ? 1 : 0})`,
                        transition: 'opacity 0.2s ease, transform 0.2s ease'
                      }}
                    ></span>
                    <p>{textToDisplay}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerLogos() {
  return (
    <section className="partners-band" id="companies">
      <div className="container" style={{ textAlign: "center", marginBottom: "40px" }}>
        <div className="section-kicker">Experience That Shapes Our Work</div>
      </div>
      <div className="partners-marquee">
        <div className="partners-track">
          {[...companyLogos, ...companyLogos, ...companyLogos].map((src, i) => (
            <div key={i} className="partner-item">
              <img src={src} alt="Company logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)', padding: '120px 0' }}>
      <div className="container reveal-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.1, margin: 0 }}>Proprietary research & insights</h2>
          <Link to="/blogs" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid var(--secondary)', paddingBottom: '4px' }}>
            View all research <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {insightsData.slice(0, 3).map((insight, i) => (
            <Link to={`/blogs/${insight.id}`} key={i} className="insight-card" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} onClick={() => window.scrollTo(0, 0)}>
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
  );
}

function Contact() {
  const [active, setActive] = React.useState(true);
  const [values, setValues] = React.useState({ name: "", email: "", company: "", challenge: "" });
  const [placeholders, setPlaceholders] = React.useState({
    name: "Full name",
    email: "Work email",
    company: "Company",
    challenge: "What challenge are you solving?"
  });

  const animSequence = React.useMemo(() => [
    { field: "name", text: "Rodger Smith", default: "Full name" },
    { field: "email", text: "rodger.smith@bharatpursuit.com", default: "Work email" },
    { field: "company", text: "Bharat Pursuit", default: "Company" },
    { field: "challenge", text: "I want to increase my ROI.", default: "What challenge are you solving?" },
    { field: "challenge", text: "We need a sharper go-to-market strategy.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Our current messaging isn't converting.", default: "What challenge are you solving?" },
    { field: "challenge", text: "We are expanding into a new global market.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Looking to accelerate our demand generation.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Need help translating technical solutions.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Aligning sales and marketing execution.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Reducing strategic noise in our category.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Looking for an execution blueprint for launch.", default: "What challenge are you solving?" },
    { field: "challenge", text: "Elevating our brand perception to premium.", default: "What challenge are you solving?" }
  ], []);

  React.useEffect(() => {
    if (!active) {
      setPlaceholders({
        name: "Full name",
        email: "Work email",
        company: "Company",
        challenge: "What challenge are you solving?"
      });
      return;
    }

    let currentStepIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const playAnimation = () => {
      if (!active) return;
      const currentStep = animSequence[currentStepIndex];
      const targetText = currentStep.text;

      if (!isDeleting) {
        setPlaceholders(prev => ({
          ...prev,
          [currentStep.field]: targetText.substring(0, currentCharIndex) + "|"
        }));

        if (currentCharIndex === targetText.length) {
          isDeleting = true;
          timeoutId = setTimeout(playAnimation, 2000);
        } else {
          currentCharIndex++;
          timeoutId = setTimeout(playAnimation, 80);
        }
      } else {
        setPlaceholders(prev => ({
          ...prev,
          [currentStep.field]: targetText.substring(0, currentCharIndex) + "|"
        }));

        if (currentCharIndex === 0) {
          setPlaceholders(prev => ({
            ...prev,
            [currentStep.field]: currentStep.default
          }));
          isDeleting = false;
          currentCharIndex = 0;
          currentStepIndex = (currentStepIndex + 1) % animSequence.length;
          timeoutId = setTimeout(playAnimation, 800);
        } else {
          currentCharIndex--;
          timeoutId = setTimeout(playAnimation, 30);
        }
      }
    };

    timeoutId = setTimeout(playAnimation, 1000);
    return () => clearTimeout(timeoutId);
  }, [active, animSequence]);

  const [status, setStatus] = React.useState('');
  const handleInteraction = () => setActive(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, company, challenge } = values;

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `New Consulting Enquiry from ${name || 'Website'}`,
      from_name: "Bharat Pursuit Website",
      name: name,
      email: email,
      company: company,
      message: challenge
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Message Sent!");
        setValues({ name: '', email: '', company: '', challenge: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus("Failed to send.");
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending.");
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-shell reveal-up">
          <div className="contact-copy">
            <div className="section-kicker">Start the Engagement</div>
            <h2>Ready to sharpen positioning and accelerate market momentum?</h2>
            <p>
              Bharat Pursuit helps firms refine how they are perceived, how they are understood, and how they grow.
              Let’s build a market presence that commands trust across borders.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={placeholders.name} value={values.name} onChange={handleChange} onFocus={handleInteraction} onClick={handleInteraction} required />
            <input type="email" name="email" placeholder={placeholders.email} value={values.email} onChange={handleChange} onFocus={handleInteraction} onClick={handleInteraction} required />
            <input type="text" name="company" placeholder={placeholders.company} value={values.company} onChange={handleChange} onFocus={handleInteraction} onClick={handleInteraction} />
            <textarea rows="4" name="challenge" placeholder={placeholders.challenge} value={values.challenge} onChange={handleChange} onFocus={handleInteraction} onClick={handleInteraction} required></textarea>
            <button type="submit" className="btn btn-gold" disabled={status === 'Sending...'}> {status || 'Schedule Strategy Call'} </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  React.useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    const onMove = (event) => {
      const card = event.currentTarget;
      const clientX = event.clientX;
      const clientY = event.clientY;

      if (!card.dataset.ticking) {
        card.dataset.ticking = "true";
        window.requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          const rotateY = ((x / rect.width) - 0.5) * 10;
          const rotateX = ((y / rect.height) - 0.5) * -10;
          card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
          card.dataset.ticking = "";
        });
      }
    };

    const onLeave = (event) => {
      const card = event.currentTarget;
      card.dataset.ticking = "";
      card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Strategic Agency & Tech Consultancy | Bharat Pursuit</title>
        <meta name="description" content="Bharat Pursuit is ranked as the best strategic agency for ambitious global enterprises. We bridge high-level market positioning with elite technical execution and AI engineering." />
        <meta name="keywords" content="best strategic agency, top tech consultancy, market positioning agency, AI engineering firm, global enterprise growth, Bharat Pursuit" />
        <link rel="canonical" href="https://bharatpursuit.com/" />
        <meta property="og:title" content="Best Strategic Agency & Tech Consultancy | Bharat Pursuit" />
        <meta property="og:description" content="Bharat Pursuit: Worldwide leaders in market-dominating strategy and elite engineering execution." />
      </Helmet>
      <Hero />
      <PartnerLogos />
      <CapabilitiesDualPillar />
      <Services />
      <Approach />
      <InsightsSection />
      <WhyChoose />
      <Contact />
    </>
  );
}
