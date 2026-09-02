import React from 'react';
import { Wrench, Shield, Check, Clock, MapPin, Settings, AlertCircle, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, FileText, Camera, Store } from 'lucide-react';

export default function Services({ onOpenBookingModal }) {
  const serviceList = [
    {
      icon: Settings,
      title: 'Complete Sewing Machine Service & Full-Body Care',
      desc: 'Our flagship service for Singer, USHA & Merritt machines: Every machine receives a full multi-point inspection, thorough disassembly, gear cleaning, friction reduction oiling, and stitch calibration.',
      benefits: ['Full-body deep cleaning', 'Complete multi-point inspection', 'Free stitch testing guarantee']
    },
    {
      icon: Wrench,
      title: 'Stitch Calibration & Tension Alignment',
      desc: 'Expert solution for thread breaking, skipped stitches, uneven lower thread loops, and cloth puckering on Singer, USHA, and Merritt sewing machines.',
      benefits: ['Zero thread snap guarantee', 'All fabric types calibrated', 'Fast store turnaround']
    },
    {
      icon: Shield,
      title: 'Genuine Spare Parts Replacement',
      desc: 'Replacement of worn shuttle hooks, bobbin cases, needle bars, gears, and pressure feet with 100% genuine factory Singer, USHA, and Merritt parts.',
      benefits: ['100% original factory parts', 'Longer machine life', 'Original backup parts']
    },
    {
      icon: Clock,
      title: 'Electric Motor Fitting & Power Conversion',
      desc: 'Convert manual hand-operated or foot-treadle Singer, USHA, or Merritt machines to electric power with copper winding motors and speed foot pedal control.',
      benefits: ['5x faster sewing speed', 'Effortless foot pedal', 'Safety tested wiring']
    },
    {
      icon: Store,
      title: 'In-Store Inspection & Technician Service',
      desc: 'Bring your sewing machine to our store at Civil Aerodrome Post, Coimbatore. Our master technician performs complete multi-point inspection and full-body servicing on site.',
      benefits: ['Direct technician consultation', 'Transparent estimate', 'Store handover']
    },
    {
      icon: AlertCircle,
      title: 'Specialized Singer, USHA & Merritt Repair',
      desc: 'Focused technical expertise exclusively dedicated to vintage cast iron, domestic electric, and heavy-duty sewing machines manufactured by Singer, USHA, and Merritt.',
      benefits: ['Specialized master mechanic', 'Zero guesswork', 'Guaranteed craftsmanship']
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Contact via WhatsApp',
      desc: 'Click any WhatsApp button on our site to connect directly with our Coimbatore store service team.'
    },
    {
      number: '2',
      title: 'Share Machine Details & Photos on WhatsApp',
      desc: 'Send: (1) Machine brand, model & problem description. (2) Photo showing if bobbin case is included. (3) Mandatory photo of the machine Serial Number plate.'
    },
    {
      number: '3',
      title: 'Bring Machine to Store',
      desc: 'Bring your machine to our service centre at 41, Alagu Nagar, Civil Aerodrome Post, Coimbatore.'
    },
    {
      number: '4',
      title: 'Technician Complete Inspection',
      desc: 'Our master technician performs a complete multi-point inspection of all mechanical and electrical components.'
    },
    {
      number: '5',
      title: 'Comprehensive Servicing & Handover',
      desc: 'Your machine receives full-body servicing, lubrication, stitch testing, and is handed back in factory-smooth condition.'
    }
  ];

  const defaultWhatsAppText = encodeURIComponent(
    `Hello A1 Sewing Machine Centre, I would like to enquire about Singer / USHA / Merritt machine servicing.\n\nMy machine details are:\n• Brand (Singer / USHA / Merritt):\n• Model (if known):\n• Problem Description:\n• Is Bobbin Case included with the machine? (Yes / No):\n\n(I will attach the following photos on WhatsApp:\n1. Photo of machine with Bobbin Case (if applicable)\n2. MANDATORY: Photo of the machine Serial Number plate)`
  );

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={16} />
            <span>Singer • USHA • Merritt Repair Hub</span>
          </div>
          <h2 className="section-title">Singer, USHA & Merritt Repair Services</h2>
          <p className="section-subtitle">
            Providing complete sewing machine servicing, expert repairs, genuine spare parts, and motor fittings exclusively for Singer, USHA, and Merritt sewing machines in Coimbatore.
          </p>
        </div>

        {/* Complete Service Policy Highlight Banner */}
        <div style={{
          backgroundColor: 'var(--accent-gold-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          border: '2px solid var(--accent-gold)',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-md)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={26} />
            <span>Important In-Store Service Policy: Complete Service Approach</span>
          </div>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            When a customer brings a <strong>Singer, USHA, or Merritt</strong> sewing machine for servicing to our store, our technician performs a <strong>complete inspection and full-body service</strong> of the machine. We do not provide partial servicing based on individual customer-selected components. This ensures your machine is properly checked, aligned, lubricated, and serviced for better, long-lasting performance.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
              <span>Full Multi-Point Inspection</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
              <span>Full-Body Deep Servicing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
              <span>Singer, USHA & Merritt Specialist</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {serviceList.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-gold-light)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <IconComp size={26} />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  {srv.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {srv.desc}
                </p>

                <div style={{ borderTop: '1px border var(--border-color)', paddingTop: '0.85rem' }}>
                  {srv.benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      <Check size={14} style={{ color: 'var(--accent-green)' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: How Our Service Works (5-Step Process) */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          marginBottom: '4rem',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <div className="section-badge">
              <FileText size={14} />
              <span>Simple 5-Step Process</span>
            </div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: 800 }}>
              How Our In-Store Service Works
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Bring your Singer, USHA, or Merritt machine to our Coimbatore store for complete technician servicing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}>
            {processSteps.map((pStep, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }}>
                  {pStep.number}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {pStep.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {pStep.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Book a Service on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Photo Checklist Banner */}
        <div style={{
          backgroundColor: 'var(--accent-gold-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem 2rem',
          border: '2px solid var(--accent-gold)',
          marginBottom: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Camera size={20} style={{ color: 'var(--accent-gold)' }} />
              Before Bringing Your Machine — Send Us on WhatsApp:
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>
              To help us prepare for your machine's service visit, please share the following photos on WhatsApp before arriving.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { icon: '📷', label: 'Bobbin Case Photo — if bobbin case is included with the machine' },
              { icon: '🔢', label: 'Serial Number plate photo — MANDATORY for all machines' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 600 }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Service Callout Box */}
        <div style={{
          backgroundColor: 'var(--primary-navy)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          color: '#ffffff',
          display: 'grid',
          gridTemplateColumns: '1fr',
          lgGridTemplateColumns: '1.2fr 0.8fr',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div>
            <div style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              ✦ Singer, USHA & Merritt Service Enquiries
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.75rem' }}>
              Need Repair for Singer, USHA, or Merritt?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
              Contact our technicians on WhatsApp with your machine brand, model, problem description, a photo of the bobbin case (if included), and the <strong style={{ color: '#fbbf24' }}>mandatory machine Serial Number plate photo</strong>. Then bring your machine to our store at Civil Aerodrome Post, Coimbatore.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <a
              href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Enquire on WhatsApp</span>
            </a>
            <button onClick={onOpenBookingModal} className="btn btn-primary btn-lg">
              <Wrench size={20} />
              <span>Book Service on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
