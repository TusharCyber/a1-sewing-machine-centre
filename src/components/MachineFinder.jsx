import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, RotateCcw, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function MachineFinder({ onOpenBookingModal }) {
  const [step, setStep] = useState(1);
  const [usage, setUsage] = useState('');
  const [priority, setPriority] = useState('');

  const recommendations = {
    'home-budget': {
      title: 'Singer Promise 1408 / USHA Domestic Machine',
      type: 'Compact Home Electric Machine',
      match: '98% Match',
      desc: 'Perfect for simple household repair, curtain hemming, clothes alteration, and beginner sewing.',
      highlights: ['Affordable entry price', 'Easy to use controls', 'Lightweight & portable']
    },
    'home-zigzag': {
      title: 'USHA Stitch Magic / Wonder Stitch',
      type: 'Automatic Multi-Stitch Machine',
      match: '99% Match',
      desc: 'Ideal for creative home sewing, dressmaking, buttonholing, picot edging, and embroidery.',
      highlights: ['21 Stitch patterns', 'Automatic needle threader', 'Free arm for sleeve stitching']
    },
    'boutique-speed': {
      title: 'Jack F4 Direct Drive Industrial Machine',
      type: 'High-Speed Commercial Lockstitch',
      match: '97% Match',
      desc: 'The top choice for boutique owners and professional tailors in Coimbatore who demand speed and zero motor noise.',
      highlights: ['5000 Stitches / Min', 'Built-in energy saving motor', 'Low maintenance & high durability']
    },
    'boutique-embroidery': {
      title: 'USHA Janome Memory Craft 450E / Combo',
      type: 'Digital Computerized Embroidery Machine',
      match: '96% Match',
      desc: 'Unlocks high-value custom saree blouse embroidery, logo stitching, and designer ethnic wear creation.',
      highlights: ['Full color touch screen', 'USB design import', 'Precision computerized motor']
    },
    'student-budget': {
      title: 'USHA / Singer Automatic Zig-Zag Series',
      type: 'Versatile Fashion Student Machine',
      match: '95% Match',
      desc: 'Great for fashion designing coursework, garment prototyping, pattern making, and fabric experiments.',
      highlights: ['Supports diverse fabrics', 'Compact design for hostel/home', 'Official warranty']
    },
    'factory-speed': {
      title: 'Juki DDL-8700 Industrial Set + Overlock Interlock',
      type: 'Garment Production Suite',
      match: '99% Match',
      desc: 'Designed for non-stop industrial uniform manufacturing, bulk shirt/pant production, and factory speed.',
      highlights: ['Industrial grade continuous run', 'Heavy denim & silk compatibility', 'Complete table & stand included']
    }
  };

  const getRecommendationKey = () => {
    if (usage === 'factory') return 'factory-speed';
    if (usage === 'boutique' && priority === 'embroidery') return 'boutique-embroidery';
    if (usage === 'boutique') return 'boutique-speed';
    if (usage === 'student') return 'student-budget';
    if (priority === 'zigzag' || priority === 'embroidery') return 'home-zigzag';
    return 'home-budget';
  };

  const currentRec = recommendations[getRecommendationKey()] || recommendations['home-budget'];

  const resetQuiz = () => {
    setStep(1);
    setUsage('');
    setPriority('');
  };

  return (
    <section id="machine-finder" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={16} />
            <span>Interactive Machine Assistant</span>
          </div>
          <h2 className="section-title">Find the Right Sewing Machine for Your Needs</h2>
          <p className="section-subtitle">
            Not sure which model suits your work? Answer 2 simple questions to get expert recommendations tailored to your budget and stitching requirements in Coimbatore.
          </p>
        </div>

        {/* Quiz Container Box */}
        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-color)'
        }}>
          {/* Step Indicator Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Step {step} of 3
            </span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <div style={{ width: '32px', height: '6px', borderRadius: '3px', backgroundColor: step >= 1 ? 'var(--accent-gold)' : 'var(--border-color)' }}></div>
              <div style={{ width: '32px', height: '6px', borderRadius: '3px', backgroundColor: step >= 2 ? 'var(--accent-gold)' : 'var(--border-color)' }}></div>
              <div style={{ width: '32px', height: '6px', borderRadius: '3px', backgroundColor: step === 3 ? 'var(--accent-gold)' : 'var(--border-color)' }}></div>
            </div>
          </div>

          {/* STEP 1: Usage selection */}
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
                1. What will you primarily use the sewing machine for?
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', mdGridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { id: 'home', label: '🏡 Home Hobby & Household Stitching', desc: 'Curtains, dress alterations, routine home repairs' },
                  { id: 'boutique', label: '✂️ Tailor Shop / Boutique Business', desc: 'Custom stitching for ladies dresses, blouses, suits' },
                  { id: 'student', label: '🎓 Fashion Student / Crafting', desc: 'Garment design projects, pattern making' },
                  { id: 'factory', label: '🏭 Industrial / Factory Production', desc: 'Bulk clothing manufacturing, heavy speed stitching' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setUsage(opt.id); setStep(2); }}
                    style={{
                      textAlign: 'left',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid',
                      borderColor: usage === opt.id ? 'var(--accent-gold)' : 'var(--border-color)',
                      backgroundColor: usage === opt.id ? 'var(--accent-gold-light)' : 'var(--bg-card-hover)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                      {opt.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Priority Selection */}
          {step === 2 && (
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
                2. What is your top priority feature or budget style?
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', mdGridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { id: 'budget', label: '💰 Best Budget & Simple Usability', desc: 'Affordable, easy maintenance, hassle-free' },
                  { id: 'zigzag', label: '🧵 Multi Stitch Patterns & Picot', desc: 'Automatic zig-zag, buttonholes, elastic stitch' },
                  { id: 'speed', label: '⚡ High Speed Heavy Duty Workhorse', desc: 'Direct-drive quiet motor for continuous daily stitching' },
                  { id: 'embroidery', label: '🎨 Digital Embroidery & Custom Designs', desc: 'Saree blouse embroidery, monogram logos' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setPriority(opt.id); setStep(3); }}
                    style={{
                      textAlign: 'left',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid',
                      borderColor: priority === opt.id ? 'var(--accent-gold)' : 'var(--border-color)',
                      backgroundColor: priority === opt.id ? 'var(--accent-gold-light)' : 'var(--bg-card-hover)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                      {opt.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginTop: '1.25rem', fontWeight: 600, fontSize: '0.9rem' }}
              >
                ← Back to Question 1
              </button>
            </div>
          )}

          {/* STEP 3: Results Display */}
          {step === 3 && (
            <div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--accent-gold-light)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                border: '1px solid var(--accent-gold)'
              }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  {currentRec.match}
                </span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginTop: '0.2rem', fontWeight: 800 }}>
                  {currentRec.title}
                </h3>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {currentRec.type}
                </div>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {currentRec.desc}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  Why this model is perfect for you:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {currentRec.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={`https://wa.me/919894194230?text=${encodeURIComponent(`Hello A1 Sewing Machine Centre, I ran your Machine Finder tool and my recommended model is: ${currentRec.title}. Please provide full pricing, trial demo details, and store availability in Coimbatore.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1, minWidth: '220px' }}
                >
                  <MessageCircle size={18} />
                  <span>Enquire Price on WhatsApp</span>
                </a>

                <button onClick={resetQuiz} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <RotateCcw size={16} />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
