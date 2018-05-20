import React, { Componentt } from "react";
import { Font } from 'expo'
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
  StyleProvider,

} from "native-base";
import Communications from 'react-native-communications';
import CurrentRx from './screens/CurrentRx';
import PharmaOverview from './screens/PharmaOverview';
import PharmaList from './screens/PharmaList';
import MedicationOverview from './screens/MedicationOverview';
import MenuHeader from './screens/MenuHeader';
import Home from './screens/Home';
import { PharmData,PharmList } from "./data";






export default class App extends React.Component {
  constructor(props) {
    super(props);
    // var omniData = require('takepills/data/sched.json');
    this.state = {
      pharmData: PharmData(0),
      pharmList: PharmList(0),
      routeName: "Landing",
      loading: true
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return (<View><Text>Loading</Text></View>);
    }

    return (

      <View>
        <PharmaOverview Pharmacy={this.state.pharmList[0]} />  
        
        
      </View>

      /*   <View>
      <Home />
          <MenuHeader />
          <PharmaList PharmacyList={this.state.pharmList} />
        <CurrentRx Prescriptions={this.state.pharmData.prescriptions} />
          <PharmaOverview Pharmacy={this.state.pharmList[0]} />
          <MedicationOverview Medication={this.state.pharmData.prescriptions[0].medication} />
        </View> */





    );
  }
}



