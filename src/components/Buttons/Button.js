import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { commonstyle, theme } from "../../assets/theme";

export default function Button(props) {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.button, commonstyle.alignCenter,
          ]}
          onPress={()=>props.onPress()}
        >
          <Text style={[commonstyle.p5, commonstyle.ml35, commonstyle.mr35, { color: theme.colors.white }]}>{props.buttonName}</Text>
        </TouchableOpacity>
      </>
    );
}
