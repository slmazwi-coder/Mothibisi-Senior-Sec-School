import React from 'react';

export const Admissions = () => {
  const requirements = [
    'Latest school report / academic records',
    'Certified birth certificate',
    'Parent/Guardian ID copy',
    'Proof of residence',
    'Transfer letter (if applicable)',
  ];

  return (
    <section id="admissions" style={{ padding: '80px 20px', background: '#800020' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Enrolment
          </div>
          <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
            Admissions & Applications
          </h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Requirements */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '32px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}>
              📋 Required Documents
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px', fontSize: '0.95rem' }}>
              When applying, please bring the following:
            </p>
            <ol style={{ paddingLeft: '20px', color: '#FFFFFF' }}>
              {requirements.map((req, index) => (
                <li key={index} style={{ marginBottom: '12px', fontSize: '1rem' }}>
                  {req}
                </li>
              ))}
            </ol>
          </div>

          {/* Process */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '32px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}>
              📝 Application Process
            </h3>
            <ol style={{ paddingLeft: '20px', color: '#FFFFFF' }}>
              <li style={{ marginBottom: '12px', fontSize: '1rem' }}>
                <strong>Visit the school</strong> at Thaba-Chicha A/A, Mt Fletcher
              </li>
              <li style={{ marginBottom: '12px', fontSize: '1rem' }}>
                <strong>Submit application</strong> with all required documents
              </li>
              <li style={{ marginBottom: '12px', fontSize: '1rem' }}>
                <strong>Receive confirmation</strong> of enrolment status
              </li>
              <li style={{ marginBottom: '12px', fontSize: '1rem' }}>
                <strong>Collect learner card</strong> on commencement date
              </li>
            </ol>

            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: 'rgba(201, 162, 39, 0.2)',
              borderRadius: '10px',
              borderLeft: '4px solid #C9A227',
            }}>
              <p style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                💰 <strong>No-Fee School:</strong> Mothibisi SSS is a no-fee public school — there are no tuition fees charged to learners.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '20px' }}>
            For enquiries, contact us directly or use the contact form below.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#FFFFFF',
              color: '#800020',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};