import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";


export function Button({background, action, color, title}){

    async function handlerAction(){
        action();
    } 


    return(
        <TouchableOpacity 
            style={[
                styles.button,
                {
                    backgroundColor: background ? background : colorPattern.blue_300
                }
            ]}
            activeOpacity={0.7}
            onPress={handlerAction}
        >
            <Text 
                style={[
                    defaultPageStyle.text,
                    styles.text,
                    {
                        color: color ? color : colorPattern.white_800
                    }
                ]}
            >
                {title}
            </Text>
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