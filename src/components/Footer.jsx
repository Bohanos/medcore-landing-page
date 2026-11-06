import { site, footer } from '../content/site'
import Icon from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hms-text/10 bg-hms-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-hms-text/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-hms-text">{site.name}</p>
          <p className="mt-1">{footer.line}</p>
          <p className="mt-1">{footer.note}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-medium text-hms-accent-text hover:underline"
          >
            <Icon name="arrow-up" /> Back to top
          </a>
          <p>
            &copy; {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}