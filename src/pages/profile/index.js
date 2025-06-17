import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { colorPattern } from "../../themes";
import { AuthContext } from "../../contexts/auth";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { ExternalCalls } from "../../services/externalCalls";
import { useNavigation } from "@react-navigation/native";
import { checkCallAnswers } from "../../services/checkCallAnswers";

// icon
import NoPhoto from "../../assets/svg/noPhoto.svg";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from '@expo/vector-icons/Ionicons';
import LockPassword from "../../assets/svg/lock-password.svg";

// components
import { CustomText } from "../../components/CustomText";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";


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
    
    const externalCalls = new ExternalCalls();
    const navigation = useNavigation();

    const { user, signOut, getUser } = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttons, setButtons] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);


    useEffect(() => {

        async function checkImage(){

            const imageExist = await FileSystem.getInfoAsync(user.avatar);

            if(imageExist.exists){
                setImage(user.avatar);
            }
        }
        checkImage();

    }, [user]);


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

    async function selectPhoto(){

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            selectionLimit: 1,
            quality: 1,
        });

        
        if(!result.canceled){
            
            const uri = result.assets[0].uri;
            const fileName = uri.split("/").pop();
            const newPath = FileSystem.documentDirectory + fileName;
            
            
            try{

                setShowSpinner(true);
                const body = { avatar: newPath };
                const response = await externalCalls.PUT("/user/updateAvatar", true, body);
                const messageContent = checkCallAnswers({response, closePopUp: setVisible, signOut});
                setShowSpinner(false);


                if(response.statusCode !== 200){
                    setTitle(messageContent.title);
                    setDescription(messageContent.description);
                    setButtons(messageContent.buttons);
                    setVisible(true);
                }
                

                const imageExist = await FileSystem.getInfoAsync(user.avatar);

                if(imageExist.exists){
                    await FileSystem.deleteAsync(user.avatar);
                }
                

                await FileSystem.copyAsync({
                    from: uri,
                    to: newPath
                })
                
                await getUser();

            }catch(err){
                console.log(err);
                setTitle("Ops....");
                setDescription("Houve um pequeno problema para salvar sua imagem, tente novamente.");
                setButtons([{
                    title: "Ok",
                    action: () => setVisible(false)
                }]);
                setVisible(true);
            }
        }
    }

    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <View >
            
                <TouchableOpacity
                    onPress={selectPhoto}
                    style={styles.sectionImage}
                >
                    {!image ?
                        <NoPhoto/> 
                            :
                        <Image source={{uri: image}} style={styles.image}/>
                    }
                </TouchableOpacity>
                

                <View style={[defaultPageStyle.box]}>

                    <View style={styles.header}>
                        <CustomText style={styles.title}>Dados pessoais</CustomText>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => navigation.navigate("updateProfile")}
                        >
                            <FontAwesome6 name="edit" size={18} color={colorPattern.black_900}/>
                        </TouchableOpacity>
                        
                    </View>

                    <SectionData data={user}/>
                </View>


                <View style={styles.sectionButton}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate("updatePassword")}
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

            <Spinner showSpinner={showSpinner} size={38}/>
            
        </SafeAreaView>
        
    );
}