import { copy, site } from '../content/site'
import { assetUrl } from '../lib/assets'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <Reveal className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          {site.location} / {copy.hero.eyebrow}
        </p>
        <h1 id="hero-title">
          Oğuzhan Berke <em>Özdil</em>
        </h1>
        <p className="hero-role">{site.role}</p>
        <p className="hero-lead">{copy.hero.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#research">
            {copy.hero.primaryAction} <Arrow />
          </a>
          <a className="text-link" href="#students">
            {copy.hero.secondaryAction} <Arrow />
          </a>
        </div>
      </Reveal>
      <Reveal className="hero-portrait-wrap">
        <figure className="hero-portrait">
          <img src={assetUrl('images/profile-oguzhan.webp')} alt={copy.hero.portraitAlt} />
          <figcaption>
            <span>OBÖ / 2026</span>
            <span>{copy.hero.portraitCaption}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
