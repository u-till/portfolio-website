import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'saudade',
  description: 'Analog photographs from travels around the world, exploring saudade: a melancholic longing for places and moments that have passed.',
  path: '/saudade',
  image: '/saudade/ambalavao-mdg-2.png',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
