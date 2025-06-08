import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes/index";


export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "#00000010",
    },

    close: {
        height: "45%",
    },

    sectionCalendar: {
        flex: 1,
        backgroundColor: colorPattern.white_700,
        paddingTop: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 5
    },

    calendar: {
        // backgroundColor: colorPattern.white_800,
        // color: "red"
    }
})