import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image, TouchableHighlight
} from 'react-native';

import { Item, Input, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MyStyle from './MyStyle';

export class LoginPage extends Component {

    goBack() {
        Actions.SignupPageOne();
    }
    goForgPswd() {
        Actions.LoginForgotPswdPage();
    }
    dontHaveAcnt() {
        Actions.SignupPageTwo();
    }
    loginFunc() {
        Actions.HomePage();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image style={{ width: 20, height: 20 }} source={require('../images/cancel.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.whatsYourName}>
                    <Item rounded style={styles.signupInput}>
                        <Image style={MyStyle.emailIcnImg} source={require('../images/email.png')} />
                        <Input placeholder='Enter your email' placeholderTextColor='white' />
                    </Item>

                    <Item rounded style={styles.signupInput}>
                        <Image style={MyStyle.pswdlIcnImg} source={require('../images/password.png')} />
                        <Input placeholder='Enter your password' placeholderTextColor='white' />
                    </Item>

                    <Text onPress={this.goForgPswd} style={styles.forgotPasText}> Forgot Password? </Text>

                    <Button block style={styles.redisterButton} onPress={this.loginFunc}>
                        <Text style={{ color: '#4b7d0a', fontSize: 22 }}>Login</Text>
                    </Button>
                </View>

                <View style={styles.noAcntView} >
                    <Text onPress={this.dontHaveAcnt} style={styles.noAcntText}> DON'T HAVE AN ACCOUNT? </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6bb315',
    },
    backIcon: {
        // position: 'absolute',
        left: 10,
        top: 20
    },
    signupInput: {
        backgroundColor: '#558508',
        borderColor: 'transparent',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        paddingLeft: 15
    },
    whatsYourName: {
        top: 177
    },
    forgotPasText: {
        color: 'white',
        right: 50,
        top: 130,
        position: 'absolute',
        zIndex: 10
    },
    redisterButton: {
        backgroundColor: '#FFFFFF',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        top: 60,
    },
    noAcntView: {
        backgroundColor: '#5fa108',
        position: 'absolute',
        bottom: 0, height: 62, justifyContent: 'center', right: 0, left: 0,
        borderTopColor: '#558508', borderStyle: 'solid', borderTopWidth: 1,
    },
    noAcntText: {
        textAlign: 'center',
        color: 'white', fontSize: 17
    },

});

export default LoginPage;