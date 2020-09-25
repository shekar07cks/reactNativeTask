import React, { Component } from "react";
import {StatusBar} from "react-native";
import { theme } from "../assets/theme";
class Statusbar  extends Component {
    render() {
        return (<StatusBar backgroundColor={theme.colors.primary}  barStyle="dark-content"/>  );
    }
}
export default Statusbar;
