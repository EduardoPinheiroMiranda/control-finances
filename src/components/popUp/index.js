import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { colorPattern } from "../../themes";
import { defaultPageStyle } from "../../themes/stylesDefault";


// icon
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

// components
import { Button } from "../button";


export function PopUp(props){

    const navigation = useNavigation();
    

    return(
        <TouchableWithoutFeedback onPress={() => props.visible(false)}>
            <View style={styles.container}>
                <View style={styles.modal}>

                    <MaterialCommunityIcons name="close" size={16} color={} />

                    <AntDesign name="checkcircleo" size={28} color={colorPattern.green_900}/>

                    <Text style={[defaultPageStyle.text, styles.description]}>
                        {props.description}
                    </Text>

                    
                    <Button title="Ir para login"/>

                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

