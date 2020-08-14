import {SET_CATEGORY, SET_SORT_BY} from "../types";

export const setSortBy = (name) => ({
    type: SET_SORT_BY,
    payload: name
})

export const setCategory = (index) => ({
    type: SET_CATEGORY,
    payload: index
})