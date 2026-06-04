const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(formData) {
  const errors = {};

  const nombre = formData.nombre.trim();
  const correo = formData.correo.trim();
  const hectareas = Number(formData.hectareas);
  const validations = {
    nombre: [
      {
        isInvalid: !nombre,
        message: 'El nombre completo es obligatorio.',
      },
      {
        isInvalid: nombre.length < 3,
        message: 'El nombre debe tener mínimo 3 caracteres.',
      },
      {
        isInvalid: !nombreRegex.test(nombre),
        message: 'El nombre solo debe contener letras y espacios.',
      },
    ],
    correo: [
      {
        isInvalid: !correo,
        message: 'El correo electrónico es obligatorio.',
      },
      {
        isInvalid: !correoRegex.test(correo),
        message: 'Ingrese un correo electrónico válido.',
      },
    ],
    hectareas: [
      {
        isInvalid: !formData.hectareas,
        message: 'El número de hectáreas es obligatorio.',
      },
      {
        isInvalid: hectareas < 1 || hectareas > 10000,
        message: 'Ingrese un valor entre 1 y 10000 hectáreas.',
      },
    ],
    fecha: [
      {
        isInvalid: !formData.fecha,
        message: 'La fecha de demostración es obligatoria.',
      },
    ],
    tipoCliente: [
      {
        isInvalid: !formData.tipoCliente,
        message: 'Seleccione un tipo de cliente.',
      },
    ],
    servicios: [
      {
        isInvalid: formData.servicios.length === 0,
        message: 'Seleccione al menos un servicio de interés.',
      },
    ],
  };

  Object.entries(validations).forEach(([field, rules]) => {
    const failedRule = rules.find((rule) => rule.isInvalid);

    if (failedRule) {
      errors[field] = failedRule.message;
    }
  });

  return errors;
}
