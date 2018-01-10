'use strict'

export const MOVIES_AVAILABLE = 'MOVIES_AVAILABLE'
export const MOVIES_NOT_AVAILABLE = 'MOVIES_NOT_AVAILABLE'

var { AsyncStorage } = require('react-native')

// get movies
export function getMovies (movies) {
    return (dispatch) => {
        dispatch({
            type: MOVIES_AVAILABLE,
            movies: movies
        })
    }
}
