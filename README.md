# Proyecto Node & Express - Parte 3 Módulo 8

## Descripción
API RESTful desarrollada con Node.js, Express y MySQL. El proyecto expone la lógica del sistema mediante endpoints REST, incorpora autenticación con JWT, subida de archivos y protección de rutas.

## Tecnologías utilizadas
- Node.js
- Express
- MySQL
- mysql2
- dotenv
- jsonwebtoken
- multer
- Postman
- XAMPP / phpMyAdmin

## Instalación
1. Clonar el repositorio
2. Ejecutar:
   npm install
3. Configurar archivo `.env`
4. Iniciar XAMPP y activar Apache y MySQL
5. Ejecutar:
   npm run dev

## Variables de entorno
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=proyecto_modulo7
JWT_SECRET=clave_secreta_123
JWT_EXPIRES=1h
Endpoints
POST /login
POST /usuarios
GET /usuarios (protegida)
PUT /usuarios/:id (protegida)
DELETE /usuarios/:id (protegida)
POST /upload (protegida)
Autenticación

Para autenticarse se debe consumir:

POST /login

Body:

{
  "email": "admin@email.com",
  "password": "1234"
}

La respuesta entrega un token JWT que debe enviarse en las rutas protegidas mediante el header:

Authorization: Bearer TU_TOKEN
Subida de archivos

La ruta POST /upload permite subir imágenes JPG, JPEG, PNG y archivos PDF.
Los archivos se almacenan en la carpeta uploads/.

Para probar la subida:

usar form-data
clave: archivo
tipo: File
Estructura del proyecto
config/ → configuración de base de datos
controllers/ → lógica de negocio
routes/ → endpoints
middlewares/ → logger y autenticación JWT
public/ → vistas HTML
uploads/ → archivos subidos
Decisiones técnicas
Se separaron rutas, controladores y middlewares para mejorar organización y escalabilidad.
Se protegieron rutas sensibles para evitar acceso no autorizado.
Se utilizó JWT para autenticación basada en tokens.
Se utilizó multer para manejar subida de archivos de forma controlada.
Se mantuvo la conexión a MySQL para persistencia de datos.
Autor

Carmen Colipe Millaman