import React, { useContext, useEffect, useState } from "react";
import { Keyboard, Modal, SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { ExternalCalls } from "../../services/externalCalls";
import { useNavigation } from "@react-navigation/native";

// components
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";
import { checkCallAnswers } from "../../services/checkCallAnswers";


export function UpdateProfile(){

    const externalCalls = new ExternalCalls();
    const navigation = useNavigation();

    const { user, getUser, signOut } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttons, setButtons] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);


    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, []);


    async function updateData(){
        
        const sameName = name === user.name;
        const sameEmail = email === user.email;

        if(sameEmail && sameName){
            return;
        }

        
        setShowSpinner(true);
        const response = await externalCalls.PUT("/user/updateUser", true, {name, email});
        const messageContent = checkCallAnswers({response, closePopUp: setVisible});
        setShowSpinner(false);


        const successButtons = [{
            title: "Ok",
            action: () => {
                setVisible(false);
                navigation.goBack();
            }
        }]


        setTitle(messageContent.title);
        setDescription(messageContent.description);
        setButtons(response.statusCode !== 200 ? messageContent.buttons : successButtons);
        setVisible(true);
        
        await getUser();

        return;
    }


    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            
                <View style={styles.sectionInputs}>
                    <InputText
                        label="Nome completo"
                        placeholder=" Ex:. Joã da Silva"
                        value={name}
                        action={setName}
                    />

                    <InputText
                        label="E-mail"
                        placeholder=" Ex:. joadasilva@gmail.com"
                        value={email}
                        action={setEmail}
                    />
                </View>


                <View style={styles.sectionButton}>
                    <Button title="Confirmar" action={updateData}/>
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
        </TouchableWithoutFeedback>
        
    );
}