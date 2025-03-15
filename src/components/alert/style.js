import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: colorPattern.white_800,
        width: "90%",

        paddingHorizontal: 15,
        paddingVertical: 15,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: 10,
        elevation: 5
        
    },
    icon: {
        width: "100%",
        alignItems: "flex-end"
    },

    title: {
        fontSize: 24,
        color: colorPattern.red_900,
        fontWeight: "bold"
    },

    description: {
        fontSize: 16,

        marginTop: 20,
        marginBottom: 30,

    }
});