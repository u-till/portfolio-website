import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'saudade',
  description: 'A photography project capturing moments of longing from travels around the world.',
  alternates: { canonical: '/saudade' },
  openGraph: {
    description: 'A photography project capturing moments of longing from travels around the world.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
