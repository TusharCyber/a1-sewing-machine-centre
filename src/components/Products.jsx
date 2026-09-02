import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Info, Check, Filter, Zap, Shield, Sparkles, X, ChevronRight } from 'lucide-react';

export default function Products({ onSelectProductForEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'domestic', name: 'Domestic / Home Use' },
    { id: 'industrial', name: 'Heavy Duty & Industrial' },
    { id: 'embroidery', name: 'Embroidery & Automated' },
    { id: 'spares', name: 'Spare Parts & Accessories' },
  ];

  const productsList = [
    {
      id: 'p1',
      category: 'domestic',
      name: 'USHA Stitch Magic / Wonder Stitch',
      brand: 'USHA',
      type: 'Domestic Electric',
      tag: 'Best Seller for Home',
      imageBg: 'linear-gradient(135deg, #1e3a5f 0%, #0e2a47 100%)',
      specs: ['21 Built-in Stitches', 'Automatic Needle Threading', '4-Step Buttonholing', 'Free Arm for Circular Sewing'],
      desc: 'Ideal for home tailoring, alterations, boutique crafting, and embroidery. Comes with free demo & 2-year warranty in Coimbatore.',
      priceNote: 'Best Price Guaranteed • Free Delivery in CBE'
    },
    {
      id: 'p2',
      category: 'domestic',
      name: 'Singer Promise 1408 Domestic Machine',
      brand: 'SINGER',
      type: 'Domestic Electric',
      tag: 'Compact & Reliable',
      imageBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      specs: ['8 Built-in Stitches', 'Heavy Duty Metal Frame', 'Simple Stitch Selection', 'Preset Stitch Length & Width'],
      desc: 'Perfect starter machine for home hobbyists, fashion students, and basic household tailoring needs.',
      priceNote: 'Special Offer Available'
    },
    {
      id: 'p3',
      category: 'industrial',
      name: 'Jack F4 Direct-Drive High Speed Machine',
      brand: 'JACK',
      type: 'Industrial Lockstitch',
      tag: 'Tailor Shop Favorite',
      imageBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      specs: ['70% Energy Saving Motor', 'Speed Control up to 5000 RPM', 'Automatic Lubrication', 'Built-in LED Light'],
      desc: 'The ultimate workhorse for commercial tailoring shops, boutiques, and garment factories in Coimbatore. Silent operation and high speed.',
      priceNote: 'Complete Set (Table + Stand + Motor)'
    },
    {
      id: 'p4',
      category: 'industrial',
      name: 'Juki DDL-8700 Heavy Duty Industrial',
      brand: 'JUKI',
      type: 'Industrial Lockstitch',
      tag: 'High Reliability',
      imageBg: 'linear-gradient(135deg, #0e2a47 0%, #1e293b 100%)',
      specs: ['5500 Stitches / Min', 'Heavy Duty Denim & Silk capability', 'Low Vibration Chassis', 'Servo Motor fitted'],
      desc: 'Japanese precision machine built for non-stop industrial production. Ideal for uniform makers and high-volume tailors.',
      priceNote: 'Includes Table Stand & Delivery'
    },
    {
      id: 'p5',
      category: 'industrial',
      name: '4-Thread Overlock / Interlock Machine',
      brand: 'MULTI-BRAND',
      type: 'Industrial Overlock',
      tag: 'Boutique Essential',
      imageBg: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      specs: ['4-Thread Edge Finishing', 'Differential Feed System', 'Clean Seam Trimming', 'High Speed Servo Drive'],
      desc: 'Essential overlock edging machine for readymade garments, boutique dresses, knitted fabrics, and tailoring finishing.',
      priceNote: 'Enquire for Stand & Motor Options'
    },
    {
      id: 'p6',
      category: 'embroidery',
      name: 'USHA Janome Memory Craft 450E',
      brand: 'USHA',
      type: 'Computerized Embroidery',
      tag: 'Digital Crafting',
      imageBg: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
      specs: ['Full Color Touch Screen', 'USB Design Import', '160 Built-in Designs', 'Large Embroidery Field (7.9" x 11")'],
      desc: 'Create stunning designer saree borders, blouses, logo embroidery, and customized dresses with digital perfection.',
      priceNote: 'Includes Design Software & Demo'
    },
    {
      id: 'p7',
      category: 'domestic',
      name: 'Traditional Cast Iron Machine with Table Stand',
      brand: 'MERRITT / USHA',
      type: 'Cast Iron Treadle/Motor',
      tag: 'Classic Heritage',
      imageBg: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
      specs: ['Heavy Cast Iron Body', 'Foot Treadle or Electric Motor option', 'Forward & Reverse Stitching', 'Wooden Table Cabinet'],
      desc: 'Time-tested traditional sewing machine for long-lasting heavy stitching. Highly durable for home and shop use.',
      priceNote: 'Available with Pedal Stand or Motor'
    },
    {
      id: 'p8',
      category: 'spares',
      name: 'Heavy Duty Copper Motor Fitting Kit',
      brand: 'A1 APPROVED',
      type: 'Motor & Foot Pedal',
      tag: '100% Copper Winding',
      imageBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      specs: ['1/8 HP High Speed Motor', 'Smooth Speed Regulator Pedal', 'Complete Mounting Bracket Set', 'Fits Singer, Usha, Merritt'],
      desc: 'Upgrade your manual hand/treadle machine to electric speed. High power copper motor with full installation support.',
      priceNote: 'Free Fitting Assistance'
    },
    {
      id: 'p9',
      category: 'spares',
      name: 'Genuine Spare Parts (Hooks, Bobbins, Needles)',
      brand: 'ORIGINAL',
      type: 'Spares & Attachments',
      tag: '100% Genuine Guarantee',
      imageBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      specs: ['Singer / Usha Shuttle Hooks', 'Steel Bobbin & Bobbin Cases', 'Organ / Singer German Needles', 'Zipper & Picot Presser Feet'],
      desc: 'All original factory spare parts for smooth running without thread breakage. Available in retail and bulk.',
      priceNote: 'Retail & Wholesale Rates'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? productsList
    : productsList.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ShoppingBag size={16} />
            <span>Product Showcase</span>
          </div>
          <h2 className="section-title">Explore Our Sewing Machine Range</h2>
          <p className="section-subtitle">
            From home hobby machines to heavy industrial workhorses & genuine spare parts — sourced directly from top brands with local Coimbatore warranty.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.92rem',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--accent-gold)' : 'var(--border-color)',
                backgroundColor: activeCategory === cat.id ? 'var(--accent-gold)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: activeCategory === cat.id ? '0 4px 12px rgba(217, 119, 6, 0.25)' : 'none'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
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
              {/* Product Header Graphic Banner */}
              <div style={{
                height: '160px',
                background: product.imageBg,
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#ffffff',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}>
                    {product.brand}
                  </span>
                  <span style={{
                    backgroundColor: 'var(--accent-gold)',
                    color: '#ffffff',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700
                  }}>
                    {product.tag}
                  </span>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {product.type}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.25 }}>
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Specifications Checklist */}
                <ul style={{ listStyle: 'none', marginBottom: '1.25rem', flexGrow: 1 }}>
                  {product.specs.map((spec, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      <Check size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--accent-navy)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span>{product.priceNote}</span>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="btn btn-outline btn-sm"
                  >
                    <Info size={14} />
                    <span>Details</span>
                  </button>

                  <a
                    href={`https://wa.me/919894194230?text=${encodeURIComponent(`Hello A1 Sewing Machine Centre, I am interested in buying/enquiring about: ${product.name} (${product.brand}). Please share current pricing and availability in Coimbatore.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <MessageCircle size={14} />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {selectedProduct.brand} • {selectedProduct.type}
                  </span>
                  <h3 className="modal-title">{selectedProduct.name}</h3>
                </div>
                <button onClick={() => setSelectedProduct(null)} className="modal-close">
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div style={{
                  height: '140px',
                  background: selectedProduct.imageBg,
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  marginBottom: '1.25rem'
                }}>
                  {selectedProduct.name}
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {selectedProduct.desc}
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  Key Features & Technical Specs:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <Check size={14} style={{ color: 'var(--accent-green)' }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--accent-gold-light)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--accent-gold)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontWeight: 700, color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                    A1 Trust Package Included:
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    • Free On-Site / Store Demonstration & Training in Coimbatore<br/>
                    • Official Brand Warranty & A1 Service Backup<br/>
                    • Doorstep Delivery available in Civil Aerodrome Post & CBE region
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={`https://wa.me/919894194230?text=${encodeURIComponent(`Hello A1 Sewing Machine Centre, I would like to book a demo / check price for ${selectedProduct.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                    style={{ flex: 1 }}
                  >
                    <MessageCircle size={18} />
                    <span>Get Best Price on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919843210850"
                    className="btn btn-navy"
                    style={{ flex: 1 }}
                  >
                    <Zap size={18} />
                    <span>Call Store 98432 10850</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
