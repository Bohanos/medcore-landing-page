import { faq } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// Uses the browser's built-in <details>, so it works with the keyboard and screen readers
// and needs no JavaScript.
export default function Faq() {
  return (
    <Section id="faq" alt eyebrow={faq.eyebrow} title={faq.title}>
      <div className="mx-auto max-w-3xl space-y-3">
        {faq.items.map((item, i) => (
          <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
            <details
              open={i === 0}
              className="group rounded-xl border border-hms-text/10 bg-hms-surface shadow-sm transition-colors open:border-hms-accent-text/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold text-hms-text marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Icon
                  name="chevron-down"
                  className="shrink-0 text-sm text-hms-accent-text transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-hms-text/75">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}