# Taller React Redux

## Aprendiendo Redux

Para empezar instalemos las herramientas necesarias

npm install --save react react-dom babelify babel-preset-react babel-preset-es2015 redux expect
browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js

Utilizaremos `watchify` para que compile automáticamente nuestros ejercicios.

npm install -g watchify
watchify -t [ babelify --presets [ react es2015 ] ] src/exercise_one.js -o build/bundle.js

## Store - Single immutable state tree

Todo el estado de la aplicación está representado en un sólo objeto llamado Store.


## Actions

Para transicionar el estado un Store recibe acciones.

## Reducers

Reciben el estado actual y retornan el nuevo estado.
En los Reducers es donde se implementa la lógica de la aplicación.

Son funciones puras (sin efectos secundarios) que reciben `state` y `action`
como parámetros. Retornan un nuevo estado sin alterar el estado recibido.



## Ejercicio 2 - Stores

Store: `createStore, getState, dispatch, subscribe`

## Ejercicio 3 - Immutability (Arrays)

Recuerden que un Reducer debe ser una función pura y además no afectar el estado
actual, sino generar una nueva versión del estado.

Para operar sobre arreglos debemos utilizar `concat()`, `slice()` o `...spread`

```js
// push, por ejemplo es una operaciones 'destructiva'
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray)
// [1, 2, 3, 4]

### Usando `concat()`

// concat y slice en cambio generan nuevos datos sin alterar el original
let myArray = [1, 2, 3];
let myNewArray = myArray.concat([4]);
console.log(myArray)
// [1, 2, 3]
console.log(myNewArray)
// [1, 2, 3, 4]

### Usando `slice()`

// Para remover un elemento de un arreglo
let myArray = [1, 2, 3];
const index = 2;
myArray.slice(0, index).concat(myArray.slice(index + 1))

// Modificando un elemento del arreglo
let myArray = [1, 2, 3];
const index = 2;
myArray.slice(0, index)
       .concat([myArray[index] * 2])
       .concat(myArray.slice(index + 1))

```

## Ejercicio 4 - Immutability (Objects)

Cuando se trata de objetos podemos utilizar `Object.assign`

```js
let product = {
  name: 'Parrot AR Drone 2.0',
  sku: 'XYZ098-285',
  stock: 1
}

// Alterando directamente al objeto
product.stock = product.stock + 1;

// Utilizando assign
let newProduct = Object.assign({}, product, {stock: product.stock + 1})

```

## Ejercicio 5 - Composición de Reducers



## Ejercicio 6 - combineReducers

Componiendo Reducers utilizando `combineReducers`




Si la instalación de Yeoman falla probablemente necesiten actualizar npm

```
npm update -g npm
npm install -g yo
npm install -g generator-react-webpack-redux
mkdir react-redux && cd $_
yo react-webpack-redux

yo react-webpack-redux:reducer photos

```