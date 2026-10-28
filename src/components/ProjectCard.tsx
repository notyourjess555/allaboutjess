import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__heading">
        <div className="project-card__topline">
          <span>{project.kind}</span>
          <span>{project.year}</span>
        </div>
      </div>
      <div className="project-card__content">
        <p className="project-card__description">{project.description}</p>

        <ol className="project-process" aria-label="How the algorithm works">
          {project.process.map((step, index) => (
            <li key={step.label}>
              <span className="project-process__index">0{index + 1}</span>
              <span className="project-process__body">
                <strong>{step.label}</strong>
                <span>{step.detail}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="project-card__bottom">
          <p className="project-card__tools" aria-label="Technologies and concepts">{project.tools.join(' · ')}</p>
          <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
            Explore the code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
