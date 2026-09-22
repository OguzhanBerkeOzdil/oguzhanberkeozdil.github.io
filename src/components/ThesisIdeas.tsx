import { copy, site, thesisIdeas } from '../content/site'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'

export function ThesisIdeas() {
  const subject = encodeURIComponent('BSc or MSc thesis idea')

  return (
    <section className="thesis-section section-space" id="thesis-ideas" aria-labelledby="thesis-title">
      <div className="page-shell">
        <Reveal className="thesis-intro">
          <h2 id="thesis-title">{copy.students.ideasTitle}</h2>
          <p>{copy.students.ideasIntroduction}</p>
        </Reveal>

        <Reveal className="thesis-illustration" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}images/thesis-directions-editorial.png`}
            alt=""
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div className="thesis-grid">
          {thesisIdeas.map((idea) => (
            <Reveal className="thesis-idea" key={idea.title}>
              <p className="thesis-level">{idea.level}</p>
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="thesis-next-step">
          <p>{copy.students.ideasNote}</p>
          <a className="button button-primary" href={`mailto:${site.contact.email}?subject=${subject}`}>
            {copy.students.contactAction} <Arrow />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
