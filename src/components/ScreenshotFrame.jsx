import Icon from './Icon'

// Finds every image in src/assets/screens at build time.
const files = import.meta.glob('../assets/screens/*.{webp,avif,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function find(name) {
  for (const ext of ['webp', 'avif', 'png', 'jpg', 'jpeg']) {
    const hit = files[`../assets/screens/${name}.${ext}`]
    if (hit) return hit
  }
  return null
}

/**
 * name:     file name without extension, e.g. "hero-dashboard"
 *           (optional dark version: "hero-dashboard-dark")
 * priority: true for the first image on the page (loads immediately)
 * Shows a clean placeholder until the real file exists.
 */
export default function ScreenshotFrame({ name, alt, caption, priority = false, className = '' }) {
  const light = find(name)
  const dark = find(`${name}-dark`) || light
  const imgClass = 'absolute inset-0 h-full w-full object-cover object-top'

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-hms-text/10 bg-hms-surface shadow-lg shadow-black/5">
        <div className="flex items-center gap-1.5 border-b border-hms-text/10 bg-hms-surface-2 px-3 py-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-hms-text/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-hms-text/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-hms-text/20" />
        </div>

        <div className="relative aspect-video bg-hms-surface-2">
          {light ? (
            <>
              <img
                src={light}
                alt={alt}
                width="1920"
                height="1080"
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
                decoding="async"
                className={`only-light ${imgClass}`}
              />
              <img
                src={dark}
                alt={alt}
                width="1920"
                height="1080"
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                className={`only-dark ${imgClass}`}
              />
            </>
          ) : (
            <div
              role="img"
              aria-label={alt}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-hms-text/60"
            >
              <Icon name="image" style="regular" className="text-4xl" />
              <p className="text-sm font-medium">Screenshot coming soon</p>
              <p className="text-xs">src/assets/screens/{name}.webp</p>
            </div>
          )}
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-hms-text/70">{caption}</figcaption>}
    </figure>
  )
}