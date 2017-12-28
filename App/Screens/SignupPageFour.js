/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableOpacity, Image, ScrollView, Dimensions
} from 'react-native';

import { Item, Input, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Display from 'react-native-display';
import MyStyle from './MyStyle';
var radio_props = [
    { label: "I AGREE", value: 1 },
    // { label: 'param2', value: 1 }
];

export class SignupPageFour extends Component {
    constructor(props) {
        super(props);
        this.state = { enable: true };
        this.stateFalse = { enable: false };
    }

    goBack() {
        Actions.pop();
    }
    doSomething() {

    }
    goNext() {
        Actions.SignupPageThree();
    }
    goHomePage() {
        Actions.HomePage();
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
                <ScrollView contentContainerStyle={styles.contentContainter}>
                    <Image style={styles.imgGreen} source={require('../images/greenBuliding.png')} />
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image style={MyStyle.backImageStyleSignup} source={require('../images/backArrow.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textView}>
                        <Text style={styles.textOne}>Do you want to make the world a cleaner place and help others along the way? Start in your neighbourhood</Text>
                        <Text style={styles.textTwo}></Text>
                        {/* Lorem ipsum dolor sit amet, consectetuer adipiscin glit, sed diam nonummy nibh euismodtincidunt utlaoreet dolore magne aliquam erat volutpat. Ut wisienim ad minim veniam, quisnostrud exerci tation ullam corper suscipit lobortisnisl ut aliquip ex ea commod oconsequat. */}
                        <View style={styles.signupRadioView}>
                            <Display enable={this.state.enable} >
                                <TouchableOpacity onPress={this.radioButtonStatusTrue.bind(this)}>
                                    <Image style={styles.radioImage} source={require('../images/RadioBtnGreen.png')} />
                                </TouchableOpacity>
                            </Display>

                            <Display enable={this.stateFalse.enable}>
                                <TouchableOpacity onPress={this.radioButtonStatusFalse.bind(this)}>
                                    <Image style={styles.radioImage} source={require('../images/RadioBtnGray.png')} />
                                </TouchableOpacity>
                            </Display>
                            <Text style={styles.radioText}> I AGREE</Text>
                        </View>


                    </View>

                    <Button block style={styles.redisterButton} onPress={this.goHomePage}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
                    </Button>



                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imgGreen: {
        // flexGrow: 1,
        height: 250,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        resizeMode: 'cover'
    },
    radioText: {
        color: '#929292',
        fontSize: 18,
        paddingLeft: 5
    },
    radioImage: {
        width: 28,
        height: 28,
    },
    signupRadioView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10
    },
    contentContainter: {
        // paddingBottom: 25
    },
    backIcon: {
        position: 'absolute',
        // left: 6,
        // top: 20
    },
    imageView: {
        backgroundColor: 'red'
    },
    textView: {
        // marginTop: 260,
        // backgroundColor: '#FFFFFF',
        // flex: 1
    },
    textOne: {
        textAlign: 'center',
        fontSize: 16,
        color: '#111111',
        padding: 15
    },
    textTwo: {
        // marginTop: 20,
        color: '#6c6c6c',
        padding: 15,
        lineHeight: 20,
        textAlign: 'justify',
    },
    redisterButton: {
        marginTop: 20,
        backgroundColor: '#6bb409',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        marginBottom: 20
    },

});

export default SignupPageFour;