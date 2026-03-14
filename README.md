# Proyecto Node & Express Web App

## Descripción
Este proyecto corresponde a la **Parte 1 del Proyecto Integrador (Módulo 6)** del curso de desarrollo backend.

La aplicación fue desarrollada utilizando **Node.js y Express.js**, permitiendo levantar un servidor web, gestionar rutas y registrar accesos utilizando archivos planos.

El objetivo de esta etapa es construir la base del backend que posteriormente será extendida con base de datos, ORM y una API REST segura.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- Dotenv
- Nodemon
- File System (fs)

---

## Estructura del proyecto
proyecto-node-express
│
├── controllers
│ └── statusController.js
│
├── routes
│ └── statusRoutes.js
│
├── middlewares
│ └── logger.js
│
├── public
│ └── index.html
│
├── logs
│ └── log.txt
│
├── index.js
├── package.json
├── .env
└── README.md
---

## Instalación del proyecto

1. Clonar el repositorio desde GitHub


git clone <TU-REPOSITORIO>


2. Entrar a la carpeta del proyecto


cd proyecto-node-express


3. Instalar dependencias


npm install


---

## Ejecución del servidor

Modo normal:


npm start


Modo desarrollo (recomendado):


npm run dev


El servidor se ejecutará en:


http://localhost:3000


---

## Rutas disponibles

### Ruta principal


GET /


Respuesta:


Servidor funcionando correctamente


---

### Estado del servidor


GET /status


Respuesta:


{
"status": "Servidor activo"
}


---

## Persistencia de datos

Se implementó un sistema simple de registro de accesos utilizando archivos planos.

Cada acceso al servidor queda registrado en:


logs/log.txt


Ejemplo de registro:


Acceso: 14/03/2026 01:30 - Ruta: /


---

## Variables de entorno

El puerto del servidor se configura mediante **dotenv**.

Archivo `.env`


PORT=3000


---

## Justificación técnica

Se eligió **Node.js** junto con **Express.js** por su eficiencia para crear servidores web rápidos y escalables.

La estructura modular del proyecto separa responsabilidades en:

- routes → manejo de rutas
- controllers → lógica de negocio
- middlewares → funciones intermedias
- public → archivos estáticos
- logs → persistencia simple

Esta arquitectura facilita la escalabilidad del proyecto para futuras etapas donde se integrará una base de datos y una API REST.

---

## Autor

Proyecto desarrollado por:

**Carmen Colipe Millaman**