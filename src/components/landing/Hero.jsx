function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <span className="tag">Tecnología para el campo</span>

        <h1>Optimiza la gestión agrícola con soluciones digitales inteligentes</h1>

        <p>
            AgroTech Solutions ayuda a productores, haciendas y técnicos agrícolas a organizar
            datos, controlar muestreos y mejorar la toma de decisiones desde una
            plataforma moderna, rápida y fácil de usar.
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn btn-primary">
            Solicitar información
          </a>

          <a href="#servicios" className="btn btn-secondary">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="hero-card">
        <h2>Panel AgroTech Solutions</h2>

        <div className="metric">
          <span>Haciendas registradas</span>
          <strong>128</strong>
        </div>

        <div className="metric">
          <span>Muestreos realizados</span>
          <strong>2.450</strong>
        </div>

        <div className="metric">
          <span>Reportes generados</span>
          <strong>980</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;