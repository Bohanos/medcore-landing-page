import { useEffect, useRef, useState } from 'react'
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

// Renders the light image, and the dark one when it exists (CSS shows the one matching the theme).
function Picture({ light, dark, alt, priority = false, className = '', onLoad, onClick }) {
  const loading = priority ? 'eager' : 'lazy'
  const common = { alt, loading, decoding: 'async', onLoad, onClick }

  if (!dark) {
    return <img src={light} {...common} fetchPriority={priority ? 'high' : 'auto'} className={className} />
  }
  return (
    <>
      <img src={light} {...common} fetchPriority={priority ? 'high' : 'auto'} className={`only-light ${className}`} />
      <img src={dark} {...common} className={`only-dark ${className}`} />
    </>
  )
}

// Full-screen preview. Closes with Esc, the X button, a click on the image or a click on the dark area.
function Lightbox({ light, dark, alt, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden' // stop the page scrolling behind the preview
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      aria-label={alt}
      onClose={() => {
        if (!ref.current?.open) onClose()
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden border-0 bg-black/90 p-0 text-white backdrop:bg-transparent"
    >
      <div
        className="h-full overflow-auto p-4 pt-16 sm:p-8 sm:pt-16"
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <figure className="mx-auto">
          <Picture
            light={light}
            dark={dark}
            alt={alt}
            onClick={close}
            className="mx-auto block h-auto max-w-full cursor-zoom-out rounded-lg shadow-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-white/80">{alt}</figcaption>
        </figure>
      </div>

      <button
        type="button"
        onClick={close}
        aria-label="Close preview"
        className="fixed right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30"
      >
        <Icon name="xmark" />
      </button>
    </dialog>
  )
}

/**
 * name:     file name without extension, e.g. "hero-dashboard"
 *           (optional dark version: "hero-dashboard-dark")
 * priority: true for the first image on the page (loads immediately)
 * The frame fits the image's own shape. Clicking the image opens it full size.
 * A placeholder shows until the real file exists.
 */
export default function ScreenshotFrame({ name, alt, caption, priority = false, className = '' }) {
  const light = find(name)
  const dark = find(`${name}-dark`)
  const [loaded, setLoaded] = useState(false)
  const [zoom, setZoom] = useState(false)

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-hms-text/10 bg-hms-surface shadow-lg shadow-black/5">
        <div
          className="flex items-center gap-1.5 border-b border-hms-text/10 bg-hms-surface-2 px-3 py-2"
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-hms-text/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-hms-text/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-hms-text/20" />
        </div>

        {light ? (
          // Holds a 16:9 space until the image has loaded, then fits the image exactly
          <div className={`relative bg-hms-surface-2 ${loaded ? '' : 'aspect-video'}`}>
            <button
              type="button"
              onClick={() => setZoom(true)}
              aria-label={`View full size: ${alt}`}
              className="group relative block w-full cursor-zoom-in"
            >
              <Picture
                light={light}
                dark={dark}
                alt={alt}
                priority={priority}
                onLoad={() => setLoaded(true)}
                className="block h-auto w-full"
              />
              <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-black/65 px-2.5 py-1.5 text-xs font-semibold text-white opacity-90 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <Icon name="expand" /> Enlarge
              </span>
            </button>
          </div>
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="flex aspect-video flex-col items-center justify-center gap-3 bg-hms-surface-2 px-6 text-center text-hms-text/60"
          >
            <Icon name="image" style="regular" className="text-4xl" />
            <p className="text-sm font-medium">Screenshot coming soon</p>
            <p className="text-xs">src/assets/screens/{name}.webp</p>
          </div>
        )}
      </div>

      {caption && <figcaption className="mt-3 text-center text-sm text-hms-text/70">{caption}</figcaption>}

      {zoom && <Lightbox light={light} dark={dark} alt={alt} onClose={() => setZoom(false)} />}
    </figure>
  )
}