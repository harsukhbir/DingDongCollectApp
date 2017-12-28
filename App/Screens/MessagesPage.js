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
    TouchableOpacity, Image, ScrollView
} from 'react-native';

import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';
export class MessagesPage extends Component {

    openMenu() {
        this.refs.drawer.open()
    }
    goOnetoOneChat() {
        Actions.MessagesOne2One();
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
                        <Left style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                                    <Image style={styles.headerMenuImage} source={require('../images/menu.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{color: 'white'}}>MY MESSAGES</Text>
                        </Body>
                        <Right style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={this.addDonation}>
                                    <Image style={styles.headerPlusImage} source={require('../images/write_text.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Right>
                    </Header>

                    <ScrollView>
                        <List style={{ marginTop: 15 }}>
                            <ListItem onPress={this.goOnetoOneChat} avatar style={styles.listAvatar}>
                                <Left>
                                    <Thumbnail source={require('../images/avatar.png')} />
                                </Left>
                                <Body>
                                    <Text style={styles.userNameTxt}>John_Doe</Text>
                                    <Text note>Hi Sam, How are you to...</Text>
                                </Body>
                                <Right>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeTxt}>2</Text>
                                    </View>
                                    <Text note>Oct 15, 2017</Text>
                                </Right>
                            </ListItem>

                            <ListItem onPress={this.goOnetoOneChat} avatar style={styles.listAvatar}>
                                <Left>
                                    <Thumbnail source={require('../images/avatar.png')} />
                                </Left>
                                <Body>
                                    <Text style={styles.userNameTxt}>Meranda_Doe</Text>
                                    <Text note>Hi Sam, How are you to...</Text>
                                </Body>
                                <Right>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeTxt}>1</Text>
                                    </View>
                                    <Text note>Oct 15, 2017</Text>
                                </Right>
                            </ListItem>

                            <ListItem onPress={this.goOnetoOneChat} avatar style={styles.listAvatar}>
                                <Left>
                                    <Thumbnail source={require('../images/avatar.png')} />
                                </Left>
                                <Body>
                                    <Text style={styles.userNameTxt}>Karl_Doe</Text>
                                    <Text note>Hi Sam, How are you to...</Text>
                                </Body>
                                <Right>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeTxt}>22</Text>
                                    </View>
                                    <Text note>Oct 15, 2017</Text>
                                </Right>
                            </ListItem>

                            <ListItem onPress={this.goOnetoOneChat} avatar style={styles.listAvatar}>
                                <Left>
                                    <Thumbnail source={require('../images/avatar.png')} />
                                </Left>
                                <Body>
                                    <Text style={styles.userNameTxt}>Leo_Doe</Text>
                                    <Text note>Hi Sam, How are you to...</Text>
                                </Body>
                                <Right>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeTxt}>22</Text>
                                    </View>
                                    <Text note>Oct 15, 2017</Text>
                                </Right>
                            </ListItem>

                        </List>
                    </ScrollView>
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
    headerPlusImage: {
        width: 23,
        height: 23,
        marginRight: 15
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


    listAvatar: {
        paddingBottom: 10
    },
    badge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#969696',
        top: -5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeTxt: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0.7,
    },
    userNameTxt: {
        color: '#6d6d6d'
    }
});

export default MessagesPage;