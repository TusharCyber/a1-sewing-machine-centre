import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import MachineFinder from './components/MachineFinder';
import Services from './components/Services';
import Troubleshooting from './components/Troubleshooting';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import MobileActionBar from './components/MobileActionBar';
import Footer from './components/Footer';
import { X, Wrench, Calendar, CheckCircle2, MessageCircle, Phone, Camera, ShieldCheck } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Booking Wizard Form State
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    brand: 'USHA',
    model: '',
    problem: 'Full-Body Servicing & Complete Inspection',
    serviceOption: 'Store Visit (Civil Aerodrome Post)',
    name: '',
    phone: '',
    date: '',
    hasPhotos: 'Yes, will attach on WhatsApp'
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Theme Syncing
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleOpenBooking = () => {
    setBookingStep(1);
    setBookingConfirmed(false);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);

    // Build pre-filled WhatsApp payload with requested prompts
    const textPayload = `Hello A1 Sewing Machine Centre,

I would like to enquire about sewing machine servicing. My machine details are:

• Brand: ${bookingData.brand || 'Not specified'}
• Machine Model: ${bookingData.model || 'Not known'}
• Description of Problem: ${bookingData.problem}
• Service Option: ${bookingData.serviceOption}
• Customer Name: ${bookingData.name}
• Customer Phone: ${bookingData.phone}
• Preferred Date: ${bookingData.date || 'As soon as possible'}
• Photos/Videos: ${bookingData.hasPhotos}

Please advise on service inspection appointment. Thank you!`;

    const encodedText = encodeURIComponent(textPayload);
    window.open(`https://wa.me/919894194230?text=${encodedText}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenBookingModal={handleOpenBooking}
      />

      {/* Main Page Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenBookingModal={handleOpenBooking} />
        <Services onOpenBookingModal={handleOpenBooking} />
        <Products />
        <MachineFinder onOpenBookingModal={handleOpenBooking} />
        <Troubleshooting onOpenBookingModal={handleOpenBooking} />
        <WhyChooseUs />
        <ContactSection />
      </main>

      {/* Sticky Bottom Action Bar for Mobile */}
      <MobileActionBar onOpenBookingModal={handleOpenBooking} />

      {/* Footer */}
      <Footer onOpenBookingModal={handleOpenBooking} />

      {/* Interactive Service Booking Wizard Modal */}
      {isBookingModalOpen && (
        <div className="modal-overlay" onClick={handleCloseBooking}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--accent-gold-light)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Wrench size={18} />
                </div>
                <div>
                  <h3 className="modal-title">Book Service on WhatsApp</h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>A1 Complete Sewing Machine Service • Coimbatore</div>
                </div>
              </div>
              <button onClick={handleCloseBooking} className="modal-close">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {/* Complete Service Policy Notice in Modal */}
              <div style={{
                backgroundColor: 'var(--accent-gold-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 1rem',
                border: '1px solid var(--accent-gold)',
                marginBottom: '1.25rem',
                fontSize: '0.82rem',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span><strong>Policy Assurance:</strong> Every servicing includes a complete inspection and full-body servicing for peak performance.</span>
              </div>

              {bookingConfirmed ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--accent-green-light)', color: 'var(--accent-green-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Opening WhatsApp...
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Your machine details are formatted. Please complete sending your message on WhatsApp.
                  </p>
                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'left', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                    <div><strong>Customer:</strong> {bookingData.name} ({bookingData.phone})</div>
                    <div><strong>Brand & Model:</strong> {bookingData.brand} {bookingData.model}</div>
                    <div><strong>Problem:</strong> {bookingData.problem}</div>
                    <div><strong>Service Mode:</strong> {bookingData.serviceOption}</div>
                  </div>
                  <button onClick={handleCloseBooking} className="btn btn-navy">
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
                  {/* Step Indicators */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px border var(--border-color)', paddingBottom: '0.75rem' }}>
                    {[1, 2, 3].map((num) => (
                      <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: bookingStep === num ? 1 : 0.5 }}>
                        <span style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: bookingStep === num ? 'var(--accent-gold)' : 'var(--border-color)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem',
                          fontWeight: 700
                        }}>
                          {num}
                        </span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                          {num === 1 ? 'Machine Brand & Model' : num === 2 ? 'Problem Details' : 'Your Details'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Machine Brand & Model */}
                  {bookingStep === 1 && (
                    <div>
                      <div className="form-group">
                        <label className="form-label">Sewing Machine Brand *</label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                          {['USHA', 'Singer', 'Brother', 'Jack', 'Juki', 'Merritt'].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setBookingData({ ...bookingData, brand: b })}
                              style={{
                                padding: '0.65rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid',
                                borderColor: bookingData.brand === b ? 'var(--accent-gold)' : 'var(--border-color)',
                                backgroundColor: bookingData.brand === b ? 'var(--accent-gold-light)' : 'var(--bg-main)',
                                fontSize: '0.88rem',
                                fontWeight: 700,
                                color: 'var(--text-main)',
                                cursor: 'pointer'
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Machine Model Name / Number (If known)</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Wonder Stitch, F4, DDL-8700"
                          value={bookingData.model}
                          onChange={(e) => setBookingData({ ...bookingData, model: e.target.value })}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="btn btn-primary"
                        style={{ width: '100%', marginTop: '1rem' }}
                      >
                        <span>Next Step: Problem Details →</span>
                      </button>
                    </div>
                  )}

                  {/* Step 2: Problem Details & Photo Option */}
                  {bookingStep === 2 && (
                    <div>
                      <div className="form-group">
                        <label className="form-label">Description of Problem / Servicing Needed *</label>
                        <textarea
                          className="form-textarea"
                          rows="3"
                          placeholder="e.g. Thread snapping, skipping stitches, heavy motor sound, routine full servicing..."
                          required
                          value={bookingData.problem}
                          onChange={(e) => setBookingData({ ...bookingData, problem: e.target.value })}
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Service Option *</label>
                        <select
                          className="form-select"
                          value={bookingData.serviceOption}
                          onChange={(e) => setBookingData({ ...bookingData, serviceOption: e.target.value })}
                        >
                          <option value="Store Visit (Civil Aerodrome Post)">Bring Machine to Store (Civil Aerodrome Post)</option>
                          <option value="Doorstep Pickup (Coimbatore Region)">Request Doorstep Pickup in Coimbatore</option>
                        </select>
                      </div>

                      <div style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.84rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Camera size={16} style={{ color: 'var(--accent-gold)' }} />
                        <span>You will be able to attach photos/videos directly in WhatsApp after clicking proceed.</span>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                        <button
                          type="button"
                          onClick={() => setBookingStep(1)}
                          className="btn btn-outline"
                          style={{ flex: 1 }}
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingStep(3)}
                          className="btn btn-primary"
                          style={{ flex: 2 }}
                        >
                          <span>Next Step: Your Details →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact & Date */}
                  {bookingStep === 3 && (
                    <div>
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Anand / Lakshmi"
                          required
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="e.g. 98941 94230"
                          required
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Preferred Service Date</label>
                        <input
                          type="date"
                          className="form-input"
                          value={bookingData.date}
                          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                        <button
                          type="button"
                          onClick={() => setBookingStep(2)}
                          className="btn btn-outline"
                          style={{ flex: 1 }}
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="btn btn-whatsapp"
                          style={{ flex: 2 }}
                        >
                          <MessageCircle size={18} />
                          <span>Book Service on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
