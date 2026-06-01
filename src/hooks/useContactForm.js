import { useState } from 'react';
import { validateContactForm } from '../utils/contactFormValidation';

const initialFormData = {
  nombre: '',
  correo: '',
  hectareas: '',
  fecha: '',
  tipoCliente: '',
  servicios: [],
};

export function useContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [formularioValidado, setFormularioValidado] = useState(false);

  const updateCheckboxValue = ({ value, checked }) => {
    setFormData((currentData) => {
      const updatedServicios = checked
        ? [...currentData.servicios, value]
        : currentData.servicios.filter((servicio) => servicio !== value);

      return {
        ...currentData,
        servicios: updatedServicios,
      };
    });
  };

  const manejarCambio = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      updateCheckboxValue({ value, checked });
      return;
    }

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrores({});
    setFormularioValidado(false);
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    setFormularioValidado(true);

    const validationErrors = validateContactForm(formData);
    const isValidForm = Object.keys(validationErrors).length === 0;

    setErrores(validationErrors);

    if (!isValidForm) {
      setEnviado(false);
      return;
    }

    setEnviado(true);
    resetForm();
  };

  return {
    formData,
    errores,
    enviado,
    formularioValidado,
    manejarCambio,
    manejarEnvio,
  };
}