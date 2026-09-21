import { copy, researchPriorities, site } from '../content/site'
import { assetUrl } from '../lib/assets'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function Research() {
  return (
    <section className="research-section section-space" id="research" aria-labelledby="research-title">
      <div
        className="research-background"
        style={{ backgroundImage: `url(${assetUrl('images/research-field-background.png')})` }}
        aria-hidden="true"
      />
      <div className="page-shell">
        <Reveal>
          <SectionIntro label={copy.research.label} title={copy.research.title} id="research-title">
            <p>{copy.research.introduction}</p>
          </SectionIntro>
        </Reveal>
        <div className="research-layout">
          <Reveal className="research-topic">
            <p className="micro-label institution-text">
              {copy.research.topicLabel} / {site.topicId}
            </p>
            <blockquote>{site.officialTopic}</blockquote>
            <p className="research-supervision">
              {copy.research.supervisionPrefix}{' '}
              <a href={site.supervisorUrl} target="_blank" rel="noreferrer">
                {site.supervisor}
              </a>{' '}
              {copy.research.supervisionSuffix}
            </p>
            <a className="underlined-link institution-link" href={site.topicUrl} target="_blank" rel="noreferrer">
              {copy.research.topicLink} <Arrow diagonal />
            </a>
          </Reveal>
          <Reveal className="research-image-block">
            <figure>
              <img
                src={assetUrl('images/master-setup.webp')}
                alt={copy.research.experimentAlt}
                loading="lazy"
              />
              <figcaption>{copy.research.experimentCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal className="priority-list">
          {researchPriorities.map((priority, index) => (
            <article className="priority-item" key={priority.label}>
              <div className="priority-visual">
                <img
                  className="priority-icon"
                  src={assetUrl(priority.icon)}
                  alt={priority.iconAlt}
                  loading="lazy"
                />
                <span className="priority-number">0{index + 1}</span>
              </div>
              <h3>{priority.label}</h3>
              <p>{priority.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
