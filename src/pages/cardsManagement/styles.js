import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPattern.white_800,
        paddingHorizontal: 20,
        paddingTop: 30
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colorPattern.gray_900
    },
    
    sectionCards: {
        margin: "auto",
        paddingTop: 20
    }
});