function HeroPanelShowcase() {
  return (
    <article className="ds-block" aria-labelledby="hero-panel-title">
      <h3 id="hero-panel-title">Panel de métricas</h3>

      <p className="ds-description">
        El panel de métricas se utiliza para destacar indicadores clave dentro
        de una sección principal. Su diseño emplea fondo oscuro, contraste alto
        y tarjetas internas para separar cada dato.
      </p>

      <div className="component-showcase">
        <aside className="hero-card ds-panel-example" aria-label="Ejemplo de panel de métricas">
          <h2>Panel de indicadores</h2>

          <div className="metric">
            <span>Indicador principal</span>
            <strong>128</strong>
          </div>

          <div className="metric">
            <span>Indicador secundario</span>
            <strong>2.450</strong>
          </div>
        </aside>
      </div>

      <div className="ds-spec-list">
        <h4>Especificación del componente</h4>

        <ul>
          <li>
            <strong>Uso:</strong> resumen de métricas, indicadores o estadísticas.
          </li>
          <li>
            <strong>Contenedor:</strong> fondo con gradiente verde oscuro.
          </li>
          <li>
            <strong>Texto:</strong> blanco sobre fondo oscuro para alto contraste.
          </li>
          <li>
            <strong>Items internos:</strong> bloques translúcidos con borde suave.
          </li>
          <li>
            <strong>Sombra:</strong> <code>var(--shadow-hero)</code>.
          </li>
          <li>
            <strong>Radio:</strong> <code>var(--radius-xl)</code>.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default HeroPanelShowcase;