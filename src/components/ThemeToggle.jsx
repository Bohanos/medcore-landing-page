import useTheme from '../hooks/useTheme'
import Icon from './Icon'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-hms-text/15 text-hms-text transition hover:bg-hms-surface-2"
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
    </button>
  )
}