import { StyleSheet} from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_7,
    },

    sectionSelectInvoice: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center"
    },
    indicator: {
        backgroundColor: colors.color_9,
        height: 3,
        width: 70,

        marginTop: 5,
        borderRadius: 5
    },
    
    scroll: {
        flex: 1,
    }
});