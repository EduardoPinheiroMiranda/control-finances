import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        
    },

    header: {
        width: "100%",
        height: 30,
        backgroundColor: colorPattern.white_900,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16,
        color: colorPattern.black_900
    },

    buttonNavigation:{
        paddingRight: 15,
        marginTop: 10
    },
});