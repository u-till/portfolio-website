import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'toy lexicon',
  description: 'A book exploring construction kits from the last 100 years, with custom CMS and automated InDesign layout.',
  alternates: { canonical: '/toy-lexicon' },
  openGraph: {
    description: 'A book exploring construction kits from the last 100 years, with custom CMS and automated InDesign layout.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
