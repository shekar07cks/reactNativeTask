import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  Dashboard,
  // Splash,
  Login,
  Sidebar,
} from "../View";
import { Dimensions } from "react-native";

import en from "../assets/locales/en";
// import ar_EG from "../assets/locales/ar_EG";
// import kn_IN from "../assets/locales/kn_IN";
// import hi_IN from "../assets/locales/hi_IN";
// import zh_CN from "../assets/locales/zh_CN";
// import fr_FR from "../assets/locales/fr_FR";


const NonAuthStack = createStackNavigator(
  {
    // Splash:Splash,
    Login:Login,
    Sidebar:Sidebar,
    Dashboard: Dashboard,
  },
  {
    initialRouteName: "Login",
  }
);
const Drawer = ({
  Dashboard: {screen:Dashboard},
});
const DrawerStack = createDrawerNavigator(
  Drawer,
  {
    drawerPosition: "left",
    contentComponent: Sidebar,
    drawerWidth: Dimensions.get("window").width - 100,
  }
);
const AppNavigator = createSwitchNavigator(
  {
    mainDrawer: DrawerStack,
    NonAuthStack: NonAuthStack,
  },
  {
    initialRouteName: "NonAuthStack",
    headerMode: "none",
  }
);

const Routes = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenPropsData: en,
    };
  }

  componentWillMount() {
    // PubSub.subscribe("notify", (message, selectedLanguage) => {
    //     console.log("data", selectedLanguage);
    //     this.switchLangauage(selectedLanguage);
    // });
  }

  // switchLangauage = (selectedLanguage) => {
  //   if (selectedLanguage === null) {
  //     this.setState({
  //       screenPropsData: en,
  //     });
  //   }
  //   if (selectedLanguage === "en") {
  //     this.setState({
  //       screenPropsData: en,
  //     });
  //   } else if (selectedLanguage === "es") {
  //     this.setState({
  //       screenPropsData: es,
  //     });
  //   } else if (selectedLanguage === "ar_EG") {
  //     this.setState({
  //       screenPropsData: ar_EG,
  //     });
  //   } else if (selectedLanguage === "kn_IN") {
  //     this.setState({
  //       screenPropsData: kn_IN,
  //     });
  //   } else if (selectedLanguage === "hi_IN") {
  //     this.setState({
  //       screenPropsData: hi_IN,
  //     });
  //   } else if (selectedLanguage === "zh_CN") {
  //     this.setState({
  //       screenPropsData: zh_CN,
  //     });
  //   } else if (selectedLanguage === "fr_FR") {
  //     this.setState({
  //       screenPropsData: fr_FR,
  //     });
  //   }
  // }


  render() {
    const screenProps = {
      language: this.state.screenPropsData,
    };
    return <Routes screenProps={screenProps} />;
  }
}
