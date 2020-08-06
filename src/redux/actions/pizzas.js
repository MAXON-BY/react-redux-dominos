import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(true))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ``}&_sort=${sortBy}&_order=desc`)
        .then(({data})=>{dispatch(setPizzas(data))})
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload
})