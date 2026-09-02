import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Sun, Moon, Menu, X, Wrench, ChevronRight } from 'lucide-react';

export default function Header({ theme, toggleTheme, onOpenBookingModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Machine Finder', href: '#machine-finder' },
    { name: 'Troubleshooting', href: '#troubleshooting' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const defaultWhatsAppText = encodeURIComponent(
    `Hello A1 Sewing Machine Centre, I would like to enquire about sewing machine servicing.\n\nMy machine details are:\n• Brand:\n• Model (if known):\n• Problem Description:\n\n(I will attach photos/videos of the machine/problem)`
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, backgroundColor: 'var(--bg-glass)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-color)' }}>
      {/* Top Announcement Bar */}
      <div style={{ backgroundColor: 'var(--primary-navy)', color: '#ffffff', fontSize: '0.85rem', padding: '0.4rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>41, Alagu Nagar, Civil Aerodrome Post, Coimbatore – 641014</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>Mon-Sat: 9:00 AM - 8:30 PM | Sun: 10:00 AM - 2:00 PM</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="tel:+919843210850" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 600 }}>
              <Phone size={14} style={{ color: '#60a5fa' }} />
              <span>98432 10850</span>
            </a>
            <a
              href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 600, backgroundColor: 'rgba(37, 211, 102, 0.25)', padding: '0.15rem 0.6rem', borderRadius: '4px' }}
            >
              <MessageCircle size={14} style={{ color: '#25d366' }} />
              <span>WhatsApp Us (+91 98941 94230)</span>
            </a>
            <button
              onClick={toggleTheme}
              style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0.2rem' }}
              title="Toggle Dark/Light Mode"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} style={{ color: '#f59e0b' }} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.25rem' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--accent-gold) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1.35rem',
            boxShadow: '0 4px 10px rgba(14, 42, 71, 0.25)',
            position: 'relative'
          }}>
            A1
            <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', backgroundColor: 'var(--accent-gold)', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid white' }}></div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary-navy)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              A1 SEWING MACHINE
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CENTRE • COIMBATORE
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', mdDisplay: 'flex', gap: '1.4rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ display: 'none', mdDisplay: 'inline-flex' }}
          >
            <MessageCircle size={15} />
            <span>Enquire on WhatsApp</span>
          </a>
          <button onClick={onOpenBookingModal} className="btn btn-primary btn-sm">
            <Wrench size={15} />
            <span>Book Service</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              background: 'transparent',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-color)',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  borderBottom: '1px border var(--border-color)'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={18} />
                <span>Enquire on WhatsApp</span>
              </a>
              <a href="tel:+919843210850" className="btn btn-navy" onClick={() => setIsMobileMenuOpen(false)}>
                <Phone size={18} />
                <span>Call Store: 98432 10850</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quick desktop CSS responsive styling rules */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
