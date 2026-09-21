import { useEffect, useRef, useState } from 'react'
import { copy } from '../content/site'
import { assetUrl } from '../lib/assets'

export function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a className="wordmark" href="#top" aria-label="Oğuzhan Berke Özdil, back to top">
          <img className="wordmark-mark" src={assetUrl('images/obo-mark.png')} alt="" />
          <span className="wordmark-rule" aria-hidden="true" />
          <span className="wordmark-descriptor">{copy.header.descriptor}</span>
        </a>
        <button
          ref={buttonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="menu-mark" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {copy.header.navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
