import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { CustomText } from "../CustomText";


export function InputText({label, placeholder, value, action}){


    return(
        <View>
            <CustomText style={[defaultPageStyle.text, styles.text]}>
                {label}
            </CustomText>
            
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colorPattern.gray_300}
                value={value}
                onChangeText={(value) => action(value)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        color: colorPattern.gray_900,
        fontSize: 14,
        fontWeight: "regular"
    },
    input: {
        height: 60,

        color: colorPattern.black_900,

        borderWidth: 1,
        borderColor: colorPattern.gray_300,
        borderRadius: 10,
        
        paddingHorizontal: 20,
        paddingVertical: 15,

        marginTop: 5
    }
});