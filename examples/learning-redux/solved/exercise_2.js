import {createStore} from 'redux';

const counter = (state = 5, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

document.addEventListener('click', () => {
  store.dispatch({type:'INCREMENT'});
});

store.subscribe(() => {
  document.body.innerHTML = store.getState();
});

document.body.innerHTML = store.getState();

// ES3

// var Redux = require('redux');

// var counter = function(state, action) {
//   if (typeof state === 'undefined') {
//     return 0;
//   };
//   return state;
// }

// var store = createStore(counter);
// console.log(store.getState());