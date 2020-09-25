import {Dimensions} from "react-native";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

const colors = {
  primary: "#737373",
  red:"#FF1617",
  blue:"#2387EC",
  gray:"#484747",
  grayLight:"#7070707B",
  black: "#323643",
  white: "#FFFFFF",
  gray1: "#9e9e9e",
  light:"#F6F6F6",
 

};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 20,
  smallPadding: 5,
  margin: 10,
  small: 12,

  // font sizes
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  title: 30,
  header: 16,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  h4: {
    fontSize: sizes.h4,
  },
  h5: {
    fontSize: sizes.h5,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
  heading: {
    fontSize: 25,
  },
  RobotoMedium: "Roboto-Medium",
  RobotoLight: "Roboto-Light",
  RobotoRegular: "normal",
};
const fontWeight = {
  medium: {
    fontWeight:"600",
  },
  bold: {
    fontWeight:"bold",
  },
};

export {colors, sizes, fonts, screenHeight, screenWidth, fontWeight};
