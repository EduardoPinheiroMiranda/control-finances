import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        
    },

    title: {
        color: colorPattern.gray_900,
        fontSize: 14,
        fontWeight: "regular"
    },
    
    sectionPicker: {
        height: 60,

        color: colorPattern.black_900,

        borderWidth: 1,
        borderColor: colorPattern.gray_300,
        borderRadius: 10,
        
        paddingVertical: 10,

        marginTop: 5,

        justifyContent: "center",
    },

    picker: {
        color: colorPattern.black_900,
    }
})