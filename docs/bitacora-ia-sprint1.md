# Bitácora de IA - Sprint 1: AMARAM TV

Registro de prompts clave utilizados con asistencia de Inteligencia Artificial para el desarrollo y estructuración de la plataforma LMS.

---

### Prompt 1: Creación del Tablero Kanban Sincronizado
* **Herramienta:** Gemini (Asistente de IA)
* **Prompt utilizado:** 
  > *"Necesito un tablero Kanban interactivo con funcionalidad de arrastrar y soltar (drag and drop), conectado en tiempo real a Firebase Firestore para que todo el equipo pueda ver los cambios de las tareas simultáneamente."*
* **Resultado obtenido:** 
  Se generó un archivo HTML (`index.html`) completo con estilos CSS integrados y la lógica de Firebase SDK v8 para sincronizar estados de tarjetas (Backlog, En Progreso, Finalizado) en vivo.
* **Correcciones y Ajustes:** 
  Inicialmente la base de datos bloqueaba la lectura/escritura por las reglas de seguridad. La IA indicó cómo cambiar las reglas en la consola de Firebase a `allow read, write: if true;` para el entorno de desarrollo y se ajustó el ordenamiento por ID.

---

### Prompt 2: Estructuración y Carga Masiva del Backlog (59 Actividades)
* **Herramienta:** Gemini (Asistente de IA) y Python Interpreter
* **Prompt utilizado:** 
  > *"Tengo un archivo Excel con el backlog de 59 actividades del proyecto LMS. Necesito extraerlas todas y estructurarlas en un script para subirlas automáticamente a Firebase."*
* **Resultado obtenido:** 
  Se leyeron las 59 actividades del archivo Excel corporativo y se convirtieron en un arreglo JSON integrado en el código del tablero con un botón de carga inicial única.
* **Correcciones y Ajustes:** 
  Se filtraron los estados iniciales para que todas se ubicaran correctamente en el "Backlog" al ser subidas por primera vez, evitando duplicidades mediante una confirmación de seguridad.

---

### Prompt 3: Maquetación del Catálogo de Cursos con Filtros en Tiempo Real
* **Herramienta:** Gemini (Asistente de IA)
* **Prompt utilizado:** 
  > *"Diseña la página catalogo.html basada estrictamente en la landing page de AMARAM TV (cursos de Aires Mini Split y Smart TVs), que incluya tarjetas profesionales y una barra de búsqueda y filtrado por categoría que funcione instantáneamente."*
* **Resultado obtenido:** 
  Código HTML/CSS/JS estructurado con la paleta de colores de la marca, visualización de precios en pesos colombianos (COP) y un script de filtrado en tiempo real por texto y categoría.
* **Correcciones y Ajustes:** 
  Se ajustaron las rutas de las imágenes locales (`img/foto aires.jpg` y `img/foto tvs.jpg`) para asegurar que coincidieran exactamente con la estructura de carpetas del repositorio.
