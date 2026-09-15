import { ArrowUpRight } from 'lucide-react';

export type Product = {
  name: string;
  description: string;
  imageLabel: string;
  details: string[];
};

export default function ProductCard({ product, onOpen }: { product: Product; onOpen: (product: Product) => void }) {
  return (
    <article className="product-card">
      <button onClick={() => onOpen(product)} style={{ border: 0, padding: 0, background: 'transparent', width: '100%', textAlign: 'left' }}>
        <div className="product-image media-placeholder"><span className="media-label">{product.imageLabel}</span></div>
        <div className="product-meta">
          <div><h3>{product.name}</h3><p>{product.description}</p></div>
          <span className="product-arrow" aria-label={`View ${product.name}`}><ArrowUpRight size={17} /></span>
        </div>
      </button>
    </article>
  );
}
