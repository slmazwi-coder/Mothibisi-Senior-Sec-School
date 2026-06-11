export const Uniform = () => {
  const colors = [
    { name: 'Maroon / Burgundy', hex: '#800020' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Dark Grey / Black', hex: '#1A1A1A' },
  ];

  return (
    <section id="uniform" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Identity</div>
          <h2 className="section-heading">School Colours & Uniform</h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Colour Swatches */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#800020',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              Our Colours
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}>
              {colors.map((color, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: color.hex,
                    borderRadius: '12px',
                    border: color.hex === '#FFFFFF' ? '2px solid #DDD' : 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  }} />
                  <div style={{
                    marginTop: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#222222',
                  }}>
                    {color.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#888',
                    fontFamily: 'monospace',
                  }}>
                    {color.hex}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Uniform Description */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {/* Girls Uniform */}
            <div style={{
              background: '#F5E6EA',
              borderRadius: '12px',
              padding: '24px',
              borderTop: '4px solid #800020',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: '#800020',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                👩‍👧 Girls Uniform
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> White formal shirt with school crest badge
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> Maroon skirt (knee-length)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> Maroon socks
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> Black formal shoes
                </li>
              </ul>
            </div>

            {/* Boys Uniform */}
            <div style={{
              background: '#F5E6EA',
              borderRadius: '12px',
              padding: '24px',
              borderTop: '4px solid #800020',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: '#800020',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                👦 Boys Uniform
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> White formal shirt with school crest
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> Grey trousers
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> Maroon socks
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#800020' }}>✓</span> Black formal shoes
                </li>
              </ul>
            </div>
          </div>

          <p style={{
            marginTop: '24px',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#666',
            fontStyle: 'italic',
          }}>
            All learners are expected to maintain a neat and presentable appearance in line with school values.
          </p>
        </div>
      </div>
    </section>
  );
};