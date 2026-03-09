# Introducción a Canvas 2D con Programación Orientada a Objetos

Este proyecto es una demostración educativa de los conceptos fundamentales de la Programación Orientada a Objetos (POO) utilizando HTML5 Canvas y JavaScript.

## Descripción

El proyecto muestra tres ejemplos prácticos de cómo crear y manipular objetos gráficos 2D utilizando clases en JavaScript:

1. **Objeto 2D**: Demuestra la creación básica de un círculo utilizando una clase con constructor y método de renderizado.
2. **Objeto con Random**: Muestra un círculo con posición aleatoria dentro del canvas.
3. **Múltiples objetos**: Crea un array de círculos con posiciones, tamaños y colores aleatorios.

## Características

- Implementación de POO con clases ES6
- Renderizado gráfico en HTML5 Canvas
- Diseño moderno con Bootstrap 5
- Efectos visuales (sombras, gradientes)
- Diseño responsivo

## Estructura del Proyecto

```
intro-poo-canvas/
├── index.html              # Archivo principal HTML
├── assets/
│   ├── css/
│   │   └── styles.css     # Estilos personalizados
│   ├── img/
│   │   └── favicon.png    # Favicon del proyecto
│   └── js/
│       └── main.js        # Lógica JavaScript con POO
└── README.md              # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3**: Estilos y diseño moderno
- **JavaScript (ES6+)**: Lógica con Programación Orientada a Objetos
- **Bootstrap 5.0.2**: Framework CSS para diseño responsivo

## Clase Circle (Ejemplo de POO)

```javascript
class Circle {
  // Constructor que inicializa los valores del objeto
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  // Método para renderizar el círculo en el canvas
  draw(context) {
    // Código de renderizado...
  }
}
```

## Cómo Usar

1. Clonar o descargar el repositorio
2. Abrir el archivo `index.html` en cualquier navegador web moderno
3. Observar los tres canvas con diferentes ejemplos de objetos 2D

## Conceptos POO Demonstrados

- **Clases**: Plantilla para crear objetos
- **Constructor**: Método especial para inicializar objetos
- **Métodos**: Funciones asociadas a una clase
- **Propiedades**: Variables que almacenan el estado del objeto
- **Instanciación**: Creación de objetos a partir de una clase


---

## 👨‍💻 Autor

**Jean Samuel Laroque**

Proyecto Académico – Graficación

Profesor:  
**M.C. Víctor Manuel Pinedo Fernández**

---

## 📄 Licencia

© 2026 - Todos los derechos reservados

Este es un proyecto educativo de código abierto.

*Documentación creada con fines educativos - Intro Canvas 2D con POO*

