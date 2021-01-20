const ADD_PIZZAS_TO_CART = 'ADD_PIZZAS_TO_CART';
const INCREASE_PIZZAS = 'INCREASE_PIZZAS';
const DECREASE_PIZZAS = 'DECREASE_PIZZAS';
const REMOVE_PIZZAS = 'REMOVE_PIZZAS';
const CLEAR_CART = 'CLEAR_CART';

const initialState = {
  items: {},
  totalPrice: 0,
  totalPizzas: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZAS_TO_CART: {
      const currentItems = !state.items[action.pizzas.id]
        ? [action.pizzas]
        : [...state.items[action.pizzas.id].items, action.pizzas];
      const newItems = {
        ...state.items,
        [action.pizzas.id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems),
        },
      };

      const totalPizzas = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalPizzas,
        totalPrice,
      }
    }
    case REMOVE_PIZZAS: {
      const newItems = {
        ...state.items
      }
      const itemCount = newItems[action.id].items.length;
      const itemPrice = newItems[action.id].totalPrice;

      delete newItems[action.id];
      return {
        ...state,
        items: newItems,
        totalPizzas: state.totalPizzas - itemCount,
        totalPrice: state.totalPrice - itemPrice
      }
    }
    case INCREASE_PIZZAS: {
      const pizzasItems = [
        ...state.items[action.id].items,
        state.items[action.id].items[0]
      ];
      const newItems = {
        ...state.items,
        [action.id]: {
          items: pizzasItems,
          totalPrice: getTotalPrice(pizzasItems)
        }
      }
      const totalPizzas = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalPizzas,
        totalPrice
      }
    }
    case DECREASE_PIZZAS: {
      const oldItems = state.items[action.id].items;
      const newObjItems = oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.id]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }
      const totalPizzas = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      return {
        ...state,
        items: newItems,
        totalPizzas,
        totalPrice
      }
    }
    case CLEAR_CART: {
      return { items: {}, totalPizzas: 0, totalPrice: 0 }
    }

    default:
      return state;
  }
}

export const addPizzasToCartActionCreator = (pizzas) => ({ type: ADD_PIZZAS_TO_CART, pizzas });
export const increasePizzasActionCreator = (id) => ({ type: INCREASE_PIZZAS, id });
export const decreasePizzasActionCreator = (id) => ({ type: DECREASE_PIZZAS, id });
export const removePizzasActionCreator = (id) => ({ type: REMOVE_PIZZAS, id });
export const clearCartActionCreator = () => ({ type: CLEAR_CART })

export default cartReducer;