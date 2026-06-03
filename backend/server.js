const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Backend del formulario de contacto funcionando correctamente'
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const {
      nombre,
      correo,
      hectareas,
      fecha,
      tipoCliente,
      servicios
    } = req.body;

    if (
      !nombre ||
      !correo ||
      !hectareas ||
      !fecha ||
      !tipoCliente ||
      !servicios ||
      !Array.isArray(servicios) ||
      servicios.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son obligatorios'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
      return res.status(400).json({
        success: false,
        message: 'El correo electrónico no tiene un formato válido'
      });
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"AgroTech Solutions" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: correo,
      subject: 'Nueva solicitud de demostración - AgroTech Solutions',
      html: `
        <h2>Nueva solicitud desde la landing page</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Número de hectáreas:</strong> ${hectareas}</p>
        <p><strong>Fecha estimada para la demostración:</strong> ${fecha}</p>
        <p><strong>Tipo de cliente:</strong> ${tipoCliente}</p>
        <p><strong>Servicios de interés:</strong> ${servicios.join(', ')}</p>
      `
    });

    res.status(200).json({
      success: true,
      message: 'Solicitud enviada correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al enviar la solicitud'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`);
});