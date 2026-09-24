import './Logo.css'

function Logo({ variant = 'default' }) {
  return (
    <span className={`logo${variant === 'light' ? ' logo--light' : ''}`}>
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__text">ASENERG</span>
    </span>
  )
}

export default Logo