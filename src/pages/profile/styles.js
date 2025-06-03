import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPattern.white_900,
        gap: 30
    },

    sectionImage: {
        width: 120,
        height: 120,
        borderRadius: "50%",
        elevation: 3,

        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
        marginVertical: 30
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    sectionData: {
        marginTop: 20,
        gap: 25,
    },

    title: {
        fontSize: 14,
        color: colorPattern.black_900
    },

    fieldName: {
        color: colorPattern.black_900,
        fontSize: 12
    },

    data: {
        color: colorPattern.black_900,
        fontSize: 16
    },

    sectionButton: {
        marginTop: 50,
        gap: 20,
    },

    buttonDefault: {
        backgroundColor: "red",

        height: 60,
        width: "90%",
        margin: "auto",
        borderRadius: 10,

        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 20,
        elevation: 3
    },
    textButton: {
        color: colorPattern.white_800,
        fontSize: 16
    }
});