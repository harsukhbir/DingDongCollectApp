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
import Drawer from 'react-native-drawer';
import { Menu } from './Menu';
import ImageSlider from 'react-native-image-slider';
import Slider from "react-native-slider";
// import Slideshow from 'react-native-slideshow';
import { Item, Input, Button, Text, Header, Left, Body, Right, Icon, Title, Container, List, ListItem, Thumbnail, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';

export class CollectionsAcceptedDetails extends Component {

    openMenu() {
        this.refs.drawer.open()
    }
    goMyDonation() {
        Actions.MyDonationsPage();
    }
    goPhotoOfReceipt() {
        Actions.PhotoOfReceipt();
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
                        <Left style={{ flex: 0.2 }}>
                            <Button transparent>
                                <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                                    <Image style={styles.headerMenuImage} source={require('../images/menu.png')} />
                                </TouchableOpacity>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{color: 'white'}}>FINALIZE AND TAKE PHOTO</Title>
                        </Body>
                        <Right style={{ flex: 0.2 }}>
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

                    

                        <View style={styles.MainView}>
                            <Text style={styles.foodTxt}>Food Donation</Text>
                            <Text style={styles.lightTxt}>23.01.2018</Text>

                            <View style={styles.txtView}>
                                <Text style={styles.darkTxt}>Category: </Text><Text style={styles.lightTxt}>Food</Text>
                            </View>

                            <View style={styles.txtView1}>
                                <Text style={styles.darkTxt}>Items: </Text><Text style={styles.lightTxt}>Food</Text>
                            </View>

                            <View style={styles.txtView1}>
                                <Text style={styles.darkTxt}>Place: </Text><Text style={styles.lightTxt}>Willow street 23. 3/A</Text>
                            </View>

                            <Text style={styles.txtParag}>Lorem ipsum dolor sit amet, consectetuer adipiscin glit, sed diam nonummy nibn euismodtincidunt utla oreet dolore magna aliquam erat volutpat.
                        </Text>

                        </View>

                        <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={styles.mapImg} source={require('../images/Map.png')} />
                        </View>

                        <Button block style={styles.redisterButton} onPress={this.goPhotoOfReceipt}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Attach Receipt and Finalize</Text>
                        </Button>


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
        height: 200
    },
    redisterButton: {
        backgroundColor: '#6bb409',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        marginTop: 20,
        marginBottom: 20,
    },
    redisterButton1: {
        backgroundColor: 'gray',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 50,
        height: 53,
        marginTop: 10
    },
    txtParag: {
        fontSize: 16,
        color: '#727272',
        textAlign: 'justify',
        lineHeight: 20,
        marginTop: 10
    },
    foodTxt: {
        fontSize: 16,
        color: '#525252',
        fontWeight: 'bold'
    },
    contentContainer: {
        // paddingTop: 20
    },
    MainView: {
        marginLeft: 15,
        marginRight: 15,
    },
    txtView: {
        flexDirection: 'row',
        marginTop: 2
    },
    txtView1: {
        flexDirection: 'row',
    },
    darkTxt: {
        fontSize: 13,
        color: '#525252',
        fontWeight: 'bold'
    },
    lightTxt: {
        fontSize: 13,
        color: '#727272',
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

export default CollectionsAcceptedDetails;