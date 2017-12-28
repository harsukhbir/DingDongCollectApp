/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import Panel from './Panels';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image
} from 'react-native';

import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';

export class DonationFooter extends Component {

    completed() {
        Actions.DonationCompleted();
    }

    Pending() {
        Actions.DonationPending();
    }

    Cancelled() {
        Actions.DonationCancelled();
    }
    render() {
        return (

            <Footer style={styles.footerBar}>
                <FooterTab style={{backgroundColor: '#84c40e', height: 55}}>
                    <Button onPress={this.completed} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footercompleted.png')} />
                        <Text style={styles.footerTxt}>Completed</Text>
                    </Button>
                    <Button onPress={this.Pending} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footerpending.png')} />
                        <Text style={styles.footerTxt}>Pending</Text>
                    </Button>
                    <Button onPress={this.Cancelled} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footercancelled.png')} />
                        <Text style={styles.footerTxt}>Cancelled</Text>
                    </Button>

                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    footerTxt: {
        color: 'white',
        paddingTop: 1,
        fontSize: 12
    },
    nextArrowImg: {
        width: 26,
        height: 26,
    },
    footerBar: {
        backgroundColor: '#84c40e', height: 50
    },
});

export default DonationFooter;