import React from 'react';
import { Phone, MessageCircle, Wrench } from 'lucide-react';

export default function MobileActionBar({ onOpenBookingModal }) {
  const defaultWhatsAppText = encodeURIComponent(
    `Hello A1 Sewing Machine Centre, I would like to enquire about sewing machine servicing.\n\nMy machine details are:\n• Brand:\n• Model (if known):\n• Problem Description:\n\n(I will attach photos/videos of the machine/problem)`
  );

  return (
    <div className="mobile-bottom-bar">
      <div className="mobile-bottom-bar-grid">
        <a
          href={`https://wa.me/919894194230?text=${defaultWhatsAppText}`}
          target="_blank"
          rel="noreferrer"
          className="mobile-action-btn"
          style={{ backgroundColor: 'var(--accent-green)', color: '#ffffff' }}
        >
          <MessageCircle size={18} />
          <span>WhatsApp Enquiry</span>
        </a>

        <button
          onClick={onOpenBookingModal}
          className="mobile-action-btn"
          style={{ backgroundColor: 'var(--accent-gold)', color: '#ffffff', border: 'none' }}
        >
          <Wrench size={18} />
          <span>Book Service</span>
        </button>

        <a
          href="tel:+919843210850"
          className="mobile-action-btn"
          style={{ backgroundColor: 'var(--primary-navy)', color: '#ffffff' }}
        >
          <Phone size={18} />
          <span>Call 98432 10850</span>
        </a>
      </div>
    </div>
  );
}
