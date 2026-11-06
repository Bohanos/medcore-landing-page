import { scope } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function Scope() {
  const { fit, rule, groups, run, custom } = scope

  return (
    <Section id="scope" eyebrow={scope.eyebrow} title={scope.title} subtitle={scope.subtitle}>
      {/* Built for + how to read this */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full items-start gap-4 rounded-xl border border-hms-accent-text/30 bg-hms-accent/10 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
              <Icon name={fit.icon} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-hms-text">{fit.title}</h3>
              <p className="mt-1.5 leading-relaxed text-hms-text/80">{fit.text}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <div className="flex h-full items-start gap-4 rounded-xl border border-hms-info/40 bg-hms-info/10 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-hms-info/15 text-hms-info">
              <Icon name={rule.icon} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-hms-text">{rule.title}</h3>
              <p className="mt-1.5 leading-relaxed text-hms-text/80">{rule.text}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Not included */}
      <Reveal as="h3" className="mb-6 mt-14 text-center text-xl font-bold text-hms-text sm:text-2xl">
        {scope.notIncludedTitle}
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 100} className="h-full">
            <div className="h-full rounded-xl border border-hms-text/10 bg-hms-surface p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-hms-surface-2 text-hms-text/70">
                  <Icon name={group.icon} />
                </span>
                <h4 className="font-bold text-hms-text">{group.title}</h4>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-hms-text/80">
                    <Icon name="minus" className="mt-1 shrink-0 text-xs text-hms-text-dim" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* How it runs */}
      <Reveal as="h3" className="mb-6 mt-14 text-center text-xl font-bold text-hms-text sm:text-2xl">
        {scope.runTitle}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {run.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="h-full">
            <div className="h-full rounded-xl border border-hms-text/10 bg-hms-surface p-5 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-hms-surface-2 text-hms-accent-text">
                <Icon name={item.icon} />
              </span>
              <h4 className="mt-3 font-bold text-hms-text">{item.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-hms-text/75">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Customization */}
      <Reveal className="mt-14">
        <div className="rounded-2xl border border-hms-accent-text/30 bg-hms-accent/10 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
              <Icon name={custom.icon} className="text-lg" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-hms-text">{custom.title}</h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-hms-text/80">{custom.text}</p>
            </div>
          </div>

          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {custom.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 rounded-lg bg-hms-surface p-4 text-sm text-hms-text/85">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-hms-accent text-xs font-bold text-hms-accent-on">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  )
}