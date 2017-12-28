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
    Image, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';

import { Item, Input, Button, Root, ActionSheet } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Display from 'react-native-display';
import MyStyle from './MyStyle';

var MyOrganization = ["Organization 1", "Organization 2", "Organization 3", "Organization 4", "Organization 5", "Cancel"];
var MyPreferedDonation = ["Charitable Donation 1", "Charitable Donation 2", "Charitable Donation 3", "Charitable Donation 4", "Charitable Donation 5", "Cancel"];
// var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 5;

export class SignupPageTwo extends Component {

    constructor(props) {
        super(props);
        this.state = { enable: true };
        this.stateFalse = { enable: false };
    }

    goBack() {
        Actions.pop();
    }
    doSomething() {
        // alert('hi')
    }

    goNext() {
        Actions.SignupPageThree();
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

        let data = [{
            value: 'Organization 1',
        }, {
            value: 'Organization 2',
        }, {
            value: 'Organization 3',
        }];

        return (
            <Root>
                <View style={styles.container}>
                    <ImageBackground source={require('../images/greenbg.png')} style={styles.backgroundImage}>
                        <ScrollView contentContainerStyle={styles.contentContainter}>
                            {/* <View style={styles.backIcon}> */}
                            <TouchableOpacity onPress={this.goBack}>
                                <Image style={MyStyle.backImageStyleSignup} source={require('../images/backArrow.png')} />
                            </TouchableOpacity>
                            {/* </View> */}

                            <View style={styles.whatsYourName}><Text style={styles.signupLabelText}>What's Your Name?</Text>
                                <Item rounded style={styles.signupInput}>
                                    <Input style={styles.signupInpt} placeholder='First Name' placeholderTextColor='white' />
                                </Item>
                                <Item rounded style={styles.signupInput}>
                                    <Input style={styles.signupInpt} placeholder='Last Name' placeholderTextColor='white' />
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

                                    <Text style={styles.radioText}> I am over 13 years old </Text>
                                </View>

                            </View>


                            <View style={{ marginTop: 48 }}><Text style={styles.signupLabelText}>Phone</Text>
                                <Item rounded style={styles.signupInput}>
                                    <Input style={styles.signupInpt} placeholder='Phone' placeholderTextColor='white' />
                                </Item>
                            </View>

                            <View style={{ marginTop: 25 }}><Text style={styles.signupLabelText}>Organization</Text>

                                <View style={styles.fbOrgaView}>
                                    <Button iconRight block style={styles.dropDownView1} onPress={() =>
                                        ActionSheet.show(
                                            {
                                                options: MyOrganization,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                title: "My Organization",
                                                tintColor: '#4b7d0a'
                                            },
                                            (buttonIndex) => {
                                                this.setState({ clicked: MyOrganization[buttonIndex] });
                                            }
                                        )}>
                                        <Text style={styles.dropDownText1}>My organization</Text>
                                        <Image style={styles.imgDropDown} source={require('../images/arrowDownWhite.png')} />
                                    </Button>

                                    <Button iconRight block style={styles.dropDownView1} onPress={() =>
                                        ActionSheet.show(
                                            {
                                                options: MyPreferedDonation,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                title: "My Prefered charitable donation",
                                                tintColor: '#4b7d0a'
                                            },
                                            (buttonIndex) => {
                                                this.setState({ clicked: MyPreferedDonation[buttonIndex] });
                                                // alert(MyPreferedDonation[buttonIndex])
                                            }
                                        )}>
                                        <Text style={styles.dropDownText1}>My prefered charitable donation</Text>
                                        <Image style={styles.imgDropDown} source={require('../images/arrowDownWhite.png')} />
                                    </Button>
                                </View>

                            </View>

                            <View style={styles.nextArrowView}>
                                <TouchableOpacity onPress={this.goNext}>
                                    <Image style={styles.nextArrowImg} source={require('../images/nextArrow.png')} />
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </ImageBackground>
                </View>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // backgroundColor: '#6eb50a',
    },
    backgroundImage: {
        flex: 1,
    },
    fbOrgaView: {
        marginTop: 5,
        marginBottom: 5,
    },
    dropDownView1: {
        backgroundColor: '#4b7d0a',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        height: 54,
        borderRadius: 27,
        justifyContent: 'flex-start',
        // borderColor: 'transparent', borderStyle: 'solid', borderWidth: 0
    },
    dropDownText1: {
        color: 'white',
        fontSize: 16.5,
        position: "absolute", bottom: 16, left: 7
    },
    imgDropDown: {
        width: 20,
        height: 12,
        position: "absolute", bottom: 18, right: 20, zIndex: 99
    },
    contentContainter: {
        paddingBottom: 20
    },
    backIcon: {

    },
    whatsYourName: {
        marginTop: 30
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
        marginTop: 10
    },
    signupInpt: {
        color: 'white',
    },
    countryCode: {
        color: 'white',
    },
    signupRadioButton: {
        color: 'white'
    },
    signupRadioView: {
        position: 'relative',
        left: 35,
        flexDirection: 'row',
        top: 22,
        marginLeft: 10
    },
    radioImage: {
        width: 28,
        height: 28
    },
    dropdownMenuView: {
        marginLeft: 35,
        marginRight: 35,
        backgroundColor: '#4b7d0a',
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10
    },
    nextArrowView: {
        // position: 'absolute',
        // right: 15, bottom: 20,
        marginTop: 25,
        alignSelf: 'flex-end', right: 15
    },
    radioText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
        marginTop: 4,
        backgroundColor: 'transparent',
    },
    nextArrowImg: {
        width: 37,
        height: 37,

        // position: 'absolute',
        // right: 15, bottom: 15,
        // right: 15, top: 15

        // position: 'absolute',
        // right: 15, bottom: 20, zIndex: 99

    },
});

export default SignupPageTwo;