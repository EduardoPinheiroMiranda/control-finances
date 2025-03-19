import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import { colorPattern, colors } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";


export function DisplayMoreDetails(props){


    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={props.nextPage}
            >
                <Text style={[
                    defaultPageStyle.text,
                    {
                        color: colorPattern.blue_300, 
                        fontSize:14
                    }
                ]}>
                    {props.title}
                </Text>
                
                <AntDesign 
                    name="arrowright" 
                    size={20} 
                    color={colorPattern.blue_300}
                />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10
    }
});