function ButtonShowcase() {
  return (
    <article className="ds-block" aria-labelledby="buttons-title">
      <h3 id="buttons-title">Botones</h3>

      <p className="ds-description">
        Los botones tienen bordes redondeados, estados hover y foco accesible con
        <code> :focus-visible</code>.
      </p>

      <div className="ds-actions">
        <a href="#contacto" className="btn btn-primary">
          Botón principal
        </a>

        <a href="#servicios" className="btn btn-secondary">
          Botón secundario
        </a>

        <button type="button" className="btn btn-primary">
          Botón HTML
        </button>
      </div>
    </article>
  );
}

export default ButtonShowcase;