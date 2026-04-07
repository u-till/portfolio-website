import { Analytics } from '@/components/analytics';
import { Navigation } from '@/components/navigation';
import { PageTransition } from '@/components/page-transition';
import { NavigationProvider } from '@/contexts/navigation-context';
import { archivo } from '@/lib/fonts';
import { siteUrl } from '@/lib/utils';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'portfolio | till solenthaler',
    template: '%s | till solenthaler',
  },
  description: 'Portfolio of Till Solenthaler, web designer and developer based in Zurich, Switzerland.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'portfolio | till solenthaler',
    description: 'Portfolio of Till Solenthaler, web designer and developer based in Zurich, Switzerland.',
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
      </body>
    </html>
  );
}
