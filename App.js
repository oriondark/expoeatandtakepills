import React from "react";
import { Font } from 'expo'
import { createRootNavigator, createSwitchNavigator } from "./router";
import { isSignedIn } from "./auth";
import { PharmData,PharmList,SortedSchedule } from "./data";



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
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
  componentDidMount() {
    
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    console.log(SortedSchedule());
    if (this.state.loading) {
        return <Expo.AppLoading />;
    }
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn); // createRootNavigator(signedIn);
    return <Layout />;
  }
}