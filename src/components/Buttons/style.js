import {StyleSheet, Dimensions} from "react-native";
import { commonstyle, theme } from "../../assets/theme";


const styles = StyleSheet.create({
button:{
    backgroundColor:theme.colors.primary,
    marginTop:20,
    height:40,
    borderRadius:17,
    alignContent:"center",
    alignItems:"center",
    elevation:5,
},
roundButton:{
    width:70,
    height:70,
    borderRadius:70,
    
},
text:{
    width:90,
    textAlign:'center',
    color:theme.colors.black,
    
}
});
export {styles};
