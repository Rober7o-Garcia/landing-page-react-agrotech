import {
  Building2,
  ClipboardList,
  FileSpreadsheet,
  Smartphone,
} from 'lucide-react';

function Services() {
  return (
    <section
      id="servicios"
      className="section services"
      aria-labelledby="services-title"
    >
      <div className="section-title">
        <span>Servicios</span>

        <h2 id="services-title">
          Herramientas pensadas para productores y técnicos
        </h2>
      </div>

      <div className="services-grid">
        <article className="service-item">
          <div className="service-icon" aria-hidden="true">
            <Building2 size={28} strokeWidth={2.2} />
          </div>

          <h3>Gestión de haciendas</h3>

          <p>
            Organiza clientes, fincas, lotes y unidades de trabajo de manera
            estructurada.
          </p>
        </article>

        <article className="service-item">
          <div className="service-icon" aria-hidden="true">
            <ClipboardList size={28} strokeWidth={2.2} />
          </div>

          <h3>Muestreos agrícolas</h3>

          <p>
            Registra mediciones, observaciones y datos técnicos directamente
            desde el sistema.
          </p>
        </article>

        <article className="service-item">
          <div className="service-icon" aria-hidden="true">
            <FileSpreadsheet size={28} strokeWidth={2.2} />
          </div>

          <h3>Exportación de datos</h3>

          <p>
            Prepara reportes para análisis, respaldo o revisión técnica de la
            información recolectada.
          </p>
        </article>

        <article className="service-item">
          <div className="service-icon" aria-hidden="true">
            <Smartphone size={28} strokeWidth={2.2} />
          </div>

          <h3>Interfaz responsive</h3>

          <p>
            Accede desde computadora, tablet o celular con una experiencia visual
            adaptable.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;