import Reveal from './Reveal'

// alt = true gives the section a soft background band.
export default function Section({ id, eyebrow, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${alt ? 'bg-hms-surface-2/60' : ''}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-hms-accent-text">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-hms-text sm:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-hms-text/75 sm:text-lg">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}