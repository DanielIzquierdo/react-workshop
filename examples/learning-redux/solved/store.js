import {createStore, combineReducers} from 'redux';
import React, {Component} from 'react';
import {render} from 'react-dom';


const findProductInCart = (items, product) => {
  for (var i = items.length - 1; i >= 0; i--) {
    if (items[i].id == product.id)
      return i;
  }
  return -1;
}

const items = (state = [], action) => {
  // console.log("---------------------------------------------------------------")
  // console.log("ejecutando acción:")
  // console.log(action)
  // console.log("---------------------------------------------------------------")
  switch (action.type) {
    case 'ADD_PRODUCT':
      const idx = findProductInCart(state, action.product)
      let item;
      if (idx >= 0) {
        item = Object.assign({}, action.product, { qty: state[idx].qty + 1 })
        return [...state.splice(0, idx),
                item,
                ...state.splice(idx+1)];
      } else {
        item = Object.assign({}, action.product, { qty: 1 })
        return [...state, item];
      }
    case 'REMOVE_PRODUCT':
      let newitems= state.map((item, i) => {
        if (item.id != action.id) {
          return item
        }
      })
      return newitems.filter((i) => (typeof i !== 'undefined'));
    default:
      return state;
  }
}

const visible = (state = false, action) => {
  if (action.tye == 'TOGGLE_CART') {
    return !state
  } else {
    return state
  }
}

const cart = combineReducers({items, visible})
const store = createStore(cart)

const state = {
  'products': [{
    id: 1,
    name: 'Camiseta Amarilla',
    price: 30
  }, {
    id: 2,
    name: 'Camiseta Azul',
    price: 10
  }, {
    id: 3,
    name: 'Zapatos',
    price: 70
  }, {
    id: 4,
    name: 'Zapatos de cristal',
    price: 200
  }]
}

const Products = ({products}) => {
  let list = products.map(product => {
    const handleClick = () => {
      store.dispatch(Object.assign({type:'ADD_PRODUCT'}, {product}))
    }
    return (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    );
  })
  return (
    <div style={{width: '60%', float: 'left'}}>
      {list}
    </div>
  )
}

const Cart = ({items, visible}) => {
  let list = items.map(item => {
    const handleClick = () => {
      store.dispatch({type: 'REMOVE_PRODUCT', id: item.id});
    }
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td align="right">{item.qty}</td>
        <td align="right">${item.price}</td>
        <td align="right">${item.price*item.qty}</td>
        <td>
          <button onClick={handleClick}>
            Remover
          </button>
        </td>
      </tr>
    )
  })
  return (
    <div style={{width: '40%', float: 'right'}}>
      <h2>Carrito</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Subtotal</th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}

const App = ({}) => {
  return (
    <div className="container-fluid">
      <h1>Tienda Pepito</h1>
      <Products products={state.products} />
      <Cart {...store.getState()} />
    </div>
  )
}

render(<App />, document.getElementById('example'));

store.subscribe(() => {
  render(<App />, document.getElementById('example'))
  console.log("---------------------------------------------------------------")
  console.log("Estado actual:")
  console.log(store.getState())
  console.log("---------------------------------------------------------------")
});
