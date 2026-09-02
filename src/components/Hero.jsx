import React from 'react';
import { Phone, MessageCircle, Wrench, ShieldCheck, CheckCircle2, Star, Award, Clock, MapPin, Camera, ChevronRight, FileCheck } from 'lucide-react';

export default function Hero({ onOpenBookingModal }) {
  const brands = ['SINGER', 'USHA', 'MERRITT'];

  const defaultWhatsAppText = encodeURIComponent(
    `Hello A1 Sewing Machine Centre, I would like to enquire about Singer / USHA / Merritt machine servicing.\n\nMy machine details are:\n• Brand (Singer / USHA / Merritt):\n• Model (if known):\n• Problem Description:\n• Includes Bobbin Case?: (Yes/No)\n\n(I will attach:\n1. Photo with Bobbin Case\n2. Mandatory Photo of Machine Serial Number plate)`
  );

  return (
    <section id="home" style={{
      position: 'relative',
      padding: '4rem 0 3.5rem 0',
      background: 'linear-gradient(180deg, var(--bg-main) 0%, var(--bg-subtle) 100%)',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Geometric Decorator */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, rgba(14, 42, 71, 0) 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.15fr 0.85fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Text & WhatsApp-First CTAs */}
          <div>
            <div className="section-badge pulse-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} />
              <span>Coimbatore's #1 Trusted Sewing Hub Since 1999</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              color: 'var(--primary-navy)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}>
              Trusted Sewing Machine <span style={{ color: 'var(--accent-gold)', position: 'relative', display: 'inline-block' }}>Sales & Service</span> in Coimbatore
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
              maxWidth: '640px'
            }}>
              Specialized expert repair and complete full-body servicing exclusively for <strong>Singer, USHA, and Merritt</strong> sewing machines. Bring your machine to our store at Civil Aerodrome Post, Coimbatore for master technician care.
            </p>

            {/* Complete Service Assurance Card */}
            <div style={{
              backgroundColor: 'var(--accent-gold-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem 1.1rem',
              border: '1px solid var(--accent-gold)',
              marginBottom: '2rem',
              maxWidth: '640px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--accent-gold)', fontSize: '0.92rem', marginBottom: '0.2rem' }}>
                <ShieldCheck size={18} />
                <span>Our Complete In-Store Service Policy</span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.5 }}>
                When you bring your <strong>Singer, USHA, or Merritt</strong> sewing machine to our store, our technician performs a <strong>complete inspection and full-body servicing</strong>. We do not provide partial repairs. Please indicate if bobbin case is included, and attach photos of the machine + mandatory photo of the <strong>Serial Number plate</strong> on WhatsApp.
              </p>
            </div>

            {/* Prominent WhatsApp CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a
                href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ flex: 1, minWidth: '240px' }}
              >
                <MessageCircle size={22} />
                <span>Enquire on WhatsApp</span>
              </a>

              <button onClick={onOpenBookingModal} className="btn btn-primary btn-lg" style={{ minWidth: '220px' }}>
                <Wrench size={20} />
                <span>Book Service on WhatsApp</span>
              </button>
            </div>

            {/* Quick Trust Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
              {[
                { icon: ShieldCheck, title: 'Complete Full-Body Servicing' },
                { icon: Award, title: 'Singer, USHA & Merritt Specialist' },
                { icon: FileCheck, title: 'Serial No. Photo Mandatory' },
                { icon: Camera, title: 'Bobbin Case Photo Verification' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                      <IconComponent size={14} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}>
              {/* Card Badge */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '20px',
                backgroundColor: 'var(--accent-gold)',
                color: '#ffffff',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.8rem',
                boxShadow: '0 4px 10px rgba(217, 119, 6, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <Award size={14} />
                <span>Singer • USHA • Merritt</span>
              </div>

              {/* Graphic Sewing Machine Service Badge Showcase */}
              <div style={{
                width: '100%',
                height: '230px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #0e2a47 0%, #1e3a5f 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: '1.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: '16px 16px'
                }}></div>

                <div style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <Wrench size={38} style={{ color: '#f59e0b' }} />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.2rem', fontWeight: 800 }}>
                  A1 Service Centre
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', maxWidth: '300px' }}>
                  Singer • USHA • Merritt Repair Centre
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.85rem' }}>
                  <span style={{ backgroundColor: 'rgba(37, 211, 102, 0.25)', color: '#4ade80', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                    ● In-Store Service
                  </span>
                  <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                    Civil Aerodrome Post
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Service Prompt Card */}
              <div style={{
                marginTop: '1.25rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-navy)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MessageCircle size={16} style={{ color: 'var(--accent-green)' }} />
                  <span>Required Service Checklist:</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  1. Indicate if bobbin case is included (attach photo if yes)<br />
                  2. <strong>Mandatory:</strong> Upload photo of machine Serial Number plate on WhatsApp.
                </div>
                <a
                  href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                >
                  <MessageCircle size={14} />
                  <span>Ask About Machine Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Marquee Belt */}
      <div style={{
        marginTop: '3.5rem',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-card)',
        padding: '1.25rem 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
            Specialized Master Technicians for Premier Brands
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
            {brands.map((b) => (
              <span key={b} style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--primary-navy)',
                letterSpacing: '0.05em'
              }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
