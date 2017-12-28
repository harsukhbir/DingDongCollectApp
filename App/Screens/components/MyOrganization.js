import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { Container, Header, Content, Button, Text, Item, Input, ActionSheet, Root } from 'native-base';

var MyOrganization = ["Organization 1", "Organization 2", "Organization 3", "Organization 4", "Organization 5", "Cancel"];

class MyOrganization extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = MyOrganization;
