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
import { Constants, MapView } from 'expo';
import Communications from 'react-native-communications';
import MenuHeader from '../screens/MenuHeader';

export default class PharmaOverview extends React.Component {
    constructor(props) {
        super(props);
        console.log("PharmOver")
        // console.log(props)
        //console.log(this.props.navigation.state)
        const Pharmacy = props.navigation.state.params.Pharmacy
        this.state = {
            isMapReady: false,
            mapRegion: { latitude: Pharmacy.latitude, longitude: Pharmacy.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        };
    }
    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
    onMapLayout = () => {
        this.setState({ isMapReady: true });
    }
    render() {
        console.log(this.props.navigation.state.params.Pharmacy)
        const Pharmacy = this.props.navigation.state.params.Pharmacy
        return (


            /* <Text>ID{Pharmacy.pharmacyid}</Text>
            <Text>Name{Pharmacy.name}</Text>
            <Text>Street{Pharmacy.street}</Text>
            <Text>City{Pharmacy.city}</Text>
            <Text>State{Pharmacy.state}</Text>
            <Text>PostCode{Pharmacy.postcode}</Text>
            <Text>Image{Pharmacy.image}</Text>
            <Text>Phone{Pharmacy.phone}</Text>
            <Text>Latitude{Pharmacy.latitude}</Text>
            <Text>Longitude{Pharmacy.longitude}</Text> */
            <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' }}>
                <MenuHeader {...this.props} />
                
                    <View>
                        <Text>Name{Pharmacy.name}</Text>
                        <Text>Phone{Pharmacy.phone}</Text>
                    </View>
                    <View>
                        <Text>Street{Pharmacy.street}</Text>
                        <Text>City{Pharmacy.city}</Text>
                        <Text>State{Pharmacy.state}</Text>
                        <Text>PostCode{Pharmacy.postcode}</Text>
                    </View>
                    <View>
                        <MapView
                            style={{ alignSelf: 'stretch', height: 200 }}
                            region={this.state.mapRegion}
                            onLayout={this.onMapLayout}
                            onRegionChange={this._handleMapRegionChange}
                        >
                            {this.state.isMapReady &&
                                <MapView.Marker
                                    title={Pharmacy.name}
                                    coordinate={{
                                        latitude: Pharmacy.latitude,
                                        longitude: Pharmacy.longitude
                                    }} />
                            }
                        </MapView>
                    </View>
              
            </View>

        )
    };
}