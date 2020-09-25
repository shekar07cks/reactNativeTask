import {StyleSheet, Dimensions} from "react-native";
// import {theme} from "./theme";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = screenWidth;
export const itemWidth = slideWidth - 20;

const commonstyle = StyleSheet.create({
  mt3: {
    marginTop: 3,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt25: {
    marginTop: 25,
  },
  mt28: {
    marginTop: 28,
  },
  mt30: {
    marginTop: 30,
  },
  mt35: {
    marginTop: 35,
  },
  mt40: {
    marginTop: 40,
  },
  mt45: {
    marginTop: 45,
  },
  mt60: {
    marginTop: 60,
  },
  ml3: {
    marginLeft: 3,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml12: {
    marginLeft: 15,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  ml28: {
    marginLeft: 28,
  },
  ml30: {
    marginLeft: 30,
  },
  ml35: {
    marginLeft: 35,
  },
  ml50: {
    marginLeft: 50,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
  mr3: {
    marginRight: 3,
  },
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr18: {
    marginRight: 18,
  },
  mr20: {
    marginRight: 20,
  },
  mr35: {
    marginRight: 35,
  },

  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt15: {
    paddingTop: 15,
  },
  pl5: {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl15: {
    paddingLeft: 15,
  },
  pl20: {
    paddingLeft: 20,
  },
  bb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb15: {
    paddingBottom: 15,
  },
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pr15: {
    paddingRight: 15,
  },
  p5 : {
    padding: 5,
  },
  p10 : {
    padding: 10,
  },
  p15 : {
    padding: 15,
  },
  p20 : {
    padding: 20,
  },
  p25 : {
    padding: 25,
  },
  p35 : {
    padding: 35,
  },
  m5 : {
    margin: 5,
  },
  m10 : {
    margin: 10,
  },
  m15 : {
    margin: 15,
  },
  m20 : {
    margin: 20,
  },
  marginTop5:{
    marginTop:5,
  },
  marginTop10:{
    marginTop:10,
  },
  marginTop15:{
    marginTop:15,
  },
  marginTop20:{
    marginTop:20,
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: 5,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  fs14: {
    fontSize: 14,
  },
  fs18: {
    fontSize: 18,
  },
  // verticalMiddle: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  // horizontallyMiddle: {
  //   margin: "0 auto",
  // },
  // verticalhorizontalMiddle: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  flex: {
    flex: 1,
  },
  fDirectionRow: {
    flexDirection: "row",
  },
  fAlignCenter: {
    alignItems: "center",
  },
  alignCenter:{
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
  },
  verticalhorizontalMiddle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },

// backGround color
  backgroundColorWhite: {
    backgroundColor: "#fff",
  },
  backgroundColorPurpul: {
    backgroundColor: "#7e67d2",
  },
  backgroundColorGray: {
    backgroundColor: "#ccc",
  },

// color
  colorGray: {
    color: "#ccc",
  },
  colorPurpul: {
    color: "#7e67d2",
  },
  colorGreen: {
    color: "#56B638",
  },
  colorDarkGray: {
    color: "#E1E1E1",
  },
  colorBlack: {
    color: "#000",
  },
  colorWhite: {
    color: "#fff",
  },
 textAlign:{
   textAlign:"center",
 },
 card: {
  borderRadius: 8,
  // backgroundColor: theme.colors.white,
  padding: 10,
  marginTop: 20,
  marginBottom: 10,
  elevation: 1,
  width: screenWidth - 40,
},
container:{
  width:"100%",
  height:"100%",
  backgroundColor:"#fff",
},
logo:{
  width:200,
  height:200,
},
fontFamilyRobotoMedium:{
  // fontFamily:theme.fonts.RobotoMedium,
},
fontFamilyRobotoLight:{
  // fontFamily:theme.fonts.RobotoLight,
},
});
export default commonstyle;
