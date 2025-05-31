import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPattern.white_800
    },

    sectionSearch: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,

        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },

    searchInput: {
        flex: 1,
        height: 45,

        borderRadius: 10,
        borderColor: colorPattern.gray_400,
        borderWidth: 2,

        paddingHorizontal: 20,

        fontSize: 16,
    },

    sectionButtons: {
        flexDirection: "row",
        gap: 15
    },

    buttonSearch: {
        backgroundColor: colorPattern.blue_300,

        width: 40,
        height: 40,

        justifyContent: "center",
        alignItems: "center",
        
        borderRadius: 20,
        zIndex: 2
    }
});