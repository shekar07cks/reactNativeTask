import React, { Component } from "react";
import {
  Text, View, TouchableOpacity
} from "react-native";
import { Container, Content, ListItem, Icon } from "native-base";
import { DrawerActions } from "react-navigation-drawer";
import { styles } from "./style";
import { theme } from "../../assets/theme";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigation = async (nav) => {
    if (nav === "Logout") {
      // try {
      //   const keys = [
      //     "geospark_userId",
      //     "geospark_description",
      //     "userData",
      //     "userID",
      //   ];
      //   await AsyncStorage.multiRemove(keys);
      // } catch (error) {
      //   debugger;
      //   console.error("Error clearing app data.");
      // }
    } else {
      this.props.navigation.navigate(nav);
    }
  };
  render() {
    let navitems = [
      {
        name: this.props.screenProps.language.Dashboard, nav: "Dashboard", image: <Icon type="AntDesign" name="home"
          style={styles.icon} />,
      },
      {
        name: this.props.screenProps.language.LocationRegistration, nav: "LocationRegistration", image: <Icon type="AntDesign" name="login"
          style={styles.icon} />,
      },
    ];

    return (
      <Container>
        <TouchableOpacity style={styles.container}
          onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Content style={{
            backgroundColor: theme.colors.white,
            // display: "flex",
            // alignContent: "space-around",
            // height: 600,
          }}>
            <View>
              {navitems.map((l, i, ) => {
                return (<ListItem key={i} style={{ height: 50 }} onPress={() => {
                  this.props.navigation.toggleDrawer();
                  this.navigation(l.nav);

                }}>
                  <View style={styles.image}>
                    {l.image}
                    <Text style={styles.text}>{l.name}</Text>
                  </View></ListItem>);
              })
              }
            </View>
            <View>
              <ListItem style={{ height: 50 }} onPress={() => {
                this.props.navigation.toggleDrawer();
                this.navigation("Logout");
              }}>
                <View style={styles.image}>
                  <Icon type="AntDesign" name="logout" style={styles.icon} />
            <Text style={styles.text}>{this.props.screenProps.language.Logout}</Text>
                </View></ListItem>
            </View>
          </Content>
        </TouchableOpacity>
      </Container>
    );
  }
}
