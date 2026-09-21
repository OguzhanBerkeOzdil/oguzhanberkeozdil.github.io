import { copy } from '../content/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <span>Oğuzhan Berke Özdil</span>
        <span>{copy.footer.affiliation}</span>
        <a href="#top">{copy.footer.backToTop} ↑</a>
      </div>
    </footer>
  )
}
