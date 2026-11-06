// Font Awesome wrapper. <Icon name="pills" />  or  <Icon name="image" style="regular" />
export default function Icon({ name, style = 'solid', className = '', ...rest }) {
  return <i className={`fa-${style} fa-${name} ${className}`} aria-hidden="true" {...rest} />
}