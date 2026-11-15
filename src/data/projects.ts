export type Project = {
  title: string
  kind: string
  year: string
  description: string
  href: string
}

export const seamCarvingProject: Project = {
  title: 'Seam Carving',
  kind: 'Image processing / C',
  year: '2026',
  description:
    'A content-aware image resizer that finds low-energy paths through an image and removes them one at a time, shrinking the picture while keeping its important shapes in place.',
  href: 'https://github.com/notyourjess555/image.seam-carving',
}
