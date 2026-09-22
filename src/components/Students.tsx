import { copy, site } from '../content/site'
import { Reveal } from './Reveal'

export function Students() {
  return (
    <section className="students-section section-space" id="students" aria-labelledby="students-title">
      <div className="page-shell students-layout">
        <Reveal className="students-heading">
          <p className="section-label">{copy.students.label}</p>
          <h2 id="students-title">{copy.students.title}</h2>
        </Reveal>
        <Reveal className="students-body">
          <p className="students-lead">{copy.students.introduction}</p>
          <p>{copy.students.opportunity}</p>
          <div className="students-formal-note">
            <h3>{copy.students.supervisionTitle}</h3>
            <p>
              {copy.students.supervisionPrefix}{' '}
              <a href={site.supervisorUrl} target="_blank" rel="noreferrer">
                {site.supervisor}
              </a>{' '}
              {copy.students.supervisionSuffix}
            </p>
            <a href={site.projectLinks.students} target="_blank" rel="noreferrer">
              {copy.students.groupLink}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
