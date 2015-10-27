# Taller introductorio a ReactJS

Este es un taller introductorio a los conceptos de ReactJS.
Desarrollamos una aplicación de album de fotos siguiendo la metodología 
expuesta en la guía
[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

# ¡Manos a la obra!

## Todo empieza con una versión de borrador

Nuestro "gran" dibujante de interfaces ha dibujado esta interfaz para nosotros

![alt tag](https://raw.github.com/jplaza/react-workshop/master/res/hand-made-mock-1.png)

Asumamos que el servidor nos envía la información de las fotos y los albumes
de esta manera:

```js

var photos = [
  {
    file: "1.jpg",
    description: "Parque",
    created: "2012-09-04",
    album: "Londres"
  }, {
    file: "2.jpg",
    description: "Casa",
    created: "2012-09-04",
    album: "Londres"
  }, {
    file: "3.jpg",
    description: "Carro",
    created: "2012-09-04",
    album: "Londres"
  }, {
    file: "4.jpg",
    description: "Perro",
    created: "2012-09-04",
    album: "Londres"
  }, {
    file: "5.jpg",
    description: "Carro",
    created: "2012-09-04",
    album: "Guayaquil"
  },{
    file: "6.jpg",
    description: "Paseo",
    created: "2012-09-04",
    album: "Guayaquil"
  }, {
    file: "7.jpg",
    description: "Abuela",
    created: "2012-09-04",
    album: "Guayaquil"
  }, {
    file: "8.jpg",
    description: "Edificio",
    created: "2012-09-04",
    album: "Guayaquil"
  }, {
    file: "9.jpg",
    description: "Viaje",
    created: "2012-09-04",
    album: "Nueva York"
  }, {
    file: "10.jpg",
    description: "Viaje",
    created: "2012-09-04",
    album: "Nueva York"
  }, {
    file: "11.jpg",
    description: "Viaje",
    created: "2012-09-04",
    album: "Nueva York"
  }
];

var albums = [
  {name: "Guayaquil", cover_photo: "5.jpg"},
  {name: "Londres", cover_photo: "1.jpg"},
  {name: "Nueva York", cover_photo: "9.jpg"}
]

```

## Divide tu UI en componentes.

A partir del borrador de diseño identificamos los componentes de la aplicación,
aplicando el principio de (_single responsibility_)[https://en.wikipedia.org/wiki/Single_responsibility_principle]
y aprovechando el modelo de datos ya definido amablemente por el programador del
JSON API ficticio.

![alt tag](https://raw.github.com/jplaza/react-workshop/master/res/hand-made-mock.png)

Identificamos 7 componentes en nuestra aplicación de fotos, todos marcados en 
cada uno de los recuadros de colores en la imagen anterior.

* `PhotoViewer`: Componente principal que contiene al resto.
* `Navbar`: Barra lateral que lista los _albums_.
* `NavItem`: Servirá de filtro para las _photos_ listadas.
* `PhotoList`: Contenedor de contenido principal donde se listan las _photos_.
* `AlbumTitle`: Título de la sección, en nuestro ejemplo para el album seleccionado.
* `ListToggle`: Control que permite seleccionar el modo del listado, lista o cuadrícula.
* `Photo`: Mostrará una foto. Utilizada por `PhotoList`.

La imagen define claramente la jerarquía de los componentes. Esto nos permitirá
más adelante, decidir en que orden queremos implementar los componentes.

## Implementación de componentes.

Puesto que es una pequeña aplicación de ejemplo resulta sencillo implementar los
componentes del más grande al más pequeño, esto nos ayuda a darle un contexto a
cada uno y nos permite captar rapidamente la escencia detrás de implementar nuestras
aplicaciones con componentes React.

Después de implementar nuestros componentes con los datos de ejemplo, nuestra
aplicación luce así:

![alt tag](https://raw.github.com/jplaza/react-workshop/master/res/static.png)

Si quieres probar lo que promete React, te invito a abrir el archivo `js/app.js`
y cambiar el listado de `albums` aumentando un entrada al arreglo. Guarda el 
archivo, abre el `index.html` en Firefox para ver como cambia en comparación con
la foto anterior.

## Identificando el estado de nuestra UI.

El estado es cualquier cosa que cambie en el tiempo y que no pueda ser calculada
con la información que tenemos disponible. En nuestro caso podemos ver que lo único 
que necesitamos mantener es el album seleccionado y el tipo del listado de las
fotos.

Siguiendo las recomendaciones, ponemos el estado en los nodos más altos de la 
jerarquía. Así poderemos manipular el estado en un sólo lugar.

# Por hacer

* Utilizar (browserify)[http://browserify.org/] o (webpack)[https://webpack.github.io/]
para compilar el JSX
* Agregar ejemplo de requerimiento AJAX para obtener información del servidor.
* Abrir foto en pantalla completa en nueva ruta.

# Licencia

Todo lo contenido en este repositorio tiene licencia MIT, si no se especifica lo
contrario

MIT © Juan Antonio Plaza, (Datil)[https://github.com/datil].

