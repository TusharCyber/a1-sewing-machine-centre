import React from 'react';
import { Phone, MessageCircle, MapPin, Wrench, ChevronRight, Heart } from 'lucide-react';

export default function Footer({ onOpenBookingModal }) {
  return (
    <footer style={{
      backgroundColor: 'var(--primary-navy-dark)',
      color: '#cbd5e1',
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, #f59e0b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.2rem'
              }}>
                A1
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', lineHeight: 1.1 }}>
                  A1 SEWING MACHINE
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  CENTRE • COIMBATORE
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#94a3b8' }}>
              Your trusted partner for Singer, USHA & Merritt sewing machine repair, complete in-store full-body servicing, machine sales, and 100% genuine spare parts in Coimbatore.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="tel:+919843210850" className="btn btn-navy btn-sm" style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <Phone size={14} />
                <span>Call Store</span>
              </a>
              <a
                href="https://wa.me/919894194230?text=Hello%20A1%20Sewing%20Machine%20Centre"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.2rem', fontWeight: 700 }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { name: 'Home Overview', href: '#home' },
                { name: 'Sewing Machine Products', href: '#products' },
                { name: 'Interactive Machine Finder', href: '#machine-finder' },
                { name: 'Repair & Servicing Hub', href: '#services' },
                { name: 'Problem Solver (Troubleshooting)', href: '#troubleshooting' },
                { name: 'Why Choose A1 Centre', href: '#why-us' },
                { name: 'Store Location & Map', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                  >
                    <ChevronRight size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported Brands */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.6rem', fontWeight: 700 }}>
              Repair & Service Brands
            </h4>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.5rem' }}>Exclusive Repair Specialists For:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {['SINGER', 'USHA', 'MERRITT'].map((b, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'rgba(217, 119, 6, 0.2)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#fbbf24',
                    border: '1px solid rgba(217, 119, 6, 0.4)'
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.5rem' }}>Machines & Spares Also Available For:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {['BROTHER', 'JACK', 'JUKI', 'REVO', 'ORGAN NEEDLES'].map((b, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <button onClick={onOpenBookingModal} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              <Wrench size={14} />
              <span>Book Repair Appointment</span>
            </button>
          </div>

          {/* Location & Address */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.2rem', fontWeight: 700 }}>
              Coimbatore Address
            </h4>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1rem' }}>
              <strong style={{ color: '#ffffff' }}>A1 Sewing Machine Centre</strong><br />
              41, Alagu Nagar,<br />
              Civil Aerodrome Post,<br />
              Coimbatore, Tamil Nadu – 641014
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
              Phone: 98432 10850
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} A1 Sewing Machine Centre, Coimbatore. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>Built with precision for Coimbatore tailors & households</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
