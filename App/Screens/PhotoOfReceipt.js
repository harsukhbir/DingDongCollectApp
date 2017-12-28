/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import Panel from './Panels';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image, ScrollView, TextInput, Dimensions
} from 'react-native';

import ImageSlider from 'react-native-image-slider';
import Slider from "react-native-slider";
// import Slideshow from 'react-native-slideshow';
import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MyStyle from './MyStyle';

export class PhotoOfReceipt extends Component {

    goFinalizeDetails() {
        Actions.PhotoOfReceiptFinalizeDetails();
    }
    goBack() {
        Actions.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left style={{ flex: 0.5 }}>
                        <Button transparent>
                            <TouchableOpacity onPress={() => this.goBack()} style={styles.button}>
                            <Image style={MyStyle.backImageStyleHeader} source={require('../images/backArrow.png')} />
                            </TouchableOpacity>
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{color: 'white'}}>PHOTO OF RECEIPT</Title>
                    </Body>
                    <Right style={{ flex: 0.5 }}>
                    </Right>
                </Header>

                <View style={styles.MainView}>
                    <Image style={styles.MainViewImg} source={require('../images/camera_shot.png')} />
                </View>
                <View style={styles.roundButtons}>
                    <Image style={styles.roundImg} source={require('../images/RefreshBtn.png')} />
                </View>

                <Button block style={styles.redisterButton} onPress={this.goFinalizeDetails}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Finalize</Text>
                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    redisterButton: {
        backgroundColor: '#6bb409',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        marginTop: 80
    },
    roundButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -22
    },
    roundImg: {
        width: 41,
        height: 41,
        marginRight: 10,
    },
    MainView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainViewImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 350,        
    },
    headerMenuImage: {
        width: 22,
        height: 22,
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

export default PhotoOfReceipt;