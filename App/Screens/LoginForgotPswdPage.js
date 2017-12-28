import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image, ImageBackground
} from 'react-native';

import { Item, Input, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MyStyle from './MyStyle';

export class LoginForgotPswdPage extends Component {
    resetPswd() {
        Actions.LoginPage();
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/greenbg.png')} style={styles.backgroundImage}>

                    <View style={styles.whatsYourName}>
                        <Item rounded style={styles.signupInput}>
                            <Input placeholder='Email Address' placeholderTextColor='white' />
                        </Item>

                        <Button block style={styles.redisterButton} onPress={this.resetPswd}>
                            <Text style={{ color: '#4b7d0a', fontSize: 20 }}>Reset Password</Text>
                        </Button>

                    </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#6bb315',
    },
    backgroundImage: {
        flex: 1,
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
        flex: 1,
        marginTop: 200

    },
    redisterButton: {
        backgroundColor: '#FFFFFF',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        top: 30,
    },

});
export default LoginForgotPswdPage;