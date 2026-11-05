import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'amped up',
  description: 'An old pair of Klein+Hummel O 96 studio monitors upgraded with digital amplifiers, Bluetooth and DSP, rebuilt together with a friend.',
  path: '/amped-up',
  image: '/amped-up/preview.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
