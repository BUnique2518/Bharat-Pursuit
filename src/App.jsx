import React from "react";

const services = [
  {
    number: "01",
    title: "Strategic Market Positioning",
    text: "Define a sharper market narrative, stronger differentiation, and a positioning architecture built for international growth.",
    icon: "target",
    details: {
      overview: "Market positioning is the foundation of all commercial success. We build positioning architectures that establish clear competitive differentiation and buyer conviction.",
      outcomes: [
        "Positioning statement that articulates unique competitive advantage",
        "Market narrative framework aligned to buyer psychology",
        "Competitive positioning map and category architecture",
        "Messaging hierarchy and positioning validation with buyers"
      ],
      process: [
        "Category & competitive audit to identify positioning gaps",
        "Buyer research & persona calibration",
        "Positioning architecture design workshop with leadership",
        "Messaging development and buyer testing",
        "Positioning documentation and rollout plan"
      ],
      bestFor: "Companies entering new markets, repositioning for growth, or seeking clarity on competitive advantage.",
      timeline: "6-12 weeks"
    }
  },
  {
    number: "02",
    title: "Go to Market Acceleration",
    text: "Launch new offers, geographies, and categories with structured messaging, revenue-focused campaigns, and measurable traction.",
    icon: "rocket_launch",
    details: {
      overview: "Successful launches require disciplined strategy execution. We design and orchestrate go-to-market motions that drive predictable revenue from day one.",
      outcomes: [
        "Go-to-market strategy with phased rollout plan",
        "Buyer targeting and account-based campaign roadmap",
        "Sales enablement materials and training program",
        "Marketing campaign sequencing and performance metrics",
        "3-month execution results and optimization roadmap"
      ],
      process: [
        "GTM strategy workshop with leadership and Sales",
        "Buyer targeting & segmentation analysis",
        "Campaign messaging and creative direction",
        "Sales enablement development and training",
        "Campaign launch coordination and weekly optimization"
      ],
      bestFor: "New product launches, geographic expansion, or category entry requiring coordinated go-to-market execution.",
      timeline: "3-4 months"
    }
  },
  {
    number: "03",
    title: "Demand & Pipeline Strategy",
    text: "Connect brand, content, performance, and enterprise sales motions into one commercial engine that compounds over time.",
    icon: "trending_up",
    details: {
      overview: "Demand generation success comes from unified strategy, not tactics. We architect pipeline-focused engines that align brand, content, and sales for compounding growth.",
      outcomes: [
        "Integrated demand generation strategy connecting marketing and sales",
        "Pipeline visibility framework with weekly forecasting",
        "Content strategy mapped to buyer journey stages",
        "Campaign playbooks for consistent execution",
        "Demand metrics dashboard and optimization playbook"
      ],
      process: [
        "Sales & marketing alignment workshop",
        "Pipeline analysis and demand gap assessment",
        "Buyer journey mapping and content requirements",
        "Campaign playbook development & testing",
        "Performance infrastructure setup and optimization cadence"
      ],
      bestFor: "Companies needing to connect marketing and sales, improve pipeline velocity, or scale demand within budget constraints.",
      timeline: "4-6 months"
    }
  },
  {
    number: "04",
    title: "Executive Advisory",
    text: "Support leadership teams with board-ready marketing strategy, growth diagnostics, and decision frameworks for high-stakes initiatives.",
    icon: "psychology",
    details: {
      overview: "Leadership teams need strategic partners who understand their complexity. We provide board-ready strategy, growth diagnostics, and decision support for critical initiatives.",
      outcomes: [
        "Board-ready strategy presentations with financial implications",
        "Growth diagnostic with market opportunity assessment",
        "Competitive & customer intelligence briefing",
        "Strategic decision framework for key initiatives",
        "Executive advisory engagement with direct leadership access"
      ],
      process: [
        "Leadership alignment workshop to define strategic questions",
        "Market & competitive intelligence gathering",
        "Strategic analysis and scenario planning",
        "Board-ready presentation development",
        "Quarterly advisory sessions and strategic guidance"
      ],
      bestFor: "CEOs, CMOs, and executive teams navigating strategic expansion, M&A, or market transformation.",
      timeline: "Ongoing (typical 3-6 month engagements)"
    }
  }
];

const proof = [
  { value: "12+", label: "Global market playbooks delivered" },
  { value: "30%", label: "Average messaging clarity uplift" },
  { value: "3x", label: "Faster strategic alignment cycles" },
  { value: "100%", label: "Senior-led consulting engagement" }
];

const sectors = [
  "Technology",
  "Healthcare",
  "Manufacturing",
  "Professional Services",
  "B2B SaaS",
  "Financial Services"
];

const approach = [
  {
    title: "Diagnostic Audit",
    text: "Assess category fit, positioning gaps, messaging friction, and go-to-market inefficiencies."
  },
  {
    title: "Buyer-Centric Narrative",
    text: "Translate technical solutions into persuasive, globally credible market language."
  },
  {
    title: "Leadership Alignment",
    text: "Unify founders, marketing, and sales around one clear commercial story."
  },
  {
    title: "Execution Blueprint",
    text: "Turn strategy into practical workstreams, asset priorities, and rollout sequencing."
  }
];

const reasons = [
  "Premium brand presentation aligned to leadership expectations",
  "Clearer solution storytelling for complex or high-value offerings",
  "Structured decision support for expansion, launch, and repositioning",
  "Cross-functional marketing strategy that supports revenue teams"
];

const companyLogos = [
  "/assets/companies/D2e_Vector_logo-Primary_400x.svg",
  "/assets/companies/Group_87_59a28562-b3b3-4331-9d3c-4a27366eba04.webp",
  "/assets/companies/gatim_logo.avif",
  "/assets/companies/insync-new-logo.png",
  "/assets/companies/jdlogosvg.svg",
  "/assets/companies/logo.svg",
  "/assets/companies/download__1_-removebg-preview.png",
  "/assets/companies/hd-fedex-shipping-company-logo-png-7017516947092607rk126a27k-removebg-preview.png",
  "/assets/companies/Accolite_Logo_Grey-removebg-preview.png",
];

const jobListings = [
  {
    id: 1,
    title: "Senior Strategic Marketing Consultant",
    department: "Consulting",
    level: "Senior",
    location: "Remote",
    type: "Full-time",
    description: "Lead strategic positioning and go-to-market engagements for enterprise clients.",
    qualifications: [
      "8+ years of B2B marketing or strategy consulting experience",
      "Proven track record building market positioning frameworks",
      "Strong executive communication and presentation skills",
      "Experience with Fortune 500 or ambitious mid-market firms"
    ],
    responsibilities: [
      "Lead diagnostic audits and market positioning assessments",
      "Develop and execute strategic narratives for complex solutions",
      "Guide client leadership on positioning and go-to-market strategy",
      "Mentor junior team members on consulting methodology"
    ],
    salary: "Competitive",
    skills: ["Marketing Strategy", "Market Positioning", "Go-to-Market Strategy", "Enterprise Sales", "Client Leadership"]
  },
  {
    id: 2,
    title: "Strategic Messaging Specialist",
    department: "Content & Strategy",
    level: "Mid-level",
    location: "Remote",
    type: "Full-time",
    description: "Craft compelling market narratives and positioning architectures for enterprise offerings.",
    qualifications: [
      "5+ years in solutions marketing, technical marketing, or marketing strategy",
      "Exceptional written and verbal communication skills",
      "Experience translating complex B2B solutions into market narratives",
      "Portfolio of positioning frameworks or messaging architectures"
    ],
    responsibilities: [
      "Develop buyer-centric messaging and positioning frameworks",
      "Create positioning documentation and messaging systems",
      "Translate technical solutions into persuasive market language",
      "Collaborate with clients on narrative development and stakeholder alignment"
    ],
    salary: "Competitive",
    skills: ["Technical Writing", "Messaging Architecture", "B2B Marketing", "Positioning", "Content Strategy"]
  },
  {
    id: 3,
    title: "Growth Strategy Associate",
    department: "Strategy",
    level: "Junior to Mid-level",
    location: "Remote",
    type: "Full-time",
    description: "Support go-to-market acceleration and demand strategy initiatives for client engagements.",
    qualifications: [
      "3+ years in growth marketing, demand generation, or business strategy",
      "Strong analytical and project management skills",
      "Experience with SaaS or high-growth B2B companies",
      "Ability to synthesize market research and competitive data"
    ],
    responsibilities: [
      "Conduct market analysis and competitive assessments",
      "Develop go-to-market playbooks and execution blueprints",
      "Support demand and pipeline strategy development",
      "Coordinate cross-functional strategy execution and reporting"
    ],
    salary: "Competitive",
    skills: ["Data Analysis", "Project Management", "Market Research", "Strategic Planning", "GTM Strategy"]
  }
];

function Header({ setCurrentPage, theme, toggleTheme }) {
  const goHome = (e, targetId) => {
    e.preventDefault();
    setCurrentPage('home');
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#" className="brand" onClick={(e) => goHome(e)}>
          {/* <img src="./assets/MainIcon.png" alt="Bharat Pursuit logo" className="brand-logo" /> */}
        <img src="/assets/MainIcon-removebg-preview.png" alt="Bharat Pursuit logo" className="brand-logo" />
          <div>
            <div className="brand-top">Pursue Growth. Build Bharat.</div>
            <div className="brand-name">Bharat Pursuit</div>
          </div>
        </a>

        <nav className="main-nav">
          <a href="#services" onClick={(e) => goHome(e, 'services')}>Services</a>
          <a href="#approach" onClick={(e) => goHome(e, 'approach')}>Approach</a>
          <a href="#sectors" onClick={(e) => goHome(e, 'sectors')}>Sectors</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo({ top: 0 }); }}>About</a>
          <a href="#contact" onClick={(e) => goHome(e, 'contact')}>Contact</a>
          <a href="#careers" onClick={(e) => { e.preventDefault(); setCurrentPage('careers'); }}>Careers</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 0, color: 'var(--primary)' }}>
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <a href="#contact" className="btn btn-primary" onClick={(e) => goHome(e, 'contact')}>Book a Strategy Call</a>
        </div>
      </div>
    </header>
  );
}

// Custom hook for animated counter
function useAnimatedCounter(targetValue, duration = 2000, isVisible = true) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    // Extract the numeric value from strings like "12+", "30%", "3x", "100%"
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

  // Extract the suffix (like "+", "%", "x")
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
          <div className="eyebrow-pill">Elite Strategic Marketing for Enterprise Growth</div>
          <h1>Build a market presence that commands credibility, sells with clarity, and scales globally.</h1>
          <p className="hero-text">
            Bharat Pursuit is the consulting partner for enterprises seeking architectural excellence in market positioning, 
            go-to-market strategy, and global expansion. We bring senior-led strategic thinking to complex B2B value narratives, 
            transforming how ambitious firms compete in international markets.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">Schedule Strategy Consultation</a>
            <a href="#services" className="btn btn-outline">Discover Our Methodology</a>
          </div>

          <div className="hero-points">
            <div className="info-card">
              <h3>Positioning Architecture</h3>
              <p>Strategy rooted in buyer psychology and competitive differentiation.</p>
            </div>
            <div className="info-card">
              <h3>Senior-Led Excellence</h3>
              <p>No junior handoff. Experienced strategists drive every engagement.</p>
            </div>
            <div className="info-card">
              <h3>Global-Ready Narratives</h3>
              <p>Messaging calibrated for cross-border credibility and enterprise sophistication.</p>
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

function SectorsBand() {
  return (
    <section className="sectors-band">
      <div className="sectors-marquee">
        <div className="sectors-track">
          {/* Repeating array to create a seamless infinite marquee effect */}
          {[...sectors, ...sectors, ...sectors].map((sector, i) => (
            <div key={i} className="sector-item">
              <span className="sector-dot"></span>
              {sector}
            </div>
          ))}
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
            // Adds the class to trigger the animation
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

      {/* Service Detail Modal */}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(196, 166, 100, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(196, 166, 100, 0.15)';
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '24px 0', borderTop: `1px solid var(--line)` }}>
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
              style={{
                display: 'inline-block',
                marginTop: '24px',
                padding: '12px 24px',
                background: 'var(--secondary)',
                color: 'var(--white)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'opacity 0.2s ease',
                width: '100%',
                textAlign: 'center',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Schedule a Consultation for This Service
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
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

  // Start typing after cards finish expanding
  React.useEffect(() => {
    if (expanded && typingIndex === -1) {
      const timer = setTimeout(() => {
        setTypingIndex(0);
      }, 800); // 800ms match CSS transition
      return () => clearTimeout(timer);
    }
  }, [expanded, typingIndex]);

  // Handle typing effect one card at a time
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
        }, 15); // Fast typing speed
        return () => clearTimeout(timer);
      } else {
        // move to next card
        const timer = setTimeout(() => {
          setTypingIndex(prev => prev + 1);
        }, 120); // pause before next card
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

function SimpleSection({ id, title, defaultText }) {
  return (
    <section className="section" id={id} style={{ borderTop: "1px solid rgba(20, 37, 56, 0.08)" }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px 0' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>{title}</h2>
        <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '18px' }}>{defaultText}</p>
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
          [currentStep.field]: targetText.substring(0, currentCharIndex) + "|" /* Adding cursor */
        }));

        if (currentCharIndex === targetText.length) {
          isDeleting = true;
          timeoutId = setTimeout(playAnimation, 2000); // pause after typing
        } else {
          currentCharIndex++;
          timeoutId = setTimeout(playAnimation, 80); // typing speed
        }
      } else {
        setPlaceholders(prev => ({
          ...prev,
          [currentStep.field]: targetText.substring(0, currentCharIndex) + "|"
        }));

        if (currentCharIndex === 0) {
          // Restore default completely
          setPlaceholders(prev => ({
            ...prev,
            [currentStep.field]: currentStep.default
          }));
          isDeleting = false;
          currentCharIndex = 0;
          currentStepIndex = (currentStepIndex + 1) % animSequence.length;
          timeoutId = setTimeout(playAnimation, 800); // pause before next field
        } else {
          currentCharIndex--;
          timeoutId = setTimeout(playAnimation, 30); // deleting speed
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
      // Create a free access key at https://web3forms.com
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
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
        <div className="contact-shell">
          <div className="contact-copy">
            <div className="section-kicker">Start the Engagement</div>
            <h2>Ready to sharpen positioning and accelerate market momentum?</h2>
            <p>
              Bharat Pursuit helps firms refine how they are perceived, how they are understood, and how they grow.
              Let’s build a market presence that commands trust across borders.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={placeholders.name}
              value={values.name}
              onChange={handleChange}
              onFocus={handleInteraction}
              onClick={handleInteraction}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={placeholders.email}
              value={values.email}
              onChange={handleChange}
              onFocus={handleInteraction}
              onClick={handleInteraction}
              required
            />
            <input
              type="text"
              name="company"
              placeholder={placeholders.company}
              value={values.company}
              onChange={handleChange}
              onFocus={handleInteraction}
              onClick={handleInteraction}
            />
            <textarea
              rows="4"
              name="challenge"
              placeholder={placeholders.challenge}
              value={values.challenge}
              onChange={handleChange}
              onFocus={handleInteraction}
              onClick={handleInteraction}
              required
            ></textarea>
            <button type="submit" className="btn btn-gold" disabled={status === 'Sending...'}>               {status || 'Schedule Strategy Call'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ setCurrentPage }) {
  const goPage = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHomeSection = (e, targetId) => {
    e.preventDefault();
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-main">
            {/* <h2 className="footer-brand-title">Bharat Pursuit</h2> */}
            <div className="brand-name-footer" style={{ marginBottom: '4px' }}>Bharat Pursuit</div>
            <div style={{ color: '#fbbf24', fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Pursue Growth. Build Bharat.
            </div>
            <p className="footer-desc">
              Premier strategic marketing consulting firm specializing in market positioning, go-to-market acceleration, and global expansion. Top-tier strategy execution for ambitious enterprises worldwide.
            </p>
            <div className="footer-contact-info" style={{ marginTop: '20px' }}>
              <a href="mailto:support@bharatpursuit.com" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#94a3b8',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                <span className="material-symbols-outlined" style={{ color: '#fbbf24', fontSize: '20px' }}>mail</span>
                support@bharatpursuit.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); goPage(e, 'about'); }}>About Us</a></li>
              <li><a href="#approach" onClick={(e) => goHomeSection(e, 'approach')}>Our Approach</a></li>
              <li><a href="#services" onClick={(e) => goHomeSection(e, 'services')}>Core Services</a></li>
              <li><a href="#companies" onClick={(e) => goHomeSection(e, 'companies')}>Companies We've Worked With</a></li>
              <li><a href="#careers" onClick={(e) => { e.preventDefault(); goPage(e, 'careers'); }}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => goPage(e, 'privacy')}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => goPage(e, 'terms')}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => goPage(e, 'cookies')}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© Bharat Pursuit. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Back to Top" className="footer-social-icon" style={{ display: 'flex' }} onClick={(e) => goPage(e, 'home')}>
              <span className="material-symbols-outlined">home</span>
            </a>
            <a href="mailto:support@bharatpursuit.com" aria-label="Support Mail" className="footer-social-icon" style={{ display: 'flex' }}>
              <span className="material-symbols-outlined">mail</span>
            </a>
            {/* <span className="material-symbols-outlined footer-social-icon">public</span>
            <span className="material-symbols-outlined footer-social-icon">hub</span>
            <span className="material-symbols-outlined footer-social-icon">campaign</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

const pageStyle = { maxWidth: '800px', margin: '140px auto 100px', padding: '0 24px', lineHeight: 1.8, color: 'var(--text-soft)' };
const pageHeadStyle = { color: 'var(--primary)', marginBottom: '32px', fontSize: '42px', letterSpacing: '-0.03em' };
const pageSubHeadStyle = { color: 'var(--primary)', marginTop: '42px', marginBottom: '16px', fontSize: '24px' };

function PrivacyPolicyPage() {
  return (
    <div style={pageStyle}>
      <h1 style={pageHeadStyle}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> March 2026</p>
      <p>Bharat Pursuit ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
      <h3 style={pageSubHeadStyle}>1. Important Information and Who We Are</h3>
      <p>This privacy policy aims to give you information on how Bharat Pursuit collects and processes your personal data through your use of this website, including any data you may provide when you fill out our contact forms or engage our consulting services.</p>
      <h3 style={pageSubHeadStyle}>2. The Data We Collect About You</h3>
      <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
      <h3 style={pageSubHeadStyle}>3. How Is Your Personal Data Collected?</h3>
      <p>We use different methods to collect data from and about you including through direct interactions where you may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</p>
    </div>
  );
}

function TermsOfServicePage() {
  return (
    <div style={pageStyle}>
      <h1 style={pageHeadStyle}>Terms of Service</h1>
      <p><strong>Effective Date:</strong> March 2026</p>
      <p>These Terms of Service ("Terms") govern your access to and use of the Bharat Pursuit website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
      <h3 style={pageSubHeadStyle}>1. Our Services</h3>
      <p>Bharat Pursuit provides strategic marketing and solutions consulting. Our services are tailored to enterprise clients and delivered under separate specific engagement agreements and statements of work.</p>
      <h3 style={pageSubHeadStyle}>2. Acceptable Use</h3>
      <p>You agree not to use our website or services in any way that is unlawful, or harms Bharat Pursuit, its service providers, its suppliers, or any other user. You must not exploit our platforms, disable their operation, or attempt to gain unauthorized access to any part of our systems.</p>
      <h3 style={pageSubHeadStyle}>3. Intellectual Property Rights</h3>
      <p>The content on this website, including text, graphics, logos, and frameworks, is the property of Bharat Pursuit and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit permission.</p>
    </div>
  );
}

function CookiePolicyPage() {
  return (
    <div style={pageStyle}>
      <h1 style={pageHeadStyle}>Cookie Policy</h1>
      <p><strong>Effective Date:</strong> March 2026</p>
      <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
      <h3 style={pageSubHeadStyle}>1. What Are Cookies?</h3>
      <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>
      <h3 style={pageSubHeadStyle}>2. Which Cookies Do We Use?</h3>
      <p>We use the following cookies: <strong>Strictly necessary cookies</strong> (required for the operation of our website), <strong>Analytical or performance cookies</strong> (allow us to recognize and count the number of visitors), and <strong>Functionality cookies</strong> (used to recognize you when you return to our website).</p>
    </div>
  );
}

  

function AboutUsPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('Technology');
  const [showArchitectureModal, setShowArchitectureModal] = React.useState(false);
  
  const industries = [
    { name: 'Technology', color: '#3B82F6', description: 'SaaS platforms, cloud infrastructure, and tech innovation' },
    { name: 'B2B SaaS', color: '#8B5CF6', description: 'Enterprise software and subscription models' },
    { name: 'Healthcare', color: '#EC4899', description: 'Life sciences, health tech, and medical devices' },
    { name: 'Financial Services', color: '#F59E0B', description: 'Fintech, banks, and investment firms' },
    { name: 'Manufacturing', color: '#10B981', description: 'Industrial tech and smart manufacturing' },
    { name: 'Professional Services', color: '#06B6D4', description: 'Consulting, legal, and accounting firms' },
    { name: 'Enterprise Software', color: '#6366F1', description: 'ERP, CRM, and enterprise platforms' },
    { name: 'Emerging Tech', color: '#D946EF', description: 'AI, blockchain, and cutting-edge innovation' }
  ];

  const industryBgImages = {
    'Technology': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80")',
    'B2B SaaS': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80")',
    'Healthcare': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80")',
    'Financial Services': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80")',
    'Manufacturing': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80")',
    'Professional Services': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80")',
    'Enterprise Software': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80")',
    'Emerging Tech': 'linear-gradient(135deg, rgba(20, 37, 56, 0.95) 0%, rgba(20, 37, 56, 0.85) 100%), url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80")'
  };

  return (
    <>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '24px', color: 'var(--primary)' }}>
                Our Foundation
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
                if(el.classList.contains('ai-particle')) {
                  el.style.transform = `translate(${Math.random()*40-20}px, ${Math.random()*40-20}px)`;
                  el.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                } else {
                  el.style.transform = `scaleX(${0.5 + Math.random()}) rotate(${Math.random()*360}deg)`;
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
      <section style={{ padding: '100px 0', background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)' }}>
              Our Vision & Mission
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(196, 166, 100, 0.08), rgba(196, 166, 100, 0.02))';
              const sw = e.currentTarget.querySelector('.visionary-sweep');
              if(sw) {
                sw.style.animation = 'sweepLight 1.5s ease-in-out forwards';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--surface)';
              const sw = e.currentTarget.querySelector('.visionary-sweep');
              if(sw) {
                sw.style.animation = 'none';
              }
            }}>
              <div className="visionary-sweep"></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Our Vision
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-soft)', margin: 0 }}>
                  To be the most trusted strategic consulting partner for enterprises seeking market clarity, competitive differentiation, and sustainable global growth.
                </p>
              </div>
            </div>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(196, 166, 100, 0.08), rgba(196, 166, 100, 0.02))';
              const rings = e.currentTarget.querySelectorAll('.mission-pulse-ring');
              rings.forEach((r, i) => {
                r.style.animation = `pulseRing 1.5s ease-out infinite ${i * 0.4}s`;
              });
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--surface)';
              const rings = e.currentTarget.querySelectorAll('.mission-pulse-ring');
              rings.forEach(r => {
                r.style.animation = 'none';
              });
            }}>
              <div className="mission-pulse-ring"></div>
              <div className="mission-pulse-ring"></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Our Mission
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-soft)', margin: 0 }}>
                  Deliver positioning architecture, go-to-market strategy, and executive advisory that transform how ambitious firms compete, communicate, and grow across international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              style={{
                display: 'block',
                borderRadius: '16px'
              }}
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80"
            >
              <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Interactive */}
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
          <a href="#contact" style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: 'var(--secondary)',
            color: 'var(--white)',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'opacity 0.2s ease'
          }}
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
          onClick={() => setShowArchitectureModal(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)',
              borderRadius: '16px',
              border: '1px solid var(--line)',
              padding: '48px',
              maxWidth: '800px',
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
              onClick={() => setShowArchitectureModal(false)}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--secondary)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(196, 166, 100, 0.15)';
                e.currentTarget.style.color = 'var(--secondary)';
              }}
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
            
            {/* Animated Architecture Graphic inside the modal */}
            <div style={{
              background: 'var(--bg)',
              borderRadius: '12px',
              padding: '40px',
              marginBottom: '40px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '300px',
              border: '1px solid var(--line)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div className="arch-node center-node">
                  Core Logic
                </div>
                <div className="arch-node orbit-node orbit-1">
                  Market Positioning
                </div>
                <div className="arch-node orbit-node orbit-2">
                  Go-To-Market
                </div>
                <div className="arch-node orbit-node orbit-3">
                  Brand Narrative
                </div>
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <line x1="50%" y1="50%" x2="20%" y2="20%" className="arch-line" />
                  <line x1="50%" y1="50%" x2="80%" y2="30%" className="arch-line" />
                  <line x1="50%" y1="50%" x2="50%" y2="80%" className="arch-line" />
                </svg>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
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

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes aiAgent {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes slideUpAndColor {
          0% {
            opacity: 0;
            transform: translateY(40px);
            background-position: left;
          }
          40% {
            opacity: 1;
            transform: translateY(0);
            background-position: left;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            background-position: right;
          }
        }

        .ai-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--secondary);
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 10px var(--secondary);
          pointer-events: none;
        }

        .ai-connection {
          position: absolute;
          background: rgba(196, 166, 100, 0.4);
          transform-origin: 0 50%;
          opacity: 0;
          height: 1px;
          pointer-events: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        
        .visionary-sweep {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: none;
        }

        .mission-pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 2px solid var(--secondary);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        
        @keyframes pulseRing {
          0% { width: 40px; height: 40px; opacity: 1; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }

        @keyframes sweepLight {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        /* Architecture Modal Animations */
        .arch-node {
          position: absolute;
          background: var(--surface);
          border: 2px solid var(--secondary);
          color: var(--primary);
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          borderRadius: 8px;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(196,166,100,0.1);
        }
        
        .center-node {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--secondary);
          color: white;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          animation: pulseNode 3s infinite ease-in-out;
        }

        .orbit-node {
          border-radius: 8px;
        }

        .orbit-1 {
          top: 20%;
          left: 20%;
          transform: translate(-50%, -50%);
          animation: floatNode 4s infinite ease-in-out 0.2s;
        }

        .orbit-2 {
          top: 30%;
          left: 80%;
          transform: translate(-50%, -50%);
          animation: floatNode 5s infinite ease-in-out 1.5s;
        }

        .orbit-3 {
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: floatNode 4.5s infinite ease-in-out 0.8s;
        }

        .arch-line {
          stroke: var(--secondary);
          stroke-width: 2;
          stroke-dasharray: 8;
          animation: flowLine 2s linear infinite;
        }

        @keyframes pulseNode {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(196,166,100,0.4); }
          50% { transform: translate(-50%, -50%) scale(1.05); box-shadow: 0 0 0 20px rgba(196,166,100,0); }
        }

        @keyframes floatNode {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, calc(-50% - 15px)); }
        }

        @keyframes flowLine {
          from { stroke-dashoffset: 16; }
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes vibrate {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-2px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(2px);
          }
        }
      `}</style>
    </>
  );
}

function CareersPage() {
  return (
    <div style={pageStyle}>
      <h1 style={pageHeadStyle}>Careers at Bharat Pursuit</h1>
      <p style={{ fontSize: '18px', marginBottom: '40px' }}>
        Join our elite team of strategic consultants. We're building a firm dedicated to architectural excellence and transformative market positioning for ambitious enterprises globally.
      </p>
      
      <h2 style={pageSubHeadStyle}>Why Join Bharat Pursuit?</h2>
      <ul style={{ marginBottom: '40px', lineHeight: 2 }}>
        <li><strong>Senior-led engagement:</strong> Work alongside experienced strategists with deep enterprise consulting background</li>
        <li><strong>Meaningful impact:</strong> Drive strategic positioning and growth for Fortune 500 and high-growth firms</li>
        <li><strong>Positioning-first methodology:</strong> Master the discipline of strategic market architecture</li>
        <li><strong>Global scope:</strong> Consult on cross-border expansion and international market strategy</li>
        <li><strong>Premium brand:</strong> Be part of a firm recognized as a top-tier strategic consulting partner</li>
      </ul>
      
      <h2 style={pageSubHeadStyle}>Our Consulting Culture</h2>
      <p>
        At Bharat Pursuit, we believe that consulting excellence comes from disciplined thinking, clear communication, and senior-led engagement. We prioritize meaningful client relationships over volume, strategic depth over surface-level recommendations, and long-term impact over quick wins.
      </p>
      <p style={{ marginBottom: '40px' }}>
        We invest in our team's growth through real consulting engagements with enterprise clients, cross-functional collaboration, and mentorship from senior strategists.
      </p>
      
      <h2 style={pageSubHeadStyle}>Open Positions</h2>
      <p style={{ marginBottom: '30px', fontSize: '16px', color: 'var(--primary)' }}>
        Below are our current career opportunities. Each role is integral to delivering premier consulting outcomes.
      </p>
    </div>
  );
}

function JobListingPage({ jobId, setCurrentPage }) {
  const job = jobListings.find(j => j.id === jobId);
  
  if (!job) {
    return (
      <div style={pageStyle}>
        <h1 style={pageHeadStyle}>Job Not Found</h1>
        <p>This position is no longer available. <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('careers'); }} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>View all open positions</a></p>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('careers'); }} style={{ color: 'var(--secondary)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>← Back to Careers</a>
      
      <div style={{ marginBottom: '40px' }}>
        <h1 style={pageHeadStyle}>{job.title}</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px', color: 'var(--text-soft)', fontSize: '14px' }}>
          <span><strong>Department:</strong> {job.department}</span>
          <span><strong>Level:</strong> {job.level}</span>
          <span><strong>Location:</strong> {job.location}</span>
          <span><strong>Type:</strong> {job.type}</span>
        </div>
      </div>

      <h2 style={pageSubHeadStyle}>About the Role</h2>
      <p>{job.description}</p>

      <h2 style={pageSubHeadStyle}>Key Responsibilities</h2>
      <ul style={{ lineHeight: 1.8 }}>
        {job.responsibilities.map((resp, i) => (
          <li key={i}>{resp}</li>
        ))}
      </ul>

      <h2 style={pageSubHeadStyle}>Required Qualifications</h2>
      <ul style={{ lineHeight: 1.8 }}>
        {job.qualifications.map((qual, i) => (
          <li key={i}>{qual}</li>
        ))}
      </ul>

      <h2 style={pageSubHeadStyle}>Key Skills & Expertise</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {job.skills.map((skill, i) => (
          <span key={i} style={{ padding: '8px 16px', background: 'rgba(196, 166, 100, 0.15)', borderRadius: '20px', fontSize: '14px' }}>
            {skill}
          </span>
        ))}
      </div>

      <h2 style={pageSubHeadStyle}>Compensation</h2>
      <p>{job.salary} (discussed during interview process based on experience and background)</p>

      <h2 style={pageSubHeadStyle}>Apply Now</h2>
      <p style={{ marginBottom: '20px' }}>
        Interested in this role? Send your resume, portfolio, and a brief note on why you're interested to <strong>careers@bharatpursuit.com</strong>
      </p>
      <p style={{ fontSize: '14px', color: 'var(--text-soft)' }}>
        We review applications on a rolling basis. Shortlisted candidates will be contacted within 1 week. We appreciate the time you take to apply and will provide feedback at key stages.
      </p>
    </div>
  );
}

function CareerListings() {
  return (
    <section className="section" style={{ borderTop: "1px solid rgba(20, 37, 56, 0.08)" }}>
      <div className="container">
        <div className="careers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
          {jobListings.map((job) => (
            <article key={job.id} className="job-card" style={{
              padding: '24px',
              border: '1px solid rgba(20, 37, 56, 0.08)',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: 'var(--primary)', fontSize: '18px' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '12px', padding: '4px 8px', background: 'rgba(196, 166, 100, 0.15)', borderRadius: '4px' }}>{job.level}</span>
                  <span style={{ fontSize: '12px', padding: '4px 8px', background: 'rgba(196, 166, 100, 0.15)', borderRadius: '4px' }}>{job.location}</span>
                  <span style={{ fontSize: '12px', padding: '4px 8px', background: 'rgba(196, 166, 100, 0.15)', borderRadius: '4px' }}>{job.type}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-soft)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>{job.description}</p>
              <div style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: '600' }}>View Details →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [popupText, setPopupText] = React.useState('');
  const [messages, setMessages] = React.useState([
    { role: 'bot', text: 'Hello! I am the Bharat Pursuit AI assistant. How can I help you build your global market presence today?' }
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      setPopupText('');
      return;
    }

    const sequence = [
      { text: 'Ask me! ✨', delay: 2000 },
      { text: '', delay: 6000 },
      { text: 'I am here to help 👋', delay: 7500 },
      { text: '', delay: 13000 },
    ];
    const cycleLength = 14000;

    const timers = sequence.map(({ text, delay }) =>
      setTimeout(() => setPopupText(text), delay)
    );

    const interval = setInterval(() => {
      sequence.forEach(({ text, delay }) => {
        timers.push(setTimeout(() => setPopupText(text), delay));
      });
    }, cycleLength);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const updatedMessages = [...messages, { role: 'user', text: userMsg }];

    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      // You can use Groq (fast & free API) or OpenAI. Just swap the URL and API Key!
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", // Valid Groq Models: llama-3.3-70b-versatile, llama-3.1-8b-instant (or gpt-4o-mini for OpenAI)
          messages: [
            {
              role: "system",
              content: "You are Bharat AI, a highly professional senior consulting assistant for Bharat Pursuit. Your goal is to help users understand our strategic solutions, positioning, and global market expansion services. Keep answers very concise (max 2-3 sentences), premium, and professional. Always steer users toward booking a strategy call or using our contact form."
            },
            ...updatedMessages.map(m => ({
              role: m.role === 'bot' ? 'assistant' : 'user',
              content: m.text
            }))
          ],
          temperature: 0.5,
          max_tokens: 150
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status} ${errorText}`);
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: `API Error: ${error.message}. (If it says 'Failed to fetch', it is likely a CORS block or adblocker).` }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {popupText && !isOpen && (
        <div className="chatbot-tooltip">
          {popupText}
          <span className="material-symbols-outlined">neurology</span>
        </div>
      )}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        <span className="material-symbols-outlined">{isOpen ? 'close' : 'neurology'}</span>
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <span className="bot-avatar-icon material-symbols-outlined">neurology</span>
            <div>
              <h4>Bharat AI</h4>
              <span>Online</span>
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.role}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble bot typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={!input.trim()}>
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function Home() {
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
      <Hero />
      <PartnerLogos />
      <Services />
      {/* <SectorsBand /> */}
      <Approach />
      <WhyChoose />
      <Contact />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedJobId, setSelectedJobId] = React.useState(null);
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') document.documentElement.classList.add('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  let content;
  if (currentPage === 'privacy') content = <PrivacyPolicyPage />;
  else if (currentPage === 'terms') content = <TermsOfServicePage />;
  else if (currentPage === 'cookies') content = <CookiePolicyPage />;
  else if (currentPage === 'about') content = <AboutUsPage />;
  else if (currentPage === 'careers') {
    content = (
      <>
        <CareersPage />
        <CareerListings />
        <div style={{ margin: '60px 0', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Explore a Specific Role</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {jobListings.map((job) => (
              <button
                key={job.id}
                onClick={() => {
                  setCurrentPage('jobDetail');
                  setSelectedJobId(job.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  padding: '12px 24px',
                  background: 'var(--secondary)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {job.title}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }
  else if (currentPage === 'jobDetail') {
    content = <JobListingPage jobId={selectedJobId} setCurrentPage={setCurrentPage} />;
  }
  else content = <Home />;

  return (
    <>
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-orb orb-three"></div>
      <Header setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />
      <main>{content}</main>
      <Footer setCurrentPage={setCurrentPage} />
      <Chatbot />
    </>
  );
}
