# Acta de Revisión y Retrospectiva - Sprint 1: AMARAM TV

* **Fecha de cierre del Sprint:** Octubre de 2026
* **Proyecto:** Plataforma LMS & CRM · AMARAM TV
* **Responsable:** Scrum Master

---

## 1. Revisión del Sprint (Demo)
Se realizó la demostración oficial del incremento del producto ante la clase, validando los siguientes entregables desplegados en producción (GitHub Pages):
* **Mapa del sitio y wireframes** de las 5 pantallas clave documentados en `/docs`.
* **Guía de estilo de la marca** estructurada mediante variables CSS (`estilos.css`).
* **Landing Page principal** con secciones de header, hero, beneficios, planes de estudio en COP y pasarela visual de cursos.
* **Catálogo de cursos interactivo** con filtrado en tiempo real por categoría y texto.
* **Formulario de captura de prospectos (CRM)** con validación de campos obligatorios y la respectiva casilla de autorización de tratamiento de datos personales.

---

## 2. Retrospectiva del Sprint (Dinámica de las 3 P's)

### 🟢 ¿Qué debemos MANTENER? (Lo que funcionó muy bien)
* El uso de inteligencia artificial como copiloto de código y estructuración, lo cual aceleró drásticamente la maquetación inicial.
* La organización estricta de la arquitectura de carpetas (`/css`, `/docs`, `/js`) desde el día uno.
* La sincronización temprana de GitHub Pages para validar los cambios directamente en dispositivos móviles en tiempo real.

### 🟡 ¿Qué debemos MEJORAR? (Los tropiezos o cuellos de botella)
* La coordinación en los tiempos de integración de archivos estáticos individuales para evitar cruces en el repositorio principal.
* La optimización previa de las dimensiones de las imágenes locales de los cursos para agilizar la carga del frontend.

### 🔵 ¿Qué debemos PROBAR en el siguiente Sprint? (Nuevas acciones)
* Iniciar las pruebas de conexión con Firebase Authentication y Firestore tan pronto como comience el Sprint 2 para anticipar cualquier bloqueo en las reglas de seguridad.
* Dividir las tareas de maquetación avanzada en subtareas más pequeñas dentro del tablero Kanban.
