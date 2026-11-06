import { modules } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function Modules() {
  return (
    <Section id="modules" eyebrow={modules.eyebrow} title={modules.title} subtitle={modules.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 100} className="h-full">
            {/* The hover movement lives on this inner card, not on the Reveal wrapper */}
            <article className="flex h-full flex-col rounded-xl border border-hms-text/10 bg-hms-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-hms-accent-text/40 hover:shadow-lg hover:shadow-black/5">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
                <Icon name={item.icon} className="text-lg" />
              </span>

              <h3 className="mt-4 text-lg font-bold text-hms-text">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-hms-text/75">{item.text}</p>

              <ul className="mt-4 space-y-2.5 text-sm">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-hms-text/80">
                    <Icon name="check" className="mt-1 shrink-0 text-xs text-hms-success" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}