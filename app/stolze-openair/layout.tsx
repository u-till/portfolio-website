import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'stolze openair',
  description: 'Part of the Stolze Openair committee since 2018: booking music acts, building the festival site and running the website and everything digital.',
  path: '/stolze-openair',
  image: '/stolze-openair/stolze-openair.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
