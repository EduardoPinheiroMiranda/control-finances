import React from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";


// icon
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from  "@expo/vector-icons/Fontisto";

// components
import { Button } from "../button";


export function Alert(props){

    const navigation = useNavigation();
    

    if(props.loading){
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
                    <Pressable onPress={() => props.close()}>
                        <MaterialCommunityIcons name="close" size={20} color={colorPattern.red_900}/>
                    </Pressable>
                </View>
                
                <View style={{marginTop: 20}}>
                    {
                        props.success && (
                            <Fontisto name="check" size={24} color={colorPattern.green_900}/>
                        )
                    }
                </View>

                <View>
                    {
                        props.title && (
                            <Text style={[defaultPageStyle.text, styles.title]}>
                                Atenção
                            </Text>
                        )
                    }
                </View>


                <Text style={[defaultPageStyle.text, styles.description]}>
                    {props.description}
                </Text>
                

                {
                    props.buttonTitle && (
                        <Button 
                            title={props.buttonTitle} 
                            background={colorPattern.red_900}
                            action={props.buttonFunction}
                        />
                    )
                }

            </View>
        </View>
    );
}

