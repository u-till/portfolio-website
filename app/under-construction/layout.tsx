import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'under construction',
  description: 'A mobile filing cabinet and keyboard stand built from leftover construction site planks, presented with an interactive 360° viewer.',
  path: '/under-construction',
  image: '/under-construction/korpus-process-5.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
