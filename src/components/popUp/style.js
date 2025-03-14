import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#00000015"
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
    description: {
        fontSize: 20,

        marginTop: 25,
        marginBottom: 50,

    }
});