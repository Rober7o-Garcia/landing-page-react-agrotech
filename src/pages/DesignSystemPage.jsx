import ColorPalette from '../components/design-system/ColorPalette';
import TypographyScale from '../components/design-system/TypographyScale';
import SpacingScale from '../components/design-system/SpacingScale';
import ButtonShowcase from '../components/design-system/ButtonShowcase';
import CardShowcase from '../components/design-system/CardShowcase';
import FormShowcase from '../components/design-system/FormShowcase';
import HeroPanelShowcase from '../components/design-system/HeroPanelShowcase';
import ServiceCardShowcase from '../components/design-system/ServiceCardShowcase';

function DesignSystemPage() {
  return (
    <main>
      <section
        className="section design-system"
        aria-labelledby="design-system-title"
      >
        <div className="section-title">
          <span>Design System</span>

          <h1 id="design-system-title">Sistema visual de AgroTech Solutions</h1>

          <p>
            Esta página documenta los colores, tipografías, espaciados, botones,
            tarjetas y campos de formulario utilizados en la landing page.
          </p>
        </div>

        <ColorPalette />
        <TypographyScale />
        <SpacingScale />
        <ButtonShowcase />
        <CardShowcase />
        <ServiceCardShowcase />
        <HeroPanelShowcase />
        <FormShowcase />
      </section>
    </main>
  );
}

export default DesignSystemPage;