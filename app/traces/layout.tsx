import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'traces | till solenthaler',
  description: 'Interactive art project exploring urban traces and reconstruction.',
  openGraph: {
    title: 'traces | till solenthaler',
    description: 'Interactive art project exploring urban traces and reconstruction.',
    images: ['/social-thumbnail.jpg'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
