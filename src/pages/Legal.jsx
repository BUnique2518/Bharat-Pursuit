import React from 'react';
import { Helmet } from 'react-helmet-async';

const pageStyle = { maxWidth: '900px', margin: '140px auto 100px', padding: '0 24px', lineHeight: 1.8, color: 'var(--text-soft)', fontFamily: 'inherit' };
const pageHeadStyle = { color: 'var(--primary)', marginBottom: '32px', fontSize: '48px', letterSpacing: '-0.04em', fontWeight: '800' };
const pageSubHeadStyle = { color: 'var(--primary)', marginTop: '48px', marginBottom: '20px', fontSize: '28px', fontWeight: '700', borderBottom: '1px solid var(--line)', paddingBottom: '12px' };
const sectionTitleStyle = { color: 'var(--secondary)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' };

export function PrivacyPolicyPage() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Privacy Policy | Bharat Pursuit - Strategic Consulting India & APAC</title>
        <meta name="description" content="Privacy Policy for Bharat Pursuit. We are committed to protecting data for our enterprise clients in India, Singapore, and globally in compliance with DPDP, GDPR, and CCPA." />
        <meta name="keywords" content="Bharat Pursuit privacy policy, data protection India, DPDP Act compliance, enterprise consulting privacy, global strategy data safety" />
        <link rel="canonical" href="https://bharatpursuit.com/privacy" />
      </Helmet>
      
      <div style={sectionTitleStyle}>Legal Framework</div>
      <h1 style={pageHeadStyle}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> March, 2025</p>
      
      <p>Bharat Pursuit ("Company," "we," "us," or "our"), headquartered in <strong>New Delhi, India</strong>, respects your privacy and is committed to protecting your personal data across our global operations. This privacy policy informs you how we manage your personal data when you visit our website (regardless of where you visit it from, including major hubs like <strong>Bangalore, Mumbai, and Gurgaon</strong>) and informs you about your privacy rights under local and international laws.</p>

      <h3 style={pageSubHeadStyle}>1. Compliance & Jurisdictions</h3>
      <p>Our data practices are designed to comply with the highest global standards, including:</p>
      <ul>
        <li><strong>Digital Personal Data Protection (DPDP) Act, 2023 (India)</strong></li>
        <li><strong>General Data Protection Regulation (GDPR)</strong> for our European Union clients.</li>
        <li><strong>California Consumer Privacy Act (CCPA)</strong> for our North American engagements.</li>
      </ul>
      
      <h3 style={pageSubHeadStyle}>2. The Data We Collect</h3>
      <p>As a premium strategic consultancy, we collect data primarily to provide high-stakes advisory and positioning services. This includes Identity Data (Name, Job Title), Contact Data (Email, Business Address), and Technical Data (IP address, browser type) used for optimizing our digital narrative experience.</p>
      
      <h3 style={pageSubHeadStyle}>3. How We Use Your Data</h3>
      <p>We use your information to deliver tailored go-to-market strategies, manage executive advisory engagements, and communicate strategic insights relevant to the <strong>Indian and APAC market landscape</strong>.</p>
      
      <h3 style={pageSubHeadStyle}>4. Contact Our Data Protection Office</h3>
      <p>For any privacy-related inquiries regarding our <strong>strategic consulting services</strong>, please contact us at:</p>
      <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--line)', marginTop: '24px' }}>
        <strong>Email:</strong> legal@bharatpursuit.com<br />
        <strong>Address:</strong> Level 18, DLF Cyber City, Phase III, Gurgaon, Haryana 122002, India
      </div>
    </div>
  );
}

export function TermsOfServicePage() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Terms of Service | Bharat Pursuit - Enterprise Global Growth</title>
        <meta name="description" content="Terms of Service for Bharat Pursuit. Our consulting engagements are governed by the laws of India and designed for global enterprise standards." />
        <meta name="keywords" content="Bharat Pursuit terms, strategic consulting agreement, enterprise GTM terms, India business law, APAC consulting services" />
        <link rel="canonical" href="https://bharatpursuit.com/terms" />
      </Helmet>
      
      <div style={sectionTitleStyle}>Agreement</div>
      <h1 style={pageHeadStyle}>Terms of Service</h1>
      <p><strong>Effective Date:</strong>March, 2025</p>
      
      <p>These Terms of Service ("Terms") govern your access to and use of the Bharat Pursuit website and specialized consulting services. By accessing or using our platforms, you agree to be bound by these Terms and our jurisdiction in <strong>Haryana, India</strong>.</p>
      
      <h3 style={pageSubHeadStyle}>1. Professional Services Architecture</h3>
      <p>Bharat Pursuit provides high-level <strong>strategic marketing, positioning, and global GTM (Go-To-Market) consulting</strong>. Our services are typically delivered to enterprise clients under separate Master Service Agreements (MSA) and specific Statements of Work (SOW).</p>
      
      <h3 style={pageSubHeadStyle}>2. Intellectual Property & Bharat Pursuit Frameworks</h3>
      <p>All content, including the "Architecture Over Strategy" frameworks, diagnostic models, and narrative systems shown on this site, are the exclusive intellectual property of Bharat Pursuit. We serve clients globally from our base in <strong>India</strong>, and any reproduction without explicit consent is prohibited.</p>
      
      <h3 style={pageSubHeadStyle}>3. Governing Law</h3>
      <p>These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in <strong>Gurgaon/New Delhi</strong>.</p>
    </div>
  );
}

export function CookiePolicyPage() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Cookie Policy | Bharat Pursuit - Optimize Your Strategy Experience</title>
        <meta name="description" content="Learn how Bharat Pursuit uses cookies to improve our strategic narrative delivery and user experience across India and global markets." />
        <meta name="keywords" content="Bharat Pursuit cookie policy, enterprise website cookies, strategic consulting site data, APAC web tracking" />
        <link rel="canonical" href="https://bharatpursuit.com/cookies" />
      </Helmet>
      
      <div style={sectionTitleStyle}>Transparency</div>
      <h1 style={pageHeadStyle}>Cookie Policy</h1>
      <p><strong>Effective Date:</strong> March, 2025
      </p>
      
      <p>Our website uses cookies to distinguish you from other users. This helps us provide a premium experience when you browse our <strong>global strategy insights</strong> and allows us to improve our site for our <strong>Pan-India and International</strong> audience.</p>
      
      <h3 style={pageSubHeadStyle}>1. How We Use Cookies</h3>
      <p>We use analytical cookies to understand how executives from different regions—including <strong>Southeast Asia, North America, and the Indian subcontinent</strong>—interact with our positioning frameworks. This data is anonymized and used exclusively for service refinement.</p>
      
      <h3 style={pageSubHeadStyle}>2. Managing Your Preferences</h3>
      <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the <strong>Bharat Pursuit interactive experience</strong>.</p>
    </div>
  );
}
