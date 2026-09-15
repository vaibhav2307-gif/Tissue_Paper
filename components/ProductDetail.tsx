'use client';

import { X } from 'lucide-react';
import type { Product } from './ProductCard';

export default function ProductDetail({ product, onClose }: { product: Product | null; onClose: () => void }) {
  if (!product) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="product-title">
      <div className="modal">
        <button className="modal-close" aria-label="Close product details" onClick={onClose}><X size={18} /></button>
        <div className="modal-grid">
          <div className="modal-image media-placeholder"><span className="media-label">{product.imageLabel}</span></div>
          <div>
            <div className="eyebrow">Product profile</div>
            <h2 id="product-title">{product.name}</h2>
            <p className="body-copy">{product.description} Specifications below are intentionally editable until your confirmed product catalogue is supplied.</p>
            <div className="specs">
              {['Ply', 'Sheet / roll size', 'GSM', 'Packaging', 'MOQ'].map(label => <div className="spec-row" key={label}><span>{label}</span><strong>[ADD SPECIFICATION]</strong></div>)}
            </div>
            <div className="hero-actions"><a className="quote-btn" href="#quote" onClick={onClose}>Request Bulk Quote ↗</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
