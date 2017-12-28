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

export class CollectionsFooter extends Component {

    Finalized() {
        Actions.CollectionsFinalized();
    }

    Accepted() {
        Actions.CollectionsAccepted();
    }

    Pending() {
        Actions.CollectionsPending();
    }

    Rejected() {
        Actions.CollectionsRejected();
    }

    render() {
        return (

            <Footer style={{ backgroundColor: '#84c40e', height: 55 }}>
                <FooterTab style={{ backgroundColor: '#84c40e' }}>
                    <Button onPress={this.Finalized} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footerFinalize.png')} />
                        <Text style={styles.footerTxt}>Finalized</Text>
                    </Button>
                    <Button onPress={this.Accepted} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footercompleted.png')} />
                        <Text style={styles.footerTxt}>Accepted</Text>
                    </Button>
                    <Button onPress={this.Pending} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footerpending.png')} />
                        <Text style={styles.footerTxt}>Pending</Text>
                    </Button>
                    <Button onPress={this.Rejected} vertical>
                        <Image style={styles.nextArrowImg} source={require('../images/footercancelled.png')} />
                        <Text style={styles.footerTxt}>Rejected</Text>
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
        fontSize: 11
    },
    nextArrowImg: {
        width: 26,
        height: 26,
    },
});

export default CollectionsFooter;