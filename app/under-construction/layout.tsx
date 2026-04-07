import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'under construction',
  description: 'A filing cabinet on wheels built from construction site planks.',
  alternates: { canonical: '/under-construction' },
  openGraph: {
    description: 'A filing cabinet on wheels built from construction site planks.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
