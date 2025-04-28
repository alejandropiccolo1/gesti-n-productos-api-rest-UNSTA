import { guardarProducto, obtenerProductos, obtenerProductoPorId, eliminarProducto, actualizarProducto } from "../data/data.js";

export function agregarProducto(producto) {
  guardarProducto(producto);
}

export function listarProductos() {
  return obtenerProductos();
}

export function obtenerProducto(id) {
  return obtenerProductoPorId(id);
}

export function borrarProducto(id) {
  eliminarProducto(id);
}

export function modificarProducto(id, productoActualizado) {
  actualizarProducto(id, productoActualizado);
}
