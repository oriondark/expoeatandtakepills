import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { PharmData, PharmList, BigProfile } from "../data";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title={BigProfile(0).name}>
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>{BigProfile(0).initials}</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
      <Button
        backgroundColor="#03A9F4"
        title="Back To IT"
        onPress={() => onSignOut().then(() => navigation.navigate("Landing"))}
      />
    </Card>
  </View>
);