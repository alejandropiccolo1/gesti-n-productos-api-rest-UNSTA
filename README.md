# API REST de Gestión de Productos

## Características de la API REST:
- **GET /productos**: Obtiene todos los productos.
- **POST /productos**: Agrega un nuevo producto.
- **GET /productos/:id** (opcional): Obtiene un producto por su ID.
- **PUT /productos/:id** (opcional): Actualiza un producto.
- **DELETE /productos/:id** (opcional): Elimina un producto.

## Diferencias con la arquitectura de 3 capas:
- En la arquitectura de 3 capas, la lógica y presentación se manejan en el frontend, mientras que en una API REST, el frontend hace peticiones HTTP para interactuar con el backend.
- La arquitectura de 3 capas no tiene un enfoque específico en la comunicación entre servicios, mientras que REST está basado en la comunicación a través de HTTP y recursos.
