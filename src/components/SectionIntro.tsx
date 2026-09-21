import type { ReactNode } from 'react'

export function SectionIntro({
  label,
  title,
  id,
  children,
}: {
  label: string
  title: string
  id: string
  children?: ReactNode
}) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <div>
        <h2 id={id}>{title}</h2>
        {children && <div className="section-summary">{children}</div>}
      </div>
    </div>
  )
}
