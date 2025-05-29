import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",

        width: 168,
        height: 130,
    },
    card: {
        width: 160,
        height: 90,

        borderRadius: 10,
        padding: 15,
        justifyContent: "space-between",

        elevation: 5
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    nameCard: {
        fontSize: 14,
        fontWeight: "medium"
    },

    
    sectionText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 12,
        fontWeight: "regular"
    }
});
