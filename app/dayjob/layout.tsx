import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'dayjob',
  description: 'Freelance web design and development by Till Solenthaler: a selection of client websites built with React, Next.js, Tailwind and WordPress.',
  path: '/dayjob',
  image: '/dayjob/dayjob-thumb.png',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
