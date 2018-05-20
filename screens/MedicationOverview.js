import React, { Componentt } from "react";
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
import MenuHeader from "./MenuHeader";
import { PharmData, PharmList,MedicationInformation } from "../data";

export default MedicationOverview = props => {
    const Medication = MedicationInformation()
    console.log(props.Medication)
    return (
        <View>
            <MenuHeader />
            <Text>ID{Medication.medicationid}</Text>
            <Text>Name{Medication.medicationame}</Text>
            <Text>Dosage{Medication.medicationdosage}</Text>
            <Text>DosageType{Medication.medicationdosagetype}</Text>
            <Text>Amount{Medication.medicationmeasuredamount}</Text>
            <Text>Image{Medication.medicationimage}</Text>
            <Text>Overview{Medication.medicationoverview}</Text>
            <Text>SideEffects{Medication.medicationsideeffects}</Text>
            <Text>FAQ{Medication.medicationfaq}</Text>
            <Text>Form{Medication.medicationdosageformname}</Text>
            <Text>Units{Medication.medicationingredientunit}</Text>
            <Text>Strength{Medication.medicationstrength}</Text>
            <Text>Substances{Medication.medicationsubstances}</Text>
        </View>

    )
}