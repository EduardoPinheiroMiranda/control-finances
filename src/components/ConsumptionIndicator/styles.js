import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const smallStyle = StyleSheet.create({
    title: {
        fontSize: 16, 
        color: colorPattern.gray_900,
        fontWeight: "600"
    },
    sectionConsumer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    legends: {
        justifyContent: "space-between",
        width: 180,
        gap: 5,
    },
    legendsOfValue: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5
    },
    valueText: {
        color: colorPattern.black_900,
        fontSize: 16,
        fontWeight: "400"
    }, 
    sectionButton: {
        display: "none"
    }
});

export const bigStyle = StyleSheet.create({
    title: {
        fontSize: 20, 
        color: colorPattern.black_900,
        fontWeight: "400"
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
        color: colorPattern.black_900,
        fontSize: 16,
    },
    sectionButton: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});