import { StyleSheet} from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_7,
    },
    summaryOfValues: {
        backgroundColor: colors.color_10,
        width: 372,
        borderRadius: 10,
        padding: 20,
        gap: 20,
        marginTop: 20,
        marginBottom: 20
    },
    invoiceValue: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    value: {
        fontSize: 36,
        fontWeight: "medium",
        color: colors.color_7
    },

    description: {
        gap: 10
    },
    legend: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 16,
        fontWeight: "medium",
        color: colors.color_7
    },

    scroll: {
        flex: 1,
    }
});