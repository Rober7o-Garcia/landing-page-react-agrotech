function FormShowcase() {
  return (
    <article className="ds-block" aria-labelledby="forms-title">
      <h3 id="forms-title">Campos de formulario</h3>

      <p className="ds-description">
        Los campos de formulario utilizan etiquetas asociadas, validaciones HTML5
        y mensajes de error debajo de cada input. Los estados visuales permiten
        identificar cuándo un dato está correcto o requiere corrección.
      </p>

      <div className="form-states-grid">
        <div className="form-state-card">
          <h4>Estado normal</h4>

          <div className="form-group">
            <label htmlFor="ds-normal-name">Nombre completo</label>
            <input
              id="ds-normal-name"
              type="text"
              placeholder="Ej. Carlos Mendoza"
            />
          </div>

          <p>
            Se muestra antes de que el usuario interactúe o antes de validar el
            formulario.
          </p>
        </div>

        <div className="form-state-card">
          <h4>Estado inválido</h4>

          <div className="form-group ds-invalid-preview">
            <label htmlFor="ds-invalid-email">Correo electrónico</label>
            <input
              id="ds-invalid-email"
              type="email"
              value="correo-invalido"
              readOnly
              aria-invalid="true"
              aria-describedby="ds-invalid-email-error"
            />
            <small id="ds-invalid-email-error" className="error-message">
              Ingrese un correo electrónico válido.
            </small>
          </div>

          <p>
            Se utiliza cuando el usuario envía el formulario con datos vacíos o
            incorrectos. El borde se pinta de rojo y aparece un mensaje debajo
            del campo.
          </p>
        </div>

        <div className="form-state-card">
          <h4>Estado obligatorio vacío</h4>

          <div className="form-group ds-invalid-preview">
            <label htmlFor="ds-required-name">Nombre completo</label>
            <input
              id="ds-required-name"
              type="text"
              value=""
              readOnly
              aria-invalid="true"
              aria-describedby="ds-required-name-error"
              placeholder="Ej. Carlos Mendoza"
            />
            <small id="ds-required-name-error" className="error-message">
              El nombre completo es obligatorio.
            </small>
          </div>

          <p>
            Este estado aparece cuando un campo marcado con <code>required</code>
            no contiene información.
          </p>
        </div>

        <div className="form-state-card">
          <h4>Estado válido</h4>

          <div className="form-group ds-valid-preview">
            <label htmlFor="ds-valid-email">Correo electrónico</label>
            <input
              id="ds-valid-email"
              type="email"
              value="cliente@correo.com"
              readOnly
            />
          </div>

          <p>
            Se usa para representar un campo que cumple con las reglas de
            validación definidas.
          </p>
        </div>
      </div>

      <div className="ds-spec-list">
        <h4>Especificación de validación</h4>

        <ul>
          <li>
            <strong>Campo obligatorio:</strong> se define con <code>required</code>.
          </li>
          <li>
            <strong>Validación de formato:</strong> se aplica con <code>type="email"</code> o <code>pattern</code>.
          </li>
          <li>
            <strong>Longitud:</strong> se controla con <code>minLength</code> y <code>maxLength</code>.
          </li>
          <li>
            <strong>Estado inválido:</strong> usa borde rojo con <code>var(--color-error)</code>.
          </li>
          <li>
            <strong>Mensaje de error:</strong> aparece debajo del campo con la clase <code>error-message</code>.
          </li>
          <li>
            <strong>Accesibilidad:</strong> los errores pueden relacionarse con el campo usando <code>aria-describedby</code>.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default FormShowcase;