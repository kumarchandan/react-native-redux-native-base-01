import React, { Component } from 'react'

import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from "native-base"
import { Actions } from "react-native-router-flux"

export default class Profile extends Component {
    //
    render () {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Profile Page</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>This is Profile Screen</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button onPress={() => { Actions.pop() }}>
                        <Text>Go Back to Home Screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}