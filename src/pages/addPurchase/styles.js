import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_7
    },
    sectionFromGetData: {
        marginHorizontal: 20,
        gap: 5,
        marginBottom: 30
    },
    label: {
        fontSize: 14,
        color: colors.color_4
    },
    box: {
        borderWidth: 2,
        borderColor: colors.color_9,
        borderRadius: 10,
        paddingHorizontal: 20
    }
});