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
import { PharmData, PharmList } from "../data";
import MenuHeader from '../screens/MenuHeader';


const ScheduleItem = props => {
  console.log(props.ScheduleTime)
  return (<Text>{props.ScheduleTime}</Text>);
}

const CurrentRxItem = props => {
  console.log(props.Prescription)
  //const Prescription = props.Prescription
  const Prescription = PharmData(1)
  const scheduleitems = props.Prescription.schedule.dayofweekbasis[0].time.map((item) =>
    <ScheduleItem key={item} ScheduleTime={item} />
  );
  return (
/*     <View>
      <Text>Name{props.Prescription.medication.medicationame}</Text>
      <Text>Dosage{props.Prescription.medication.medicationdosage}</Text>
      <Text>DosageType{props.Prescription.medication.medicationdosagetype}</Text>
      <Text>ID{props.Prescription.prescriptionid}</Text>
      <View>
        {scheduleitems}
      </View>
    </View> */

       <View>
          <Text>{props.Prescription.medication.medicationame}</Text>
          <Text>TAKE {props.Prescription.medication.medicationdosage} {props.Prescription.medication.medicationdosagetype}</Text>
          <View style={{ flexDirection: 'row'}}>
            {scheduleitems}
          </View>
        </View> 

  );
}

/* export default CurrentRx = props => { */
export default class CurrentRx extends Component {
  render() {
    const Prescriptions = PharmData(0).prescriptions
    const listItems = Prescriptions.map((item) =>
      <CurrentRxItem key={item.prescriptionid.toString()} Prescription={item} />
    );
    return (

      <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' }}>
        <MenuHeader {...this.props} />
        {listItems}
      </View>
    );

  }
}
