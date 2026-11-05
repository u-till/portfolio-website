import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'about',
  description: 'Till Solenthaler is a web designer and developer based in Zurich, Switzerland. Education, work experience, skills and how to get in touch.',
  path: '/about',
  image: '/about/pp.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
