import { demo } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// Finds the thumbnail at build time, so a missing file shows a placeholder instead of breaking the page.
const files = import.meta.glob('../assets/video-thumbnail.{webp,avif,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const thumbnail = Object.values(files)[0] ?? null

export default function Demo() {
  return (
    <Section id="demo" eyebrow={demo.eyebrow} title={demo.title} subtitle={demo.subtitle}>
      <Reveal className="mx-auto max-w-4xl">
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${demo.button}: opens in a new tab`}
          className="group relative block overflow-hidden rounded-2xl border border-hms-text/10 bg-hms-surface-2 shadow-xl shadow-black/10"
        >
          <div className="relative aspect-video">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={demo.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-hms-text/60">
                <Icon name="image" style="regular" className="text-4xl" />
                <p className="text-sm font-medium">Thumbnail coming soon</p>
                <p className="text-xs">src/assets/video-thumbnail.webp</p>
              </div>
            )}

            {/* Play button */}
            <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-hms-accent text-hms-accent-on shadow-lg ring-8 ring-white/25 transition duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                <Icon name="play" className="ml-1 text-2xl sm:text-3xl" />
              </span>
            </span>

            <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-black/70 px-2.5 py-1.5 text-xs font-semibold text-white">
              <Icon name="youtube" style="brands" /> YouTube
            </span>
          </div>
        </a>

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-hms-accent px-6 py-3 font-semibold text-hms-accent-on shadow-sm transition hover:opacity-90"
          >
            <Icon name="youtube" style="brands" /> {demo.button}
            <Icon name="arrow-up-right-from-square" className="text-sm" />
          </a>
          <p className="text-sm text-hms-text-dim">{demo.note}</p>
        </div>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-hms-text-dim">
          {demo.coversLabel}
        </p>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {demo.covers.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-hms-text/15 bg-hms-surface px-3.5 py-1.5 text-sm font-medium text-hms-text/85"
            >
              <Icon name="check" className="text-xs text-hms-success" /> {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}