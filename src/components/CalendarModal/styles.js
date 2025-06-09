import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes/index";


export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "#00000010",
    },

    close: {
        flex: 1,
    },

    sectionCalendar: {
        flex: 2.5,
        backgroundColor: colorPattern.white_700,
        paddingTop: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 5,
    },

    sectionButton: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
    }
})