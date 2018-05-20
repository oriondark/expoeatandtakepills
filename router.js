import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator, 
  createSwitchNavigator,
  DrawerNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Landing from "./screens/Landing";
import CurrentRx from "./screens/CurrentRx";
import PharmaList from "./screens/PharmaList";
import MedicationOverview from "./screens/MedicationOverview";
import PharmaOverview from "./screens/PharmaOverview";
import SideBar from "./screens/SideBar";
import MenuHeader from './screens/MenuHeader';
const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SignedIn = createDrawerNavigator(
  {
   
   Profile :{screen:Profile},
   Landing: { screen: Landing },
   CurrentRx: { screen: CurrentRx },
   PharmaList: { screen: PharmaList },
   MedicationOverview :{screen: MedicationOverview},
   PharmaOverview : {screen: PharmaOverview}
},
{
  initialRouteName: "Landing",
  contentOptions: {
    activeTintColor: "#fff"
  },
  contentComponent: props => <SideBar {...props} />,
 }
);


export const SigneAt = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    },
    Landing: {
      screen: Landing,
      navigationOptions: {
        tabBarLabel: "Landing",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="landing" size={30} color={tintColor} />
        )
      }
    },
    CurrentRx: {
      screen: CurrentRx
      
    },
    PharmaList: {
      screen: PharmaList
      
    },
    MedicationOverview: {
      screen: MedicationOverview 
    },
    
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

/* const AppStack = StackNavigator({ Home: Home, Profile: Profile });
const AuthStack = StackNavigator({ SignIn: SignInScreen });

export default SwitchNavigator = (signedIn=false) =>(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: signedIn ? "AppStack" : "AuthStack"
  }
) */

 export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ); 
};


