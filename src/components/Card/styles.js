import { StyleSheet } from "react-native";


export const stylesSmall = StyleSheet.create({
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
    },
    label: {
        fontSize: 10,
        fontWeight: "regular"
    }
});


export const stylesBig = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",

        width: 307,
        height: 170,
    },
    card: {
        width: 307,
        height: 170,

        borderRadius: 15,
        justifyContent: "space-between",

        paddingVertical: 25,
        paddingLeft: 30,
        paddingRight: 20,

        elevation: 5
    },
    header: {
        flexDirection: "column-reverse",
        justifyContent: "space-between",

        height: 60,
        paddingBottom: 10
    },
    nameCard: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right"
    },

    
    sectionText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "regular"
    },
    label: {
        fontSize: 16,
        fontWeight: "regular",
        marginBottom: 2
    }
});