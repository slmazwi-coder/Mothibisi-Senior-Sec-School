const newsItems = [
  {
    title: '2026 Applications Now Open',
    date: 'January 2026',
    excerpt: 'Applications for the 2026 academic year are now being accepted. Visit the school with required documents to apply.',
    icon: '📢',
  },
  {
    title: 'Grade 12 Examination Preparation',
    date: 'Ongoing',
    excerpt: 'Our dedicated Grade 12 learners are engaged in intensive revision programmes to ensure success in the NSC examinations.',
    icon: '📚',
  },
  {
    title: 'Sports Day Success',
    date: 'March 2026',
    excerpt: 'Our learners participated enthusiastically in the annual sports day, demonstrating teamwork and school spirit.',
    icon: '🏆',
  },
];

export const News = () => {
  return (
    <section id="news" style={{ padding: '80px 20px', background: '#F5E6EA' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Updates</div>
          <h2 className="section-heading">Latest News</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {newsItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                borderLeft: '4px solid #800020',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(128, 0, 32, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    color: '#800020',
                  }}>
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#888' }}>
                    {item.date}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};