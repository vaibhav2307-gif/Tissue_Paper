'use client';

import { ArrowDown, ArrowUpRight, Check, Plus } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import QuoteForm from '@/components/QuoteForm';

const products: Product[] = [
  { name: 'Toilet Tissue', description: 'Commercial rolls for hospitality, facilities and high-use environments.', imageLabel: 'Toilet tissue / replace image', details: [] },
  { name: 'Facial Tissue', description: 'Boxed tissue formats for hospitality, healthcare, offices and retail.', imageLabel: 'Facial tissue / replace image', details: [] },
  { name: 'Paper Napkins', description: 'Flexible formats for food service, hospitality and institutional supply.', imageLabel: 'Napkins / replace image', details: [] },
  { name: 'Kitchen Towels', description: 'Commercial kitchen and industrial roll formats for demanding use.', imageLabel: 'Kitchen towel / replace image', details: [] },
  { name: 'Hand Towels', description: 'Folded formats including interfold, C-fold and Z-fold configurations.', imageLabel: 'Hand towel / replace image', details: [] },
  { name: 'Custom Tissue', description: 'Discuss custom dimensions, packaging, private label and bulk requirements.', imageLabel: 'Custom tissue / replace image', details: [] },
];

const process = [
  ['01', 'Raw Material', 'Selected input material prepared for consistent production.'],
  ['02', 'Tissue Production', 'Paper is formed and processed according to the confirmed production specification.'],
  ['03', 'Converting', 'Large-format tissue is converted into the required commercial product format.'],
  ['04', 'Quality Inspection', 'Batches are checked against agreed product and packaging requirements.'],
  ['05', 'Packaging', 'Finished products are packed for storage, handling and bulk distribution.'],
  ['06', 'Bulk Dispatch', 'Orders move from production and warehouse into the customer supply chain.'],
];

const quality = ['Material Quality', 'Softness & Strength', 'Dimensional Consistency', 'Packaging Quality', 'Batch Inspection', 'Reliable Supply'];
const industries = [
  ['01', 'Hospitality', 'Hotels, resorts and guest-facing operations.'],
  ['02', 'Restaurants', 'Food service groups and high-volume dining.'],
  ['03', 'Healthcare', 'Hospitals, clinics and care facilities.'],
  ['04', 'Offices', 'Workplaces and corporate facilities.'],
  ['05', 'Retail', 'Retailers requiring dependable commercial supply.'],
  ['06', 'Distribution', 'Wholesalers and regional distribution partners.'],
  ['07', 'Institutions', 'Schools, campuses and public institutions.'],
  ['08', 'Commercial Facilities', 'Cleaning and facility-management operations.'],
];
const faqs = [
  ['What is your minimum order quantity?', 'MOQ is currently an editable placeholder. Replace [MOQ] with your confirmed commercial minimum.'],
  ['Do you supply in bulk?', 'Yes. The website is designed around wholesale, commercial and recurring B2B supply enquiries.'],
  ['Can you provide custom sizes?', 'Add the exact customisation capabilities your production team supports before launch.'],
  ['Do you offer private labeling?', 'Private-label capability is presented as an editable option and should be confirmed before publishing as a service.'],
  ['Can I request samples?', 'Yes. Use the sample request section to collect the product and delivery details needed by your sales team.'],
  ['Which locations do you supply?', 'Replace this answer with your actual serviceable cities, states, regions or export markets.'],
  ['How can I request a quotation?', 'Complete the Request a Quote form with your product, quantity and location. Connect the form to your email or CRM endpoint before launch.'],
];

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <main>
      <Navbar />

      <section className="hero" id="home">
        <div className="container hero-grid">
          <Reveal>
            <div className="eyebrow">Tissue paper manufacturing / bulk supply</div>
            <h1 className="display">Tissue paper,<br /><em>made for business.</em></h1>
            <div className="hero-copy">
              <p>Reliable tissue paper manufacturing and bulk supply for hotels, restaurants, hospitals, offices, retailers and distributors.</p>
              <div className="hero-actions">
                <a className="quote-btn" href="#quote">Request a Quote <ArrowUpRight size={15} /></a>
                <a className="secondary-btn" href="#products">Explore Products <ArrowDown size={15} /></a>
              </div>
            </div>
          </Reveal>
          <Reveal><div className="hero-media media-placeholder"><span className="media-label">Hero production image / replace with factory or tissue photography</span></div></Reveal>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="container intro-grid">
          <Reveal><div><div className="eyebrow">01 / The supply relationship</div><h2 className="section-title">More than paper.<br />A supply you can rely on.</h2></div></Reveal>
          <Reveal><div className="intro-copy"><p className="body-copy">We manufacture tissue paper products for businesses that require consistent quality, dependable supply and scalable bulk orders. This experience is designed around the realities of B2B procurement: clear specifications, repeatability, responsive support and a supply relationship built for the long term.</p><p className="body-copy">[Add company-specific manufacturing story, location and capabilities here.]</p></div></Reveal>
        </div>
      </section>

      <section className="products" id="products">
        <div className="container">
          <Reveal><div className="section-head"><div><div className="eyebrow">02 / Product collection</div><h2 className="section-title">Our Products</h2></div><p className="body-copy">A flexible catalogue structure for commercial tissue formats. Open any category for editable specification fields.</p></div></Reveal>
          <div className="product-grid">{products.map((product, i) => <Reveal key={product.name}><ProductCard product={product} onOpen={setSelected} /></Reveal>)}</div>
        </div>
      </section>

      <section className="manufacturing" id="manufacturing">
        <div className="container">
          <Reveal><div className="eyebrow">03 / Manufacturing</div><h2 className="section-title" style={{ marginTop: 22 }}>Made in our production.<br />Delivered to your business.</h2></Reveal>
          <div className="process">{process.map(([no, title, copy]) => <Reveal key={no}><div className="process-row"><span className="process-no">{no}</span><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="quality">
        <div className="container quality-grid">
          <Reveal><div><div className="eyebrow">04 / Quality</div><h2 className="section-title" style={{ marginTop: 22 }}>Consistency<br />is the product.</h2><p className="body-copy" style={{ marginTop: 30 }}>Every bulk order should meet the expected standard. Use this section to communicate the checks and quality philosophy that your actual operation follows.</p></div></Reveal>
          <Reveal><div className="quality-list">{quality.map((item, i) => <div className="quality-item" key={item}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{item}</h3><p>Define your actual quality standard and inspection practice here.</p></div></div>)}</div></Reveal>
        </div>
      </section>

      <section className="custom">
        <div className="container custom-inner">
          <Reveal><div><div className="eyebrow">05 / Custom manufacturing</div><h2 className="section-title">Your specification.<br />Our production.</h2></div></Reveal>
          <Reveal><div><p className="custom-note">Discuss custom sizes, ply requirements, packaging, branding, private label, bulk quantities and recurring supply. Publish only the options your production team confirms.</p><a className="quote-btn" href="#quote" style={{ marginTop: 24 }}>Discuss Your Requirement <ArrowUpRight size={15} /></a></div></Reveal>
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="container"><Reveal><div className="eyebrow">06 / Industries</div><h2 className="section-title" style={{ marginTop: 22 }}>Built for businesses<br />that use tissue at scale.</h2></Reveal>
          <div className="industry-grid">{industries.map(([no, name, copy]) => <Reveal key={name}><article className="industry"><span className="industry-no">{no}</span><h3>{name}</h3><p>{copy}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="stats"><div className="container stats-grid">{[['[XX]+', 'Years of experience'], ['[XX]+', 'Products / SKUs'], ['[XX]+', 'Business customers'], ['[XX]', 'Production capacity'], ['[XX]+', 'Cities / markets served']].map(([value, label]) => <Reveal key={label}><div className="stat"><strong>{value}</strong><span>{label}</span></div></Reveal>)}</div></section>

      <section className="why"><div className="container why-grid"><Reveal><div><div className="eyebrow">07 / Why choose us</div><h2 className="section-title" style={{ marginTop: 22 }}>Built around<br />your supply chain.</h2></div></Reveal><Reveal><div className="why-list">{[['Reliable Supply','Consistent production for recurring business requirements.'],['Bulk Capability','Designed to handle wholesale and commercial quantities.'],['Consistent Quality','Focused on reliable product performance from batch to batch.'],['Flexible Specifications','Support for different sizes, ply and packaging requirements.'],['Business Support','A dedicated contact for quotations and orders.'],['Long-Term Partnerships','Built for recurring B2B relationships rather than one-time purchases.']].map(([t,p]) => <div className="why-item" key={t}><h3>{t}</h3><p>{p}</p></div>)}</div></Reveal></div></section>

      <section className="quote" id="quote"><div className="container quote-grid"><Reveal><div><div className="eyebrow">08 / Bulk enquiry</div><h2 className="section-title">Need tissue in bulk?<br />Let's talk numbers.</h2><p className="body-copy">Tell us what you need and your sales team can prepare a quotation. The form is ready for an email, CRM or serverless endpoint integration.</p></div></Reveal><Reveal><QuoteForm /></Reveal></div></section>

      <section className="quality" style={{ paddingBottom: 110 }}><div className="container quote-grid" style={{ color: 'var(--ink)' }}><Reveal><div><div className="eyebrow">09 / Sample request</div><h2 className="section-title" style={{ marginTop: 22 }}>Need to check<br />the quality first?</h2><p className="body-copy" style={{ marginTop: 25 }}>Use the sample request flow for buyers who need to evaluate the product before placing a bulk requirement.</p></div></Reveal><Reveal><QuoteForm sample /></Reveal></div></section>

      <section className="gallery"><div className="container"><Reveal><div className="section-head"><div><div className="eyebrow">10 / Factory & gallery</div><h2 className="section-title">Show the work.</h2></div><p className="body-copy">Replace these clearly labelled placeholders with your own factory, production, packaging, warehouse and dispatch photography.</p></div></Reveal><div className="gallery-grid"><Reveal><div className="gallery-large media-placeholder"><span className="media-label">Factory / replace image</span></div></Reveal><div className="gallery-stack"><Reveal><div className="gallery-small media-placeholder"><span className="media-label">Production / replace image</span></div></Reveal><Reveal><div className="gallery-small media-placeholder"><span className="media-label">Packaging / replace image</span></div></Reveal></div></div></div></section>

      <section className="faq"><div className="container"><Reveal><div className="eyebrow">11 / FAQ</div><h2 className="section-title" style={{ marginTop: 22 }}>Questions before<br />you enquire?</h2></Reveal><div className="faq-list">{faqs.map(([q,a], i) => <Reveal key={q}><div className="faq-item"><button className="faq-question" onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>{q}{faq === i ? <ArrowUpRight size={18} /> : <Plus size={18} />}</button>{faq === i && <div className="faq-answer">{a}</div>}</div></Reveal>)}</div></div></section>

      <section className="contact" id="contact"><div className="container"><div className="contact-grid"><Reveal><div><div className="eyebrow">12 / Contact</div><h2 className="section-title" style={{ marginTop: 22 }}>Let's build a<br />reliable supply.</h2><p className="body-copy" style={{ marginTop: 25 }}>Replace the details below with your verified business contact information before launch.</p><div className="contact-details"><div className="detail"><label>Phone</label><p>[PHONE NUMBER]</p></div><div className="detail"><label>WhatsApp</label><p>[WHATSAPP NUMBER]</p></div><div className="detail"><label>Email</label><p>[EMAIL]</p></div><div className="detail"><label>Address</label><p>[FACTORY ADDRESS]</p></div><div className="detail"><label>Hours</label><p>[BUSINESS HOURS]</p></div><div className="detail"><label>Maps</label><p>[GOOGLE MAPS LINK]</p></div></div></div></Reveal><Reveal><div className="media-placeholder" style={{ minHeight: 430 }}><span className="media-label">Location / map or factory image</span></div></Reveal></div><footer className="footer"><span>© {new Date().getFullYear()} [COMPANY NAME]. All rights reserved.</span><span>Premium B2B tissue paper manufacturing & bulk supply.</span></footer></div></section>

      <ProductDetail product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
