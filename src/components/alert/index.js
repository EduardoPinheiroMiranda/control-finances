import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";


// icon
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

// components
import { Button } from "../button";


export function Alert(props){

    // title
    // description
    // button
    // alert
    // funçãO DO BUTTOM

    const navigation = useNavigation();
    

    return(
        <View style={styles.container}>
            <View style={styles.modal}>

                <View style={styles.icon}>
                    <Pressable onPress={() => props.close()}>
                        <MaterialCommunityIcons name="close" size={20} color={colorPattern.red_900}/>
                    </Pressable>
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

