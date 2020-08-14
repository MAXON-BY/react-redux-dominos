import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(true))
    axios
        .get(`/pizzas?${category !== null ? `category=${category}` : ``}&_sort=${sortBy}&_order=desc`)
        .then(
            ({data})=> {
                dispatch(setPizzas(data))
                dispatch(setLoaded(false))
            }
        )
        .catch(error => {
            console.log('Error axios', error)
            dispatch(setLoaded(false))
            dispatch(setError())
        })
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload
})

export const setError = () => ({
    type: "SET_ERROR"
})
