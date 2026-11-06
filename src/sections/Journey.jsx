import { journey } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function Journey() {
  const { rule, steps, gateLabel, unlocksLabel } = journey

  return (
    <Section id="journey" alt eyebrow={journey.eyebrow} title={journey.title} subtitle={journey.subtitle}>
      {/* The one rule behind every step */}
      <Reveal className="mx-auto mb-12 flex max-w-3xl items-start gap-4 rounded-xl border border-hms-accent-text/30 bg-hms-accent/10 p-5 sm:p-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
          <Icon name="lock" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-hms-text">{rule.title}</h3>
          <p className="mt-1 leading-relaxed text-hms-text/80">{rule.text}</p>
        </div>
      </Reveal>

      {/* Timeline */}
      <ol className="mx-auto max-w-3xl">
        {steps.map((step, i) => (
          <li key={step.title} className="relative pb-8 pl-14 last:pb-0 sm:pl-16">
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-11 w-px bg-hms-text/15 sm:left-[1.375rem] sm:top-12"
              />
            )}

            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-hms-accent-text bg-hms-bg text-sm font-bold text-hms-accent-text sm:h-11 sm:w-11">
              {i + 1}
            </span>

            <Reveal className="rounded-xl border border-hms-text/10 bg-hms-surface p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-hms-surface-2 text-hms-accent-text">
                  <Icon name={step.icon} />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-hms-surface-2 px-2.5 py-1 text-xs font-semibold text-hms-text/80">
                  <Icon name="user" className="text-[0.7rem]" /> {step.role}
                </span>
                {step.gate && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-hms-accent-text/30 bg-hms-accent/10 px-2.5 py-1 text-xs font-semibold text-hms-accent-text">
                    <Icon name="lock" className="text-[0.7rem]" /> {gateLabel}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-bold text-hms-text">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-hms-text/75">{step.text}</p>

              <p className="mt-4 flex items-start gap-2 text-sm font-medium text-hms-accent-text">
                <Icon name="arrow-right" className="mt-1 text-xs" />
                <span>
                  <span className="font-semibold">{unlocksLabel}:</span> {step.unlocks}
                </span>
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}