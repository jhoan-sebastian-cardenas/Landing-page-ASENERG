import { useEffect, useRef } from 'react'
import { Check, ChevronDown, Mail, Phone } from 'lucide-react'
import { useContactForm } from '../hooks/useContactForm'
import './ContactForm.css'

function FormField({ id, label, optional = false, error, children }) {
  return (
    <div className="form__field">
      <label htmlFor={id}>
        {label}
        {optional && <span className="form__optional"> (opcional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="form__error">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm()
  const successRef = useRef(null)
  const isSubmitting = status === 'submitting'

  // Al enviar, el foco pasa al mensaje de éxito para que lo anuncie el lector de pantalla
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <div className="contact__info">
          <div className="contact__heading">
            <p className="eyebrow">Hablemos</p>
            <h2 id="contact-title">¿Quieres entender mejor tu situación energética?</h2>
          </div>
          <p className="contact__text">
            Cuéntanos un poco sobre ti y tu situación. Nuestro equipo revisará la información para
            conocer mejor tu caso.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__icon" aria-hidden="true">
                <Mail size={20} />
              </span>
              <a href="mailto:info@asenerg.es">info@asenerg.es</a>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true">
                <Phone size={20} />
              </span>
              <a href="tel:+34900100200">+34 900 100 200</a>
            </li>
          </ul>
        </div>

        <div className="contact__card">
          {status === 'success' ? (
            <div className="contact__success">
              <span className="contact__success-icon" aria-hidden="true">
                <Check size={28} strokeWidth={3} />
              </span>
              <h3 ref={successRef} tabIndex={-1}>
                Hemos recibido tu solicitud.
              </h3>
              <p>
                Gracias por contactar con ASENERG. Revisaremos la información que nos has enviado
                y podremos conocer mejor tu situación.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
              <FormField id="name" label="Nombre" error={errors.name}>
                <input
                  className="form__control"
                  type="text"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  {...fieldProps('name')}
                />
              </FormField>

              <div className="form__row">
                <FormField id="phone" label="Teléfono" optional error={errors.phone}>
                  <input
                    className="form__control"
                    type="tel"
                    inputMode="tel"
                    placeholder="+34 600 000 000"
                    autoComplete="tel"
                    {...fieldProps('phone')}
                  />
                </FormField>

                <FormField id="email" label="Email" error={errors.email}>
                  <input
                    className="form__control"
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    {...fieldProps('email')}
                  />
                </FormField>
              </div>

              <FormField id="clientType" label="¿Qué tipo de cliente eres?" error={errors.clientType}>
                <div className="form__select">
                  <select className="form__control" {...fieldProps('clientType')}>
                    <option value="">Selecciona una opción</option>
                    <option value="particular">Particular</option>
                    <option value="empresa">Empresa / Negocio</option>
                  </select>
                  <ChevronDown className="form__select-icon" size={20} aria-hidden="true" />
                </div>
              </FormField>

              <FormField id="message" label="Cuéntanos sobre tu situación" error={errors.message}>
                <textarea
                  className="form__control"
                  rows={4}
                  placeholder="¿Qué te gustaría revisar o mejorar?"
                  {...fieldProps('message')}
                />
              </FormField>

              <div className="form__field">
                <label className="form__check" htmlFor="consent">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={values.consent}
                    onChange={handleChange}
                    aria-invalid={errors.consent ? 'true' : undefined}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                  />
                  <span>He leído y acepto la política de privacidad.</span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="form__error">
                    {errors.consent}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn--primary btn--block" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando…' : 'Solicitar consulta gratuita'}
              </button>
              <p className="form__trust">Sin compromiso.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm