import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '[COMPANY NAME] — Tissue Paper, Made for Business',
  description: 'Premium tissue paper manufacturing and bulk supply for hospitality, healthcare, retail, offices and distributors.',
  openGraph: {
    title: '[COMPANY NAME] — Tissue Paper, Made for Business',
    description: 'Reliable tissue paper manufacturing and bulk supply.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
