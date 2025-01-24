import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colors } from "../../themes";


const statusBarHeight = Constants.statusBarHeight;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_8,
    },
    scrollSection: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
    },

    // section main
    scrollView: {
        
    },


});