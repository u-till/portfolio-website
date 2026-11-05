import { Analytics } from '@/components/analytics';
import { Navigation } from '@/components/navigation';
import { PageTransition } from '@/components/page-transition';
import { NavigationProvider } from '@/contexts/navigation-context';
import { archivo } from '@/lib/fonts';
import { siteUrl } from '@/lib/utils';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';

const SITE_DESCRIPTION =
  'Portfolio of Till Solenthaler, web designer and developer based in Zurich, Switzerland: objects, visuals, music and code projects.';

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Till Solenthaler',
  url: siteUrl,
  jobTitle: 'Web Designer & Developer',
  email: 'hello@utill.ch',
  address: { '@type': 'PostalAddress', addressLocality: 'Zurich', addressCountry: 'CH' },
  sameAs: ['https://utill.ch', 'https://github.com/u-till'],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'portfolio | till solenthaler',
    template: '%s | till solenthaler',
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'portfolio | till solenthaler',
    description: SITE_DESCRIPTION,
    url: '/',
    images: ['/social-thumbnail.jpg'],
    type: 'website',
    locale: 'en_US',
    siteName: 'Till Solenthaler',
  },
  twitter: {
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'Till Solenthaler',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={archivo.variable}>
      <body className='font-sans antialiased'>
        <Suspense fallback={null}>
          <NavigationProvider>
            <Navigation />
            <main className='w-full'>
              <PageTransition>{children}</PageTransition>
            </main>
          </NavigationProvider>
        </Suspense>
        <Analytics />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }} />
      </body>
    </html>
  );
}
