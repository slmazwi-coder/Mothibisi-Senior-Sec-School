export const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      minHeight: '85vh',
      background: 'linear-gradient(135deg, #800020 0%, #5C0015 50%, #1A1A1A 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '60px 20px',
    }}>
      {/* Decorative mountain silhouette */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, rgba(26, 26, 26, 0.4) 0%, transparent 100%)',
      }} />
      
      {/* Mountain peaks decoration */}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px' }} preserveAspectRatio="none">
        <path d="M0,150 L150,30 L300,80 L450,20 L600,60 L750,10 L900,50 L1050,25 L1200,70 L1200,150 Z" fill="rgba(26,26,26,0.3)" />
        <path d="M0,150 L200,60 L400,100 L600,40 L800,90 L1000,50 L1200,100 L1200,150 Z" fill="rgba(92,0,21,0.2)" />
      </svg>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        {/* School crest placeholder */}
        <div style={{
          width: '120px',
          height: '120px',
          margin: '0 auto 24px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid rgba(255,255,255,0.3)',
        }}>
          <span style={{ fontSize: '3rem' }}>🏔️</span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 900,
          color: '#FFFFFF',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          We Strive to Excel
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '32px',
          lineHeight: 1.6,
          fontWeight: 300,
        }}>
          Nurturing academic excellence and lifelong achievement<br />in the heart of the Eastern Cape
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('#about')}
            style={{
              padding: '14px 32px',
              background: '#FFFFFF',
              color: '#800020',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Explore Our School
          </button>
          <button
            onClick={() => scrollTo('#admissions')}
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #FFFFFF',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '3px solid rgba(255,255,255,0.5)',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
        }}>
          <div style={{
            width: '6px',
            height: '10px',
            background: '#FFFFFF',
            borderRadius: '3px',
            animation: 'scroll 2s infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(15px); }
        }
      `}</style>
    </section>
  );
};