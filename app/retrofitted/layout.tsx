import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'retrofitted',
  description: 'A broken 70s lamp retrofitted with a USB-C port, rechargeable battery and stepless dimmer, documented with an interactive 3D model.',
  path: '/retrofitted',
  image: '/retrofitted/lamp-mood.jpg',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
