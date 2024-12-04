const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde el backend" });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
