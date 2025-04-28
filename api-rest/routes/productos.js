import express from "express";
import { agregarProducto, listarProductos, obtenerProducto, borrarProducto, modificarProducto } from "../logic/logic.js";

const router = express.Router();

// Obtener productos
router.get("/productos", (req, res) => {
  const productos = listarProductos();
  res.json(productos);
});

// Agregar producto
router.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;
  const nuevoProducto = { nombre, precio };
  agregarProducto(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Obtener un producto por ID (opcional)
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  const producto = obtenerProducto(id);
  if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(producto);
});

// Actualizar un producto por ID (opcional)
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  const productoActualizado = { nombre, precio };
  modificarProducto(id, productoActualizado);
  res.json(productoActualizado);
});

// Eliminar un producto por ID (opcional)
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  borrarProducto(id);
  res.status(204).send();
});

export default router;
