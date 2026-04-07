import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about',
  description: 'Webdesigner and developer based in Zurich.',
  alternates: { canonical: '/about' },
  openGraph: {
    description: 'Webdesigner and developer based in Zurich.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
