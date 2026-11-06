import useReveal from '../hooks/useReveal'

// Fades its children in when they scroll into view. delay is in milliseconds.
// Don't put hover:translate / scale classes on the same element: put them on a child.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ '--delay': `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}