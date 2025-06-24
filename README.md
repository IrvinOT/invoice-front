# InvoiceFront

Este proyecto es el frontend de una prueba técnica, desarrollado en Angular 14.2.13. Forma parte de una solución dividida en dos proyectos:

- **Backend:** API desarrollada en Ruby (ver repositorio correspondiente)
- **Frontend:** Esta aplicación Angular, que consume los servicios del backend para mostrar y gestionar facturas.

## Descripción

La aplicación permite consultar facturas filtrando por fecha inicial y final, visualizar los resultados en una tabla paginada y ver detalles relevantes de cada factura. Es ideal para pruebas técnicas donde se requiere integración entre frontend y backend.

## Requisitos previos

- Node.js (v14)
- Angular CLI (`npm install -g @angular/cli`)
- Tener el backend Ruby corriendo y accesible (ver instrucciones en el repositorio del backend)

## Instalación y ejecución

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm start
   ```
3. Abre `http://localhost:4200/` en tu navegador.

## Notas

- Asegúrate de tener el backend Ruby corriendo antes de usar la app.
- Para dudas sobre la API, revisa la documentación del backend.
