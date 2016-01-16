import {createStore} from 'redux';
// var Redux = require('redux');

const counter = (state, action) => {
}

const store = createStore(counter);

document.addEventListener('click', () => {
  
});

store.subscribe(() => {
  
});

document.body.innerHTML = store.getState();