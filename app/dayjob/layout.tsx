import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dayjob',
  description: 'A selection of freelance web projects ranging from portfolio sites to business applications.',
  alternates: { canonical: '/dayjob' },
  openGraph: {
    description: 'A selection of freelance web projects ranging from portfolio sites to business applications.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
