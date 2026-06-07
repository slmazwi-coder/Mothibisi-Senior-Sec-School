import React from 'react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: '#1A1A1A',
      padding: '60px 20px 20px',
      color: '#FFFFFF',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Logo & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#800020',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                🏔️
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: '1.1rem' }}>
                  MOTHIBISI SSS
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                  "We Strive to Excel"
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Mothibisi Senior Secondary School<br />
              Thaba-Chicha A/A, Mt Fletcher<br />
              Eastern Cape, 4730
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.1rem',
              marginBottom: '16px',
              color: '#FFFFFF',
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    color: '#800020',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4A0AD';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#800020';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.1rem',
              marginBottom: '16px',
              color: '#FFFFFF',
            }}>
              Contact & Social
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
              📞 084 410 2314
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
              📧 [TO CONFIRM]
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#"
                style={{
                  padding: '8px 16px',
                  background: '#800020',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                📘 Facebook
              </a>
              <a
                href="#"
                style={{
                  padding: '8px 16px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Mothibisi Senior Secondary School. All Rights Reserved. | Alfred Nzo West Education District, Eastern Cape
          </p>
        </div>
      </div>
    </footer>
  );
};