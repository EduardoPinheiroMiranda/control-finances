import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { CustomText } from "../CustomText";
import { formatCurrency } from "../../utils/formatCurrency";


export function InputText({label, placeholder, value, action, keyboardType, coin, multiline}){

    const [maskedValue, setMaskedValue] = useState("");
    

    useEffect(() => {

        if(coin){
            setMaskedValue(formatCurrency(value));
            return;
        }

        setMaskedValue(value);
    }, []);
    

    function handlerValue(inputValue){
       
        if(coin){
            const onlyNumber = inputValue.replace(/\D/g, "");
            const price = onlyNumber/100;

            setMaskedValue(formatCurrency(price));
            action(price);
            return;
        }
        
        action(inputValue);
        setMaskedValue(inputValue);
    }


    return(
        <View style={styles.container}>
            <CustomText style={[defaultPageStyle.text, styles.text]}>
                {label}
            </CustomText>
            
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colorPattern.gray_300}
                value={maskedValue}
                onChangeText={(value) => handlerValue(value)}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={multiline? 10 : 1}
            />
        </View>
    );
}