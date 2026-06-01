const typographyItems = [
  {
    label: 'Título principal',
    className: 'type-hero',
    text: 'Gestión agrícola inteligente',
    variable: 'clamp(3.2rem, 5vw, var(--text-4xl))',
  },
  {
    label: 'Título de sección',
    className: 'type-section',
    text: 'Herramientas para productores',
    variable: 'clamp(1.9rem, 8vw, 2.6rem)',
  },
  {
    label: 'Título de tarjeta',
    className: 'type-card',
    text: 'Registro organizado',
    variable: 'var(--text-lg)',
  },
  {
    label: 'Texto base',
    className: 'type-body',
    text: 'Texto utilizado para párrafos informativos con tamaño mínimo de 1rem, interlineado amplio y ancho limitado para mejorar la lectura.',
    variable: 'var(--text-base)',
  },
];

function TypographyScale() {
  return (
    <article className="ds-block" aria-labelledby="typography-title">
      <h3 id="typography-title">Tipografía</h3>

      <p className="ds-description">
        La landing utiliza una fuente sans-serif, tamaño base de 1rem y una
        jerarquía visual clara para títulos, subtítulos y párrafos.
      </p>

      <div className="type-scale">
        {typographyItems.map((item) => (
          <div className="type-item" key={item.label}>
            <span className="type-label">{item.label}</span>
            <p className={item.className}>{item.text}</p>
            <code>{item.variable}</code>
          </div>
        ))}
      </div>
    </article>
  );
}

export default TypographyScale;