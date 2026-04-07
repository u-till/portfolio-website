import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'lost in space',
  description: 'A collaborative music album combining space-themed productions with original cover art.',
  alternates: { canonical: '/lost-in-space' },
  openGraph: {
    description: 'A collaborative music album combining space-themed productions with original cover art.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
