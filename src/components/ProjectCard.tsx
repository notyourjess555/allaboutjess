import type { PointerEvent } from 'react'
import type { Project } from '../data/projects'
import SeamDiagram from './SeamDiagram'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  function moveGlow(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    event.currentTarget.style.setProperty('--glow-x', `${x}%`)
    event.currentTarget.style.setProperty('--glow-y', `${y}%`)
  }

  return (
    <article className="project-card" onPointerMove={moveGlow}>
      <div className="project-card__visual">
        <SeamDiagram />
      </div>

      <div className="project-card__content">
        <div className="project-card__topline">
          <span>{project.kind}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
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
          <ul className="tag-list" aria-label="Technologies and concepts">
            {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
          <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
            Explore the code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
