import { useEffect, useState } from 'react';

export const About = () => {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '8–12', label: 'Grades', icon: '📚' },
    { value: '13', label: 'Dedicated Educators', icon: '👩‍🏫' },
    { value: '±387', label: 'Learners', icon: '👨‍🎓' },
    { value: 'No-Fee', label: 'Public School', icon: '🏫' },
  ];

  return (
    <section id="about" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">About Us</div>
          <h2 className="section-heading">About Mothibisi Senior Secondary School</h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: '#F5E6EA',
            borderRadius: '16px',
            padding: '40px',
            borderLeft: '5px solid #800020',
          }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222', marginBottom: '20px' }}>
              <strong>Mothibisi Senior Secondary School</strong> is a public secondary school situated at Thaba-Chicha A/A, Mt Fletcher, in the Eastern Cape. We operate under the <strong>Alfred Nzo West Education District</strong> within the Elundini Local Municipality.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222', marginBottom: '20px' }}>
              Our motto — <strong style={{ color: '#800020' }}>"We Strive to Excel"</strong> — defines our culture of dedication, discipline, and academic ambition. We believe that every learner carries potential, and it is our purpose to cultivate that potential through quality education, strong values, and a community of care.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222' }}>
              With a committed team of <strong>13 educators</strong> and a growing learner body of nearly <strong>400 students</strong>, Mothibisi SSS offers a rigorous academic environment from Grades 8 through 12. As a <strong>no-fee public school</strong>, we are proudly accessible to all learners in our community regardless of their economic circumstances.
            </p>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: '#800020',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: 900,
                }}>
                  {countersVisible ? stat.value : '0'}
                </div>
                <div style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};