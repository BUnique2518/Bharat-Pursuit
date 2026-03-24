import React from "react";

const services = [
  {
    number: "01",
    title: "Strategic Market Positioning",
    text: "Define a sharper market narrative, stronger differentiation, and a positioning architecture built for international growth.",
    icon: "target"
  },
  {
    number: "02",
    title: "Go to Market Acceleration",
    text: "Launch new offers, geographies, and categories with structured messaging, revenue-focused campaigns, and measurable traction.",
    icon: "rocket_launch"
  },
  {
    number: "03",
    title: "Demand & Pipeline Strategy",
    text: "Connect brand, content, performance, and enterprise sales motions into one commercial engine that compounds over time.",
    icon: "trending_up"
  },
  {
    number: "04",
    title: "Executive Advisory",
    text: "Support leadership teams with board-ready marketing strategy, growth diagnostics, and decision frameworks for high-stakes initiatives.",
    icon: "psychology"
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
          <a href="#contact" onClick={(e) => goHome(e, 'contact')}>Contact</a>
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
          <div className="eyebrow-pill">Strategic & Solutions Marketing Consulting for global growth</div>
          <h1>Build a market presence that looks premium, sells clearly, and scales globally.</h1>
          <p className="hero-text">
            Bharat Pursuit partners with ambitious firms to sharpen brand strategy, refine market positioning,
            and translate complex solutions into high-conviction growth narratives for international buyers.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">Request a Consultation</a>
            <a href="#services" className="btn btn-outline">Explore Capabilities</a>
          </div>

          <div className="hero-points">
            <div className="info-card">
              <h3>Positioning-first</h3>
              <p>Strategy rooted in clear commercial advantage.</p>
            </div>
            <div className="info-card">
              <h3>Senior-led</h3>
              <p>No junior handoff on core consulting work.</p>
            </div>
            <div className="info-card">
              <h3>Global-ready</h3>
              <p>Messaging designed for cross-border credibility.</p>
            </div>
          </div>
        </div>

        <div className="hero-panel-wrap reveal-scale">
          <div className="hero-panel tilt-card">
            <div className="panel-glow"></div>
            <div className="panel-content">
              <div className="panel-heading-row">
                <div>
                  <div className="panel-eyebrow">Boardroom-ready growth</div>
                  <h2>A sharper route to market confidence</h2>
                </div>
                <div className="mini-orb"></div>
              </div>

              <div className="proof-grid">
                {proof.map((item) => (
                  <ProofCard item={item} key={item.label} />
                ))}
              </div>

              <div className="panel-note">
                From positioning frameworks to executive messaging systems, we help firms look more credible,
                communicate more clearly, and convert better across sophisticated markets.
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
    <section className="section" id="services">
      <div className="container" ref={containerRef}>
        <div className="section-head">
          <div className="section-kicker">Core Services</div>
          <h2>Consulting built for firms that need clarity, credibility, and commercial momentum.</h2>
          <p>
            Every engagement is designed to reduce strategic noise, sharpen the value story, and help leadership teams
            move faster with more market confidence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card tilt-card service-animate ${getAnimationClass(index)}`}
              key={service.title}
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
              <span className="service-link">Learn more</span>
            </article>
          ))}
        </div>
      </div>
    </section>
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
          <div className="section-kicker">How We Work</div>
          <h2>Commercial strategy with consulting-grade structure.</h2>
          <p>
            Our approach combines strategic diagnosis, market logic, narrative architecture, and action planning so
            teams can move from fragmented marketing to disciplined growth execution.
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
          <div className="section-kicker">Why Clients Choose Us</div>
          <h2>Global polish without generic consulting fluff.</h2>
          <p>
            The visual language, messaging discipline, and strategic tone are designed to make ambitious firms look
            established, serious, and internationally credible.
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
            <div className="section-kicker">Start the conversation</div>
            <h2>Looking for a consulting partner that can speak both strategy and market reality?</h2>
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
            <button type="submit" className="btn btn-gold" disabled={status === 'Sending...'}>
              {status || 'Send Enquiry'}
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
              Premier consulting firm dedicated to architectural excellence and strategic growth in the Indian business landscape.
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
              <li><a href="#approach" onClick={(e) => goHomeSection(e, 'approach')}>Our Approach</a></li>
              <li><a href="#services" onClick={(e) => goHomeSection(e, 'services')}>Core Services</a></li>
              <li><a href="#companies" onClick={(e) => goHomeSection(e, 'companies')}>Companies We've Worked With</a></li>
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
