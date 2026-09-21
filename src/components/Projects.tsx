import { copy, projects, type Project } from '../content/site'
import { assetUrl } from '../lib/assets'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

function ProjectGallery({ project }: { project: Project }) {
  return (
    <div className={`project-gallery project-gallery-${project.images.length}`}>
      {project.images.map((image, index) => (
        <figure className={`project-image project-image-${index + 1}`} key={image.src}>
          <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <section className="projects-section section-space" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <Reveal>
          <SectionIntro label={copy.projects.label} title={copy.projects.title} id="projects-title">
            <p>{copy.projects.introduction}</p>
          </SectionIntro>
        </Reveal>
        <div className="project-cases">
          {projects.map((project, index) => (
            <Reveal className={`project-case ${index % 2 ? 'project-case-reverse' : ''}`} key={project.name}>
              <div className="project-copy">
                <div className="project-metadata">
                  <span>{project.status}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-contribution">
                  <p className="micro-label">{copy.projects.contributionLabel}</p>
                  <p>{project.contribution}</p>
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a className="underlined-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                      {link.label} <Arrow diagonal />
                    </a>
                  ))}
                </div>
              </div>
              <ProjectGallery project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
