import React from 'react';

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

export default BookingModal;
