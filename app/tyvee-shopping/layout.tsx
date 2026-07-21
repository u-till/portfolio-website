import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TYvee Shopping',
  description: 'Music project — TYvee Shopping.',
  alternates: { canonical: '/tyvee-shopping' },
  openGraph: {
    description: 'Music project — TYvee Shopping.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
