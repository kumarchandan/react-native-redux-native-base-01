import * as Expo from 'expo'
import React from 'react'
import { AsyncStorage } from "react-native"
import { Router, Scene, Reducer } from "react-native-router-flux"
import { connect } from "react-redux"
import { getMovies } from "./actions/index"

import Home from "./components/Home"
import Profile from "./components/Profile"

//
const reducerCreate = params => {
    const defaultReducer = new Reducer(params)
    return (state, action) => {
        return defaultReducer(state, action)
    }
}

// Root Class - All Screens navigates from here
class Main extends React.Component {
    //
    constructor () {
        super()
        this.state = {
            isReady: false
        }
    }
    //
    componentWillMount () {
        this.loadFonts()
    }
    //
    async loadFonts () {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        })
        this.setState({
            isReady: true
        })
    }
    //
    componentDidMount () {
        getMoviesFromApi().then(movies => this.props.getMovies(movies))
    }
    //
    render () {
        //
        if (!this.state.isReady) {
            return <Expo.AppLoading />
        }
        //
        return (
            <Router hideNavBar="false" createReducer={reducerCreate}>
                <Scene key="root">
                    <Scene key="homePageKey" component={Home} title="Home title" initial={true} />
                    <Scene key="profilePageKey" component={Profile} title="Profile title" />
                </Scene>
            </Router>
        )
    }
}

//
async function getMoviesFromApi () {
    //
    try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json')
        let responseJson = await response.json()
        return responseJson.movies
    } catch (err) {
        console.error(err)
    }
}

function mapStateToProps (state, props) {
    return {}
}

export default connect(mapStateToProps, { getMovies })(Main)
