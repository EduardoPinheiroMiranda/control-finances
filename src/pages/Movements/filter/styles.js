import { StyleSheet } from "react-native";
import { colorPattern } from "../../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    modal:{
        position: "absolute",
        bottom: 0,

        backgroundColor: colorPattern.white_800,

        width: "100%",
        height: 200,

        paddingVertical: 20,
        paddingHorizontal: 20,

        borderRadius: 20,
        elevation: 10
    },

    sectionInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    },
    input: {
        width: 180,

        fontSize: 16,
        textAlign: "center",

        borderRadius: 10,
        borderWidth: 1,
        borderColor: colorPattern.gray_300
    }
})