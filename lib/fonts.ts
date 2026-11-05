import { Archivo } from 'next/font/google';

export const archivo = Archivo({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});
