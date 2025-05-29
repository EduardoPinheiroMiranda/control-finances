import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colorPattern } from "../../themes";


const statusBarHeight = Constants.statusBarHeight;


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPattern.white_900,
    },
    scrollView: {
        flex: 1,
    }
});