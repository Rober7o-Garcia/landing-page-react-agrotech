import { ClipboardList, BarChart3, MapPinned } from 'lucide-react';

function Benefits() {
  return (
    <section
      id="beneficios"
      className="section"
      aria-labelledby="benefits-title"
    >
      <div className="section-title">
        <span>Beneficios</span>

        <h2 id="benefits-title">Una forma más ordenada de trabajar en el campo</h2>

        <p>
          Centraliza información agrícola importante y reduce errores en los registros manuales.
        </p>
      </div>

      <div className="cards">
        <article className="card">
          <div className="icon" aria-hidden="true">
            <ClipboardList size={32} strokeWidth={2.2} />
          </div>

          <h3>Registro organizado</h3>

          <p>
            Administra haciendas, lotes, unidades de muestreo y datos de plantas desde una interfaz clara.
          </p>
        </article>

        <article className="card">
          <div className="icon" aria-hidden="true">
            <BarChart3 size={32} strokeWidth={2.2} />
          </div>

          <h3>Reportes rápidos</h3>

          <p>
            Genera información útil para analizar el estado de los cultivos y tomar mejores decisiones.
          </p>
        </article>

        <article className="card">
          <div className="icon" aria-hidden="true">
            <MapPinned size={32} strokeWidth={2.2} />
          </div>

          <h3>Control en campo</h3>

          <p>
            Registra datos técnicos, observaciones y ubicación para mantener trazabilidad del trabajo.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Benefits;