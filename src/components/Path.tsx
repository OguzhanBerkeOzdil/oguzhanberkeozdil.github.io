import { copy, education, milestones } from '../content/site'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function Path() {
  return (
    <section className="path-section section-space" id="path" aria-labelledby="path-title">
      <div className="page-shell">
        <Reveal>
          <SectionIntro label={copy.path.label} title={copy.path.title} id="path-title">
            <p>{copy.path.introduction}</p>
          </SectionIntro>
        </Reveal>
        <div className="path-layout">
          <Reveal>
            <ol className="timeline">
              {milestones.map((item, index) => (
                <li className="timeline-item" key={`${item.period}-${item.stage}`}>
                  <span className="timeline-index">0{index + 1}</span>
                  <span className="timeline-date">{item.period}</span>
                  <div className="timeline-content">
                    <h3>{item.stage}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="education-block">
            <p className="micro-label institution-text">{copy.path.educationLabel}</p>
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <span>{item.year}</span>
                <h3>{item.degree}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
