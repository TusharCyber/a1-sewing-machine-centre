import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, Navigation, Mail, Camera, AlertCircle, Store } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: 'Singer',
    model: '',
    problem: '',
    hasMedia: 'Yes, I will bring Bobbin Case and send Serial Number plate photo'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp text payload with requested machine details
    const textPayload = `Hello A1 Sewing Machine Centre,

I would like to enquire about sewing machine servicing at your store. My machine details are:

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🧵 Brand (Singer/USHA/Merritt): ${formData.brand}
🔧 Model: ${formData.model || 'Not sure'}
⚙️ Problem Description: ${formData.problem || 'Needs complete servicing'}
📦 Bobbin Case Included: ${formData.hasMedia}

(I will attach the following photos on WhatsApp:
1. 📷 Photo of machine with Bobbin Case (if applicable)
2. 🔢 MANDATORY: Photo of the machine Serial Number plate)

I will bring the machine to your store at Civil Aerodrome Post, Coimbatore. Please advise on service inspection & availability. Thank you!`;

    const encodedText = encodeURIComponent(textPayload);
    window.open(`https://wa.me/919894194230?text=${encodedText}`, '_blank');
  };

  const defaultWhatsAppText = encodeURIComponent(
    `Hello A1 Sewing Machine Centre, I would like to enquire about Singer / USHA / Merritt machine servicing.\n\nMy machine details are:\n• Brand (Singer / USHA / Merritt):\n• Model (if known):\n• Problem Description:\n• Bobbin Case Included? (Yes / No):\n\n(I will attach the following photos on WhatsApp:\n1. 📷 Photo of machine with Bobbin Case (if applicable)\n2. 🔢 MANDATORY: Photo of the machine Serial Number plate)`
  );

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={16} />
            <span>Store Location & WhatsApp Contact</span>
          </div>
          <h2 className="section-title">Contact A1 Sewing Machine Centre</h2>
          <p className="section-subtitle">
            For Singer, USHA & Merritt service enquiries, contact our Coimbatore store technicians directly through WhatsApp.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          lgGridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }}>
          {/* Left Column: Store Info Cards & WhatsApp Priority Callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* WhatsApp Priority Card */}
            <div style={{
              backgroundColor: 'var(--accent-green-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              border: '2px solid var(--accent-green)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-green-hover)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <MessageCircle size={24} />
                <span>WhatsApp Service Enquiry</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Chat directly with our Coimbatore technicians for Singer, USHA, and Merritt machine servicing advice and store visit scheduling.
              </p>
              <a
                href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <MessageCircle size={18} />
                <span>Enquire on WhatsApp (+91 98941 94230)</span>
              </a>
            </div>

            {/* Store Address & Hours Card */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
                Store Location Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--accent-gold-light)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Service Centre Address</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.5, marginTop: '0.2rem' }}>
                      A1 Sewing Machine Centre<br />
                      41, Alagu Nagar, Civil Aerodrome Post,<br />
                      Coimbatore, Tamil Nadu – 641014
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Store Phone Line</div>
                    <a href="tel:+919843210850" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      98432 10850
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--bg-subtle)', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Working Hours</div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                      <strong>Monday – Saturday:</strong> 9:00 AM – 8:30 PM<br />
                      <strong>Sunday:</strong> 10:00 AM – 2:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ padding: '0.85rem 1.25rem', backgroundColor: 'var(--primary-navy)', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
                  Google Maps Location
                </span>
                <a
                  href="https://maps.google.com/?q=41,+Alagu+Nagar,+Civil+Aerodrome+Post,+Coimbatore,+Tamil+Nadu+641014"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 600, backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                >
                  <Navigation size={12} />
                  Open Maps
                </a>
              </div>
              <div style={{ height: '220px', width: '100%', background: '#e2e8f0' }}>
                <iframe
                  title="A1 Sewing Machine Centre Map Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=41%20Alagu%20Nagar%20Civil%20Aerodrome%20Post%20Coimbatore%20641014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Machine Details Enquiry Form */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.4rem', fontWeight: 800 }}>
              Singer, USHA & Merritt Service Form
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill in your machine details below to generate a pre-formatted WhatsApp message for store servicing.
            </p>

            {submitted ? (
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'var(--accent-green-light)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--accent-green)',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={42} style={{ color: 'var(--accent-green-hover)', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                  Opening WhatsApp...
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Your machine details are formatted. Please complete sending on WhatsApp and bring your machine to our store.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ramesh Kumar / Sangeetha"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="e.g. 98941 XXXXX"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div className="form-group">
                    <label className="form-label">Select Brand (Specialized) *</label>
                    <select
                      className="form-select"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    >
                      <option value="Singer">Singer</option>
                      <option value="USHA">USHA</option>
                      <option value="Merritt">Merritt</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Machine Model (If known)</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Wonder Stitch, Promise"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Description of the Problem *</label>
                  <textarea
                    className="form-textarea"
                    rows="3"
                    placeholder="e.g. Thread breaking continuously, skipping stitches, heavy motor noise..."
                    required
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  ></textarea>
                </div>

                {/* Photo/Video Prompt Note */}
                <div style={{
                  padding: '0.85rem',
                  backgroundColor: 'var(--accent-gold-light)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--accent-gold)',
                  marginBottom: '1.25rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <Camera size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Required WhatsApp Photo Checklist:</strong><br/>
                    📷 Send photo with <strong>Bobbin Case</strong> (if it is included with your machine)<br/>
                    🔢 <strong>MANDATORY:</strong> Send photo of the machine's <strong>Serial Number plate</strong> before visiting our store.
                  </div>
                </div>

                <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '1rem' }}>
                  <Send size={18} />
                  <span>Send Details & Enquire on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
