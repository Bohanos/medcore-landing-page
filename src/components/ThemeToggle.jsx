import useTheme from '../hooks/useTheme'
import Icon from './Icon'

// Two-segment switch. The highlighted segment is the CURRENT mode (same idea as the app's Light | Dark switch).
export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  const segment = (active) =>
    `grid h-8 w-8 place-items-center rounded-full text-sm transition ${
      active ? 'bg-hms-accent text-hms-accent-on shadow-sm' : 'text-hms-text/60'
    }`

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      className="flex items-center gap-0.5 rounded-full border border-hms-text/15 bg-hms-surface p-0.5 transition hover:border-hms-text/30"
    >
      <span className={segment(!isDark)}>
        <Icon name="sun" />
      </span>
      <span className={segment(isDark)}>
        <Icon name="moon" />
      </span>
    </button>
  )
}