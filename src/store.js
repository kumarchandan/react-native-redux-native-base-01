'use strict'

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import reducers from '../src/reducers/index'

// connect store to reducers
export default createStore(reducers, applyMiddleware(thunk))
