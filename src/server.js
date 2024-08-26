process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
// Cargar variables de entorno desde .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Configurar la conexión a MongoDB
const uri = `mongodb+srv://abjesus785:${process.env.DB_PASSWORD}@cluster0.8be9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch((error) => console.error('Error al conectar con MongoDB:', error));

// Rutas básicas
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

