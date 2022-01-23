import axios from 'axios';

const SET_PIZZAS = 'SET_PIZZAS';
const SET_IS_LOADED = 'SET_IS_LOADED';

const initialState = {
    items: [],
    isLoaded: false
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return { ...state, items: action.items }
        case SET_IS_LOADED:
            return { ...state, isLoaded: action.bool }
        default:
            return state;
    }
}

export const setPizzasActionCreator = (items) => ({ type: SET_PIZZAS, items });
export const setIsLoadedActionCreator = (bool) => ({ type: SET_IS_LOADED, bool })

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setIsLoadedActionCreator(false));
    axios.get(`https://my-json-server.typicode.com/skripnichenko/pizza_shop_json/pizzas?${
            category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&order=${sortBy.order}`).then(({ data }) => {
        dispatch(setPizzasActionCreator(data));
        dispatch(setIsLoadedActionCreator(true));
    });
}

export default pizzasReducer;