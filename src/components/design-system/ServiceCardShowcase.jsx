import { ClipboardList } from 'lucide-react';

function ServiceCardShowcase() {
  return (
    <article className="ds-block" aria-labelledby="service-card-title">
      <h3 id="service-card-title">Tarjeta de servicio</h3>

      <p className="ds-description">
        La tarjeta de servicio se utiliza para describir una funcionalidad
        específica del producto. A diferencia de la tarjeta base, incorpora una
        línea vertical de énfasis en el lado izquierdo.
      </p>

      <div className="component-showcase">
        <article className="service-item ds-service-example">
          <div className="service-icon" aria-hidden="true">
            <ClipboardList size={28} strokeWidth={2.2} />
          </div>

          <h3>Nombre del servicio</h3>

          <p>
            Descripción breve de la funcionalidad, ventaja o módulo ofrecido al
            usuario final.
          </p>
        </article>
      </div>

      <div className="ds-spec-list">
        <h4>Especificación del componente</h4>

        <ul>
          <li>
            <strong>Uso:</strong> servicios, módulos o funcionalidades principales.
          </li>
          <li>
            <strong>Diferenciador visual:</strong> borde lateral izquierdo.
          </li>
          <li>
            <strong>Ícono:</strong> contenedor con fondo verde suave.
          </li>
          <li>
            <strong>Fondo:</strong> <code>var(--color-bg)</code>.
          </li>
          <li>
            <strong>Borde lateral:</strong> <code>var(--color-primary)</code>.
          </li>
          <li>
            <strong>Radio:</strong> <code>var(--radius-md)</code>.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ServiceCardShowcase;