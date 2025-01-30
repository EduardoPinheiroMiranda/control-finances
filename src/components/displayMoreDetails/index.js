import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "../../themes";


export function DisplayMoreDetails(props){

    const { title } = props.data;


    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={props.nextPage}
            >
                <Text style={{color: colors.color_1, fontSize:14}}>{title}</Text>
                <AntDesign name="arrowright" size={20} color={colors.color_1}/>
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