import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <div className="project-card__topline">
          <span>{project.kind}</span>
          <span>{project.year}</span>
        </div>
        <p className="project-card__description">{project.description}</p>
        <a
          className="project-card__image-link project-card__hello-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Click to explore the Seam Carving code on GitHub"
        >
          <img src={`${import.meta.env.BASE_URL}images/hello-world.png`} alt="Terminal window displaying hello, world!" loading="lazy" />
          <span className="project-card__image-caption project-card__image-caption--explore">
            click to explore the code <span className="project-card__caption-arrow" aria-hidden="true">↑</span>
          </span>
        </a>
      </div>
      <a
        className="project-card__image-link project-card__results-link"
        href="https://imageseamcrave.onrender.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Click to try resizing your image now"
      >
        <img src={`${import.meta.env.BASE_URL}images/seam-carving-results.jpg`} alt="Before and after results from the Seam Carving image resizer" loading="lazy" />
        <span className="project-card__image-caption project-card__image-caption--try">
          click to try resizing your image now <span className="project-card__caption-spark" aria-hidden="true">✳</span>
        </span>
      </a>
    </article>
  )
}
