# RAH

Este es un proyecto fullstack que utiliza Node.js para el backend y React para el frontend.

## Requisitos previos

- **Node.js** y **npm** instalados en tu máquina.
  - Puedes descargar Node.js desde [aquí](https://nodejs.org/).

## Instalación

Para instalar y ejecutar este proyecto en una nueva máquina, sigue estos pasos:

### 1. Clona el repositorio

Clona el proyecto desde tu repositorio:

```bash
git clone https://github.com/EXTRANFUNEDGAR/RAH
```
### 2. Instalar dependencias

Primero, navega a la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias del backend:
```bash
npm install
```
Luego, ve a la carpeta client y ejecuta el siguiente comando para instalar las dependencias del frontend:
```bash
cd client
npm install
cd ..
```
### 3. Ejecutar el proyecto
Para iniciar el servidor y la aplicación React de manera simultánea, ejecuta el siguiente comando en la carpeta raíz del proyecto:
```bash
npm run dev
```
Este comando iniciará:

El backend en http://localhost:5000

El frontend en http://localhost:3000

Scripts disponibles

Aquí están los comandos disponibles en el proyecto:

Backend y Frontend

npm install: Instala las dependencias tanto del backend como del frontend.
Backend (Node.js)

npm run dev: Inicia el servidor backend en http://localhost:5000.

Frontend (React)

npm run start: Inicia el frontend en modo de desarrollo (React) en http://localhost:3000.

npm run build: Construye la versión optimizada del frontend para producción.

npm run test: Ejecuta las pruebas del frontend (React).

npm run eject: Eyecta la configuración de React para configuraciones avanzadas.

### Notas

Asegúrate de que tanto el frontend como el backend estén corriendo para que la aplicación funcione correctamente.

Si necesitas cambiar el puerto del backend, actualiza el archivo server.js o ajusta el proxy en el frontend.


## Authors

- [@EXTRANFUNEDGAR](https://github.com/EXTRANFUNEDGAR)
- [@JesusEmmanuelDS](https://github.com/JesusEmmanuelDS)