import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "../../themes";


export function DisplayMoreDetails({data}){

    const { title } = data;

    return(
        <View style={styles.container}>
            <Text style={{color: colors.color_1, fontSize:14}}>{title}</Text>
            <AntDesign name="arrowright" size={20} color={colors.color_1}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10
    }
});