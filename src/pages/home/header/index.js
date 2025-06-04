import React, { useState, useContext, useEffect } from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import { styles } from "./styles";
import { AuthContext } from "../../../contexts/auth";
import * as FileSystem from "expo-file-system";

// icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { UserCircle } from "../../../assets/svg/userCircle"
import { colorPattern } from "../../../themes";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { useNavigation } from "@react-navigation/native";

// components
import { CustomText } from "../../../components/CustomText";


export function Header(){
    
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const [image, setImage] = useState(null);


    useEffect(() => {
        async function checkImage(){
        
            const imageExist = await FileSystem.getInfoAsync(user.avatar);
            
            if(imageExist.exists){
                setImage(user.avatar);
            }
        }
        checkImage();
    }, [user]);


    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableWithoutFeedback onPress={() => navigation.navigate("profile")}>
                    <View style={styles.sectionUser}>

                        {image === null ? 
                            <UserCircle data={{color: colorPattern.white_800, size: 50}}/>
                            :
                            <Image source={{uri: image}} style={{width: 50, height: 50, borderRadius: 50}}/>
                        }
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
