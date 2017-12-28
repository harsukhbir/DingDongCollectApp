/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View, Image, TouchableOpacity, ScrollView

} from 'react-native';
// import { Root } from "native-base";
import { Container, Header, Content, Button, Text, Item, Input, ActionSheet, Root } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Display from 'react-native-display';
import MyStyle from './MyStyle';

var MyOrganization = ["Organization 1", "Organization 2", "Organization 3", "Organization 4", "Organization 5", "Cancel"];
var MyPreferedDonation = ["Charitable Donation 1", "Charitable Donation 2", "Charitable Donation 3", "Charitable Donation 4", "Charitable Donation 5", "Cancel"];

// var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 5;

export class FbLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { enable: true };
        this.stateFalse = { enable: false };
        // this.props.fbid;
        // this.props.fbemail;
        // this.state = {};
        // alert(JSON.stringify(this.props.fbpicture));
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
            <Root>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.container}>
                        <View style={{ alignItems: 'center', }}>
                            <Image style={styles.fbAvatar} source={{ uri: this.props.fbpicture }} />
                        </View>

                        <View style={styles.whatsYourName}>
                            <Item rounded style={styles.signupInput}>
                                <Input style={styles.signupInpt} value={this.props.fbfirst_name} placeholder='First Name' placeholderTextColor='white' />
                            </Item>
                            <Item rounded style={styles.signupInput}>
                                <Input style={styles.signupInpt} value={this.props.fblast_name} placeholder='Last Name' placeholderTextColor='white' />
                            </Item>
                            <Item rounded style={styles.signupInput}>
                                <Input style={styles.signupInpt} placeholder='Phone Number' placeholderTextColor='white' />
                            </Item>
                            <Item rounded style={styles.signupInput}>
                                <Input style={styles.signupInpt} value={this.props.fbemail} placeholder='Email' placeholderTextColor='white' />
                            </Item>
                        </View>

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

                        <View style={styles.fbOrgaView}>
                            <Button iconRight block style={styles.dropDownView} onPress={() =>
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
                                )}><Text style={styles.dropDownText}>My Organization</Text>
                                <Image style={MyStyle.imgDropDownWhite} source={require('../images/arrowDownWhite.png')} />
                            </Button>

                            <Button iconRight block style={styles.dropDownView} onPress={() =>
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
                                <Text style={styles.dropDownText}>My Prefered charitable donation</Text>
                                <Image style={MyStyle.imgDropDownWhite} source={require('../images/arrowDownWhite.png')} />
                            </Button>
                        </View>

                        <View style={{ marginTop: 15, marginBottom: 50 }}>
                            <Button block style={styles.redisterButton} onPress={this.goHomePage}>
                                <Text style={{ color: '#4b7d0a', fontSize: 21, paddingTop: 2 }}>Login</Text>
                            </Button>
                        </View>

                    </View>
                </ScrollView>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6eb50a',
    },
    dropDownView: {
        backgroundColor: '#4b7d0a',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        height: 54,
        borderRadius: 27,
        justifyContent: 'flex-start'
    },
    dropDownText: {
        color: 'white',
        fontSize: 15
    },
    imgDropDown: {
        width: 23,
        height: 23,
        position: "absolute", bottom: 16, right: 20
    },
    contentContainer: {
        // paddingVertical: 20
    },
    fbOrgaView: {
        marginTop: 36
    },
    fbAvatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 30,

    },
    whatsYourName: {
        marginTop: 15
    },
    signupLabelText: {
        fontSize: 26,
        color: 'white',
        marginLeft: 15
    },
    signupInput: {
        backgroundColor: '#4b7d0a',
        borderColor: 'transparent',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        height: 54,
    },
    signupInpt: {
        color: 'white',
    },
    signupRadioView: {
        marginRight: 35,
        // position: 'relative',
        // left: 35,
        flexDirection: 'row',
        top: 22,
        marginLeft: 35
    },
    radioImage: {
        width: 28,
        height: 28,
        zIndex: 99
    },
    radioText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
        marginTop: 3,
        // marginRight: 50,

    },
    redisterButton: {
        backgroundColor: 'white',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 55,
        // top: 70
    },
});

export default FbLoginPage;