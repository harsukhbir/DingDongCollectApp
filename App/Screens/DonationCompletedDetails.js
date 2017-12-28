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
import MyStyle from './MyStyle';

export class DonationCompletedDetails extends Component {

    goMyDonation() {
        Actions.MyDonationsPage();
    }
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
                        <Title></Title>
                    </Body>
                    <Right style={{ flex: 0.5 }}>
                    </Right>

                    {/* <Title style={styles.headerTitle}>BOY SCOUTS (FOOD DONATION)</Title> */}
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
    mapImg: {
        height: 328
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
        // marginTop: 20
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
    // headerTitle: {
    //     color: 'white',
    //     marginTop: 10,
    //     position: 'absolute',
    //     left: 70,
    //     bottom: 7.5

    // },
});

export default DonationCompletedDetails;