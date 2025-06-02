import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback} from "react-native";
import { styles } from "./styles";

// icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { UserCircle } from "../../../assets/svg/userCircle"
import { colorPattern } from "../../../themes";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { AuthContext } from "../../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

// components
import { CustomText } from "../../../components/CustomText";


export function Header(){

    const { user } = useContext(AuthContext);
    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableWithoutFeedback onPress={() => navigation.navigate("profile")}>
                    <View style={styles.sectionUser}>
                        <UserCircle data={{color: colorPattern.white_800, size: 50}}/>
                        <CustomText style={[defaultPageStyle.text, styles.userName]}>{user.name}</CustomText>
                    </View>
                </TouchableWithoutFeedback>
                
                <View>
                    <MaterialIcons name="notifications-none" size={30} color={colorPattern.white_800}/>
                </View>
            </View>
        </View>        
    )
}
