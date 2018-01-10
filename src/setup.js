import React, { Component } from 'react'
import { Provider } from "react-redux"

import store from "./store"
import Main from './main'

export default class Setup extends Component {
    //
    render () {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}