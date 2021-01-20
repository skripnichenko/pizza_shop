const SORT_BY = 'SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
    category: null,
    sortBy:{
        type: 'popular',
        order: 'desc'
    } 
}

const sorterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY:
            return { ...state, sortBy: action.sortBy }
        case SET_CATEGORY:
            return { ...state, category: action.category }
        default:
            return state;
    }
}

export const sortByActionCreator = (sortBy) => ({ type: SORT_BY, sortBy });
export const setCategoryActionCreator = (category) => ({ type: SET_CATEGORY, category });



export default sorterReducer;