import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { Constants, Camera, FileSystem, Permissions, MapView } from 'expo';
import getTheme from 'takepills/native-base-theme/components';
import material from 'takepills/native-base-theme/variables/material';
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
    StyleProvider,
    Content
} from "native-base";
import Communications from 'react-native-communications';
import MenuHeader from "takepills/screens/MenuHeader";


var customData = require('takepills/data/sched.json');
export default class InsuranceInfo extends Component {
    state = {
        frontpic: `${FileSystem.documentDirectory}photos/front.jpg`,
        backpic: `${FileSystem.documentDirectory}photos/back.jpg`
    };


    render() {
        console.log(this.state.frontpic);
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                <MenuHeader navigation={this.props.navigation} />
                    <Content>
                        <Card>
                            <CardItem>
                                <Image style={{ width: 200, height: 200 }} source={{ uri: this.state.frontpic }} />
                                <Button transparent onPress={() => this.props.navigation.navigate('Camera', { solidpic: 'front' })}>
                                    <Icon name="menu" /><Text>Front Of Card</Text>
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image style={{ width: 200, height: 200 }} source={{ uri: this.state.backpic }} />
                                </Body>
                                <Left>
                                    <Button transparent onPress={() => this.props.navigation.navigate('Camera', { solidpic: 'back' })}>
                                        <Icon name="menu" /><Text>Back Of Card</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    //Daily Schedule
    itemContainer: {
        padding: 7,
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        // yellow main container
        borderColor: '#FFFF00',
    },
    infoContainer: {
        padding: 10,
        alignSelf: 'stretch',
        flex: 0.8,
        borderRadius: 4,
        borderWidth: 0.5,
        // green info container
        borderColor: '#00FF00',
    },
    topRow: {
        padding: 3,
        //fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        borderWidth: 0.5,
        // red top row
        borderColor: '#FF0000',
    },
    bottomRow: {
        marginTop: 6,
        padding: 3,
        //fontSize: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        // blue bottom row
        borderColor: '#0000FF',
    },
    timeText: {
        marginLeft: 7,
    },
    drugName: {
    },
    pillText: {
        marginLeft: 5,
    },
    doneContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
        borderRadius: 4,
        borderWidth: 0.5,
        // black for notification
        borderColor: '#000000',
    }
});