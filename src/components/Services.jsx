import React from 'react';
import { Wrench, Shield, Check, Clock, Truck, Settings, AlertCircle, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, FileText, Camera } from 'lucide-react';

export default function Services({ onOpenBookingModal }) {
  const serviceList = [
    {
      icon: Settings,
      title: 'Complete Sewing Machine Service & Full-Body Care',
      desc: 'Our flagship service: Every machine receives a full multi-point inspection, thorough disassembly, internal gear cleaning, friction reduction oiling, and timing calibration.',
      benefits: ['Full-body deep cleaning', 'Complete multi-point inspection', 'Free stitch testing guarantee']
    },
    {
      icon: Wrench,
      title: 'Stitch Calibration & Tension Alignment',
      desc: 'Expert solution for thread breaking, skipped stitches, uneven lower thread loops, and cloth puckering across all fabric types.',
      benefits: ['Zero thread snap guarantee', 'All thread types calibrated', 'Fast turnaround']
    },
    {
      icon: Shield,
      title: 'Genuine Spare Parts Replacement',
      desc: 'Replacement of worn shuttle hooks, bobbin cases, needle bars, gears, and pressure feet with 100% genuine factory parts.',
      benefits: ['Official manufacturer parts', 'Longer machine life', 'Original warranty backup']
    },
    {
      icon: Clock,
      title: 'Electric Motor Fitting & Power Conversion',
      desc: 'Convert manual hand-operated or foot-treadle machines to electric power with copper winding motors and smooth speed pedal control.',
      benefits: ['5x faster sewing speed', 'Effortless foot pedal', 'Safety tested wiring']
    },
    {
      icon: Truck,
      title: 'Doorstep Pickup & Drop in Coimbatore',
      desc: 'Can’t visit our store? We offer doorstep pickup and drop servicing across Civil Aerodrome Post, Peelamedu, Hopes, Singanallur & nearby areas.',
      benefits: ['Safe machine transit', 'Schedule at your convenience', 'On-site quick checks']
    },
    {
      icon: AlertCircle,
      title: 'Commercial & Industrial High-Speed Repair',
      desc: 'Specialized high-speed repairs for Jack, Juki, Brother, and Merritt industrial lockstitch & overlock machines used in boutiques and factories.',
      benefits: ['Minimal shop downtime', 'Master mechanic inspection', 'Bulk service discounts']
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Contact via WhatsApp',
      desc: 'Click any WhatsApp button on our site to connect directly with our Coimbatore service team.'
    },
    {
      number: '2',
      title: 'Share Machine Details & Media',
      desc: 'Tell us your machine brand, model, issue description, and send photos or short videos of the problem.'
    },
    {
      number: '3',
      title: 'Bring or Send Machine',
      desc: 'Bring your machine to our centre at Civil Aerodrome Post or schedule doorstep pickup in Coimbatore.'
    },
    {
      number: '4',
      title: 'Technician Complete Inspection',
      desc: 'Our master technician performs a complete multi-point inspection of all mechanical and electrical components.'
    },
    {
      number: '5',
      title: 'Comprehensive Servicing & Handover',
      desc: 'Your machine receives full-body servicing, oiling, stitch testing, and is handed back in factory-smooth condition.'
    }
  ];

  const defaultWhatsAppText = encodeURIComponent(
    `Hello A1 Sewing Machine Centre, I would like to enquire about sewing machine servicing.\n\nMy machine details are:\n• Brand:\n• Model (if known):\n• Problem Description:\n\n(I will attach photos/videos of the machine/problem)`
  );

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={16} />
            <span>Repair & Maintenance Hub</span>
          </div>
          <h2 className="section-title">Our Sewing Machine Services</h2>
          <p className="section-subtitle">
            Providing complete sewing machine servicing, expert repairs, genuine spare parts, and motor fittings across Coimbatore.
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
            <span>Important Service Policy: Complete Service Approach</span>
          </div>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            When a customer brings a sewing machine for servicing, our technician performs a <strong>complete inspection and full-body service</strong> of the machine. We do not provide partial servicing based on individual customer-selected components. This ensures your machine is properly checked, aligned, lubricated, and serviced for better, long-lasting performance.
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
              <span>Peak Performance Guarantee</span>
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
              How Our Complete Service Works
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              We make servicing your sewing machine effortless with our WhatsApp-first communication process.
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
              ✦ WhatsApp-Only Service Enquiries
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.75rem' }}>
              Have Questions About Machine Servicing?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
              For all service enquiries, contact our technicians directly on WhatsApp. Share your machine brand, model, and photos or videos for fast diagnostic advice.
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
