import React, { useContext, useState } from "react";
import { Keyboard, Modal, SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { ExternalCalls } from "../../services/externalCalls";
import { useNavigation } from "@react-navigation/native";

// components
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";
import { checkCallAnswers } from "../../services/checkCallAnswers";


export function UpdatePassword(){

    const externalCalls = new ExternalCalls();
    const navigation = useNavigation();

    const { getUser, signOut } = useContext(AuthContext);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttons, setButtons] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);


    async function updateData(){
        
        if(!currentPassword || !newPassword || !confirmPassword){
            setTitle("Dados invalidos");
            setDescription("Todos os campos devem ser preenchidos.");
            setButtons([{
                title: "Ok",
                action: () => {
                    setVisible(false);
                }
            }]);
            setVisible(true);
            return;
        }

        if(newPassword !== confirmPassword){
            setTitle("Dados invalidos");
            setDescription("A senha de confirmação deve ser igual a nova senha.");
            setButtons([{
                title: "Ok",
                action: () => {
                    setVisible(false);
                }
            }]);
            setVisible(true);
            return;
        }

        const body = {
            password: currentPassword,
            newPassword: newPassword
        };
        
        setShowSpinner(true);
        const response = await externalCalls.PUT("/user/updatePassword", true, body);
        const messageContent = checkCallAnswers({response, closePopUp: setVisible, signOut});
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
                    <InputPassword
                        label="Senha atual"
                        placeholder=""
                        value={currentPassword}
                        action={setCurrentPassword}
                    />
                    <InputPassword
                        label="Nova senha"
                        placeholder=""
                        value={newPassword}
                        action={setNewPassword}
                    />
                    <InputPassword
                        label="Confirmar senha"
                        placeholder=""
                        value={confirmPassword}
                        action={setConfirmPassword}
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