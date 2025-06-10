import React, { useState, useContext } from "react";
import { View, KeyboardAvoidingView, Pressable, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Modal, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"; 
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { checkCallAnswers } from "../../services/checkCallAnswers";

// icons
import SignUpIcon from "../../assets/svg/signUpIcon.svg"

// components
import { InputText } from "../../components/InputText";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { CustomText } from "../../components/CustomText";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";


export function SignUp(){

    const navigation = useNavigation();
    const { signUp } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttons, setButtons] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    

    async function handlerForms(){

        if(!name || !email || !password || !confirmPassword){
            setTitle("Dados invalidos");
            setDescription("É necessário preencher todos os campos.");
            setVisible(true);
            setButtons([{
                title: "Ok",
                action: () => setVisible(false)
            }])
            return;
        }

        if(password !== confirmPassword){
            setTitle("Dados invalidos");
            setDescription("As senhas devem ser iguais.");
            setButtons([{
                title: "Ok",
                action: () => setVisible(false)
            }])
            setVisible(true);
            return;
        }


        setShowSpinner(true);
        const response = await signUp({name, email, password});
        const messageContent = checkCallAnswers({response, closePopUp: setVisible});
        setShowSpinner(false);


        const successButtons = [{
            title: "Ok",
            action: () => {
                setVisible(false);
                navigation.goBack();
            }
        }];


        setTitle(messageContent.title);
        setDescription(messageContent.description);
        setButtons(response.statusCode !== 201 ? messageContent.buttons : successButtons);
        setVisible(true);
    }

    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.sectionIcon}>
                        <SignUpIcon/>
                    </View>

                    <View style={styles.form}>
                        <InputText 
                            label="Nome completo"
                            placeholder="João da Silva"
                            value={name}
                            action={setName}
                        />

                        <InputText 
                            label="E-mail"
                            placeholder="joaoSilva@exemplo.com"
                            value={email}
                            action={setEmail}
                        />

                        <InputPassword
                            label="Senha"
                            value={password}
                            action={setPassword}
                        />

                        <InputPassword
                            label="Confirmar senha"
                            value={confirmPassword}
                            action={setConfirmPassword}
                        />
                    </View>

                    <View style={styles.sectionButton}>
                        <Button 
                            title="Cadastrar"
                            action={handlerForms}
                        />

                        <Pressable onPress={() => navigation.goBack()}>
                            <CustomText style={[defaultPageStyle.text, styles.text]}>
                                Já tenho uma conta
                            </CustomText>
                        </Pressable>
                    </View>
                </ScrollView>

                <PopUp 
                    openModal={visible}
                    title={title}
                    type={""}
                    description={description}
                    buttons={buttons}
                />

                
                <Spinner showSpinner={showSpinner} size={40}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}