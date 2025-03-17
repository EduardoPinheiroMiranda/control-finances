import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colorPattern } from "../../themes";


const statusBarHeight = Constants.statusBarHeight;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPattern.white_900,
    }
});