import React from 'react';

export const Academics = () => {
  const subjects = [
    'Mathematics / Mathematical Literacy',
    'English Home Language / First Additional Language',
    'Life Sciences',
    'Physical Sciences',
    'Geography',
    'History',
    'Business Studies',
    'Life Orientation',
  ];

  const ethos = [
    'Structured academic programme aligned to NSC/CAPS',
    'Dedicated Grade 12 exam preparation and revision',
    'Teacher mentorship and learner support programmes',
    'Emphasis on discipline, time management and study skills',
    'Extracurricular participation encouraged alongside academics',
    'Community-connected learning in the Eastern Cape',
  ];

  return (
    <section id="academics" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Curriculum</div>
          <h2 className="section-heading">Curriculum & Academic Offering</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {/* Core Subjects */}
          <div style={{
            background: '#F5E6EA',
            borderRadius: '16px',
            padding: '32px',
            borderTop: '4px solid #800020',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.4rem',
              color: '#800020',
              marginBottom: '20px',
            }}>
              📚 Core Subjects (NSC / CAPS)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {subjects.map((subject, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(128, 0, 32, 0.1)',
                  fontSize: '1rem',
                  color: '#222222',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#800020',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* School Ethos */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '32px',
            border: '2px solid #800020',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.4rem',
              color: '#800020',
              marginBottom: '20px',
            }}>
              🎯 School Ethos & Learning Approach
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ethos.map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(128, 0, 32, 0.1)',
                  fontSize: '1rem',
                  color: '#222222',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#800020',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div style={{
          maxWidth: '800px',
          margin: '40px auto 0',
          background: '#800020',
          borderRadius: '12px',
          padding: '32px',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#FFFFFF',
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}>
            "Excellence is not a destination — it is a daily discipline. At Mothibisi SSS, we build habits of excellence from Grade 8 through to Matric."
          </p>
        </div>
      </div>
    </section>
  );
};