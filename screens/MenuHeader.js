import React, { Component } from "react";
import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  StyleProvider
} from "native-base";
import { withNavigation } from 'react-navigation';
import Communications from 'react-native-communications';

export default class MenuHeader extends Component {
  render() {
    console.log(this.props)
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Body>
        <Right>
          <Button transparent onPress={() => Communications.phonecall('4234866674', true)}>
            <Icon name="call" />
          </Button>
          <Button transparent onPress={() => Communications.textWithoutEncoding('4232270153', 'Does this silly thing work?')}>
            <Icon name="chatbubbles" />
          </Button>
          <Button transparent onPress={() => this.props.navigation.navigate("Landing")}>
            <Icon name="home" />
          </Button>
        </Right>
      </Header>);

  }
}

