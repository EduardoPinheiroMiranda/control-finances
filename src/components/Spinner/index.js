import React from "react";
import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";
import { colorPattern } from "../../themes";


export function Spinner({showSpinner, size, color}){

    
    return(
        <Modal transparent={true} animationType="fade" visible={showSpinner}>
            <View style={styles.conteiner}>
                <ActivityIndicator size={size} color={color ? color : colorPattern.blue_300}/>
            </View>
        </Modal>
    );
}


export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})