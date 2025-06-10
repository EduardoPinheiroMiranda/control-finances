import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    text: {
        color: colorPattern.gray_900,
        fontSize: 14,
        fontWeight: "regular"
    },
    input: {
        minHeight: 60,
        color: colorPattern.black_900,

        borderWidth: 1,
        borderColor: colorPattern.gray_300,
        borderRadius: 10,
        
        paddingHorizontal: 20,
        paddingVertical: 15,

        marginTop: 5
    }
});