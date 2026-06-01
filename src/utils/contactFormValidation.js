const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(formData) {
  const errors = {};

  const nombre = formData.nombre.trim();
  const correo = formData.correo.trim();
  const hectareas = Number(formData.hectareas);

  if (!nombre) {
    errors.nombre = 'El nombre completo es obligatorio.';
  } else if (nombre.length < 3) {
    errors.nombre = 'El nombre debe tener mínimo 3 caracteres.';
  } else if (!nombreRegex.test(nombre)) {
    errors.nombre = 'El nombre solo debe contener letras y espacios.';
  }

  if (!correo) {
    errors.correo = 'El correo electrónico es obligatorio.';
  } else if (!correoRegex.test(correo)) {
    errors.correo = 'Ingrese un correo electrónico válido.';
  }

  if (!formData.hectareas) {
    errors.hectareas = 'El número de hectáreas es obligatorio.';
  } else if (hectareas < 1 || hectareas > 10000) {
    errors.hectareas = 'Ingrese un valor entre 1 y 10000 hectáreas.';
  }

  if (!formData.fecha) {
    errors.fecha = 'La fecha de demostración es obligatoria.';
  }

  if (!formData.tipoCliente) {
    errors.tipoCliente = 'Seleccione un tipo de cliente.';
  }

  if (formData.servicios.length === 0) {
    errors.servicios = 'Seleccione al menos un servicio de interés.';
  }

  return errors;
}