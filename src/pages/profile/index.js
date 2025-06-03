import React, { useContext } from "react";
import { View, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { colorPattern } from "../../themes";
import { AuthContext } from "../../contexts/auth";

// icon
import NoPhoto from "../../assets/profile/noPhoto.svg";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from '@expo/vector-icons/Ionicons';
import LockPassword from "../../assets/svg/lock-password.svg";


// components
import { CustomText } from "../../components/CustomText";


export function Profile(){

    const { user, signOut } = useContext(AuthContext);


    function SectionData(){

        const userData = [
            {fieldName: "Name", data: user.name},
            {fieldName: "E-mail", data: user.email},
        ];

        return(
            <View style={styles.sectionData}>
                {
                    userData.map((data) => {
                        return (
                            <View key={data.fieldName}>
                                <CustomText style={styles.fieldName}>{data.fieldName}</CustomText>
                                <CustomText style={styles.data}>{data.data}</CustomText>
                            </View>
                        );
                    })
                }
            </View>
        );
    }

    async function logout() {
        Alert.alert(
            "Atenção",
            "Deseja deslogar do aplicativo ?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: async () => await signOut()
                }
            ]
        )
    }

    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <View >
            
                <View style={styles.sectionImage}>
                    <NoPhoto/>
                </View>
                

                <View style={[defaultPageStyle.box]}>

                    <View style={styles.header}>
                        <CustomText style={styles.title}>Dados pessoais</CustomText>
                        <FontAwesome6 name="edit" size={18} color={colorPattern.black_900}/>
                    </View>

                    <SectionData/>
                </View>


                <View style={styles.sectionButton}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        style={[styles.buttonDefault, {backgroundColor: colorPattern.blue_300}]}
                    >
                        <LockPassword/>
                        <CustomText style={styles.textButton}>Redefinir senha</CustomText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPressOut={logout}
                        activeOpacity={0.4}
                        style={[styles.buttonDefault, {backgroundColor: colorPattern.red_900}]}
                    >
                        <Ionicons name="exit-outline" size={25} color={colorPattern.white_800}/>
                        <CustomText style={styles.textButton}>Sair</CustomText>
                    </TouchableOpacity>
                </View>
            
            </View>
        </SafeAreaView>
        
    );
}