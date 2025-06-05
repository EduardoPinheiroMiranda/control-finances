import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";

// icon
const iconStyles = {size: 30, color: colorPattern.black_900};
import { EyeClose } from "../../assets/svg/eyeClose";
import { EyeOpen } from "../../assets/svg/eyeOpen";

// components
import { CustomText } from "../CustomText";


export function InputPassword({label, placeholder, value, action}){

    const [showPassword, setShowPassword] = useState(false);


    return(
        <View>
            <CustomText style={[defaultPageStyle.text, styles.text]}>
                {label}
            </CustomText>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={colorPattern.gray_300}
                    value={value}
                    onChangeText={(value) => action(value)}
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

        color: colorPattern.black_900,

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