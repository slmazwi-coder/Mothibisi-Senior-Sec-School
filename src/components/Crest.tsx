import React from 'react';

export const Crest = () => {
  return (
    <section id="crest" style={{ padding: '80px 20px', background: '#F5E6EA' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Our Identity</div>
          <h2 className="section-heading">Our Crest & Identity</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Crest Display */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '200px',
              height: '240px',
              margin: '0 auto',
              background: 'linear-gradient(180deg, #800020 0%, #5C0015 100%)',
              borderRadius: '100px 100px 20px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              border: '4px solid #FFFFFF',
              boxShadow: '0 10px 30px rgba(128, 0, 32, 0.3)',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🏔️</div>
              <div style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, textAlign: 'center' }}>
                MOTHIBISI
              </div>
              <div style={{ color: '#FFFFFF', fontSize: '0.7rem', fontStyle: 'italic', marginTop: '4px' }}>
                Senior Secondary
              </div>
              <div style={{
                marginTop: '10px',
                padding: '4px 12px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '10px',
                fontSize: '0.65rem',
                color: '#FFFFFF',
                fontStyle: 'italic',
              }}>
                We Strive to Excel
              </div>
            </div>
          </div>

          {/* Crest Description */}
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#222222', marginBottom: '20px' }}>
              Our crest is a <strong style={{ color: '#800020' }}>maroon shield</strong> that captures our identity and aspirations:
            </p>
            
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
                  🏔️
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Mountain Peaks</strong>
                  <p style={{ fontSize: '0.95rem', color: '#555' }}>
                    The Thaba-Chicha mountains that surround our community; a symbol of strength, endurance, and the heights we aspire to reach.
                  </p>
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
                  📖
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Open Book</strong>
                  <p style={{ fontSize: '0.95rem', color: '#555' }}>
                    The pursuit of knowledge and academic excellence at the heart of everything we do.
                  </p>
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
                  🛡️
                </div>
                <div>
                  <strong style={{ color: '#800020' }}>Shield Shape</strong>
                  <p style={{ fontSize: '0.95rem', color: '#555' }}>
                    Protection, pride, and the strong community that holds our school together.
                  </p>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '24px', fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>
              The maroon and white colour scheme reflects dignity, discipline, and the pride of our school community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};