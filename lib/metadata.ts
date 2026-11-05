import type { Metadata } from 'next';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image: string;
}

export function pageMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      description,
      url: path,
      images: [image],
      type: 'website',
      locale: 'en_US',
      siteName: 'Till Solenthaler',
    },
    twitter: { card: 'summary_large_image', description, images: [image] },
  };
}
