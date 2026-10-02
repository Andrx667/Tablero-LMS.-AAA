# Contexto del Proyecto: InstalaPro Academy (LMS + CRM)

Este documento define la ruta tecnológica, la identidad de marca y la estructura de archivos que utilizará el equipo para desarrollar la plataforma de cursos virtuales.

## 1. Identidad de Marca
* **Nombre del Proyecto:** InstalaPro Academy
* **Nicho:** Cursos de formación técnica rápida (Instalación de Aires Acondicionados y Smart TVs).
* **Propósito:** Brindar a principiantes y técnicos en formación los conocimientos prácticos necesarios para iniciar su propio negocio de instalaciones a domicilio.
* **Tono de Comunicación:** Profesional, directo, práctico y motivador.

## 2. Ruta Tecnológica (Tech Stack)
Para garantizar un desarrollo ágil y sin costos de servidores iniciales, el proyecto utilizará la siguiente arquitectura:

* **Frontend (Interfaz de Usuario):** HTML5, CSS3 (Variables y Flexbox/Grid) y Vanilla JavaScript (sin frameworks pesados).
* **Backend y Base de Datos (BaaS):** Firebase (Authentication para usuarios y Firestore para la base de datos NoSQL de cursos, usuarios y progreso).
* **Alojamiento (Hosting):** GitHub Pages (despliegue estático gratuito).
* **Pagos y Automatización:** Integración con Pasarela de Pagos mediante webhooks conectados a Google Apps Script.
* **Gestión de Proyecto:** GitHub Projects / Tablero Kanban propio y metodologías ágiles (Scrum).

## 3. Estructura de Carpetas y Archivos
La arquitectura del repositorio está organizada de la siguiente manera para separar responsabilidades:

```text
/ (Raíz del proyecto)
│
├── /css
│   └── estilos.css           # Hoja de estilos global y variables de marca
├── /js
│   ├── datos.js              # Base de datos local (simulación inicial)
│   └── firebase-config.js    # Credenciales de conexión a Firebase
├── /img
│   └── readme.txt            # Carpeta para logotipos y portadas de cursos
├── /backend
│   └── api.js                # Lógica para conexiones externas (ej. pasarela)
├── /docs
│   ├── equipo.md             # Roles y miembros del equipo
│   └── cursos.md             # Inventario de cursos prediseñados
│
├── index.html                # Landing page principal
├── catalogo.html             # Lista de cursos disponibles con filtros
├── detalle.html              # Información específica de un curso y botón de compra
├── login.html                # Registro e inicio de sesión de usuarios
├── mis-cursos.html           # Panel del estudiante y barra de progreso
├── leccion.html              # Reproductor de video y material de estudio
└── admin.html                # Panel CRM y gestión para el administrador
