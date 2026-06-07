import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond to your enquiry shortly. For urgent matters, please call us directly at 084 410 2314.');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-heading">Contact Us</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Contact Details */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#800020',
              marginBottom: '24px',
            }}>
              Contact Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#800020',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  📞
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Phone</strong>
                  <p style={{ fontSize: '0.95rem', color: '#222222' }}>084 410 2314</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#800020',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  📍
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Physical Address</strong>
                  <p style={{ fontSize: '0.95rem', color: '#222222' }}>Thaba-Chicha A/A, Mt Fletcher, 4730</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#800020',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  📮
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Postal Address</strong>
                  <p style={{ fontSize: '0.95rem', color: '#222222' }}>[TO CONFIRM]</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#800020',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  🏫
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>District</strong>
                  <p style={{ fontSize: '0.95rem', color: '#222222' }}>Alfred Nzo West Education District</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#800020',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  🌍
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Province</strong>
                  <p style={{ fontSize: '0.95rem', color: '#222222' }}>Eastern Cape</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#800020',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  👨‍💼
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Principal</strong>
                  <p style={{ fontSize: '0.95rem', color: '#222222' }}>VS Mgojo</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#"
                style={{
                  padding: '10px 20px',
                  background: '#800020',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                📘 Facebook [TO CONFIRM]
              </a>
              <a
                href="#"
                style={{
                  padding: '10px 20px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                💬 WhatsApp [TO CONFIRM]
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#F5E6EA',
            borderRadius: '16px',
            padding: '32px',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#800020',
              marginBottom: '24px',
            }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #D4A0AD',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: '#FFFFFF',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 084 410 2314"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #D4A0AD',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: '#FFFFFF',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #D4A0AD',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: '#FFFFFF',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #D4A0AD',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: '#FFFFFF',
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="Admissions">Admissions</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Academic Records">Academic Records</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message here..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #D4A0AD',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: '#FFFFFF',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '14px 28px',
                  background: '#800020',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#5C0015';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#800020';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};