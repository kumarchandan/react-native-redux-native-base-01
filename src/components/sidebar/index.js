import React from 'react'
import { Image } from "react-native"
import { Content, List, ListItem, Icon, Container, Badge, Text } from 'native-base'

// const drawerCover = require("../../../assets/drawer-cover.png")
// const drawerImage = require("../../../assets/logo-kitchen-sink.png")

export default class SideBar extends React.Component {
    //
    render () {
        return (
            <Content style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                <List>
                    <ListItem>
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Account Settings</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Help</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }
}
