/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button, TouchableOpacity, Image, ImageBackground
} from 'react-native';

import { Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Display from 'react-native-display';
import MyStyle from './MyStyle';


export class SignupPageThree extends Component {

    constructor(props) {
        super(props);
        this.state = { enable: true };
        this.stateFalse = { enable: false };
    }

    goBack() {
        Actions.pop();
    }
    showPswd() {
        // alert("hi")
    }
    goNext() {
        Actions.SignupPageFour();
    }
    radioButtonStatusTrue() {
        let toggle = !this.state.enable;
        this.setState({ enable: false });
        this.stateFalse = { enable: true };
    }

    radioButtonStatusFalse() {
        let toggle = !this.state.enable;
        this.setState({ enable: true });
        this.stateFalse = { enable: false };
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/greenbg.png')} style={styles.backgroundImage}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image style={MyStyle.backImageStyleSignup} source={require('../images/backArrow.png')} />
                    </TouchableOpacity>
                    <View style={styles.whatsYourName}><Text style={styles.signupLabelText}>Your E-Mail</Text>
                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Email' placeholderTextColor='white' />
                        </Item>


                        <View style={styles.signupRadioView}>
                            <Display enable={this.state.enable} >
                                <TouchableOpacity onPress={this.radioButtonStatusTrue.bind(this)}>
                                    <Image style={styles.radioImage} source={require('../images/RadioBtnWhiteSelected.png')} />
                                </TouchableOpacity>
                            </Display>

                            <Display enable={this.stateFalse.enable}>
                                <TouchableOpacity onPress={this.radioButtonStatusFalse.bind(this)}>
                                    <Image style={styles.radioImage} source={require('../images/RadioBtnWhite.png')} />
                                </TouchableOpacity>
                            </Display>
                            <Text style={styles.radioText}> I'd like to receive promotional communications, including surveys, news, etc. via e-mail. </Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 55 }}><Text style={styles.signupLabelText}>Password Please</Text>

                        <Item rounded style={styles.signupInput}>
                            <Input secureTextEntry={true} style={styles.signupInpt} placeholder='Password' placeholderTextColor='white' />
                            <TouchableOpacity onPress={this.showPswd}>
                                <Image style={{ width: 28, height: 16, marginRight: 15 }} source={require('../images/eyes.png')} />
                            </TouchableOpacity>
                        </Item>

                        <Item rounded style={styles.signupInput}>
                            <Input style={styles.signupInpt} placeholder='Confirm password' placeholderTextColor='white' />
                            <Image style={{ width: 28, height: 16, marginRight: 15 }} source={require('../images/eyes.png')} />
                        </Item>

                    </View>

                    <View style={styles.nextArrowView}>
                        <TouchableOpacity onPress={this.goNext}>
                            <Image style={styles.nextArrowImg} source={require('../images/nextArrow.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#6eb50a',
    },
    backgroundImage: {
        flex: 1,
    },
    radioText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
        marginTop: 4,
        backgroundColor: 'transparent',
    },
    radioImage: {
        width: 28,
        height: 28
    },
    // backIcon: {
    //     position: 'absolute',
    //     left: 6,
    //     top: 20
    // },
    whatsYourName: {
        marginTop: 30,
        backgroundColor: 'transparent',
    },
    signupLabelText: {
        fontSize: 26,
        color: 'white',
        marginLeft: 15,
        backgroundColor: 'transparent',
    },
    signupInput: {
        backgroundColor: '#4b7d0a',
        borderColor: 'transparent',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15
    },
    signupInpt: {
        color: 'white',
    },
    signupRadioView: {
        // position: 'absolute',
        flexDirection: 'row',
        marginLeft: 50,
        top: 20,
        marginRight: 50
    },
    nextArrowView: {
        position: 'absolute',
        right: 10, bottom: 20
    },
    nextArrowImg: {
        width: 37,
        height: 37
    },

});

export default SignupPageThree;