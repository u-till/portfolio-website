import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'traces',
  description: 'Interactive art project exploring urban traces and reconstruction.',
  alternates: { canonical: '/traces' },
  openGraph: {
    description: 'Interactive art project exploring urban traces and reconstruction.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
