import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({

    // body
    container: {
        backgroundColor: "#00000020",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    popUp: {
        backgroundColor: colorPattern.white_900,
        width: 372,

        borderRadius: 15,
        elevation: 5
    },

    // title
    header: {
        width: "100%",
        height: 80,

        borderTopEndRadius: 15,
        borderTopStartRadius: 15,

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },

    title: {
        color: colorPattern.white_800,
        fontSize: 32,
        fontWeight: "bold"
    },

    // describre
    description: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        textAlign: "justify",
        fontSize: 16,
        color: colorPattern.black_900
    },

    // Buttons

    sectionButton: {
        width: "100%",
        flexDirection: "row",
    },

    defaultButton: {
        height: 50,
        backgroundColor: colorPattern.gray_500,
        borderColor: colorPattern.gray_200,
        borderTopWidth: 1,

        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 20,
        color: colorPattern.gray_900
    },

    buttonLeft: {
        borderBottomStartRadius: 15,
        borderRightWidth: 0.5
    },
    buttonRight: {
        borderBottomEndRadius: 15,
        borderLeftWidth: 0.5
    }
});