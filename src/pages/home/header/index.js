import React, { useState } from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";


// icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { UserCircle } from "../../../assets/svg/userCircle"
import { colorPattern } from "../../../themes";
import { defaultPageStyle } from "../../../themes/stylesDefault";


export function Header(){

    const [userName, setUserName] = useState("Eduardo Pinheiro Miranda");

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.sectionUser}>
                    <UserCircle data={{color: colorPattern.white_800, size: 50}}/>
                    <Text style={[defaultPageStyle.text, styles.userName]}>{userName}</Text>
                </View>
                <View>
                    <MaterialIcons name="notifications-none" size={30} color={colorPattern.white_800}/>
                </View>
            </View>
        </View>        
    )
}
