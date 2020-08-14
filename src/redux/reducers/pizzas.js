import {SET_ERROR, SET_LOADED, SET_PIZZAS} from "../types";

const initState = {
    items: [],
    isLoaded: true,
    error: false
}

const pizzas = (state = initState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
            }

        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }

        case SET_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

export default pizzas