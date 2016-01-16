import expect from 'expect';
// var expect = require('expect');

function counter (state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

// El estado inicial debe ser 0
expect(counter()).toEqual(0)

// Debe retornar valor_actual + 1 si recibe una acción tipo INCREMENT
expect(counter(1, {type: 'INCREMENT'})).toEqual(2)

// Debe retornar valor_actual - 1 si recibe una acción tipo DECREMENT
expect(counter(3, {type: 'DECREMENT'})).toEqual(2)

console.log("¡Viva! Todas las pruebas pasaron")