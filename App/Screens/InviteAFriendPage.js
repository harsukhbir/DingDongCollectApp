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

export class InviteAFriendPage extends Component {
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
                        <Left style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                                    <Image style={styles.headerMenuImage} source={require('../images/menu.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{color: 'white'}}>INVITE FRIENDS</Title>
                        </Body>
                        <Right style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={this.goMyDonation}>
                                    <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Right>
                    </Header>

                    <TouchableOpacity>
                        <Image style={styles.globImg} source={require('../images/globe.png')} />
                    </TouchableOpacity>

                    <Text style={styles.saveTxt}>Save the environment with your friends and family!</Text>

                    <Button block style={styles.redisterButton}>
                        <Text style={{ color: 'white', fontSize: 17 }}>Invite Friends</Text>
                    </Button>

                    <Text style={styles.sharetxt}>Share your link</Text>


                    <Button iconRight block style={styles.dropDownView}>
                        <Text style={styles.dropDownText}>{"www.dingdongcollection.com/ ..".toLowerCase()}</Text>
                        <Image style={styles.imgDropDown} source={require('../images/DropDown.png')} />
                    </Button>

                    <Text style={styles.TCTxt}>Terms and Conditions</Text>

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
    dropDownText: {
        color: '#929292',
        fontSize: 13,
    },
    TCTxt: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#929292',
        textDecorationLine: 'underline',
        textDecorationColor: '#929292',
    },
    dropDownView: {
        backgroundColor: '#FFFFFF',
        borderColor: '#929292',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        height: 54,
        borderRadius: 27,
        justifyContent: 'flex-start'
    },
    imgDropDown: {
        width: 23,
        height: 23,
        position: "absolute", bottom: 16, right: 20
    },
    sharetxt: {
        color: '#929292',
        marginLeft: 35,
        fontSize: 12,
        marginTop: 35
    },
    redisterButton: {
        backgroundColor: '#6bb409',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        marginTop: 15
    },
    globImg: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 40,
        borderRadius: 50
    },
    saveTxt: {
        fontSize: 21,
        color: '#929292',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center'
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

export default InviteAFriendPage;