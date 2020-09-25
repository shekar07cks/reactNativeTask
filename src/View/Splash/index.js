import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Switch,
  ViewPagerAndroidComponent,
} from "react-native";
import { Text, Footer } from "native-base";
import Statusbar from "../../components/Stausbar";
import { commonstyle, theme } from "../../assets/theme";
import { styles } from "./style";
import Button from "../../components/Buttons/Button";

export default class Splash extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      language: false,
    };
  }

  // async componentDidMount() {
  //   const languageStatus = await AsyncStorage.getItem("language");
  //   this.changeLanguage(languageStatus === "es" ? true : false);
  // }

  // changeLanguage = async (status) => {
  //   let language = status ? "es" : "en";
  //   PubSub.publish("notify", language);
  //   this.setState({ language: status });
  //   await AsyncStorage.setItem("language", language);
  // }

  render() {
    return <SafeAreaView style={commonstyle.container}>
      <Statusbar />
      <ScrollView>
        <View style={commonstyle.alignCenter}>
          {/* <Image source={Logo} style={[styles.logo, commonstyle.mt60]} /> */}
          <Text style={[{ fontSize: 25 }, styles.text]}>{this.props.screenProps.language.SplashContent}</Text>
          <View style={commonstyle.mt60}>
            <Button buttonName={this.props.screenProps.language.Start} onPress={() => this.props.navigation.navigate("Login")} />
          </View>
          <View style={[commonstyle.row, commonstyle.mt20]}>
            <Text>English</Text>
            <Switch
              value={this.state.language}
              thumbColor="#fff"
              trackColor="rgb(40,195,69)"
              onValueChange={this.changeLanguage}
              style={[commonstyle.ml3, commonstyle.mr5]}
            />
            <Text>Spanish</Text>
          </View>

        </View>
      </ScrollView>
      <Footer style={[commonstyle.mb20, { backgroundColor: "transparent" }]}>
        <View style={commonstyle.alignCenter}>
          <Text style={[commonstyle.mt20, { color: theme.colors.primary, fontSize: 13 }]}>{this.props.screenProps.language.PleaseCall}</Text>
          <Text style={[{ color: theme.colors.blue, textDecorationLine: "underline" }]}>+1 832-201-8508</Text>
        </View>
      </Footer>
    </SafeAreaView>;
  }
}



