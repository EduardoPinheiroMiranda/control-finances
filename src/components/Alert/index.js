import React from "react";
import { View, Pressable, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";

// icon
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from  "@expo/vector-icons/Fontisto";

// components
import { Button } from "../Button";
import { CustomText } from "../CustomText";


export function Alert({loading, success, close, title, description, buttonTitle, buttonFunction}){

    const navigation = useNavigation();
    

    if(loading){
        return(
            <View style={styles.container}>
                <View style={styles.modal}>
                    <ActivityIndicator size={64} color={colorPattern.blue_900}/>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.modal}>

                <View style={styles.icon}>
                    <Pressable onPress={() => close()}>
                        <MaterialCommunityIcons name="close" size={20} color={colorPattern.red_900}/>
                    </Pressable>
                </View>
                
                <View style={{marginTop: 20}}>
                    {
                        success && (
                            <Fontisto name="check" size={24} color={colorPattern.green_900}/>
                        )
                    }
                </View>

                <View>
                    {
                        title && (
                            <CustomText style={[styles.title]}>
                                Atenção
                            </CustomText>
                        )
                    }
                </View>


                <CustomText style={[styles.description]}>
                    {description}
                </CustomText>
                

                {
                    buttonTitle && (
                        <Button 
                            title={buttonTitle} 
                            background={colorPattern.red_900}
                            action={buttonFunction}
                        />
                    )
                }

            </View>
        </View>
    );
}

