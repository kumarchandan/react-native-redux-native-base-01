'use strict'
import { combineReducers } from "redux"

import { MOVIES_AVAILABLE, MOVIES_NOT_AVAILABLE } from "../actions/index"

let intialState = {
    movies: [],
    loading: true
}

const moviesReducer = (state = intialState, action) => {
    //
    switch (action.type) {
        case MOVIES_AVAILABLE:
            return Object.assign({}, state, { movies: action.movies, loading: false })
        case MOVIES_NOT_AVAILABLE:
            return Object.assign({}, state, { movies: [], loading: false })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    moviesReducer
})

export default rootReducer
