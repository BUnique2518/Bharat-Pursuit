import React from 'react';
import { Helmet } from 'react-helmet-async';

const pageStyle = { maxWidth: '800px', margin: '140px auto 100px', padding: '0 24px', lineHeight: 1.8, color: 'var(--text-soft)' };
const pageHeadStyle = { color: 'var(--primary)', marginBottom: '32px', fontSize: '42px', letterSpacing: '-0.03em' };
const pageSubHeadStyle = { color: 'var(--primary)', marginTop: '42px', marginBottom: '16px', fontSize: '24px' };

export function PrivacyPolicyPage() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Privacy Policy | Bharat Pursuit</title>
        <meta name="robots" content="noindex" />
      </Helmet>
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

export function TermsOfServicePage() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Terms of Service | Bharat Pursuit</title>
        <meta name="robots" content="noindex" />
      </Helmet>
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

export function CookiePolicyPage() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Cookie Policy | Bharat Pursuit</title>
        <meta name="robots" content="noindex" />
      </Helmet>
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
