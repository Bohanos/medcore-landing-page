import { network } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function LocalNetwork() {
  const { diagram: d, facts, needs, tradeoff, stack } = network

  return (
    <Section id="network" alt eyebrow={network.eyebrow} title={network.title} subtitle={network.subtitle}>
      {/* Diagram, built from normal HTML so it stays readable on a phone */}
      <Reveal className="relative rounded-2xl border-2 border-dashed border-hms-accent-text/40 bg-hms-surface/60 p-4 pt-8 sm:p-6 sm:pt-9">
        <span className="absolute -top-3.5 left-4 inline-flex items-center gap-2 rounded-full border border-hms-accent-text/40 bg-hms-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-hms-accent-text sm:left-6">
          <Icon name="building" /> {d.boundary}
        </span>

        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.5fr]">
          {/* Staff computers */}
          <div className="rounded-xl border border-hms-text/10 bg-hms-surface p-5">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
              <Icon name={d.staff.icon} />
            </span>
            <h3 className="mt-3 text-lg font-bold text-hms-text">{d.staff.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-hms-text/75">{d.staff.text}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {d.staff.roles.map((r) => (
                <li key={r} className="rounded-full bg-hms-surface-2 px-2.5 py-1 text-xs font-medium text-hms-text/80">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Network link */}
          <div className="flex flex-col items-center justify-center gap-1 px-2 py-1 text-hms-accent-text">
            <Icon name="arrows-up-down" className="text-2xl md:hidden" />
            <Icon name="arrows-left-right" className="hidden text-2xl md:block" />
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-hms-text-dim">
              {d.link}
            </span>
          </div>

          {/* Server */}
          <div className="rounded-xl border border-hms-text/10 bg-hms-surface p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
                <Icon name={d.server.icon} />
              </span>
              <h3 className="text-lg font-bold text-hms-text">{d.server.title}</h3>
            </div>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {d.server.tiles.map((tile) => (
                <li key={tile.title} className="flex items-start gap-3 rounded-lg bg-hms-surface-2 p-3">
                  <Icon name={tile.icon} className="mt-1 shrink-0 text-hms-accent-text" />
                  <div>
                    <p className="text-sm font-semibold text-hms-text">{tile.title}</p>
                    <p className="text-xs leading-relaxed text-hms-text/70">{tile.text}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3 rounded-lg border border-dashed border-hms-text/20 p-3 sm:col-span-2">
                <Icon name={d.server.backup.icon} className="mt-1 shrink-0 text-hms-accent-text" />
                <div>
                  <p className="text-sm font-semibold text-hms-text">{d.server.backup.title}</p>
                  <p className="text-xs leading-relaxed text-hms-text/70">{d.server.backup.text}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* The one thing that leaves the building */}
      <Reveal className="mx-auto mt-3 flex max-w-xl flex-col items-center gap-2">
        <Icon name="arrow-down" className="text-hms-text-dim" />
        <div className="flex items-start gap-3 rounded-xl border border-dashed border-hms-info/50 bg-hms-surface px-4 py-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-hms-info/15 text-hms-info">
            <Icon name={d.email.icon} />
          </span>
          <div>
            <p className="font-semibold text-hms-text">{d.email.title}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-hms-text/75">{d.email.text}</p>
          </div>
        </div>
      </Reveal>

      {/* What this means */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact, i) => (
          <Reveal key={fact.title} delay={(i % 3) * 100} className="h-full">
            <div className="h-full rounded-xl border border-hms-text/10 bg-hms-surface p-5 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-hms-surface-2 text-hms-accent-text">
                <Icon name={fact.icon} />
              </span>
              <h3 className="mt-3 font-bold text-hms-text">{fact.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-hms-text/75">{fact.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Needs and trade-off */}
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="h-full">
          <div className="h-full rounded-xl border border-hms-text/10 bg-hms-surface p-6">
            <h3 className="text-lg font-bold text-hms-text">{needs.title}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {needs.items.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-hms-text/80">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-hms-surface-2 text-hms-accent-text">
                    <Icon name={item.icon} />
                  </span>
                  <span className="pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <div className="flex h-full items-start gap-4 rounded-xl border border-hms-info/40 bg-hms-info/10 p-6">
            <Icon name="circle-info" className="mt-1 text-xl text-hms-info" />
            <div>
              <h3 className="text-lg font-bold text-hms-text">{tradeoff.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hms-text/85">{tradeoff.text}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stack */}
      <Reveal className="mt-10">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-hms-text-dim">
          {stack.label}
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {stack.items.map((item) => (
            <li
              key={item.name}
              className="inline-flex items-center gap-2 rounded-full border border-hms-text/15 bg-hms-surface px-4 py-2 text-sm font-medium text-hms-text"
            >
              <Icon name={item.icon} style={item.style} className="text-hms-accent-text" /> {item.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}