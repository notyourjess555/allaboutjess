export type Project = {
  title: string
  kind: string
  year: string
  description: string
  process: { label: string; detail: string }[]
  tools: string[]
  href: string
}

export const seamCarvingProject: Project = {
  title: 'Seam Carving',
  kind: 'Image processing / C',
  year: '2026',
  description:
    'A content-aware image resizer that finds low-energy paths through an image and removes them one at a time, shrinking the picture while keeping its important shapes in place.',
  process: [
    { label: 'Measure', detail: 'Compare neighbouring pixels to estimate visual change.' },
    { label: 'Find', detail: 'Use bottom-up dynamic programming to locate a low-cost seam.' },
    { label: 'Remove', detail: 'Trace the path and copy the remaining pixels into a narrower image.' },
  ],
  tools: ['C', 'Dynamic programming', 'Image processing'],
  href: 'https://github.com/notyourjess555/image.seam-carving',
}
