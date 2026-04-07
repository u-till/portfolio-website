import { siteUrl } from '@/lib/utils';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

  const projects = [
    'under-construction',
    'saudade',
    'retrofitted',
    'amped-up',
    'toy-lexicon',
    'lost-in-space',
    'dayjob',
    'traces',
  ];

  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.8 },
    ...projects.map((project) => ({
      url: `${siteUrl}/${project}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
