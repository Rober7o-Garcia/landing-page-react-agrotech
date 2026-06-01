const colors = [
  {
    name: 'Primario',
    variable: '--color-primary',
    value: '#166534',
    className: 'color-primary',
    usage: 'Botones principales, logo y elementos destacados.',
  },
  {
    name: 'Primario oscuro',
    variable: '--color-primary-hover',
    value: '#14532d',
    className: 'color-primary-hover',
    usage: 'Hover de botones y fondos verdes oscuros.',
  },
  {
    name: 'Primario suave',
    variable: '--color-primary-soft',
    value: '#dcfce7',
    className: 'color-primary-soft',
    usage: 'Etiquetas, fondos suaves e iconos.',
  },
  {
    name: 'Fondo principal',
    variable: '--color-bg',
    value: '#f8fafc',
    className: 'color-bg',
    usage: 'Fondo general de la página.',
  },
  {
    name: 'Superficie',
    variable: '--color-surface',
    value: '#ffffff',
    className: 'color-surface',
    usage: 'Tarjetas, formularios y contenedores.',
  },
  {
    name: 'Texto principal',
    variable: '--color-text',
    value: '#111827',
    className: 'color-text',
    usage: 'Títulos y textos principales.',
  },
  {
    name: 'Texto secundario',
    variable: '--color-muted',
    value: '#4b5563',
    className: 'color-muted',
    usage: 'Párrafos y textos descriptivos.',
  },
  {
    name: 'Error',
    variable: '--color-error',
    value: '#b91c1c',
    className: 'color-error',
    usage: 'Mensajes de error y validaciones.',
  },
  {
    name: 'Éxito',
    variable: '--color-success',
    value: '#166534',
    className: 'color-success',
    usage: 'Mensajes de confirmación.',
  },
  {
    name: 'Foco accesible',
    variable: '--color-focus',
    value: '#f59e0b',
    className: 'color-focus',
    usage: 'Indicador visual para navegación con teclado.',
  },
];

function ColorPalette() {
  return (
    <article className="ds-block" aria-labelledby="colors-title">
      <h3 id="colors-title">Paleta de colores</h3>

      <p className="ds-description">
        Los colores se gestionan mediante Custom Properties y mantienen contraste
        adecuado entre texto y fondo para favorecer la accesibilidad.
      </p>

      <div className="color-grid">
        {colors.map((color) => (
          <div className="color-card" key={color.variable}>
            <div
              className={`color-sample ${color.className}`}
              aria-label={`Muestra del color ${color.name}`}
            ></div>

            <strong>{color.name}</strong>
            <span>{color.variable}</span>
            <code>{color.value}</code>
            <p>{color.usage}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ColorPalette;