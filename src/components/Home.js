import React, { Component } from 'react'
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, List, ListItem, Spinner } from "native-base"
import { ListView } from "react-native"

import { connect } from "react-redux"
import * as AppActions from "../actions/index"
import { Actions } from "react-native-router-flux"
import { bindActionCreators } from "redux"

class Home extends Component {
    //
    render () {
        if (this.props.loading) {
            return (
                <Container>
                    <Content>
                        <Spinner color='red' />
                    </Content>
                </Container>
            )
        }
        //
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <List
                                    dataArray={this.props.movies}
                                    renderRow={movie =>
                                        <ListItem>
                                            <Text>{movie.title}</Text>
                                        </ListItem>
                                    }
                                />
                                <Button onPress={() => { Actions.profilePageKey() }}>
                                    <Text>Goto Profile</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

//
function mapStateToProps (state, props) {
    return {
        loading: state.moviesReducer.loading,
        movies: state.moviesReducer.movies
    }
}

//
function mapDispatchToProps (dispatch) {
    return bindActionCreators(AppActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
