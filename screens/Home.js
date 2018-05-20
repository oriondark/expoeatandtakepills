import React from "react";
import { ScrollView,  Linking, View } from "react-native";
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

const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    image: require("../img/tmp/1.jpg"),
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    image: require("../img/tmp/2.jpg"),
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    image: require("../img/tmp/3.jpg"),
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    image: require("../img/tmp/4.jpg"),
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

export default () => (
    <Container>
  <View style={{ flex: 1 }}>

{images.map(({ name, image, url, key }) => (
    <Card title="All done!">
  <Text>Photo by {name}.</Text>
  <Button onPress={() => Linking.openURL(url)}><Text>{image}</Text></Button>
  <Thumbnail source={{uri: 'Image URL'}} />
</Card>
))}
  {/*   
      {images.map(({ name, image, url, key }) => (
        <Card>
         
         <Text style={{ marginBottom: 10 }}>
            Photo by .
          </Text>
          <Button onPress={() => Linking.openURL(url)}><Text>View Now</Text></Button>
         
          />
        </Card>
      ))}
    */}
  </View>
  </Container>
);