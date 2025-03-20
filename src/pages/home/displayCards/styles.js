import { StyleSheet } from "react-native";
import { colorPattern } from "../../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },

    title: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    },

    flatList: {
        flex: 1,

        marginLeft: "-13%",
        marginRight: "-13%"
    }
});
