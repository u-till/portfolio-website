import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'lost in space',
  description: 'A space-themed album produced with friends in a house full of music studios, with cover art by Till Solenthaler and the full record on Spotify.',
  path: '/lost-in-space',
  image: '/lost-in-space/cover.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
