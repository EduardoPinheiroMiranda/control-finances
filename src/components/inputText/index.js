import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export function InputText(props){


    return(
        <View>
            <Text style={styles.text}>{props.label}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor={colorPattern.gray_300}
                value={props.value}
                onChangeText={(value) => props.onChangeText(value)}
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

        color: colorPattern.blaCK_900,

        borderWidth: 1,
        borderColor: colorPattern.gray_300,
        borderRadius: 10,
        
        paddingHorizontal: 20,
        paddingVertical: 15,

        marginTop: 5
    }
});