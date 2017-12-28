/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View, Image, TouchableOpacity, Dimensions, ImageBackground

} from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
    AccessToken,
    LoginManager,
    GraphRequest,
    GraphRequestManager
} = FBSDK;
export class SignupPageOne extends Component {
    constructor(props) {
        super(props);
        //    alert("hi???");
    }
    signUpPage() {
        Actions.SignupPageTwo();
    }
    goLogin() {
        Actions.LoginPage();
    }
    FbLoginPage() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    // alert('Login was cancelled');
                } else {
                    const infoRequest = new GraphRequest('/me', {
                        parameters: {
                            'fields': {
                                'string': 'id, first_name, last_name, email, picture'
                            }
                        }
                    }, (err, res) => {
                        // alert("id" + res.id + "email" + res.email + "first_name" + res.first_name + "last_name" + res.last_name + "picture" + res.picture);
                        Actions.FbLoginPage({ fbid: res.id, fbemail: res.email, fbfirst_name: res.first_name, fblast_name: res.last_name, fbpicture: res.picture.data.url });
                    });
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            function (error) {
                alert('Login failed with error: ' + error);
            }
        );
    }

    goPolicy() {
        Actions.SignupPolicyPage();
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/loginBackImg.png')} style={styles.backgroundImage}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={this.goLogin}>
                            <Image style={{ width: 28, height: 28 }} source={require('../images/signinIcn.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dingDongFontView}>
                        {/* <Text style={styles.dingDongFont}> Welcome to {"\n"} Ding Dong Collect</Text> */}
                        <Image style={styles.homeTxtIng} source={require('../images/WelcomeTxT.png')} />
                    </View>

                    <View style={styles.dingDongLoginBtnView}>
                        <Button onPress={this.FbLoginPage} block style={styles.fbLoginButton}>
                            <Image source={require('../images/fblogo.png')} style={styles.fbLoginImage} />
                            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>CONTINUE WITH FACEBOOK</Text>
                        </Button>

                        <Button onPress={this.signUpPage} block style={styles.signupLoginButton}>
                            <Text style={styles.createAcntTxt}> CREATE ACCOUNT </Text>
                        </Button>
                    </View>

                    <View style={styles.dingDongPlicyView}><Text style={styles.dingDongPlicyText}>By tapping Continue or Create Account, I agree</Text>
                    </View>

                    <View style={styles.dingDongPlicyView1}>
                        <Text style={styles.dingDongPlicyText1}> to Ding Dong Collect </Text><Text onPress={this.goPolicy} style={{
                            color: 'white',
                            fontSize: 13, textDecorationLine: 'underline'
                        }}>Policies and Terms</Text>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeTxtIng: {
        alignSelf: 'center',
        width: 255,
        height: 77
    },
    backgroundImage: {
        flex: 1,
    },

    dingDongFontView: {
        backgroundColor: 'transparent',
        top: 130,
        zIndex: 10,
        // flex: 1
    },
    dingDongLoginBtnView: {
        // top: 305,
        position: 'absolute',
        bottom: 130,
        alignSelf: 'center'
    },
    dingDongFont: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        // fontFamily: 'serif'
    },
    DongPlicyText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
        paddingLeft: 20,
        paddingRight: 20
    },
    dingDongPlicyView: {
        position: 'absolute', left: 20, right: 20, bottom: 58, backgroundColor: 'transparent',
        // flexDirection: 'row',
    },
    dingDongPlicyView1: {
        position: 'absolute', bottom: 40, backgroundColor: 'transparent',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    fbLoginImage: {
        paddingLeft: 10,
        width: 10,
        height: 22
    },
    fbLoginButton: {
        backgroundColor: '#3b5999',
        paddingLeft: 18,
        borderRadius: 5
    },
    signupLoginButton: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 5

    },
    dingDongPlicyText: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        alignSelf: 'center'
    },
    dingDongPlicyText1: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center'
    },
    createAcntTxt: {
        color: '#5c970c', fontWeight: 'bold', fontSize: 15
    },
    backIcon: {
        position: 'absolute',
        right: 15,
        top: 25
    },

});

export default SignupPageOne;