import { StyleSheet } from "react-native";
import { colorPattern } from "../../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",

        backgroundColor: "#00000010"
    },
    modal:{
        position: "absolute",
        bottom: 0,

        backgroundColor: colorPattern.white_800,
        width: "100%",

        paddingVertical: 20,
        paddingHorizontal: 20,

        borderRadius: 20,
        elevation: 10,

        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        width: "100%",

        flex: 1,
        gap: 10,

        marginBottom: 30
    },
    sectionInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    picker: {
        width: 180,
        borderWidth: 1,
        borderColor: "red"
    },
    label: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    },
    input: {
        width: 180,

        fontSize: 14,
        textAlign: "center",

        borderRadius: 10,
        borderWidth: 1,
        borderColor: colorPattern.gray_300
    }
})