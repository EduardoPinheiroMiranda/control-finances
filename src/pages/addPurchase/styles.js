import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPattern.white_800,
        paddingHorizontal: 20,
    },
    
    form: {
        marginTop: 30,
        gap: 30
    },

    valueAndInstallments: {
        flexDirection: "row",
        gap: 20
    },

    label: {
        color: colorPattern.gray_900,
        fontSize: 14,
        fontWeight: "regular"
    },

    sectionDatePurchase: {
        height: 60,
        color: colorPattern.black_900,

        borderWidth: 1,
        borderColor: colorPattern.gray_300,
        borderRadius: 10,
        
        paddingHorizontal: 20,
        paddingVertical: 15,

        marginTop: 5,
        justifyContent: "center"
    },

    textExample: {
        color: colorPattern.gray_300,
        fontSize: 14,
        fontWeight: "regular"
    },

    text: {
        color: colorPattern.black_900,
        fontSize: 14,
        fontWeight: "regular"
    },
    
    sectionButton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    }
});