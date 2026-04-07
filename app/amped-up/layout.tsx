import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'amped up',
  description: 'Klein+Hummel studio monitors upgraded with digital amplifiers, Bluetooth, and DSP capabilities.',
  alternates: { canonical: '/amped-up' },
  openGraph: {
    description: 'Klein+Hummel studio monitors upgraded with digital amplifiers, Bluetooth, and DSP capabilities.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
