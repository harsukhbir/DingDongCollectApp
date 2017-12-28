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
    TouchableOpacity, Image, ScrollView, TextInput,
} from 'react-native';

import MyStyle from './MyStyle';
import ImageSlider from 'react-native-image-slider';
import Slider from "react-native-slider";
// import Slideshow from 'react-native-slideshow';
import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';

export class MessagesOne2One extends Component {

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
                        <Title style={{ color: 'white' }}>JOHN DOE</Title>
                    </Body>
                    <Right style={{ flex: 0.5 }}>
                    </Right>
                </Header>

                <ScrollView contentContainerStyle={styles.contentContainer}>

                    <View style={styles.myChatView}>
                        <Text style={styles.myChatNametxt}>John_Doe</Text>
                        <Text style={styles.myChattxt}>Do you have something to donate?</Text>
                        <Text style={styles.myChattime}>5 Nov. 13:45</Text>
                    </View>

                    <View style={styles.partnerChatView}>
                        <Text style={styles.partnerChatNametxt}>John_Doe</Text>
                        <Text style={styles.partnerChattxt}>Yes, I have.</Text>
                        <Text style={styles.partnerChattime}>5 Nov. 13:46</Text>
                    </View>

                </ScrollView>

                <View style={styles.footerChat}>
                    <View style={{ flex: 0.2 }}>
                        <TouchableOpacity>
                            <Image style={styles.writeImg} source={require('../images/write.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Item regular style={styles.sendInpt}>
                            <Input style={styles.sendInpt} placeholder='Send text ...' />
                        </Item>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <TouchableOpacity>
                            <Image style={styles.sendImg} source={require('../images/send.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    footerChat: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white',
        borderTopColor: '#f4f4f4', borderStyle: 'solid', borderTopWidth: 1,
    },
    sendImg: {
        width: 80,
        height: 50,
    },
    writeImg: {
        width: 35,
        height: 35,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 5
    },

    //  style={{borderColor: 'white'}}
    sendInpt: {
        borderColor: 'white'
    },
    myChatView: {
        paddingRight: 30,
        paddingLeft: 120,
        paddingBottom: 22,
        marginTop: 20
    },
    myChatNametxt: {
        paddingBottom: 5,
        color: '#525252',
        fontWeight: 'bold'
    },
    myChattxt: {
        color: 'white',
        backgroundColor: '#5fa108',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        borderRadius: 10,
        overflow: "hidden"
    },
    myChattime: {
        right: 30,
        bottom: 0,
        marginTop: 20,
        position: 'absolute',
        color: '#959595',
        fontSize: 13
    },
    partnerChatView: {
        paddingLeft: 25,
        paddingRight: 120,
        paddingBottom: 22,
        marginTop: 20
    },
    partnerChatNametxt: {
        paddingLeft: 15,
        paddingBottom: 5,
        color: '#525252',
        fontWeight: 'bold'
    },
    partnerChattxt: {
        color: '#525252',
        backgroundColor: '#FFFFFF',
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 10,
        overflow: "hidden",
        borderColor: '#c2c2c2',
        borderWidth: 1,
    },
    partnerChattime: {
        right: 130,
        bottom: 0,
        marginTop: 20,
        position: 'absolute',
        color: '#959595',
        fontSize: 13
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

export default MessagesOne2One;