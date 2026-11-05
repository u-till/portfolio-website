import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'TYvee Shopping',
  description: "Music and voice production for TYvee Shopping, Yvee Nogara's bachelor thesis project: a TV jingle, matching tracks and recorded dubbing.",
  path: '/tyvee-shopping',
  image: '/tyvee-shopping/video-thumb.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
