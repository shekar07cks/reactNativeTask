import { StyleSheet } from "react-native";
import { theme } from "../../assets/theme";

const styles = StyleSheet.create({
    icon: {
        fontSize: 15,
        marginTop: 8,
        // marginBottom: 8,
        color: theme.colors.primary,
    },
    container: {
        borderWidth: 0,
        flex: 1,
        backgroundColor: "white",
    },
    image:{
        flexDirection: "row",
        backgroundColor: "#fff0",
        marginRight: 50,
    },
    text:{
        fontSize: 15,
        marginLeft: 16,
        marginTop: 8,
        color: "#000",
    },



});
export { styles };
