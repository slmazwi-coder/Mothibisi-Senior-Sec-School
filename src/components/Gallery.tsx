const galleryItems = [
  {
    title: 'Learners in Winter Sportswear',
    description: 'Four male learners in maroon/white winter tracksuits',
    placeholder: '🏃',
  },
  {
    title: 'Girls in Uniform',
    description: 'Group of girls in white shirts and maroon skirts',
    placeholder: '👩‍🎓',
  },
  {
    title: 'School Welcome Event',
    description: 'Learners celebrating in a decorated classroom',
    placeholder: '🎉',
  },
  {
    title: 'Outdoor School Life',
    description: 'Learners in uniform outside the school',
    placeholder: '🌳',
  },
  {
    title: 'School Grounds',
    description: 'Placeholder for additional photos',
    placeholder: '🏫',
  },
  {
    title: 'Crop Fields & Planting',
    description: 'Placeholder for additional photos',
    placeholder: '🌱',
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Gallery</div>
          <h2 className="section-heading">Photo Gallery</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#800020',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(128, 0, 32, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #800020 0%, #5C0015 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '4rem', opacity: 0.8 }}>{item.placeholder}</span>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.1rem',
                  color: '#800020',
                  marginBottom: '8px',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '32px',
          fontSize: '0.9rem',
          color: '#888',
          fontStyle: 'italic',
        }}>
          Real photos from the school will be added as they become available.
        </p>
      </div>
    </section>
  );
};