import { useRef, useState } from 'react'
import { screens } from '../content/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ScreenshotFrame from '../components/ScreenshotFrame'

export default function Screens() {
  const items = screens.items
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const current = items[active]

  // Left/Right/Home/End move between tabs, as people expect from a tab list
  const onKeyDown = (e) => {
    let next = null
    if (e.key === 'ArrowRight') next = (active + 1) % items.length
    if (e.key === 'ArrowLeft') next = (active - 1 + items.length) % items.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = items.length - 1
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section id="screens" eyebrow={screens.eyebrow} title={screens.title} subtitle={screens.subtitle}>
      <Reveal>
        <div
          role="tablist"
          aria-label="System screens"
          onKeyDown={onKeyDown}
          className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
        >
          {items.map((item, i) => {
            const selected = i === active
            return (
              <button
                key={item.name}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`screen-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="screen-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? 'border-transparent bg-hms-accent text-hms-accent-on shadow-sm'
                    : 'border-hms-text/15 text-hms-text/80 hover:bg-hms-surface-2'
                }`}
              >
                <Icon name={item.icon} className="text-xs" /> {item.tab}
              </button>
            )
          })}
        </div>

        <div
          id="screen-panel"
          role="tabpanel"
          aria-labelledby={`screen-tab-${active}`}
          className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10"
        >
          {/* key restarts the fade each time a tab changes */}
          <div key={current.name} className="load-fade">
            <ScreenshotFrame name={current.name} alt={current.alt} />
          </div>

          <div key={`${current.name}-text`} className="load-fade">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-hms-surface-2 px-2.5 py-1 text-xs font-semibold text-hms-text/80">
              <Icon name="user" className="text-[0.7rem]" /> {current.role}
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-hms-text">{current.title}</h3>
            <p className="mt-3 leading-relaxed text-hms-text/75">{current.text}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-hms-text/80">
                  <Icon name="check" className="mt-1 shrink-0 text-xs text-hms-success" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}