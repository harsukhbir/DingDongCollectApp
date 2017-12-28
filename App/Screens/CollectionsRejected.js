/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import Panel from './Panels';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image
} from 'react-native';

// import Panel from './Panels';
import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';
import CollectionsFooter from './CollectionsFooter';
// import {Panel} from './Panels';
// import Panel from 'react-native-panel';
// import PropTypes from 'prop-types';

export class CollectionsRejected extends Component {

    openMenu() {
        this.refs.drawer.open()
    }
    DonationCancelledDetailsFunc() {
        Actions.DonationCancelledDetails();
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
                            <Title style={{color: 'white'}}>REJECTED</Title>
                        </Body>
                        <Right style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity >
                                    <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Right>
                    </Header>

                    <List>
                        <ListItem onPress={this.DonationCancelledDetailsFunc}>
                            <Thumbnail square size={150} style={styles.thumbnailImg} source={require('../images/avatar.png')} />
                            <Body>
                                <Text style={styles.mainTxt}>Food Donation</Text>
                                <Text style={styles.mainSubTxt} note>23.01.2018</Text>

                                <Text style={{ marginTop: 8, color: '#626262', fontSize: 12 }}>Category: <Text style={styles.txtLight} note>Food</Text></Text>
                                <Text style={styles.txtDark} >Items: <Text note style={styles.txtLight}>Food</Text></Text>
                                <Text style={styles.txtDark} >Place: <Text note style={styles.txtLight}>Willow street 23. 3/A</Text></Text>
                            </Body>
                        </ListItem>

                        <ListItem onPress={this.DonationCancelledDetailsFunc}>
                            <Thumbnail square size={150} style={styles.thumbnailImg} source={require('../images/avatar.png')} />
                            <Body>
                                <Text style={styles.mainTxt}>Food Donation</Text>
                                <Text style={styles.mainSubTxt} note>23.01.2018</Text>

                                <Text style={{ marginTop: 8, color: '#626262', fontSize: 12 }}>Category: <Text style={styles.txtLight} note>Food</Text></Text>
                                <Text style={styles.txtDark} >Items: <Text note style={styles.txtLight}>Food</Text></Text>
                                <Text style={styles.txtDark} >Place: <Text note style={styles.txtLight}>Willow street 23. 3/A</Text></Text>
                            </Body>
                        </ListItem>

                        <ListItem onPress={this.DonationCancelledDetailsFunc}>
                            <Thumbnail square size={150} style={styles.thumbnailImg} source={require('../images/avatar.png')} />
                            <Body>
                                <Text style={styles.mainTxt}>Food Donation</Text>
                                <Text style={styles.mainSubTxt} note>23.01.2018</Text>

                                <Text style={{ marginTop: 8, color: '#626262', fontSize: 12 }}>Category: <Text style={styles.txtLight} note>Food</Text></Text>
                                <Text style={styles.txtDark} >Items: <Text note style={styles.txtLight}>Food</Text></Text>
                                <Text style={styles.txtDark} >Place: <Text note style={styles.txtLight}>Willow street 23. 3/A</Text></Text>
                            </Body>
                        </ListItem>
                    </List>

                </View>
                <CollectionsFooter />

            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mainTxt: {
        color: '#626262'
    },
    mainSubTxt: {
        color: '#6c6c6c', fontSize: 12
    },
    txtDark: {
        color: '#626262', fontSize: 12
    },
    txtLight: {
        color: '#6c6c6c', fontSize: 12
    },
    thumbnailImg: {
        width: 86,
        height: 86,
    },

    headerMenuImage: {
        width: 25,
        height: 18,
    },
    headerBellImage: {
        width: 23,
        height: 23,
    },
    headerPlusImage: {
        width: 23,
        height: 23,
        marginRight: 15
    },
    header: {
        height: 51,
        backgroundColor: '#5fa108',
        borderBottomColor: '#558508', borderStyle: 'solid', borderBottomWidth: 2
    },
});

export default CollectionsRejected;