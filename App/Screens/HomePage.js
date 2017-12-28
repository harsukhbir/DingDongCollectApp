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
    TouchableOpacity, Image, ScrollView, ImageBackground
} from 'react-native';

import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

import { Menu } from './Menu';

export class HomePage extends Component {

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
                                <Title></Title>
                            </Body>
                            <Right style={{ flex: 0.5 }}>
                                <Button transparent>
                                    <TouchableOpacity onPress={this.goMyDonation}>
                                        <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                    </TouchableOpacity>
                                </Button>
                            </Right>
                        </Header>
                        <ImageBackground source={require('../images/greenbg.png')} style={styles.backgroundImage}>
                        <ScrollView contentContainerStyle={styles.contentContainer}>
                            <View style={styles.mainView}>
                                <View style={styles.particularView}>
                                    <TouchableOpacity >
                                        <Image style={styles.HomeIcons} source={require('../images/refund.png')} />
                                        <Text style={styles.honeIconText}>Do you have any refundables or non-pernishable food to donate?</Text>
                                    </TouchableOpacity >
                                </View>

                                <View style={styles.particularView}>
                                    <TouchableOpacity >
                                        <Image style={styles.HomeIcons} source={require('../images/snap_icon.png')} />
                                        <Text style={styles.honeIconText}>Snap a picture</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.particularView}>
                                    <TouchableOpacity >
                                        <Image style={styles.HomeIcons} source={require('../images/notification-1.png')} />
                                        <Text style={styles.honeIconText}>Leave a notification</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.particularView}>
                                    <TouchableOpacity >
                                        <Image style={styles.HomeIcons} source={require('../images/availability.png')} />
                                        <Text style={styles.honeIconText}>Indicate your availability</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.particularView}>
                                    <TouchableOpacity >
                                        <Image style={styles.HomeIcons} source={require('../images/approved.png')} />
                                        <Text style={styles.honeIconText}>Wait for notification to be approved</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.particularView}>
                                    <TouchableOpacity >
                                        <Image style={styles.HomeIcons} source={require('../images/pick.png')} />
                                        <Text style={styles.honeIconText}>We will come and pick it</Text>
                                    </TouchableOpacity >

                                </View>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#6eb50a',
    },
    backgroundImage: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 10,
    },
    headerMenuImage: {
        width: 25,
        height: 18,
    },
    headerBellImage: {
        width: 23,
        height: 23,
    },
    HomeIcons: {
        width: 70,
        height: 70,
        borderRadius: 33,
        top: 10,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    header: {
        height: 51,
        backgroundColor: '#5fa108',
        borderBottomColor: '#558508', borderStyle: 'solid', borderBottomWidth: 2
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    particularView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    honeIconText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 12.3,
        marginLeft: 70,
        marginRight: 70,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
});

export default HomePage;