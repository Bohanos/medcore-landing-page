import { useEffect, useState } from 'react'
import { site, nav } from '../content/site'
import Icon from './Icon'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="load-fade sticky top-0 z-50 border-b border-hms-text/10 bg-hms-bg/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <a href="#top" className="flex items-center gap-3 text-hms-text">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-hms-accent text-lg font-extrabold text-hms-accent-on">
                M
            </span>
            <span className="leading-tight">
                <span className="block text-base font-extrabold tracking-tight">{site.brand}</span>
                <span className="hidden text-xs text-hms-text-dim sm:block">Hospital Management System</span>
            </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-hms-text/75 transition hover:bg-hms-surface-2 hover:text-hms-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-hms-text/15 text-hms-text transition hover:bg-hms-surface-2 lg:hidden"
          >
            <Icon name={open ? 'xmark' : 'bars'} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-hms-text/10 bg-hms-bg lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-hms-text transition hover:bg-hms-surface-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}