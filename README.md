# ReactJS HTML Injector

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Herramienta para generar contenido HTML dinámico mediante la inserción de variables en plantillas predefinidas.

## Características principales

- Inyección dinámica de variables en HTML
- Preview en tiempo real del resultado
- Interfaz intuitiva con 3 campos básicos
- Diseño responsive incorporado
- Generación de código HTML listo para usar

## Instalación

```bash
git clone https://github.com/hectorflores28/reactjs-html-injector.git
cd reactjs-html-injector
npm install
npm start
```

## Capturas de pantalla

| Menú Principal                   | Formulario Contacto                     |
| -------------------------------- | --------------------------------------- |
| ![Formulario y Preview de Inyeccion de Variables](./public/screenshot.png) | ![Fragmento de HTML "template"](./public/screenshot2.png) |


## Cómo usar

- Completa los campos del formulario
- Haz clic en "Gemerar Preview"
- Visualiza el resultado en el panel de preview
- Copia el código generado directamente desde las herramientas de desarrollador

## Tecnologías utilizadas

- ReactJS
- JavaScript ES6
- HTML5
- CSS3

## Estructura del proyecto

```bash
src/
├── components/      # Componentes reutilizables
├── context/         # Gestión de temas
├── styles/          # Estilos globales
└── App.jsx          # Núcleo de la aplicación
```

## Roadmap

- [ ] Soporte para plantillas personalizadas
- [ ] Validación de datos de entrada
- [ ] Mejora de la interfaz con más opciones de personalización
- [ ] Generación de código HTML avanzado

## Contribución

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. Haz fork del proyecto
2. Crea tu branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Add some feature'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT
