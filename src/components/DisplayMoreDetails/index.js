import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colorPattern, colors } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";

// icon 
import AntDesign from '@expo/vector-icons/AntDesign';

// components
import { CustomText } from "../CustomText";


export function DisplayMoreDetails({nextPage, title}){


    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={nextPage}
                activeOpacity={0.4}
            >
                <CustomText style={[
                    defaultPageStyle.text,
                    {
                        color: colorPattern.blue_300, 
                        fontSize:14
                    }
                ]}>
                    {title}
                </CustomText>
                
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
        
    },
    button: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10
    }
});