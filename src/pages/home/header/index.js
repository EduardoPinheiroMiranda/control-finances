import React, { useState } from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";


// icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { UserCircle } from "../../../assets/svg/userCircle"
import { colors } from "../../../themes";


export function Header(){

    const [userName, setUserName] = useState("Eduardo Pinheiro Miranda");

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.sectionUser}>
                    <UserCircle data={{color: colors.color_7, size: 50}} />
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <View>
                    <MaterialIcons name="notifications-none" size={30} color={colors.color_7} />
                </View>
            </View>
        </View>        
    )
}
