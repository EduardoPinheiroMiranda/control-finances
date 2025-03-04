import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export const smallStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16, 
        color: colors.color_6,
        fontWeight: "medium"
    },
    sectionConsumer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    legends: {
        justifyContent: "space-between",
        gap: 8,
    },
    legendsOfValue: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    valueText: {
        color: colors.color_6,
        fontSize: 14,
        fontWeight: 400
    }, 
    sectionButton: {
        marginTop: 14
    }
});

export const bigStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20, 
        color: colors.color_4,
        fontWeight: 500
    },
    sectionConsumer: {
        marginTop: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    legends: {
        width: "100%",
        justifyContent: "space-between",
        gap: 8,
        marginTop: 30,
    },
    legendsOfValue: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5
    },
    valueText: {
        color: colors.color_6,
        fontSize: 16,
        fontWeight: 400
    },
    sectionButton: {
        marginTop: 50,
    },
    button: {
        backgroundColor: colors.color_3,
        height: 50,
        borderRadius: 10,

        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: colors.color_7,
        fontSize: 20
    }
});