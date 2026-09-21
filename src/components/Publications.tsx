import { copy, publications } from '../content/site'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function Publications() {
  return (
    <section className="publications-section section-space" id="publications" aria-labelledby="publications-title">
      <div className="page-shell">
        <Reveal>
          <SectionIntro label={copy.publications.label} title={copy.publications.title} id="publications-title">
            <p>{copy.publications.introduction}</p>
          </SectionIntro>
        </Reveal>
        <Reveal className="publication-list">
          {publications.map((paper, index) => (
            <article className="publication" key={paper.title}>
              <span className="publication-index">0{index + 1}</span>
              <div className="publication-meta">
                <span>{paper.year}</span>
                <span>{paper.venue}</span>
              </div>
              <div className="publication-main">
                <h3>
                  {paper.url ? (
                    <a href={paper.url} target="_blank" rel="noreferrer">
                      {paper.title}
                      <span className="publication-arrow" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>
                <p>{paper.contribution}</p>
                {paper.status && <span className="publication-status">{paper.status}</span>}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
