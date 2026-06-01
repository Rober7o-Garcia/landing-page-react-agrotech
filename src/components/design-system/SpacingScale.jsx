const spaces = [
  {
    name: '--space-5',
    value: '1rem',
    className: 'space-sm',
    usage: 'Separación pequeña entre elementos cercanos.',
  },
  {
    name: '--space-8',
    value: '1.5rem',
    className: 'space-md',
    usage: 'Padding interno de tarjetas y separación media.',
  },
  {
    name: '--space-12',
    value: '3rem',
    className: 'space-lg',
    usage: 'Separación amplia entre bloques de contenido.',
  },
  {
    name: '--space-15',
    value: '5rem',
    className: 'space-xl',
    usage: 'Espaciado vertical de secciones principales.',
  },
];

function SpacingScale() {
  return (
    <article className="ds-block" aria-labelledby="spacing-title">
      <h3 id="spacing-title">Espaciados</h3>

      <p className="ds-description">
        Los espaciados se definen en rem para mantener escalabilidad y consistencia
        visual en diferentes tamaños de pantalla.
      </p>

      <div className="spacing-list">
        {spaces.map((space) => (
          <div className="spacing-item" key={space.name}>
            <div className="spacing-info">
              <strong>{space.name}</strong>
              <span>{space.value}</span>
              <p>{space.usage}</p>
            </div>

            <div
              className={`spacing-bar ${space.className}`}
              aria-label={`Espaciado ${space.name}`}
            ></div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default SpacingScale;