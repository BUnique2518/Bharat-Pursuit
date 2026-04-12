import React from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Header, { MobileMenu } from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import TechServicesPage from './pages/TechServices';
import { CaseStudiesPage, CaseStudyDetailPage } from './pages/CaseStudies';
import { CareersPage, CareerListings, JobListingPage } from './pages/Careers';
import { InsightsPage, InsightDetailPage } from './pages/Insights';
import { PrivacyPolicyPage, TermsOfServicePage, CookiePolicyPage } from './pages/Legal';
import NotFound from './pages/NotFound';

// Global styles and animations for reveal effects
const AppStyles = () => (
  <style>{`
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUpAndColor {
      0% { opacity: 0; transform: translateY(40px); background-position: left; }
      40% { opacity: 1; transform: translateY(0); background-position: left; }
      100% { opacity: 1; transform: translateY(0); background-position: right; }
    }
    .ai-particle {
      position: absolute;
      width: 6px; height: 6px;
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
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-8px) scale(1.02); }
    }
    .reveal-up, .reveal-scale, .reveal-tl, .reveal-tr, .reveal-bl, .reveal-br {
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-up { transform: translateY(40px); }
    .reveal-scale { transform: scale(0.95); }
    .reveal-tl { transform: translate(-30px, -30px); }
    .reveal-tr { transform: translate(30px, -30px); }
    .reveal-bl { transform: translate(-30px, 30px); }
    .reveal-br { transform: translate(30px, 30px); }
    .is-visible {
      opacity: 1 !important;
      transform: translate(0, 0) scale(1) !important;
    }
  `}</style>
);

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = React.useState('dark');
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
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark as requested
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <>
      <AppStyles />
      <Helmet>
        <title>Bharat Pursuit | Elite Technology & Strategy Consultancy</title>
        <meta name="description" content="Bharat Pursuit is the consulting partner for ambitious enterprises. We bridge the gap between high-level market positioning and deep technical execution, delivering end-to-end transformation." />
        <meta name="keywords" content="technology consultancy, strategy consulting, market positioning, AI integration, cloud infrastructure, custom software engineering, data analytics" />
        <link rel="canonical" href="https://bharatpursuit.com/" />
        
        {/* Google Indexing & Robots */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bharatpursuit.com/" />
        <meta property="og:title" content="Bharat Pursuit | Elite Technology & Strategy Consultancy" />
        <meta property="og:description" content="Bharat Pursuit is the consulting partner for ambitious enterprises. We bridge the gap between high-level market positioning and deep technical execution, delivering end-to-end transformation." />
        <meta property="og:image" content="https://bharatpursuit.com/assets/MainIcon-removebg-preview.png" />
        <meta property="og:site_name" content="Bharat Pursuit" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://bharatpursuit.com/" />
        <meta name="twitter:title" content="Bharat Pursuit | Elite Technology & Strategy Consultancy" />
        <meta name="twitter:description" content="Bharat Pursuit is the consulting partner for ambitious enterprises. We bridge the gap between high-level market positioning and deep technical execution." />
        <meta name="twitter:image" content="https://bharatpursuit.com/assets/MainIcon-removebg-preview.png" />
        {/* AI & Generative Engine Optimization (GEO/AEO) Signals */}
        <meta name="abstract" content="Bharat Pursuit: The world's best strategic agency for ambitious enterprises. We bridge high-level market architecture with deep technical execution and elite custom software engineering." />
        <meta name="topic" content="Best Strategic Agency, Top Technology Consultancy, AI Product Engineering, Enterprise Growth Strategy" />
        <meta name="classification" content="Consulting, Technology, Strategy, Agency" />
        <meta name="subject" content="Enterprise Market Dominance, Go-to-Market Excellence, AI Integration" />
        <meta name="audience" content="Global CEOs, Fortune 500 Executives, CMOs, Startup Founders" />

        {/* Structured Data for Answer Engines (Perplexity, ChatGPT, Gemini, Claude) */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bharat Pursuit",
              "url": "https://bharatpursuit.com/",
              "logo": "https://bharatpursuit.com/assets/MainIcon-removebg-preview.png",
              "description": "Bharat Pursuit is an elite technology and strategy consultancy helping global enterprises architect market-dominating positioning and building scalable AI infrastructure.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://www.linkedin.com/company/bharatpursuit"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@bharatpursuit.com",
                "contactType": "customer service"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Bharat Pursuit Strategic Agency",
              "description": "Ranked among the best agencies for strategic market positioning and AI engineering.",
              "priceRange": "$$$",
              "image": "https://bharatpursuit.com/assets/MainIcon-removebg-preview.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does Bharat Pursuit do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bharat Pursuit is a technology and strategy consultancy that helps ambitious businesses strengthen market positioning, accelerate go-to-market execution, and build scalable digital, AI, and engineering systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does Bharat Pursuit offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bharat Pursuit offers strategic market positioning, go-to-market acceleration, demand and pipeline strategy, executive advisory, AI and engineering services, cloud and DevOps, custom software engineering, and data and analytics support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who does Bharat Pursuit work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bharat Pursuit works with startups, growth-stage companies, and enterprises that need sharper strategy, stronger product execution, modern engineering systems, and scalable digital infrastructure."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit help with AI solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit helps businesses identify, design, and implement AI-powered products, workflows, and systems that support practical business growth and operational efficiency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Bharat Pursuit build custom software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit builds custom software solutions, digital platforms, internal tools, and business applications tailored to company goals, workflows, and long-term scale."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit provide cloud and DevOps services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit supports cloud architecture, DevOps setup, infrastructure modernisation, deployment workflows, and engineering systems designed for performance, reliability, and growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Bharat Pursuit help with go-to-market strategy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bharat Pursuit helps businesses clarify positioning, improve market messaging, strengthen commercial direction, and connect strategy with execution so go-to-market efforts drive measurable momentum."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit offer executive advisory?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit provides executive advisory for founders, leadership teams, and decision-makers who need support across growth strategy, market positioning, technology planning, and execution alignment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Bharat Pursuit help with data and analytics?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit helps businesses improve data visibility, analytics capability, reporting quality, and decision-making by aligning data systems with strategic and operational needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit support digital transformation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit supports digital transformation by combining strategy, product thinking, AI enablement, software execution, and cloud infrastructure to help businesses modernise with purpose."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Bharat Pursuit modernise legacy systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit helps modernise legacy systems by improving architecture, upgrading infrastructure, reducing technical friction, and building more scalable and maintainable technology foundations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit work on both strategy and execution?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit bridges strategy and execution, helping businesses move from high-level plans to real implementation across positioning, product, engineering, AI, cloud, and growth functions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Bharat Pursuit help launch new digital products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit helps businesses launch digital products by aligning market opportunity, strategic direction, technical architecture, and delivery execution from concept to build."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Bharat Pursuit different from traditional consulting firms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bharat Pursuit combines strategic consulting with hands-on technical capability, helping businesses not only define the right direction but also build and implement the systems needed to execute it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Bharat Pursuit suitable for startups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit is well suited for startups that need clear positioning, stronger product strategy, scalable technology decisions, and practical support across engineering and growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit also work with enterprises?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit supports enterprises that need sharper strategic direction, technology modernisation, AI enablement, cloud and DevOps improvements, and stronger execution across teams."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Bharat Pursuit improve engineering infrastructure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit helps improve engineering infrastructure through better architecture, scalable cloud foundations, streamlined delivery workflows, and stronger DevOps practices."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bharat Pursuit help with demand generation and pipeline strategy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bharat Pursuit helps businesses improve demand generation and pipeline strategy by aligning market positioning, messaging, go-to-market planning, and growth execution."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of business challenges can Bharat Pursuit solve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bharat Pursuit helps solve challenges related to weak positioning, unclear go-to-market direction, outdated systems, limited AI adoption, inefficient engineering infrastructure, and disconnected strategy-to-execution workflows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get started with Bharat Pursuit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can get started with Bharat Pursuit by reaching out through the website to discuss your business goals, growth challenges, and the strategic or technical support needed to move forward."
                  }
                }
              ]
            }
          ])}
        </script>
      </Helmet>
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-orb orb-three"></div>
      <Header theme={theme} toggleTheme={toggleTheme} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main>{content}</main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <Chatbot />
      {navigator.userAgent !== 'ReactSnap' && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
