import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, HelpCircle, MessageCircle, Wrench, RefreshCw, ChevronRight } from 'lucide-react';

export default function Troubleshooting({ onOpenBookingModal }) {
  const [activeIssue, setActiveIssue] = useState('t1');

  const issues = [
    {
      id: 't1',
      title: '🧵 Thread Keeps Breaking Continuously',
      symptom: 'Upper thread snaps after stitching a few inches.',
      possibleCauses: [
        'Top tension is set too tight',
        'Needle is bent, blunt, or inserted backwards',
        'Rough burr or nick on shuttle hook or presser foot',
        'Using poor quality thread with variable thickness'
      ],
      quickFix: 'Rethread machine with tension dial set to medium (3-4). Insert a fresh German needle with flat side facing correct direction. If problem persists, shuttle hook polished service is required.'
    },
    {
      id: 't2',
      title: '⚡ Machine Skipping Stitches',
      symptom: 'Stitching leaves long gaps without interlocking upper and lower threads.',
      possibleCauses: [
        'Incorrect needle size for fabric type (e.g. thin needle on heavy denim)',
        'Needle bar timing is out of sync with shuttle hook',
        'Needle not pushed all the way up into needle clamp'
      ],
      quickFix: 'Ensure needle is pushed fully upwards into clamp. Switch to Organ Size 14/16 needle for regular fabrics. If timing is displaced due to jam, bring machine for A1 precision timing calibration.'
    },
    {
      id: 't3',
      title: '🕸️ Thread Bunching / Bird Nesting Below Fabric',
      symptom: 'Tangled mess of thread underneath the fabric while top looks loose.',
      possibleCauses: [
        'Top thread not engaged between tension discs',
        'Presser foot was DOWN while threading machine',
        'Bobbin placed upside down in bobbin case'
      ],
      quickFix: 'RAISE presser foot, completely unthread top thread, rethread firmly through tension discs. Check that bobbin spins smoothly in bobbin case.'
    },
    {
      id: 't4',
      title: '🔊 Loud Machine Noise or Stiff Handwheel',
      symptom: 'Machine requires heavy force to turn handwheel or makes grinding sound.',
      possibleCauses: [
        'Lack of sewing machine oil in internal gear mechanisms',
        'Lint, dust, or broken thread jammed inside shuttle race',
        'Worn out motor carbon brushes or tight motor belt drive'
      ],
      quickFix: 'Remove bobbin area plate and clean lint with small brush. Apply 2-3 drops of clear sewing machine oil to oil holes & shuttle race. Turn handwheel manually.'
    }
  ];

  const selectedIssueData = issues.find(i => i.id === activeIssue) || issues[0];

  return (
    <section id="troubleshooting" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <AlertTriangle size={16} />
            <span>Self-Diagnostic Guide</span>
          </div>
          <h2 className="section-title">Sewing Machine Troubleshooting Guide</h2>
          <p className="section-subtitle">
            Experiencing common sewing issues? Identify the root cause below or contact A1 technicians for fast resolution in Coimbatore.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          lgGridTemplateColumns: '0.9fr 1.1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Issue Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {issues.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveIssue(item.id)}
                style={{
                  textAlign: 'left',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: activeIssue === item.id ? 'var(--bg-card)' : 'var(--bg-subtle)',
                  border: '1px solid',
                  borderColor: activeIssue === item.id ? 'var(--accent-gold)' : 'var(--border-color)',
                  boxShadow: activeIssue === item.id ? 'var(--shadow-md)' : 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {item.symptom}
                </div>
              </button>
            ))}
          </div>

          {/* Issue Solution Display Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ backgroundColor: 'var(--accent-gold-light)', color: 'var(--accent-gold)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700 }}>
                Diagnostic Report
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
              {selectedIssueData.title}
            </h3>

            <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              Symptom: "{selectedIssueData.symptom}"
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 700 }}>
                Common Causes:
              </h4>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {selectedIssueData.possibleCauses.map((cause, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>•</span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              backgroundColor: 'var(--accent-green-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1.15rem',
              border: '1px solid var(--accent-green)',
              marginBottom: '1.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--accent-green-hover)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                <CheckCircle size={18} />
                <span>Recommended DIY Solution:</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                {selectedIssueData.quickFix}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/919894194230?text=${encodeURIComponent(`Hello A1 Sewing Machine Centre, my sewing machine has this problem: ${selectedIssueData.title}. Please provide technician support in Coimbatore.`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} />
                <span>Ask Technician on WhatsApp</span>
              </a>

              <button onClick={onOpenBookingModal} className="btn btn-primary" style={{ flex: 1 }}>
                <Wrench size={18} />
                <span>Book Service Inspection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
