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
    TouchableOpacity, Image, ScrollView, TextInput
} from 'react-native';

import ImageSlider from 'react-native-image-slider';
import Slider from "react-native-slider";
// import Slideshow from 'react-native-slideshow';
import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';
import MyStyle from './MyStyle';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export class DonationAddPage extends Component {

    openMenu() {
        this.refs.drawer.open()
    }
    goMyDonation() {
        Actions.MyDonationsPage();
    }
    render() {
        return (
            <Drawer
                ref="drawer"
                openDrawerOffset={0.4}
                type="static"
                tapToClose={true}
                content={<Menu />} >
                <View style={styles.container}>
                    <Header style={styles.header}>
                        <Left style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                                    <Image style={styles.headerMenuImage} source={require('../images/menu.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ color: 'white' }}>NEW DONATION</Title>
                        </Body>
                        <Right style={{ flex: 0.5 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={this.goMyDonation}>
                                    <Image style={styles.headerBellImage} source={require('../images/notification.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Right>
                    </Header>

                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <ImageSlider style={styles.SliderImg} images={[
                            'http://placeimg.com/640/480/any',
                            'http://placeimg.com/640/480/any',
                            'http://placeimg.com/640/480/any'
                        ]} />

                        <View style={styles.roundButtons}>
                            <Image style={styles.roundImg} source={require('../images/AddBtn.png')} />
                            <Image style={styles.roundImg} source={require('../images/RefreshBtn.png')} />
                        </View>

                        <View style={styles.scView1}>
                            <Text style={styles.titleText}>DESCRIPTION</Text>
                            <TextInput
                                multiline={true}
                                placeholder='Description'
                                style={styles.txtMultiline}
                            />
                        </View>

                        <View style={styles.scView2}>
                            <Text style={styles.titleText}>CATEGORY</Text>
                        </View>

                        <View style={styles.imgViewCenter}>
                            <Image style={styles.imgViewCenterImg1} source={require('../images/BottleDrive.png')} />

                            <Image style={styles.imgViewCenterImg2} source={require('../images/FoodDrive.png')} />
                        </View>
                        <View style={styles.imgViewCenter}>
                            <Text style={styles.imgTxt1}>Bottle Drive</Text>
                            <Text style={styles.imgTxt2}>Food Drive</Text>
                        </View>
                            
                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Image style={styles.raioBtn} source={require('../images/RadioBtnGreen.png')} />
                            <Text style={styles.radioTxt}>Individual</Text>
                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.raioBtn} source={require('../images/RadioBtnGray.png')} />
                            <Text style={styles.radioTxt}>Bags</Text>
                        </View>

                        <View style={styles.QuantityView}>
                            <Text style={styles.QuantityTxt}>Quantity</Text>
                        </View>

                        <Slider
                            // value={this.state.value}
                            style={styles.sliderSize}
                            onValueChange={value => this.setState({ value })}
                            thumbTintColor={'#5fa108'}
                            maximumTrackTintColor={'gray'}
                            minimumTrackTintColor={'#5fa108'}
                        // thumbTouchSize={width:20}
                        />
                        {/* <Text>
                            Value: {this.state.value}
                        </Text> */}

                        <View style={styles.txtView}>
                            <Text style={styles.darkTxt}>Date: </Text><Text style={styles.lightTxt}>02.11.2017</Text>
                        </View>

                        <View style={styles.txtView}>
                            <Text style={styles.darkTxt}>TIME:</Text><Text style={styles.lightTxt}>7 .40 pm</Text>
                        </View>

                        <View style={styles.fbOrgaView}>
                            <Button iconRight block style={styles.dropDownView}>
                                <Text style={styles.dropDownText}>Willow street 23 3/A</Text>
                                <Image style={MyStyle.imgDropDownWhite} source={require('../images/arrowDownWhite.png')} />
                            </Button>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={styles.mapImg} source={require('../images/Map.png')} />
                        </View>

                        <View style={styles.fbOrgaView}>
                            <Button iconRight block style={styles.dropDownView1} onPress={this.goMyDonation}>
                                <Text style={styles.dropDownText1}>Donate to Option</Text>
                                <Image style={MyStyle.imgDropDownWhite} source={require('../images/arrowDownWhite.png')} />
                            </Button>
                        </View>

                    </ScrollView>

                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mapImg: {
        height: 240
    },
    fbOrgaView: {
        marginTop: 20,
        marginBottom: 15,
    },
    dropDownView: {
        backgroundColor: '#343434',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        height: 54,
        borderRadius: 27,
        justifyContent: 'flex-start'
    },
    dropDownView1: {
        backgroundColor: '#5fa108',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        height: 54,
        borderRadius: 27,
        justifyContent: 'flex-start'
    },
    imgDropDown: {
        width: 23,
        height: 23,
        position: "absolute", bottom: 16, right: 20
    },
    dropDownText: {
        color: 'white',
        fontSize: 18
    },
    dropDownText1: {
        color: 'white',
        fontSize: 18,
        position: "absolute", bottom: 16, left: 60
    },
    darkTxt: {
        fontSize: 18,
        color: '#626262',
    },
    lightTxt: {
        fontSize: 18,
        color: '#727272',
    },
    txtView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 5
    },
    sliderSize: {
        margin: 15,
    },
    SliderImg: {
        // height: 300,
        // width: 500,
        // flex:1
    },
    QuantityView: {
        marginTop: 30,
        marginLeft: 15
    },
    QuantityTxt: {
        fontSize: 18,
        color: '#626262',
    },
    raioBtn: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginLeft: 15
    },
    radioTxt: {
        marginTop: 11,
        color: '#727272',
        marginLeft: 10,
        fontSize: 19
    },
    imgTxt1: {
        marginTop: 8,
        marginRight: 40,
        color: '#727272',
    },
    imgTxt2: {
        marginTop: 8,
        marginLeft: 40,
        color: '#727272',
    },
    imgViewCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgViewCenterImg1: {
        width: 74,
        height: 74,
        borderRadius: 37,
        marginTop: 10,
        marginRight: 40
    },
    imgViewCenterImg2: {
        width: 80,
        height: 80,
        borderRadius: 37,
        marginTop: 10,
        marginLeft: 40
    },

    titleText: {
        fontSize: 14,
        color: '#626262',
    },
    txtMultiline: {
        height: 90, borderColor: '#e5e5e5', borderWidth: 1, marginTop: 10, paddingLeft: 5
    },
    scView1: {
        marginRight: 15, marginLeft: 15
    },

    scView2: {
        marginRight: 15, marginLeft: 15, marginTop: 10,
    },
    contentContainer: {
        paddingBottom: 10
    },
    roundButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -15
    },
    roundImg: {
        width: 41,
        height: 41,
        marginRight: 10,
    },
    mainTxt: {
        color: '#626262'
    },
    mainSubTxt: {
        color: '#6c6c6c', fontSize: 12
    },
    txtDark: {
        color: '#626262', fontSize: 12
    },
    txtLight: {
        color: '#6c6c6c', fontSize: 12
    },
    thumbnailImg: {
        width: 86,
        height: 86,
    },

    headerMenuImage: {
        width: 25,
        height: 18,
    },
    headerBellImage: {
        width: 23,
        height: 23,
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

export default DonationAddPage;