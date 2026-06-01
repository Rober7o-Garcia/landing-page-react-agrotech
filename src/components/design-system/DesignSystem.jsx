import ColorPalette from './ColorPalette';
import TypographyScale from './TypographyScale';
import SpacingScale from './SpacingScale';
import ButtonShowcase from './ButtonShowcase';
import CardShowcase from './CardShowcase';
import FormShowcase from './FormShowcase';

function DesignSystem() {
  return (
    <section
      id="design-system"
      className="section design-system"
      aria-labelledby="design-system-title"
    >
      <div className="section-title">
        <span>Design System</span>

        <h2 id="design-system-title">Sistema visual de AgroTech Solutions</h2>

        <p>
          Esta sección presenta los colores, tipografías, espaciados, botones,
          tarjetas y campos de formulario utilizados en la landing page.
        </p>
      </div>

      <ColorPalette />
      <TypographyScale />
      <SpacingScale />
      <ButtonShowcase />
      <CardShowcase />
      <FormShowcase />
    </section>
  );
}

export default DesignSystem;