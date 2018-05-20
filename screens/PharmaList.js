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
import Communications from 'react-native-communications';
import { PharmData, PharmList } from "../data";
import MenuHeader from '../screens/MenuHeader';
import { createRootNavigator } from "../router";


const PharmaListItem = props => {
  console.log("In PharmacyItem")
  console.log(props.Pharmacy)
  console.log(props.navigator)
  return (
    <View>
      <Text>Name{props.Pharmacy.name}</Text>
      <Text>Phone{props.Pharmacy.phone}</Text>
      <Button onPress={() => props.navigator.navigate("PharmaOverview", { Pharmacy: props.Pharmacy })}><Text>Find it!</Text></Button>
    </View>
    /*  <View>
       <Text>Name{props.Pharmacy.name}</Text>
       <Button onPress={() => Communications.phonecall(props.Pharmacy.phone, true)}>
         <Image style={{ width: 50, height: 50 }} source={require("takepills/img/assets/call.png")} />
       </Button>
       <Button onPress={() => props.navigator.navigate("PharmaOverview", { Pharmacy: props.Pharmacy })}><Text>Find it!</Text></Button>
     </View> */
  );
}

/* export default ({ navigation }) => {
  const PharmacyList = PharmList(0)
  const listItems = PharmacyList.map((item) => {
    let props = {
      key: item.pharmacyid.toString(),
      Pharmacy: item,
      navigator: navigation
    }
    return (

      <PharmaListItem {...props} />
    );
  }

  );
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' }}>
      <MenuHeader {...this.props} />

      {listItems}

    </View>
  );

} */

export default class PharmaList extends Component {
  render() {
    const PharmacyList = PharmList(0)
    const listItems = PharmacyList.map((item) => {
      let props = {
        key: item.pharmacyid.toString(),
        Pharmacy: item,
        navigator: this.props.navigator
      }
      return (
        <PharmaListItem {...props} />
      );
    }
    );

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' }}>
        <MenuHeader {...this.props} />

        {listItems}

      </View>
    );

  }
}

