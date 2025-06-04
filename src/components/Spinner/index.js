import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export function Spinner({size, color}){

    
    return(
        <View style={styles.conteiner}>
            <ActivityIndicator size={size} color={color ? color : colorPattern.blue_300}/>
        </View>
    );
}


export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})