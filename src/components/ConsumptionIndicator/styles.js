import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const smallStyle = StyleSheet.create({
    title: {
        fontSize: 16, 
        color: colorPattern.gray_900,
        fontWeight: "600"
    },
    sectionConsumer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "5%",
        marginTop: 20,
        marginBottom: 10,
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
        flexDirection: "column",
        alignItems: "center",
        gap: 20,

        marginTop: 20,
    },
    sectionButton: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});