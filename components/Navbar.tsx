'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Products', '#products'],
  ['Manufacturing', '#manufacturing'],
  ['About', '#about'],
  ['Industries', '#industries'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-nav">
        <div className="container nav-inner">
          <a className="wordmark" href="#home">[COMPANY NAME]</a>
          <nav className="nav-links" aria-label="Primary navigation">
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="quote-btn" href="#quote">Request a Quote</a>
          <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#quote" onClick={() => setOpen(false)}>Request a Quote ↗</a>
      </div>
    </>
  );
}
