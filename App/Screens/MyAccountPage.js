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

import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';

export class MyAccountPage extends Component {
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
                        <Left style={{ flex: 0.5, }}>
                            <Button transparent>
                                <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                                    <Image style={styles.headerMenuImage} source={require('../images/menu.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{color: 'white'}}>MY ACCOUNT</Title>
                        </Body>
                        <Right style={{ flex: 0.5, }}>
                            <Button transparent>
                                <TouchableOpacity onPress={this.goMyDonation}>
                                    <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Right>
                    </Header>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <TouchableOpacity>
                            <Image style={styles.avatarImg} source={require('../images/avatar.png')} />
                        </TouchableOpacity>

                        <Text style={styles.txtTitle}>Personal Information</Text>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Jane' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Text style={styles.txtTitle}>Address (Default Spot)</Text>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Jane' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <View style={styles.roundView}>
                            <TouchableOpacity>
                                <Image style={styles.roundImg} source={require('../images/plusRoundGray.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtTitle}>Organization</Text>

                        <View style={styles.fbOrgaView}>
                            <Button iconRight block style={styles.dropDownView}>
                                <Text style={styles.dropDownText}>My Organization</Text>
                                <Image style={styles.imgDropDown} source={require('../images/DropDown.png')} />
                            </Button>

                            <Button iconRight block style={styles.dropDownView}>
                                <Text style={styles.dropDownText}>Organization I donate to</Text>
                                <Image style={styles.imgDropDown} source={require('../images/DropDown.png')} />
                            </Button>
                        </View>


                        <Text style={styles.txtTitle}>Password</Text>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Doe' placeholderTextColor='#929292' />
                        </Item>

                        <Button block style={styles.redisterButton}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Save</Text>
                        </Button>



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
    dropDownText1: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center', justifyContent: 'center'
    },
    fbOrgaView: {
        marginTop: 20,
        marginBottom: 15,
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
    redisterButton: {
        backgroundColor: '#6bb409',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        marginTop: 15
    },
    dropDownText: {
        color: '#929292',
        fontSize: 16
    },
    imgDropDown: {
        width: 23,
        height: 23,
        position: "absolute", bottom: 16, right: 20
    },
    roundView: {
        alignSelf: 'flex-end',
        right: 15,
        top: 20
    },
    roundImg: {
        width: 30,
        height: 30,
    },
    signupInput: {
        backgroundColor: '#FFFFFF',
        borderColor: '#929292',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10
    },
    signupInpt: {
        color: '#929292',
    },
    txtTitle: {
        color: '#929292',
        fontSize: 20,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    avatarImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20
    },
    contentContainer: {
        paddingBottom: 15,
        paddingTop: 20,
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

export default MyAccountPage;