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
      <div className="container sectors-grid">
        {sectors.map((sector) => (
          <div key={sector} className="sector-item">{sector}</div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Core Services</div>
          <h2>Consulting built for firms that need clarity, credibility, and commercial momentum.</h2>
          <p>
            Every engagement is designed to reduce strategic noise, sharpen the value story, and help leadership teams
            move faster with more market confidence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card tilt-card" key={service.title}>
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
  return (
    <section className="section section-dark" id="approach">
      <div className="container approach-grid">
        <div className="section-head dark">
          <div className="section-kicker">How We Work</div>
          <h2>Commercial strategy with consulting-grade structure.</h2>
          <p>
            Our approach combines strategic diagnosis, market logic, narrative architecture, and action planning so
            teams can move from fragmented marketing to disciplined growth execution.
          </p>
        </div>

        <div className="approach-cards">
          {approach.map((item) => (
            <div className="approach-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section" id="sectors">
      <div className="container why-grid">
        <div className="section-head">
          <div className="section-kicker">Why Clients Choose Us</div>
          <h2>Global polish without generic consulting fluff.</h2>
          <p>
            The visual language, messaging discipline, and strategic tone are designed to make ambitious firms look
            established, serious, and internationally credible.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((item) => (
            <div className="reason-card" key={item}>
              <span className="check-dot"></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
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
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Work email" />
            <input type="text" placeholder="Company" />
            <textarea rows="4" placeholder="What challenge are you solving?"></textarea>
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
      <div className="container footer-wrap">
        <div className="brand footer-brand">
          <img src="./assets/MainIcon.png" alt="Bharat Pursuit mark" className="brand-logo" />
          <div>
            <div className="brand-name">Bharat Pursuit</div>
            <div className="footer-sub">Strategic & Solutions Marketing Consulting</div>
          </div>
        </div>
        <div className="footer-note">© 2026 Bharat Pursuit. Built for global client credibility.</div>
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
        <SectorsBand />
        <Services />
        <Approach />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
