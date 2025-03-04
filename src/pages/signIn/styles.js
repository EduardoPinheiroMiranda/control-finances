import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";
import { statusBarHeight } from "../../themes/stylesDefault";


export const styles = StyleSheet.create({
    sectionicon: {
        height: 400,
        width: "100%",
        backgroundColor: colorPattern.blue_300,

        borderBottomEndRadius: 150,
        borderBottomStartRadius: 150,

        paddingTop: statusBarHeight,
        alignItems: "center"
    },

    form: {
        paddingHorizontal: 20,
        gap: 25
    },

    textResetPassword: {
        fontSize: 14,
        fontWeight: "regular",
        color: colorPattern.blue_300,
        marginTop: 15,
        textAlign: "right"
    }

});