# Proyecto Node & Express - Parte 2 Módulo 7

## Descripción
Aplicación backend desarrollada con Node.js, Express y MySQL para gestionar usuarios mediante operaciones CRUD. El proyecto permite consultar, crear, actualizar y eliminar usuarios desde rutas HTTP, manteniendo la conexión a una base de datos relacional y aplicando validaciones básicas.

## Tecnologías utilizadas
- Node.js
- Express
- MySQL
- dotenv
- Nodemon
- Postman
- XAMPP / phpMyAdmin

## Estructura del proyecto
- `config/` → configuración de conexión a base de datos
- `controllers/` → lógica de las rutas
- `routes/` → definición de endpoints
- `middlewares/` → middleware logger
- `logs/` → archivo de registros
- `public/` → archivos estáticos

## Configuración
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   Crear archivo .env con:PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=proyecto_modulo7
DB_NAME=proyecto_modulo7
Iniciar XAMPP y activar Apache y MySQL.
Crear la base de datos proyecto_modulo7 y la tabla usuarios.

Ejecutar el proyecto:

npm run dev
Tabla utilizada
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);
Rutas implementadas
GET /usuarios → listar usuarios
POST /usuarios → crear usuario
PUT /usuarios/:id → actualizar usuario
DELETE /usuarios/:id → eliminar usuario
Pruebas realizadas

Se realizaron pruebas con Postman para:

lectura de usuarios
creación de usuarios
actualización de usuarios
eliminación de usuarios
validación cuando un usuario no existe
Decisiones técnicas

Se utilizó mysql2 para conectarse a MySQL por su integración sencilla con Node.js.
Las credenciales de conexión se guardaron en variables de entorno con dotenv para evitar exponer datos sensibles en el código.
Se aplicaron validaciones para comprobar existencia del usuario antes de actualizar o eliminar.
Se excluyó la contraseña en la respuesta de la ruta GET para no exponer información sensible.

Autor

Carmen Colipe Millaman