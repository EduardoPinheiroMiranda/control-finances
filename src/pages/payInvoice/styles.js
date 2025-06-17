import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPattern.white_800
    },

    wallOfValues: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        gap: 20,
        borderBottomWidth: 2,
        borderColor: colorPattern.white_900
    },

    dueDate: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    },

    amount: {
        fontSize: 32,
        fontWeight: "regular",
        color: colorPattern.black_900,
        textAlign: "center"
    }
})