import thunkMiddleware from 'redux-thunk';
import pizzasReducer from './pizzas-reducer';
import sorterReducer from './sorter-reducer';
import { compose } from 'redux';
import cartReducer from './cart-reducer';

const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    pizzas: pizzasReducer,
    sorter: sorterReducer,
    cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;