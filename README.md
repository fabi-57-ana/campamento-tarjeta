Escena de Paisaje con Carpa

Descripción

Este proyecto es una práctica de HTML y CSS que crea una escena estática de un paisaje al aire libre con una carpa. La escena incluye elementos como montañas, pinos, nubes, un piso, un fuego, piedras, banderines y flores, posicionados en capas utilizando z-index y posicionamiento absoluto para lograr un efecto de profundidad. El diseño es simple y visualmente atractivo, ideal para practicar técnicas de posicionamiento en CSS.

Características

Capas de Profundidad: Utiliza z-index para superponer elementos como montañas, pinos, nubes, y objetos en primer plano (fuego, piedras, banderines).

Posicionamiento Absoluto: Cada elemento está cuidadosamente posicionado en la pantalla para crear una composición equilibrada.

Diseño Visual: Fondo azul claro que simula el cielo, con elementos de diferentes tamaños y posiciones para dar una sensación de paisaje natural.

Estructura Simple: Un contenedor principal que abarca toda la ventana del navegador (100vw y 100vh) para organizar los elementos.

Tecnologías Utilizadas

HTML5: Para la estructura de la escena.

CSS3: Para el estilo y posicionamiento, incluyendo propiedades como position: absolute, z-index, y dimensiones relativas.

Imágenes: Incluye imágenes para los elementos visuales (montañas, pinos, nubes, fuego, piedras, banderines, flores, etc.).

Instrucciones de Configuración

Para ejecutar este proyecto localmente, sigue estos pasos:

Clonar el Repositorio:

git clone https://github.com/tu-usuario/tu-nombre-repositorio.git

Navegar al Directorio del Proyecto:

cd tu-nombre-repositorio

Abrir el Proyecto:

Abre el archivo contenedorDibujo.html en un navegador web (por ejemplo, Chrome, Firefox) haciendo doble clic.

Alternativamente, usa un servidor local como Live Server en VS Code para una mejor experiencia.

Estructura de Archivos (asumida):

tu-nombre-repositorio/
├── css/
│   └── stylos.css
├── img/
│   ├── montaña1.png
│   ├── montaña2.png
│   ├── pinos.png
│   ├── piso.png
│   ├── nube1.png
│   ├── nube2.png
│   ├── naranja.png
│   ├── amarilla.png
│   ├── banderin.png
│   ├── fuego.png
│   └── piedras.png
├── contenedorDibujo.html
└── README.md

Uso

Visualización: Abre el archivo HTML en un navegador para ver la escena completa, con todos los elementos posicionados según el diseño.

Interacción: Actualmente, la escena es estática, pero puedes inspeccionar los elementos en el navegador para entender cómo se superponen las capas.

Responsividad: El diseño está optimizado para una vista de pantalla completa, pero puede requerir ajustes para adaptarse a diferentes tamaños de pantalla.

Mejoras Futuras

Agregar responsividad para que los elementos se ajusten a diferentes tamaños de pantalla usando unidades relativas como vw, vh, o media queries.

Incorporar animaciones CSS, como nubes moviéndose o un fuego parpadeante, para dar dinamismo a la escena.

Mejorar la accesibilidad agregando texto alternativo (alt) a las imágenes en el HTML.

Optimizar las imágenes para reducir el tiempo de carga.

Agregar interactividad con JavaScript, como eventos de clic para mostrar información sobre los elementos.
