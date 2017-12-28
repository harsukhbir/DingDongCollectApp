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

export class SignupPolicyPage extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left style={{ flex: 0.3 }}>
                        <Button transparent>
                            <TouchableOpacity onPress={() => this.goBack()} style={styles.button}>
                                <Image style={MyStyle.backImageStyleHeader} source={require('../images/backArrow.png')} />
                            </TouchableOpacity>
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: 'white' }}>TERMS AND POLICIES</Title>
                    </Body>
                    <Right style={{ flex: 0.3 }}>
                    </Right>
                </Header>
                <ScrollView >
                    <View style={styles.MainView}>
                        <Text style={styles.txtTitle}>TERMS</Text>
                        <Text style={styles.txtCont}>Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nagna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos- trud exerci tation ullamcorper suscipit labortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hen-drerit in valputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facili</Text>

                        <Text style={styles.txtTitle}>POLICIES</Text>
                        <Text style={styles.txtCont}>Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nagna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos- trud exerci tation ullamcorper suscipit labortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hen-drerit in valputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis ..dolore te feugait nulla facili</Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        height: 51,
        backgroundColor: '#5fa108',
        borderBottomColor: '#558508', borderStyle: 'solid', borderBottomWidth: 2
    },
    MainView: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25
    },
    txtTitle: {
        color: '#727272',
        fontSize: 22,

    },
    txtCont: {
        color: '#929292',
        marginBottom: 25,
        marginTop: 7
    },
})

export default SignupPolicyPage;