import { StyleSheet } from "react-native";
import { colors } from "../../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_7,
    },
    searchSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,

        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },
    searchInput: {
    
        height: 40,
        width: 300,

        borderRadius: 10,
        borderColor: colors.color_9,
        borderWidth: 2,

        paddingRight: 10,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,

        fontSize: 16,
    },
    buttonSearch: {
        backgroundColor: colors.color_3,

        width: 40,
        height: 40,

        alignItems: "center",
        justifyContent: "center",
        
        borderRadius: "50%",
    }
});