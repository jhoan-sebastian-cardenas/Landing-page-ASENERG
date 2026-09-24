import Logo from './Logo'
import './Footer.css'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#solucion', label: 'Solución' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto', label: 'Contacto' },
]

// Enlaces simulados: no existe documentación legal real para esta prueba
const LEGAL_LINKS = ['Aviso legal', 'Política de privacidad', 'Política de cookies']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#inicio" aria-label="ASENERG, volver al inicio">
              <Logo variant="light" />
            </a>
            <p>Asesoramiento energético claro y personalizado.</p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="footer__title">Navegación</h2>
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Información legal">
            <h2 className="footer__title">Legal</h2>
            <ul>
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="footer__link" onClick={(event) => event.preventDefault()}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {year} ASENERG. Todos los derechos reservados.</p>
          <p>Sitio ficticio creado para una prueba técnica.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer