import { hero } from '../content/site'
import Icon from '../components/Icon'
import ScreenshotFrame from '../components/ScreenshotFrame'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(60% 55% at 75% 0%, rgba(var(--hms-accent-rgb), 0.18), transparent 70%)',
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Text */}
        <div>
          <p className="load-in inline-flex items-center gap-2 rounded-full border border-hms-accent-text/30 bg-hms-accent/10 px-3 py-1 text-sm font-semibold text-hms-accent-text">
            <Icon name="heart-pulse" /> {hero.eyebrow}
          </p>

          <h1
            className="load-in mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-hms-text sm:text-5xl lg:text-[3.4rem]"
            style={{ '--delay': '100ms' }}
          >
            {hero.titleLead} <span className="text-hms-accent-text">{hero.titleAccent}</span>
          </h1>

          <p
            className="load-in mt-5 max-w-xl text-base leading-relaxed text-hms-text/75 sm:text-lg"
            style={{ '--delay': '200ms' }}
          >
            {hero.text}
          </p>

          <div className="load-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ '--delay': '300ms' }}>
            <a
              href={hero.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-hms-accent px-6 py-3 font-semibold text-hms-accent-on shadow-sm transition hover:opacity-90"
            >
              {hero.primary.label} <Icon name="arrow-down" />
            </a>
            <a
              href={hero.secondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-hms-text/20 px-6 py-3 font-semibold text-hms-text transition hover:bg-hms-surface-2"
            >
              {hero.secondary.label}
            </a>
          </div>

          <ul className="load-in mt-9 grid gap-3 sm:grid-cols-2" style={{ '--delay': '400ms' }}>
            {hero.facts.map((fact) => (
              <li key={fact.text} className="flex items-center gap-3 text-sm font-medium text-hms-text/80">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-hms-surface-2 text-hms-accent-text">
                  <Icon name={fact.icon} />
                </span>
                {fact.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="load-in" style={{ '--delay': '250ms' }}>
          <ScreenshotFrame name={hero.image.name} alt={hero.image.alt} priority />
        </div>
      </div>
    </section>
  )
}