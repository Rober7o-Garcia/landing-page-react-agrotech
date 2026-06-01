import { Sprout } from 'lucide-react';

function CardShowcase() {
  return (
    <article className="ds-block" aria-labelledby="cards-title">
      <h3 id="cards-title">Tarjeta base</h3>

      <p className="ds-description">
        La tarjeta base se utiliza para presentar bloques de información breve,
        como beneficios, características o elementos destacados. Mantiene una
        estructura simple: ícono, título y descripción.
      </p>

      <div className="component-showcase">
        <article className="card ds-card-example">
          <div className="icon" aria-hidden="true">
            <Sprout size={32} strokeWidth={2.2} />
          </div>

          <h3>Nombre del beneficio</h3>

          <p>
            Descripción breve del beneficio o característica principal del
            servicio presentado.
          </p>
        </article>
      </div>

      <div className="ds-spec-list">
        <h4>Especificación del componente</h4>

        <ul>
          <li>
            <strong>Uso:</strong> beneficios, características y bloques informativos.
          </li>
          <li>
            <strong>Estructura:</strong> ícono, título y texto descriptivo.
          </li>
          <li>
            <strong>Fondo:</strong> <code>var(--color-surface)</code>.
          </li>
          <li>
            <strong>Borde:</strong> <code>var(--color-border-soft)</code>.
          </li>
          <li>
            <strong>Radio:</strong> <code>var(--radius-lg)</code>.
          </li>
          <li>
            <strong>Sombra:</strong> <code>var(--shadow-card)</code>.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default CardShowcase;