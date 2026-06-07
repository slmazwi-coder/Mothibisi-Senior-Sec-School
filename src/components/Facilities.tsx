import React from 'react';

const facilities = [
  {
    icon: '🏫',
    title: 'Classrooms',
    description: 'Well-structured academic classrooms for all grade levels, supporting focused learning',
  },
  {
    icon: '📚',
    title: 'Library / Resource Room',
    description: 'Study support, reference materials and reading resources for learners',
  },
  {
    icon: '🔬',
    title: 'Science Room',
    description: 'Life Sciences and Physical Sciences practical sessions',
  },
  {
    icon: '🏃',
    title: 'Sports Grounds',
    description: 'Outdoor space for physical education and sport activities',
  },
  {
    icon: '🖥️',
    title: 'Administration Block',
    description: 'Dedicated administrative offices and staff facilities',
  },
  {
    icon: '🌄',
    title: 'Scenic Setting',
    description: 'Located amid the Thaba-Chicha mountains — a unique and inspiring environment',
  },
];

export const Facilities = () => {
  return (
    <section id="facilities" style={{ padding: '80px 20px', background: '#F5E6EA' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Infrastructure</div>
          <h2 className="section-heading">Our Facilities</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {facilities.map((facility, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px',
                borderLeft: '4px solid #800020',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(128, 0, 32, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{facility.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: '#800020',
                marginBottom: '8px',
              }}>
                {facility.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};