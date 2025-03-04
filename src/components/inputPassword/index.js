import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { colorPattern } from "../../themes";

// icon
import { EyeClose } from "../../assets/svg/eyeClose";
import { EyeOpen } from "../../assets/svg/eyeOpen";

const iconStyles = {size: 30, color: colorPattern.blaCK_900};


export function InputPassword(props){

    const [showPassword, setShowPassword] = useState(false);


    return(
        <View>
            <Text style={styles.text}>{props.label}</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={colorPattern.gray_300}
                    value={props.value}
                    onChangeText={(value) => props.onChangeText(value)}
                    secureTextEntry={!showPassword}
                />
                <View style={styles.icon}>
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? 
                                <EyeOpen data={iconStyles}/> 
                            :
                                <EyeClose data={iconStyles}/>
                        }
                    </Pressable>
                    
                </View>
                
            </View>
            
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
        
        paddingLeft: 20,
        paddingRight: 60,
        paddingVertical: 15,

        marginTop: 5
    },
    icon: {
        position: "absolute",
        top: 23,
        right: 20,
        zIndex: 2
    }
});