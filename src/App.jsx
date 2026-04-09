import React from "react";
import { Routes, Route, Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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

// Tech services (inspired by Beeutech + QodHunt patterns)
const techServices = [
  {
    id: 'ts1',
    number: '01',
    icon: 'psychology',
    title: 'AI & Engineering Services',
    summary: 'End-to-end AI product development, model deployment, and MLOps for production-grade systems.',
    tags: ['OpenAI / DeepSeek', 'Python', 'MLOps', 'Vector DBs'],
    metric: { value: '+60%', label: 'Development velocity' },
    highlights: ['ML model design & fine-tuning', 'Agentic workflows', 'Custom AI products', 'Ethical AI reviews']
  },
  {
    id: 'ts2',
    number: '02',
    icon: 'cloud_sync',
    title: 'Cloud & DevOps',
    summary: 'Cloud architecture, infra-as-code, cost optimisation and continuous delivery pipelines for scale.',
    tags: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform', 'CI/CD'],
    metric: { value: '40%', label: 'Average cost reduction' },
    highlights: ['Cloud migration', 'Container orchestration', 'Infrastructure as Code', 'Observability & APM']
  },
  {
    id: 'ts3',
    number: '03',
    icon: 'code_blocks',
    title: 'Custom Software Engineering',
    summary: 'Product engineering teams for web, mobile, and backend infrastructure with modern scalable stacks.',
    tags: ['React / Next.js', 'Node.js', 'PostgreSQL', 'React Native'],
    metric: { value: '99.9%', label: 'System uptime SLA' },
    highlights: ['SaaS platform development', 'REST & GraphQL API design', 'Distributed systems', 'Automated QA testing']
  },
  {
    id: 'ts4',
    number: '04',
    icon: 'analytics',
    title: 'Data & Analytics',
    summary: 'Data platforms, pipelines, and real-time BI that turn complex organizational data into predictable decisions.',
    tags: ['Snowflake', 'dbt', 'Airflow', 'Tableau / PowerBI'],
    metric: { value: '10x', label: 'Faster reporting cycles' },
    highlights: ['Data engineering pipelines', 'Realtime streaming analytics', 'Data warehousing & lakes', 'Executive dashboards']
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
  "Hiring",
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

function Header({ theme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navigate = useNavigate();

  const goHome = (e, targetId) => {
    e.preventDefault();
    navigate('/');
    setIsMobileMenuOpen(false);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeAndScroll = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#" className="brand" onClick={(e) => goHome(e)}>
          <img src="/assets/light-mode.png" alt="Bharat Pursuit logo" className="brand-logo" />
          <div>
            <div className="brand-top">Pursue Growth. Build Bharat.</div>
            <div className="brand-name">Bharat Pursuit</div>
          </div>
        </a>

        <nav className="main-nav">
          <Link to="/about" onClick={closeAndScroll}>About</Link>
          <Link to="/tech" onClick={closeAndScroll}>Tech</Link>
          <Link to="/case-studies" onClick={closeAndScroll}>Case Studies</Link>
          <Link to="/blogs" onClick={closeAndScroll}>Blog</Link>
          <Link to="/careers" onClick={closeAndScroll}>Careers</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 0, color: 'var(--primary)' }}>
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <div className="desktop-only">
            <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }}>Book a Strategy Call</a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: 4, color: 'var(--primary)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const closeAndScroll = () => {
    onClose();
    window.scrollTo({ top: 0 });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    onClose();
    window.dispatchEvent(new Event('openBookingModal'));
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <nav className="mobile-menu-content" onClick={e => e.stopPropagation()}>
        <Link to="/about" onClick={closeAndScroll}>About</Link>
        <Link to="/tech" onClick={closeAndScroll}>Tech</Link>
        <Link to="/case-studies" onClick={closeAndScroll}>Case Studies</Link>
        <Link to="/careers" onClick={closeAndScroll}>Careers</Link>
        <Link to="/blogs" onClick={closeAndScroll}>Blog</Link>
        <div style={{ marginTop: '20px' }}>
          <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleBooking}>Book a Strategy Call</a>
        </div>
      </nav>
    </div>
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
          <div className="eyebrow-pill">Elite Technology & Strategy Consultancy</div>
          <h1>Architecting the future of enterprise growth through elite strategy and precision engineering.</h1>
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
            The era of disconnected agencies is over. We build the engine and design the map.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Pillar 1 */}
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

          {/* Pillar 2 */}
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
  const [bookingDate, setBookingDate] = React.useState("");
  const [bookingStatus, setBookingStatus] = React.useState("");
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

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!bookingDate) return;
    setBookingStatus('Scheduling...');

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `New Strategy Briefing Requested`,
      from_name: "Bharat Pursuit Website",
      message: `A prospect has requested a 30-minute strategic briefing.\n\nRequested Date & Time: ${new Date(bookingDate).toLocaleString()}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setBookingStatus("Briefing Requested!");
        setBookingDate('');
        setTimeout(() => setBookingStatus(''), 4000);
      } else {
        setBookingStatus("Failed to schedule.");
        setTimeout(() => setBookingStatus(''), 4000);
      }
    } catch (error) {
      console.error(error);
      setBookingStatus("Error processing request.");
      setTimeout(() => setBookingStatus(''), 4000);
    }
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
        <div className="contact-shell reveal-up">
          <div className="contact-copy">
            <div className="section-kicker">Start the Engagement</div>
            <h2>Ready to sharpen positioning and accelerate market momentum?</h2>
            <p>
              Bharat Pursuit helps firms refine how they are perceived, how they are understood, and how they grow.
              Let’s build a market presence that commands trust across borders.
            </p>

            {/* <div style={{ marginTop: '40px', padding: '32px', background: 'rgba(0,0,0,0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>Prefer an immediate dialogue?</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '15px' }}>
                Bypass the form and schedule a 30-minute strategic briefing directly with a Managing Partner.
              </p>

              {bookingStatus ? (
                <div style={{ padding: '16px', background: 'rgba(196, 166, 100, 0.1)', color: 'var(--secondary)', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                  {bookingStatus}
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input
                    type="datetime-local"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                    style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--surface)', color: 'var(--primary)', outline: 'none', fontSize: '15px' }}
                  />
                  <button type="submit" className="btn btn-gold" style={{ width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ marginRight: '8px', fontSize: '20px' }}>calendar_month</span>
                    Schedule a Briefing
                  </button>
                </form>
              )}
            </div> */}
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

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              Elite technology and strategy consultancy specializing in enterprise transformation, AI-driven innovation, cloud architecture, and precision go-to-market execution for ambitious enterprises worldwide.
            </p>
            <div className="footer-contact-info" style={{ marginTop: '20px' }}>
              <a href="mailto:support@bharatpursuit.com" className="footer-contact-item">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>mail</span>
                support@bharatpursuit.com
              </a>
              <div className="footer-contact-item">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>location_on</span>
                Kolkata,India
              </div>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/tech" onClick={scrollToTop}>Technology</Link></li>
              <li><Link to="/case-studies" onClick={scrollToTop}>Case Studies</Link></li>
              <li><Link to="/blogs" onClick={scrollToTop}>Blog</Link></li>
              <li><Link to="/careers" onClick={scrollToTop}>Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={scrollToTop}>Terms of Service</Link></li>
              <li><Link to="/cookies" onClick={scrollToTop}>Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© Bharat Pursuit. All rights reserved.</p>
          <div className="footer-social">
            <Link to="/" aria-label="Back to Top" className="footer-social-icon" style={{ display: 'flex' }} onClick={scrollToTop}>
              <span className="material-symbols-outlined">home</span>
            </Link>
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

function AboutUsPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('Technology');
  const [showArchitectureModal, setShowArchitectureModal] = React.useState(false);

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
          <div className="responsive-2col" style={{ alignItems: 'center', gap: '40px' }}>
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

      {/* Vision & Mission (BeeuTech Inspired) */}
      <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff' }}>
              Our Vision & Mission
            </h2>
          </div>
          <div className="responsive-2col">

            {/* Vision Card */}
            <div className="reveal-card-container">
              <img src="/vision-card.png" alt="Vision" className="reveal-card-image" />
              <div className="reveal-card-content">
                <h3 className="reveal-card-title">Our Vision</h3>
                <p className="reveal-card-desc">
                  To be the most trusted strategic consulting partner for enterprises seeking market clarity, competitive differentiation, and sustainable global growth.
                </p>
              </div>
            </div>

            {/* Mission Card */}
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
      {/*removing LeadershipRoster, later need to add members*/}

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
              maxWidth: '1000px',
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

            {/* Architectural Diagram inside the modal */}
            <div style={{
              background: 'var(--bg)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--line)',
              boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.2)'
            }}>
              <img
                src="/assets/architectural_diagram.png"
                alt="Architectural Blueprint"
                style={{
                  maxWidth: '100%',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  animation: 'fadeIn 0.8s ease'
                }}
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

function TechServicesPage() {
  return (
    <>
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
            }}>AI-Driven Digital Studio</div>
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

const caseStudiesData = [
  {
    id: 'c1',
    title: 'AI-driven Lead Scoring for Enterprise SaaS',
    tag: 'AI & Automation',
    summary: 'A B2B SaaS platform was struggling with an overwhelming volume of unqualified MQLs. We engineered a custom machine-learning model that integrated directly with their CRM to score leads based on behavioral patterns and firmographic data.',
    metric: '38%',
    metricLabel: 'Increase in lead-to-opportunity conversion',
    context: 'The client was generating 10,000+ top-of-funnel leads monthly, but sales velocity was plummeting due to rep burnout from unqualified calls. The existing rules-based scoring logic was rigid and failed to adapt to nuanced buying signals across different enterprise segments.',
    architecture: 'We decoupled the scoring engine from their monolithic CRM. We built an event-driven data architecture utilizing Apache Kafka for real-time behavioral ingestion, feeding into a custom XGBoost classification model deployed via AWS SageMaker. This allowed us to score interactions in milliseconds and sync only high-propensity accounts to the sales team.',
    results: [
      '38% increase in sales-qualified opportunity conversion rate',
      '45 hours per week of manual qualification saved for the SDR team',
      'Model deployed with 92% precision in identifying ultimate closed-won patterns'
    ]
  },
  {
    id: 'c2',
    title: 'Global GTM Strategy for FinTech Scaleup',
    tag: 'GTM Strategy',
    summary: 'A European FinTech firm needed to enter the APAC market. We architected their complete positioning, compliance messaging, and localized go-to-market strategy, deploying highly targeted account-based campaigns.',
    metric: '2.5x',
    metricLabel: 'ARR growth within 9 months of launch',
    context: 'After conquering the EU market, the client sought to penetrate the highly fragmented APAC region, specifically Singapore and Australia. Their existing messaging lacked cultural resonance and regulatory credibility, leading to stalled mid-market negotiations.',
    architecture: 'We executed a comprehensive positioning tear-down, elevating their category from a "Payments App" to "Cross-Border Liquidity Infrastructure". We mapped complex regulatory stakeholder personas and launched targeted ABM (Account-Based Marketing) campaigns aligned to specific APAC financial frameworks.',
    results: [
      '2.5x ARR growth within 9 months of the APAC launch',
      'Secured 3 tier-1 regional banking partnerships',
      'Reduced enterprise sales cycle from 9 months to 4.5 months'
    ]
  },
  {
    id: 'c3',
    title: 'Real-time Data Platform Modernization',
    tag: 'Data Engineering',
    summary: 'A logistics enterprise had fragmented data across 14 legacy systems. We consolidated their analytical pipelines into a modern Snowflake & dbt stack, providing executives with real-time operational BI dashboards.',
    metric: '85%',
    metricLabel: 'Reduction in manual reporting hours',
    context: 'The logistics provider was operating blind due to data silos spread across 14 distinct legacy systems. It took analysts three weeks to compile a monthly supply chain performance report, rendering the data obsolete upon delivery.',
    architecture: 'We constructed a modern data stack. Using Fivetran for robust ETL, we centralized all structured and semi-structured payloads into Snowflake. We implemented dbt (data build tool) for rigorous version-controlled modeling, ultimately exposing clean, validated data marts via Looker for executive consumption.',
    results: [
      '85% reduction in manual data wrangling and reporting hours',
      'Data latency reduced from 3 weeks to 15 minutes',
      'Enabled proactive supply chain diversion, saving $1.2M in SLA penalties'
    ]
  },
  {
    id: 'c4',
    title: 'Cloud Migration & Infrastructure Optimization',
    tag: 'Cloud & DevOps',
    summary: 'A high-growth consumer app faced severe latency issues during traffic spikes. We migrated their monolithic architecture to a fully containerized Kubernetes setup on AWS, implementing autoscaling and comprehensive observability.',
    metric: '99.99%',
    metricLabel: 'SLA achieved with 40% lower cloud spend',
    context: 'The consumer application was scaling wildly but experiencing catastrophic latency degradation during peak traffic events. Their legacy monolithic infrastructure was over-provisioned yet failing to handle burst completely.',
    architecture: 'We strangled the monolith. Over 6 months, we migrated core services to a fully containerized microservices architecture managed by Amazon EKS (Kubernetes). We implemented aggressive horizontal pod autoscaling and comprehensive Datadog observability to isolate bottlenecks automatically.',
    results: [
      'Achieved 99.99% uptime SLA across all core services',
      'Reduced total AWS cloud spend by 40% via right-sizing and spot instances',
      'Deployment frequency increased from bi-weekly to multiple times a day'
    ]
  }
];

function CaseStudiesPage() {
  return (
    <>
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

function CaseStudyDetailPage() {
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
        <section className="reveal-up" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(196, 166, 100, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>Strategic Architecture</h2>
          </div>
          <div style={{ padding: '40px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '18px', color: 'var(--primary)', lineHeight: 1.8, margin: 0 }}>{c.architecture}</p>
          </div>
        </section>

        {/* Results Section */}
        <section className="reveal-up">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(196, 166, 100, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>Quantitative Outcomes</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {c.results.map((result, idx) => (
              <div key={idx} style={{ padding: '24px', background: 'rgba(20, 37, 56, 0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '28px' }}>check_circle</span>
                <span style={{ fontSize: '18px', color: 'var(--text-soft)', fontWeight: '500' }}>{result}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
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

function JobListingPage() {
  const { id } = useParams();
  const jobId = parseInt(id);
  const job = jobListings.find(j => j.id === jobId);

  if (!job) {
    return (
      <div style={pageStyle}>
        <h1 style={pageHeadStyle}>Job Not Found</h1>
        <p>This position is no longer available. <Link to="/careers" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>View all open positions</Link></p>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <Link to="/careers" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>← Back to Careers</Link>

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
        Interested in this role? Send your resume, portfolio, and a brief note on why you're interested to <strong>support@bharatpursuit.com</strong>
      </p>
      <p style={{ fontSize: '14px', color: 'var(--text-soft)' }}>
        We review applications on a rolling basis. Shortlisted candidates will be contacted within 1 week. We appreciate the time you take to apply and will provide feedback at key stages.
      </p>
    </div>
  );
}

function CareerListings() {
  const [filterDept, setFilterDept] = React.useState('All');
  const [filterLevel, setFilterLevel] = React.useState('All');
  const [filterLocation, setFilterLocation] = React.useState('All');

  // get unique values for dropdowns
  const departments = ['All', ...new Set(jobListings.map(j => j.department))];
  const levels = ['All', ...new Set(jobListings.map(j => j.level))];
  const locations = ['All', ...new Set(jobListings.map(j => j.location))];

  const filteredJobs = jobListings.filter(job => {
    return (filterDept === 'All' || job.department === filterDept) &&
      (filterLevel === 'All' || job.level === filterLevel) &&
      (filterLocation === 'All' || job.location === filterLocation);
  });

  return (
    <section className="section" style={{ borderTop: "1px solid rgba(20, 37, 56, 0.08)", paddingBottom: '100px' }}>
      <div className="container">

        {/* Dropdown Filters */}
        <div className="responsive-2col" style={{ gap: '16px', marginBottom: '40px', background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }}>
          <div style={{ flex: '1 1 200px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text-soft)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Department</label>
            <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '15px', fontWeight: '500', appearance: 'none' }}>
              {departments.map(d => <option key={d} value={d}>{d === 'All' ? 'All Roles' : d}</option>)}
            </select>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text-soft)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level</label>
            <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '15px', fontWeight: '500', appearance: 'none' }}>
              {levels.map(l => <option key={l} value={l}>{l === 'All' ? 'All Levels' : l}</option>)}
            </select>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text-soft)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</label>
            <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '15px', fontWeight: '500', appearance: 'none' }}>
              {locations.map(loc => <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>)}
            </select>
          </div>
        </div>

        <div className="careers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Link to={`/careers/${job.id}`} key={job.id} className="job-card"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  padding: '32px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ margin: '0 0 16px 0', color: 'var(--primary)', fontSize: '20px', fontWeight: '800' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <span style={{ fontSize: '12px', padding: '6px 12px', background: 'rgba(196, 166, 100, 0.1)', color: 'var(--secondary)', borderRadius: '20px', fontWeight: '600' }}>{job.level}</span>
                    <span style={{ fontSize: '12px', padding: '6px 12px', background: 'rgba(20, 37, 56, 0.05)', color: 'var(--text-soft)', borderRadius: '20px', fontWeight: '600' }}>{job.location}</span>
                    <span style={{ fontSize: '12px', padding: '6px 12px', background: 'rgba(20, 37, 56, 0.05)', color: 'var(--text-soft)', borderRadius: '20px', fontWeight: '600' }}>{job.type}</span>
                  </div>
                  <p style={{ color: 'var(--text-soft)', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>{job.description}</p>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  View Details <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--secondary)' }}>arrow_forward</span>
                </div>
              </Link>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--text-soft)', opacity: 0.5, marginBottom: '16px' }}>search_off</span>
              <h3 style={{ margin: '0 0 8px 0', color: 'var(--primary)' }}>No open positions match</h3>
              <p style={{ margin: 0, color: 'var(--text-soft)' }}>Try adjusting your filters to see more roles.</p>
            </div>
          )}
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
      <CapabilitiesDualPillar />
      <Services />
      {/* <SectorsBand /> */}
      <Approach />
      <InsightsSection />
      <WhyChoose />
      <Contact />
    </>
  );
}

const insightsData = [
  {
    id: 'i1',
    type: 'Whitepaper',
    title: 'The AI Imperative: Architecting Autonomous Enterprise Systems',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    content: "The AI imperative is no longer a future concept—it’s something businesses are actively dealing with today. Companies that want to stay relevant are now focusing on building autonomous enterprise systems that can think, adapt, and respond in real time. By combining artificial intelligence, machine learning, and data analytics, these systems help reduce manual effort while improving accuracy and speed across operations. From streamlining supply chains to delivering more personalised customer experiences, AI is quietly reshaping how modern organisations function. What makes this shift powerful is not just automation, but the ability to make smarter decisions faster. Businesses are moving from reactive workflows to proactive, insight-driven strategies. In simple terms, enterprises that start integrating AI into their core systems today are setting themselves up for stronger growth, better efficiency, and long-term competitive advantage in an increasingly AI-driven world."
  },
  {
    id: 'i2',
    type: 'Strategic Insight',
    title: 'Positioning in the Post-SaaS Era: Finding Moats in Crowded Markets',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    content: "Positioning in the post-SaaS era is no longer about simply launching another software product—it’s about building defensible moats in an increasingly crowded market. As SaaS becomes commoditised, businesses must go beyond features and pricing to differentiate themselves through unique value, strong brand identity, and deep customer understanding. Today’s winning companies focus on ecosystem lock-in, proprietary data, network effects, and seamless user experiences that are hard to replicate. Instead of competing on tools, they position themselves as indispensable platforms or solutions. In this landscape, distribution, community, and trust play a critical role in long-term success. Enterprises that clearly define their niche, solve a specific high-value problem, and continuously evolve with customer needs are the ones that stand out. In simple terms, the future belongs to companies that don’t just build products—but create lasting advantages that competitors cannot easily copy."
  },
  {
    id: 'i3',
    type: 'Research Report',
    title: 'Global Expansion Playbook: Navigating APAC Market Entry Strategy',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    content: "Global expansion is no longer limited to large enterprises—startups and growing businesses are actively exploring APAC market entry as a strategic growth move. However, entering Asia-Pacific markets requires more than just scaling operations; it demands a deep understanding of regional diversity, consumer behaviour, and regulatory frameworks. Countries across APAC differ significantly in language, culture, digital adoption, and business practices, making localisation a critical success factor. Companies that succeed focus on tailored go-to-market strategies, strong local partnerships, and compliance with country-specific regulations. Leveraging digital channels, mobile-first experiences, and data-driven insights can accelerate traction in high-growth markets like India, Southeast Asia, and Australia. Instead of a one-size-fits-all approach, businesses must adapt quickly and remain agile. In simple terms, successful APAC expansion is about blending global vision with local execution to unlock scalable, long-term growth opportunities."
  },
  {
    id: 'i4',
    type: 'Engineering Guide',
    title: 'Modernizing Legacy Data Stacks for Real-Time Analytics',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    content: "Modernizing legacy data stacks is becoming a critical priority for businesses aiming to unlock real-time analytics and faster decision-making. Traditional systems often struggle with scalability, data silos, and delayed processing, limiting an organisation’s ability to respond quickly to changing market conditions. By transitioning to modern data architectures—such as cloud-native platforms, data lakes, and streaming pipelines—companies can enable continuous data flow and real-time insights. This shift allows teams to move beyond static reports and embrace dynamic, data-driven strategies. More importantly, modern data stacks improve data accessibility, governance, and integration across multiple sources. Businesses that invest in real-time analytics can enhance customer experiences, optimise operations, and identify opportunities as they happen. In simple terms, upgrading legacy data systems is not just a technical upgrade—it’s a strategic move that empowers organisations to stay agile, competitive, and future-ready in a data-driven world."

  },
  {
    id: 'i5',
    type: 'Executive Summary',
    title: 'The Hidden Cost of Misaligned Go-To-Market Teams',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    content: "The hidden cost of misaligned go-to-market teams often goes unnoticed until it starts impacting revenue, customer experience, and overall growth. When sales, marketing, and product teams operate in silos, messaging becomes inconsistent, leads are poorly qualified, and valuable opportunities slip through the cracks. This lack of alignment creates friction in the customer journey, leading to longer sales cycles and lower conversion rates. High-performing organisations prioritise clear communication, shared goals, and unified data across teams to ensure a seamless go-to-market strategy. By aligning incentives, defining common success metrics, and fostering collaboration, businesses can create a more cohesive and efficient growth engine. In simple terms, when go-to-market teams are aligned, execution becomes sharper, customers receive a consistent experience, and revenue growth becomes more predictable and scalable in today’s competitive landscape."

  },
  {
    id: 'i6',
    type: 'Case Study Analysis',
    title: 'Cloud Optimization: Cutting Enterprise AWS Spend by 40%',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
    content: "Cloud optimization is no longer just about cost-cutting—it’s about building a smarter, more efficient infrastructure that drives long-term value. Many enterprises overspend on AWS due to unused resources, overprovisioned instances, and lack of continuous monitoring. By adopting a strategic cloud cost optimization approach, businesses can reduce AWS spend by up to 40% without compromising performance. This involves right-sizing compute resources, leveraging auto-scaling, using reserved and spot instances, and implementing strong cost governance practices. Real-time monitoring and FinOps frameworks help teams track usage, eliminate waste, and make data-driven decisions. More importantly, optimization ensures that every dollar spent on the cloud directly contributes to business outcomes. In simple terms, companies that actively manage and optimize their cloud infrastructure not only save costs but also improve scalability, efficiency, and overall operational performance in a cloud-first world."

  },
  {
    id: 'i7',
    type: 'Case Study Analysis',
    title: 'Beyond Metros: Why Tier 2 & Tier 3 Cities Are India’s Next Growth Giants',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    content: "India’s next wave of growth is no longer confined to metro cities Tier 2 and Tier 3 markets are rapidly emerging as the country’s new economic powerhouses. Driven by rising internet penetration, affordable smartphones, and increasing digital adoption, these regions are unlocking massive opportunities for businesses across sectors. From e-commerce and fintech to edtech and healthcare, companies are now actively targeting smaller cities to tap into a vast, underserved consumer base. What makes this shift powerful is the combination of aspirational demand, improving infrastructure, and a growing young population eager to engage with digital platforms. Brands that localise their offerings, build trust, and understand regional nuances are gaining a strong competitive edge. In simple terms, India’s next giants will not just come from metros—they will rise from Tier 2 and Tier 3 cities, shaping the future of the country’s digital and economic landscape."
  },

  {
    id: 'i8',
    type: 'Research Report',
    title: 'The AI Shift in 2026: From Tools to Autonomous Systems',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    content: "The AI shift in 2026 marks a clear transition from simple tools to fully autonomous systems that can operate with minimal human input. Businesses are no longer relying on AI just for assistance; they are building intelligent systems that can plan, execute, and optimise tasks in real time. From customer support to operations and decision-making, AI is becoming deeply embedded into core workflows. This transformation is driven by advancements in machine learning, real-time data processing, and agent-based architectures. Companies adopting autonomous systems are seeing faster execution, reduced costs, and improved scalability. More importantly, AI is enabling organisations to move from reactive processes to proactive, insight-driven strategies. In simple terms, 2026 is not about using AI occasionally it’s about making AI the foundation of how businesses operate, compete, and grow in an increasingly digital and data-driven world."
  }

];

function InsightsSection() {
  return (
    <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)', padding: '120px 0' }}>
      <div className="container reveal-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.1, margin: 0 }}>Latest thinking</h2>
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

function InsightsPage() {
  return (
    <div style={{ background: 'var(--bg)', paddingBottom: '120px' }}>
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

function InsightDetailPage() {
  const { id } = useParams();
  const insightId = parseInt(id);
  const insight = insightsData.find(i => i.id === insightId);

  if (!insight) {
    return (
      <div style={pageStyle}>
        <h1 style={pageHeadStyle}>Insight Not Found</h1>
        <Link to="/blogs" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <article style={{ background: 'var(--bg)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
      <header style={{ padding: 'clamp(100px, 15vh, 160px) 0 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/blogs" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontWeight: '600' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span> Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '6px 16px', background: 'rgba(196, 166, 100, 0.1)', borderRadius: '20px' }}>{insight.type}</span>
            <span style={{ color: 'var(--text-soft)', fontSize: '14px', fontWeight: '500' }}>{insight.readTime}</span>
          </div>
          <h1 className="reveal-up" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', lineHeight: 1.15, margin: '0 0 40px 0', color: 'var(--primary)' }}>{insight.title}</h1>
        </div>
      </header>

      <div className="container reveal-scale" style={{ maxWidth: '1000px', marginBottom: '60px' }}>
        <div style={{ width: '100%', aspectRatio: '21/9', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <img src={insight.image} alt={insight.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="reveal-up" style={{ fontSize: '20px', lineHeight: 1.8, color: 'var(--text-soft)' }}>
          <p style={{ marginBottom: '32px' }}>{insight.content}</p>
          <div style={{ padding: 'clamp(20px, 4vw, 32px)', background: 'var(--surface)', borderLeft: '4px solid var(--secondary)', borderRadius: '0 16px 16px 0', margin: 'clamp(24px, 6vw, 48px) 0' }}>
            <p style={{ fontSize: '24px', color: 'var(--primary)', fontStyle: 'italic', margin: 0, fontWeight: '600', lineHeight: 1.4 }}>
              "Elite firms don't adapt to the market; they architect the market condition that favors their unique capabilities."
            </p>
          </div>
          <p>
            For more information on implementing these strategies within your own enterprise, schedule a diagnostic session with our leadership team.
          </p>
        </div>

        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>Want to discuss this further?</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openBookingModal')); }} className="btn btn-gold">Connect with a Partner</a>
        </div>
      </div>
    </article>
  );
}

function BookingModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [values, setValues] = React.useState({ name: "", email: "", company: "", context: "" });
  const [bookingDate, setBookingDate] = React.useState("");
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookingDate) return;
    setStatus('Sending request...');

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `New Strategy Session Booking from ${values.name || 'Website'}`,
      from_name: "Bharat Pursuit Website",
      message: `Strategy Session Requested\n\nName: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\nContext: ${values.context}\nRequested Time: ${new Date(bookingDate).toLocaleString()}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Request Sent! We will confirm shortly.");
        setTimeout(() => {
          setStatus('');
          onClose();
        }, 3000);
      } else {
        setStatus("Failed to send request.");
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending request.");
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '24px', padding: '48px', width: '100%', maxWidth: '640px', position: 'relative', overflowY: 'auto', maxHeight: '90vh', boxShadow: '0 24px 64px rgba(0,0,0,0.4)', opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.96)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <button onClick={onClose} aria-label="Close Modal" style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--line)', borderRadius: '50%', color: 'var(--text-soft)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', transition: 'all 0.2s ease' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
        </button>

        <div style={{ width: '64px', height: '64px', background: 'rgba(196, 166, 100, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '32px' }}>event_available</span>
        </div>
        <h2 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '12px', fontWeight: '800' }}>Schedule a Session</h2>
        <p style={{ color: 'var(--text-soft)', marginBottom: '40px', fontSize: '16px', lineHeight: 1.6 }}>
          Select a time and provide some context so we can pair you with the right managing partner for your strategic diagnostic.
        </p>

        {status ? (
          <div style={{ padding: '24px', background: 'rgba(196, 166, 100, 0.1)', color: 'var(--secondary)', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            {status}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <input type="text" placeholder="Full Name" required value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} style={{ flex: '1 1 calc(50% - 10px)', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '16px', outline: 'none' }} />
              <input type="email" placeholder="Work Email" required value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} style={{ flex: '1 1 calc(50% - 10px)', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '16px', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <input type="text" placeholder="Company" value={values.company} onChange={e => setValues({ ...values, company: e.target.value })} style={{ flex: '1 1 calc(50% - 10px)', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '16px', outline: 'none' }} />
              <input type="datetime-local" required value={bookingDate} onChange={e => setBookingDate(e.target.value)} style={{ flex: '1 1 calc(50% - 10px)', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '16px', outline: 'none' }} />
            </div>

            <textarea placeholder="What architectural or strategic challenge are you solving?" rows="4" required value={values.context} onChange={e => setValues({ ...values, context: e.target.value })} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--primary)', fontSize: '16px', resize: 'vertical', outline: 'none' }}></textarea>

            <button type="submit" className="btn btn-gold" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px', fontSize: '18px', marginTop: '12px', cursor: 'pointer' }}>
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = React.useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenModal);
    return () => window.removeEventListener('openBookingModal', handleOpenModal);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  React.useEffect(() => {
    // Global IntersectionObserver for reveal classes
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const timeoutId = setTimeout(() => {
      // Find all elements looking to be revealed on scroll
      const hiddenElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-tl, .reveal-tr, .reveal-bl, .reveal-br');

      // Reset them to ensure animation plays again if navigating back
      hiddenElements.forEach(el => {
        el.classList.remove('is-visible');
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);

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

  const content = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/tech" element={<TechServicesPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
      <Route path="/blogs" element={<InsightsPage />} />
      <Route path="/blogs/:id" element={<InsightDetailPage />} />
      <Route path="/careers" element={
        <>
          <CareersPage />
          <CareerListings />
        </>
      } />
      <Route path="/careers/:id" element={<JobListingPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/cookies" element={<CookiePolicyPage />} />
    </Routes>
  );

  return (
    <>
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-orb orb-three"></div>
      <Header theme={theme} toggleTheme={toggleTheme} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main>{content}</main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <Chatbot />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
