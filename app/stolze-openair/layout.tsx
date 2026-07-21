import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'stolze openair',
  description: 'Music project at Stolze Openair.',
  alternates: { canonical: '/stolze-openair' },
  openGraph: {
    description: 'Music project at Stolze Openair.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
