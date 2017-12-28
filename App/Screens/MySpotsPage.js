/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image
} from 'react-native';

import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';

export class MySpotsPage extends Component {

    openMenu() {
        this.refs.drawer.open()
    }
    goMyDonation() {
        Actions.MyDonationsPage();
    }

    render() {
        return (
            <Drawer
                ref="drawer"
                openDrawerOffset={0.4}
                type="static"
                tapToClose={true}
                content={<Menu />} >
                <View style={styles.container}>
                    <Header style={styles.header}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                                    <Image style={styles.headerMenuImage} source={require('../images/menu.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{color: 'white'}}>MY SPOTS</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={this.goMyDonation}>
                                    <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Right>
                    </Header>
                </View>
            </Drawer>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerMenuImage: {
        width: 25,
        height: 18,
    },
    headerBellImage: {
        width: 23,
        height: 23,
    },
    header: {
        height: 51,
        backgroundColor: '#5fa108',
        borderBottomColor: '#558508', borderStyle: 'solid', borderBottomWidth: 2
    },
});

export default MySpotsPage;