import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'retrofitted',
  description: 'A retro lamp transformed into a modern USB-C rechargeable light with dimmable LED.',
  alternates: { canonical: '/retrofitted' },
  openGraph: {
    description: 'A retro lamp transformed into a modern USB-C rechargeable light with dimmable LED.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
