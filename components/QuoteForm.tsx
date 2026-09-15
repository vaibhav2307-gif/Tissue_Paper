'use client';

import { FormEvent, useState } from 'react';

export default function QuoteForm({ sample = false }: { sample?: boolean }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <form className="form" onSubmit={submit} noValidate>
      <input required name="name" placeholder="Name *" aria-label="Name" />
      <input required name="company" placeholder="Company name *" aria-label="Company name" />
      <input required name="phone" placeholder="Phone *" type="tel" aria-label="Phone" />
      <input required name="email" placeholder="Email *" type="email" aria-label="Email" />
      <input required name="product" placeholder="Product / category *" aria-label="Product" />
      <input required name="quantity" placeholder={sample ? 'Sample requirement *' : 'Required quantity *'} aria-label={sample ? 'Sample requirement' : 'Required quantity'} />
      <input required className="full" name="location" placeholder="Delivery location *" aria-label="Delivery location" />
      {!sample && <textarea className="full" name="message" placeholder="Tell us about your requirement" aria-label="Message" />}
      <button type="submit">{sample ? 'Request a Sample' : 'Request a Quote'} ↗</button>
      {sent && <p className="form-status" role="status">Thank you. Your enquiry is captured in this demo form. Connect your preferred email/CRM endpoint before launch.</p>}
    </form>
  );
}
