import { roles } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function Roles() {
  return (
    <Section id="roles" alt eyebrow={roles.eyebrow} title={roles.title} subtitle={roles.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roles.items.map((role, i) => (
          <Reveal key={role.name} delay={(i % 4) * 90} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-hms-text/10 bg-hms-surface p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-hms-accent-text/40 hover:shadow-lg hover:shadow-black/5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
                  <Icon name={role.icon} />
                </span>
                <h3 className="text-lg font-bold text-hms-text">{role.name}</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-hms-text/75">{role.summary}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-hms-accent-text">
                {roles.canLabel}
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                {role.can.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-hms-text/80">
                    <Icon name="check" className="mt-1 shrink-0 text-xs text-hms-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto flex items-start gap-2.5 border-t border-hms-text/10 pt-4 text-sm text-hms-text-dim">
                <Icon name="ban" className="mt-1 shrink-0 text-xs" />
                <span>
                  <span className="font-semibold">{roles.cannotLabel}:</span> {role.cannot}
                </span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-xl border border-hms-accent-text/30 bg-hms-accent/10 p-4 text-sm text-hms-text/85 sm:items-center sm:p-5">
        <Icon name="shield-halved" className="mt-0.5 shrink-0 text-lg text-hms-accent-text sm:mt-0" />
        <p>{roles.note}</p>
      </Reveal>
    </Section>
  )
}