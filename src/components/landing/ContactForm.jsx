import { useContactForm } from '../../hooks/useContactForm';
import { serviciosOptions, tipoClienteOptions } from '../../data/contactFormOptions';

function ContactForm() {
  const {
    formData,
    errores,
    enviado,
    formularioValidado,
    cargando,
    mensajeRespuesta,
    manejarCambio,
    manejarEnvio,
  } = useContactForm();

  return (
    <section
      id="contacto"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <article className="contact-info">
        <span>Contacto</span>

        <h2 id="contact-title">Solicita una demostración de AgroTech Solutions</h2>

        <p>
          Completa el formulario para recibir información sobre nuestras soluciones
          digitales para gestión agrícola, muestreos, reportes y control de datos en campo.
        </p>
      </article>

      <form
        className={`contact-form ${formularioValidado ? 'form-validated' : ''}`}
        onSubmit={manejarEnvio}
        noValidate
      >
        <fieldset>
          <legend>Datos del solicitante</legend>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej. Carlos Mendoza"
              value={formData.nombre}
              onChange={manejarCambio}
              required
              minLength="3"
              maxLength="50"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              title="Ingrese solo letras y espacios. Mínimo 3 caracteres."
            />
            {errores.nombre && (
              <small className="error-message">{errores.nombre}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Ej. correo@ejemplo.com"
              value={formData.correo}
              onChange={manejarCambio}
              required
              maxLength="80"
              title="Ingrese un correo electrónico válido."
            />
            {errores.correo && (
              <small className="error-message">{errores.correo}</small>
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend>Información agrícola</legend>

          <div className="form-group">
            <label htmlFor="hectareas">Número de hectáreas</label>
            <input
              type="number"
              id="hectareas"
              name="hectareas"
              placeholder="Ej. 25"
              value={formData.hectareas}
              onChange={manejarCambio}
              required
              min="1"
              max="10000"
              title="Ingrese un número entre 1 y 10000."
            />
            {errores.hectareas && (
              <small className="error-message">{errores.hectareas}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha estimada para la demostración</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={manejarCambio}
              required
            />
            {errores.fecha && (
              <small className="error-message">{errores.fecha}</small>
            )}
          </div>

          <div className="form-group">
            <p className="input-title">Tipo de cliente</p>

            <div className="option-group">
              {tipoClienteOptions.map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name="tipoCliente"
                    value={option.value}
                    checked={formData.tipoCliente === option.value}
                    onChange={manejarCambio}
                    required
                  />
                  {option.label}
                </label>
              ))}
            </div>

            {errores.tipoCliente && (
              <small className="error-message">{errores.tipoCliente}</small>
            )}
          </div>

          <div className="form-group">
            <p className="input-title">Servicios de interés</p>

            <div className="option-group">
              {serviciosOptions.map((option) => (
                <label key={option.value}>
                  <input
                    type="checkbox"
                    name="servicios"
                    value={option.value}
                    checked={formData.servicios.includes(option.value)}
                    onChange={manejarCambio}
                  />
                  {option.label}
                </label>
              ))}
            </div>

            {errores.servicios && (
              <small className="error-message">{errores.servicios}</small>
            )}
          </div>
        </fieldset>

          <button
            type="submit"
            className="btn btn-primary form-button"
            disabled={cargando}
          >
            {cargando ? 'Enviando solicitud...' : 'Enviar solicitud'}
          </button>

          {mensajeRespuesta && (
            <p
              className={enviado ? 'success-message' : 'error-message'}
              role="status"
            >
              {mensajeRespuesta}
            </p>
          )}
      </form>
    </section>
  );
}

export default ContactForm;