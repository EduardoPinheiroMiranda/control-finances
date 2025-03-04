import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPattern } from "../../themes";


export function Button(props){


    return(
        <TouchableOpacity 
            style={[
                styles.button,
                {
                    backgroundColor: props.background ? props.background : colorPattern.blue_300
                }
            ]}
            activeOpacity={0.7}
        >
            <Text 
                style={[
                    styles.text,
                    {
                        color: props.color ? props.color : colorPattern.white_800
                    }
                ]}
            >
                {props.title}
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
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        fontWeight: "medium"
    }
});