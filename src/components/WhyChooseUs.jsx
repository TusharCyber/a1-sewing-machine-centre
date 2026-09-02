import React from 'react';
import { Award, ShieldCheck, ThumbsUp, HeartHandshake, MapPin, Star, CheckCircle2, Wrench, Sparkles, Store } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Complete Machine Inspection & Full-Body Care',
      desc: 'We perform thorough multi-point inspection and full-body servicing on every Singer, USHA, and Merritt machine brought to our store.'
    },
    {
      icon: Award,
      title: 'Singer, USHA & Merritt Specialist',
      desc: 'Master technician care with over 25+ years of specialized hands-on expertise repairing and calibrating Singer, USHA, and Merritt machines.'
    },
    {
      icon: Store,
      title: 'Trusted In-Store Service Centre',
      desc: 'Convenient store location at 41, Alagu Nagar, Civil Aerodrome Post, Coimbatore for reliable in-person consultation and machine drop-off.'
    },
    {
      icon: HeartHandshake,
      title: 'Reliable Customer Support',
      desc: 'Friendly guidance on WhatsApp, clear service policy explanations, free operating demos, and fast response times.'
    },
    {
      icon: ThumbsUp,
      title: 'Quality Machines & Genuine Accessories',
      desc: 'Authorized sales for top brands along with 100% genuine factory spare parts, Organ needles, and heavy-duty copper motors.'
    }
  ];

  const testimonials = [
    {
      name: 'K. Rajamani',
      role: 'Home Boutique Tailor, Peelamedu',
      rating: 5,
      comment: 'A1 Sewing Machine Centre has been servicing my Singer and USHA machines for over 8 years. Their complete servicing approach makes machines feel like brand new every time!'
    },
    {
      name: 'S. Lakshmi',
      role: 'Home Tailor, Alagu Nagar',
      rating: 5,
      comment: 'Brought my USHA Wonder Stitch machine after thread skipping issues. Technician explained their full-body inspection process clearly and fixed everything at their store on the same day!'
    },
    {
      name: 'M. Duraisamy',
      role: 'Tailoring Shop, Hopes',
      rating: 5,
      comment: 'Very honest service for Merritt and Singer machines. They inspect the whole machine thoroughly at their store and tune timing and tension perfectly.'
    }
  ];

  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={16} />
            <span>Why Choose A1 Centre</span>
          </div>
          <h2 className="section-title">Why Choose A1 Sewing Machine Centre?</h2>
          <p className="section-subtitle">
            Built on complete-service integrity, specialized Singer, USHA & Merritt expertise, and decades of trust with Coimbatore tailors.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--accent-gold-light)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <IconComponent size={24} />
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 700 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics Bar */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
          marginBottom: '4rem',
          border: '1px solid var(--border-color)'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
              25+
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Years Local Experience</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
              15,000+
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Complete Servicings</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-green)' }}>
              100%
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>In-Store Full Inspection</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-blue)' }}>
              4.9★
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Customer Rating</div>
          </div>
        </div>

        {/* Local Testimonials */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)' }}>What Our Coimbatore Customers Say</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', color: '#f59e0b', marginBottom: '0.75rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "{t.comment}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-navy)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1rem' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 600 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
