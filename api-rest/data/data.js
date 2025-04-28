let productos = JSON.parse(localStorage.getItem("productos")) || [];

export function guardarProducto(producto) {
  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));
}

export function obtenerProductos() {
  return productos;
}

export function obtenerProductoPorId(id) {
  return productos[id];
}

export function eliminarProducto(id) {
  productos.splice(id, 1);
  localStorage.setItem("productos", JSON.stringify(productos));
}

export function actualizarProducto(id, productoActualizado) {
  productos[id] = productoActualizado;
  localStorage.setItem("productos", JSON.stringify(productos));
}
