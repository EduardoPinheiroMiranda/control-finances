import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_8
    },
    scroll: {
        flex: 1,
        paddingTop: 20
    },
    highlight: {
        marginBottom: 40,
    },
    title: {
        color: colors.color_4,
        fontSize: 20,
        fontWeight: 600,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20
    }
});