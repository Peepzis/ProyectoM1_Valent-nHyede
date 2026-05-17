# 🎨 Generador de Paletas de Colores

Proyecto web desarrollado con **HTML**, **CSS** y **JavaScript** que permite generar paletas de colores aleatorias utilizando el modelo de color **HSL** y mostrando también su equivalente en **HEX**.

---

## 📌 Características

- Generación aleatoria de colores.
- Generación automática de paletas al iniciar.
- Conversión automática de HSL a HEX.
- Selector de cantidad de paletas:
  - 6 paletas
  - 8 paletas
  - 9 paletas
- Selector de formato de visualización:
  - HEX
  - HSL
  - HEX + HSL
- Diseño moderno con fondo degradado.
- Toast visual al generar nuevos colores.
- Interfaz responsive y simple de usar.

---

## 🚀 Funcionamiento
1. Al cargar la página se generan automáticamente 6 paletas.
2. El usuario selecciona:
   - cantidad de paletas
   - formato de código a visualizar
3. Presiona el botón para generar nuevos colores.
4. El sistema:
   - genera colores HSL aleatorios
   - convierte HSL a HEX
   - renderiza dinámicamente las cajas
   - muestra el formato seleccionado
5. Se muestra una notificación visual (toast).

---
## 📖 Manual de Uso
El usuario puede seleccionar la cantidad de paletas a generar (6, 8 o 9)
-El formato de código a mostrar (HEX, HSL o ambos).
-Al hacer clic en el botón "Presióname", se generarán nuevas paletas de colores aleatorias y se mostrarán en la interfaz según las opciones seleccionadas.

---
## 🖼️ Interfaz
- Botón de generación
- Selector de cantidad
- Selector de formato de color
- Contenedor dinámico
- Toast animado
---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript Vanilla

---

## 📂 Estructura del proyecto

```bash
Proyecto-Test/
│
├── index.html
│
├── CSS/
│   └── styles.css
│
└── JAVA/
    └── script.js
