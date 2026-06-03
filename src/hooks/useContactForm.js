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
  const [cargando, setCargando] = useState(false);
  const [mensajeRespuesta, setMensajeRespuesta] = useState('');

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

  const manejarEnvio = async (event) => {
    event.preventDefault();
    setFormularioValidado(true);
    setMensajeRespuesta('');

    const validationErrors = validateContactForm(formData);
    const isValidForm = Object.keys(validationErrors).length === 0;

    setErrores(validationErrors);

    if (!isValidForm) {
      setEnviado(false);
      return;
    }

    try {
      setCargando(true);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setEnviado(false);
        setMensajeRespuesta(data.message || 'No se pudo enviar la solicitud');
        return;
      }

      setEnviado(true);
      setMensajeRespuesta(data.message || 'Solicitud enviada correctamente');
      resetForm();
    } catch (error) {
      setEnviado(false);
      setMensajeRespuesta('No se pudo conectar con el servidor');
    } finally {
      setCargando(false);
    }
  };

  return {
    formData,
    errores,
    enviado,
    formularioValidado,
    cargando,
    mensajeRespuesta,
    manejarCambio,
    manejarEnvio,
  };
}