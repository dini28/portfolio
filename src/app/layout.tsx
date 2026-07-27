import type { Metadata, Viewport } from 'next';
import { Genos, Offside } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import './globals.css';

const genos = Genos({
  subsets: ['latin'],
  variable: '--font-genos',
  display: 'swap',
});

const offside = Offside({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-offside',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dipeshsoni.vercel.app'),
  title: 'Dipesh Soni | Frontend Developer',
  description:
    'Dipesh Soni — Frontend Developer specializing in React, TypeScript, and modern web technologies. View my projects, skills, and get in touch.',
  authors: [{ name: 'Dipesh Soni' }],
  keywords: [
    'Dipesh Soni',
    'Frontend Developer',
    'React',
    'TypeScript',
    'Portfolio',
    'Web Developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Dipesh Soni | Frontend Developer',
    description:
      'Frontend Developer specializing in React, TypeScript, and modern web technologies. View my projects, skills, and get in touch.',
    images: ['/preview.png'],
    siteName: 'Dipesh Soni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dipesh Soni | Frontend Developer',
    description:
      'Frontend Developer specializing in React, TypeScript, and modern web technologies.',
    images: ['/preview.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#060606',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${genos.variable} ${offside.variable}`}>
      <body className={genos.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ErrorBoundary>
          <Analytics />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
