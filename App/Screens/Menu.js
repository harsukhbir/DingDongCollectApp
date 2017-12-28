import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image, ScrollView, ImageBackground
} from 'react-native';

import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export class Menu extends Component {

    leftMenuClik(activeTab) {

        if (activeTab == 'HOME') {
            Actions.HomePage();
        }
        if (activeTab == 'MY DONATIONS') {
            Actions.MyDonationsPage();
        }
        if (activeTab == 'MY COLLECTIONS') {
            Actions.MyCollectionsPage();
        }
        if (activeTab == 'MESSAGES') {
            Actions.MessagesPage();
        }
        if (activeTab == 'MY SPOTS') {
            Actions.MySpotsPage();
        }
        if (activeTab == 'MY ACCOUNT') {
            Actions.MyAccountPage();
        }
        if (activeTab == 'INVITE A FRIEND') {
            Actions.InviteAFriendPage();
        }
        if (activeTab == 'MEMBERSHIP') {
            Actions.MembershipPage();
        }
        if (activeTab == 'REWARDS OPTIONS') {
            Actions.RewardsOptionsPage();
        }
        if (activeTab == 'LOGOUT') {
            Actions.SignupPageOne();
        }
    }

    openMenu() {
        this.refs.drawer.open()
    }

    render() {
        return (
            <Container style={{ flex: 1 }}>
                <ImageBackground source={require('../images/greenbg.png')} style={styles.backgroundImage}>
                    <View style={styles.particularMenuView}>
                        <TouchableOpacity >
                            <Image style={styles.HomeIconsAvtar} source={require('../images/avatar.png')} />
                            <Text style={styles.honeIconTextAvatr}>JOHN ROBERTSON</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <List style={{}}>
                            <ListItem onPress={() => this.leftMenuClik('HOME')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/home.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>HOME</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('MY DONATIONS')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon1} source={require('../images/donation.png')} />
                                </Left>
                                <Body style={styles.leftMBody1}>
                                    <Text style={styles.leftMenuListText}>MY DONATIONS</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('MY COLLECTIONS')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/star.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>MY COLLECTIONS</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('MESSAGES')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon2} source={require('../images/messages.png')} />
                                </Left>
                                <Body style={styles.leftMBody3}>
                                    <Text style={styles.leftMenuListText}>MESSAGES</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('MY SPOTS')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon3} source={require('../images/spots.png')} />
                                </Left>
                                <Body style={styles.leftMBody2}>
                                    <Text style={styles.leftMenuListText}>MY SPOTS</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('MY ACCOUNT')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/account.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>MY ACCOUNT</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('INVITE A FRIEND')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/invite_friend.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>INVITE A FRIEND</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('MEMBERSHIP')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/notification.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>MEMBERSHIP</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('REWARDS OPTIONS')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/reward.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>REWARDS OPTIONS</Text>
                                </Body>
                            </ListItem>

                            <ListItem onPress={() => this.leftMenuClik('LOGOUT')} icon style={styles.ListItm}>
                                <Left style={styles.leftMLeft}>
                                    <Image style={styles.menuIcon} source={require('../images/logout.png')} />
                                </Left>
                                <Body style={styles.leftMBody}>
                                    <Text style={styles.leftMenuListText}>LOGOUT</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </ScrollView>
                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    ListItm: {
        backgroundColor: 'transparent',
        marginBottom: 1.2,
        marginTop: 1.2
    },
    backgroundImage: {
        flex: 1,
    },
    leftMLeft: {
        backgroundColor: 'transparent', paddingLeft: 3
    },
    leftMBody1: {
        borderBottomWidth: 0,
        // marginLeft: 8,
        backgroundColor: "transparent",
    },
    leftMBody: {
        borderBottomWidth: 0,
        paddingLeft: 8,
        backgroundColor: "transparent",
    },
    leftMBody2: {
        borderBottomWidth: 0,
        paddingLeft: 10.6,
        backgroundColor: "transparent",
    },
    leftMBody3: {
        borderBottomWidth: 0,
        paddingLeft: 6.5,
        backgroundColor: "transparent",
    },
    particularMenuView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 38
    },
    menuIcon: {
        height: 17,
        width: 17,
        paddingLeft: 3
    },
    menuIcon1: {
        height: 12,
        width: 26,
        paddingLeft: 3
    },
    menuIcon2: {
        height: 17,
        width: 19,
        paddingLeft: 3
    },
    menuIcon3: {
        height: 19,
        width: 13,
        paddingLeft: 3
    },
    honeIconTextAvatr: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 35,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    HomeIconsAvtar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    leftMenuListText: {
        color: "white", fontSize: 13.5, backgroundColor: "transparent",
    },
});
export default Menu;