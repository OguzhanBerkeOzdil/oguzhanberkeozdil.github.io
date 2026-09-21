import { copy, site } from '../content/site'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'
import { assetUrl } from '../lib/assets'

function highlightText(text: string, highlights: readonly string[]) {
  const matches = [...highlights].sort((a, b) => b.length - a.length)
  const expression = new RegExp(`(${matches.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')

  return text.split(expression).map((part, index) =>
    highlights.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  )
}

export function About() {
  return (
    <section className="about-section section-space" id="about" aria-labelledby="about-title">
      <div className="page-shell about-layout">
        <Reveal className="about-personal">
          <p className="section-label">{copy.about.label}</p>
          <h2 id="about-title">{copy.about.title}</h2>
          <figure className="about-lifestyle">
            <img
              src={assetUrl(copy.about.image.src)}
              alt={copy.about.image.alt}
              loading="lazy"
            />
            <figcaption>{copy.about.image.caption}</figcaption>
          </figure>
          {copy.about.body.map((paragraph) => (
            <p key={paragraph}>{highlightText(paragraph, copy.about.highlights)}</p>
          ))}
        </Reveal>
        <Reveal className="contact-panel">
          <p className="micro-label">{copy.contact.label}</p>
          <h3>{copy.contact.title}</h3>
          <p>{copy.contact.body}</p>
          <address className="contact-links">
            <a href={`mailto:${site.contact.email}`}>
              <span>{copy.contact.emailLabel}</span>
              <strong>{site.contact.email}</strong>
              <Arrow diagonal />
            </a>
            <a href={site.contact.linkedIn} target="_blank" rel="noreferrer">
              <span>{copy.contact.linkedInLabel}</span>
              <strong>oguzhanberkeozdil</strong>
              <Arrow diagonal />
            </a>
            <a href={site.contact.github} target="_blank" rel="noreferrer">
              <span>{copy.contact.githubLabel}</span>
              <strong>OguzhanBerkeOzdil</strong>
              <Arrow diagonal />
            </a>
            <a href={site.contact.googleScholar} target="_blank" rel="noreferrer">
              <span>{copy.contact.googleScholarLabel}</span>
              <strong>Oğuzhan Berke Özdil</strong>
              <Arrow diagonal />
            </a>
            <a href={site.contact.instagram} target="_blank" rel="noreferrer">
              <span>{copy.contact.instagramLabel}</span>
              <strong>@berkeozdil</strong>
              <Arrow diagonal />
            </a>
            <a href={site.contact.facebook} target="_blank" rel="noreferrer">
              <span>{copy.contact.facebookLabel}</span>
              <strong>oguzhanberke.ozdil</strong>
              <Arrow diagonal />
            </a>
          </address>
          <p className="agh-email-note">{copy.contact.aghEmailNotice}</p>
        </Reveal>
      </div>
    </section>
  )
}
