import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'toy lexicon',
  description: 'A book about construction kits from the last 100 years, produced with a custom CMS, a shared JSON database and automated InDesign layouts.',
  path: '/toy-lexicon',
  image: '/toy-lexicon/front-mockup-small.png',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
