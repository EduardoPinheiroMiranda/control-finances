import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPattern } from "../../themes";

// components
import { CustomText } from "../CustomText";


export function Button({background, action, color, title}){


    return(
        <TouchableOpacity 
            style={[
                styles.button,
                {backgroundColor: background ? background : colorPattern.blue_300}
            ]}
            activeOpacity={0.4}
            onPress={() => action()}
        >
            <CustomText 
                style={[
                    styles.text,
                    {color: color ? color : colorPattern.white_800}
                ]}
            >
                {title}
            </CustomText>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 2
    },
    text: {
        fontSize: 20,
        fontWeight: "medium"
    }
});