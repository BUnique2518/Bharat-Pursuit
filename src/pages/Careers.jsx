import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { jobListings } from '../constants';

const pageStyle = { maxWidth: '800px', margin: '140px auto 100px', padding: '0 24px', lineHeight: 1.8, color: 'var(--text-soft)' };
const pageHeadStyle = { color: 'var(--primary)', marginBottom: '32px', fontSize: '42px', letterSpacing: '-0.03em' };
const pageSubHeadStyle = { color: 'var(--primary)', marginTop: '42px', marginBottom: '16px', fontSize: '24px' };

export function CareersPage() {
  return (
    <section className="section" style={{ background: 'var(--bg)', padding: '160px 0 100px', borderBottom: '1px solid var(--line)' }}>
      <Helmet>
        <title>Careers | Join Bharat Pursuit | Strategy & Engineering Roles</title>
        <meta name="description" content="Join the elite team at Bharat Pursuit. We're looking for strategists and engineers to build the future of enterprise growth and technical execution." />
        <meta name="keywords" content="Bharat Pursuit careers, strategy jobs, AI engineering roles, consulting careers India, software engineering jobs" />
        <link rel="canonical" href="https://bharatpursuit.com/careers" />
        <meta property="og:title" content="Careers at Bharat Pursuit" />
        <meta property="og:description" content="Build the future of strategic engineering with us." />
      </Helmet>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="eyebrow-pill" style={{ marginBottom: '24px' }}>Join the Pursuit</div>
          <h1 className="reveal-up" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.1, margin: 0 }}>
            Build the future of <span style={{ color: 'var(--secondary)' }}>strategic engineering.</span>
          </h1>
          <p className="reveal-up" style={{ fontSize: '18px', color: 'var(--text-soft)', lineHeight: 1.8, marginTop: '24px' }}>
            We're looking for high-autonomy individuals who thrive at the intersection of complex strategy and deep technical execution. At Bharat Pursuit, you don't just solve tickets; you solve enterprise growth challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CareerListings() {
  const [filterDept, setFilterDept] = React.useState('All');
  const [filterLevel, setFilterLevel] = React.useState('All');
  const [filterLocation, setFilterLocation] = React.useState('All');

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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  padding: '32px', background: 'var(--surface)', border: '1px solid var(--line)',
                  borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
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

export function JobListingPage() {
  const { id } = useParams();
  const job = jobListings.find(j => j.id === parseInt(id));

  if (!job) {
    return (
      <div style={pageStyle}>
        <h1 style={pageHeadStyle}>Job Not Found</h1>
        <Link to="/careers" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Back to Careers</Link>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <Helmet>
        <title>{`${job.title} | Careers | Bharat Pursuit`}</title>
        <meta name="description" content={job.description} />
        <link rel="canonical" href={`https://bharatpursuit.com/careers/${job.id}`} />
        <meta property="og:title" content={job.title} />
        <meta property="og:description" content={job.description} />
      </Helmet>
      <Link to="/careers" style={{ color: 'var(--secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontWeight: '600' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span> All Careers
      </Link>
      <h1 style={pageHeadStyle}>{job.title}</h1>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
        <span style={{ padding: '8px 16px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '14px', fontWeight: '600' }}>{job.department}</span>
        <span style={{ padding: '8px 16px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '14px', fontWeight: '600' }}>{job.location}</span>
        <span style={{ padding: '8px 16px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '14px', fontWeight: '600' }}>{job.type}</span>
      </div>

      <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '40px' }}>{job.description}</p>

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
        We review applications on a rolling basis. Shortlisted candidates will be contacted within 1 week.
      </p>
    </div>
  );
}
