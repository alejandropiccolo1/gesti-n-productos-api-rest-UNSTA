import express from "express";
import bodyParser from "body-parser";
import productosRoutes from "./routes/productos.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(productosRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
