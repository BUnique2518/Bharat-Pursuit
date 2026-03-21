import React from "react";

const services = [
  {
    number: "01",
    title: "Strategic Market Positioning",
    text: "Define a sharper market narrative, stronger differentiation, and a positioning architecture built for international growth."
  },
  {
    number: "02",
    title: "Go-to-Market Acceleration",
    text: "Launch new offers, geographies, and categories with structured messaging, revenue-focused campaigns, and measurable traction."
  },
  {
    number: "03",
    title: "Demand & Pipeline Strategy",
    text: "Connect brand, content, performance, and enterprise sales motions into one commercial engine that compounds over time."
  },
  {
    number: "04",
    title: "Executive Advisory",
    text: "Support leadership teams with board-ready marketing strategy, growth diagnostics, and decision frameworks for high-stakes initiatives."
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
  "./assets/companies/D2e_Vector_logo-Primary_400x.svg",
  "./assets/companies/Group_87_59a28562-b3b3-4331-9d3c-4a27366eba04.webp",
  "./assets/companies/gatim_logo.avif",
  "./assets/companies/images.jpeg",
  "./assets/companies/insync-new-logo.png",
  "./assets/companies/jdlogosvg.svg",
  "./assets/companies/logo.svg"
];

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#" className="brand">
          <img src="./assets/MainIcon.png" alt="Bharat Pursuit logo" className="brand-logo" />
          <div>
            <div className="brand-top">Global Consulting</div>
            <div className="brand-name">Bharat Pursuit</div>
          </div>
        </a>

        <nav className="main-nav">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#sectors">Sectors</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
      </div>
    </header>
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
                  <div className="proof-card" key={item.label}>
                    <div className="proof-value">{item.value}</div>
                    <div className="proof-label">{item.label}</div>
                  </div>
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
            <article className={`service-card tilt-card service-animate ${getAnimationClass(index)}`} key={service.title}>
              <div className="service-top">
                <div className="service-icon"></div>
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
        <div className="section-kicker">Companies We've Worked With</div>
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

  const handleInteraction = () => setActive(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setActive(false);
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

          <form className="contact-form">
            <input
              type="text"
              name="name"
              placeholder={placeholders.name}
              value={values.name}
              onChange={handleChange}
              onFocus={handleInteraction}
              onClick={handleInteraction}
            />
            <input
              type="email"
              name="email"
              placeholder={placeholders.email}
              value={values.email}
              onChange={handleChange}
              onFocus={handleInteraction}
              onClick={handleInteraction}
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
            ></textarea>
            <button type="button" className="btn btn-gold">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-main">
            {/* <h2 className="footer-brand-title">Bharat Pursuit</h2> */}
            <div className="brand-name-footer">Bharat Pursuit</div>
            <p className="footer-desc">
              Premier consulting firm dedicated to architectural excellence and strategic growth in the Indian business landscape.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#services">Core Services</a></li>
              <li><a href="#companies">Companies We've Worked With</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Bharat Pursuit. All rights reserved.</p>
          <div className="footer-social">
            <a href="mailto:support@bharatpursuit.com" aria-label="Support Mail" className="footer-social-icon" style={{ display: 'flex' }}>
              <span className="material-symbols-outlined">mail</span>
            </a>
            <span className="material-symbols-outlined footer-social-icon">public</span>
            <span className="material-symbols-outlined footer-social-icon">hub</span>
            <span className="material-symbols-outlined footer-social-icon">campaign</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    const onMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((y / rect.height) - 0.5) * -10;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const onLeave = (event) => {
      event.currentTarget.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
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
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-orb orb-three"></div>
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <Services />
        {/* <SectorsBand /> */}
        <Approach />
        <WhyChoose />
        <Contact />
        <SimpleSection
          id="client-success"
          title="Client Success"
          defaultText="Read our case studies on how we've helped ambitious firms build premium visibility and convert global buyers. (Coming Soon)"
        />
        <SimpleSection
          id="insights"
          title="Insights & Whitepapers"
          defaultText="Discover frameworks, methodologies, and thought leadership designed for high-stakes strategic growth. (Coming Soon)"
        />
        <SimpleSection
          id="privacy"
          title="Privacy Policy"
          defaultText="Your data privacy and security are our highest priority. This space will soon contain our full legal privacy disclosures."
        />
        <SimpleSection
          id="terms"
          title="Terms of Service"
          defaultText="Our terms of service outline the mutual commitments necessary for maintaining a high-quality consulting relationship."
        />
        <SimpleSection
          id="cookies"
          title="Cookie Policy"
          defaultText="Detailed information on our cookie usage will be available here."
        />
      </main>
      <Footer />
    </>
  );
}
