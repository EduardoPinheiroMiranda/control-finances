import React, { useContext, useState } from "react";
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
import { PopUp } from "../../components/PopUp";


function SectionData({data}){

    const userData = [
        {fieldName: "Name", data: data.name},
        {fieldName: "E-mail", data: data.email},
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

export function Profile(){

    const { user, signOut } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttons, setButtons] = useState([]);


    async function logout() {
        setTitle("Atenção");
        setDescription("Você quer deslogar desta conta ?");
        setButtons([
            {
                title: "Cancelar",
                action: () => setVisible(false)
            },
            {
                title: "Confirmar",
                action: async () =>  await signOut()
            }
        ]);
        setVisible(true);
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

                    <SectionData data={user}/>
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

            <PopUp 
                openModal={visible}
                title={title}
                type={""}
                description={description}
                buttons={buttons}
            />
        </SafeAreaView>
        
    );
}