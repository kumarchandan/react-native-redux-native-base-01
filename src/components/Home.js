import React, { Component } from 'react'
import { Body, Button, CardItem, Container, Content, Card, Drawer, Header, Icon,
    Left, List, ListItem, Spinner, Text, Title } from "native-base"
import { ListView } from "react-native"

import SideBar from './sidebar/index'

import { connect } from "react-redux"
import * as AppActions from "../actions/index"
import { Actions } from "react-native-router-flux"
import { bindActionCreators } from "redux"

class Home extends Component {
    // drawer
    closeDrawer () {
        this._drawer._root.close()
    }
    //
    openDrawer () {
        this._drawer._root.open()
    }
    //
    render () {
        //
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
            <Drawer
                ref={ (ref) => { this._drawer = ref } }
                content={ <SideBar /> }
                onClose={ () => this.closeDrawer() }
            >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent light onPress={ () => this.openDrawer() }>
                                <Icon name='menu' />
                            </Button>
                        </Left>
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
                                        <Text>Goto Profile Screen</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </Drawer>
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
