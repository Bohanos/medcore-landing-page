import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section'
import Reveal from './components/Reveal'
import ScreenshotFrame from './components/ScreenshotFrame'
import Icon from './components/Icon'

export default function App() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Section
          id="journey"
          eyebrow="Phase 1 check"
          title="The foundation is working"
          subtitle="If you can read this, switch themes, resize the window and scroll to see the reveal, Phase 1 is done."
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Reveal className="rounded-xl border border-hms-text/10 bg-hms-surface p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-hms-accent text-hms-accent-on">
                <Icon name="pills" className="text-xl" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">Card on a surface</h3>
              <p className="mt-2 text-hms-text/75">Body text, then a dim line below.</p>
              <p className="mt-1 text-hms-text-dim">Dim text uses the dim token.</p>
              <p className="mt-3 font-medium text-hms-accent-text">
                <Icon name="circle-check" /> Accent text (readable in dark mode)
              </p>
              <p className="mt-3 flex gap-3 text-sm">
                <span className="text-hms-success"><Icon name="circle-check" /> success</span>
                <span className="text-hms-info"><Icon name="circle-info" /> info</span>
              </p>
              <a
                href="#top"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-hms-accent px-5 py-2.5 font-semibold text-hms-accent-on transition hover:opacity-90"
              >
                Primary button
              </a>
            </Reveal>

            <Reveal delay={150}>
              <ScreenshotFrame name="hero-dashboard" alt="MedCore HMS admin dashboard" priority />
            </Reveal>
          </div>
        </Section>

        <Section alt eyebrow="Alternate band" title="A second section" subtitle="This one uses the soft background band.">
          <Reveal className="mx-auto max-w-md rounded-xl border border-hms-text/10 bg-hms-surface p-6 text-center">
            Scroll reveal works if this fades in as you reach it.
          </Reveal>
        </Section>
      </main>

      <Footer />
    </div>
  )
}