import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#FFFFFF',
      borderBottom: '3px solid #800020',
      boxShadow: '0 2px 10px rgba(128, 0, 32, 0.1)',
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo & School Name */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              background: '#800020',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #800020',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🏔️</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: '1.1rem', color: '#800020' }}>
                MOTHIBISI SSS
              </div>
              <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                We Strive to Excel
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '8px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#222222',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F5E6EA';
                  e.currentTarget.style.color = '#800020';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#222222';
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                padding: '8px 16px',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#FFFFFF',
                background: '#800020',
                borderRadius: '20px',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              🤖 Ask Mothibisi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} color="#800020" /> : <Menu size={28} color="#800020" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            borderTop: '1px solid #F5E6EA',
            padding: '16px 0',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#222222',
                  borderBottom: '1px solid #F5E6EA',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                display: 'block',
                padding: '12px 16px',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#800020',
                marginTop: '8px',
              }}
            >
              🤖 Ask Mothibisi
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};