import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'traces',
  description: 'An art project reconstructing erased urban traces in Zurich, with an interactive map that places every piece by the GPS data of its photo.',
  path: '/traces',
  image: '/traces/trace-collection/IMG_3769_with_overlay.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
