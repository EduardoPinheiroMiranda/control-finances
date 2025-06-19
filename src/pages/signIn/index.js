import React, { useContext, useState } from "react";
import { View, KeyboardAvoidingView, Pressable, ScrollView, Platform, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";

// icons
import SignInIcon from "../../assets/svg/signInIcon.svg"

// components
import { InputText } from "../../components/InputText";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { CustomText } from "../../components/CustomText";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";
import { checkCallAnswers } from "../../services/checkCallAnswers";


export function SignIn(){

    const { signIn } = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [buttons, setButtons] = useState([]);
    const [description, setDescription] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);


    async function handlerForms(){

        if(!email || !password){
            setTitle("Dados invalidos");
            setDescription("É necessário preencher todos os campos.");
            setButtons([{
                title: "Ok",
                action: () => setVisible(false)
            }]);
            setVisible(true);
            return;
        }


        setShowSpinner(true);
        const response = await signIn({email, password});
        const messageContent = checkCallAnswers({response, closePopUp: setVisible});
        setShowSpinner(false)
        
        if(response.statusCode !== 200){
            setTitle(messageContent.title);
            setDescription(messageContent.description);
            setButtons(messageContent.buttons);
            setVisible(true);
        }

        return;
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
                        <SignInIcon/>
                    </View>

                    <View style={styles.form}>
                        <InputText 
                            label="Informe seu e-mail"
                            placeholder="E-mail"
                            value={email}
                            action={setEmail}
                        />

                        <View>
                            <InputPassword
                                label="Informe sua senha"
                                placeholder="senha"
                                value={password}
                                action={setPassword}
                            />
                            <Pressable onPress={() => alert("Função indisponível temporariamente.")}>
                                <CustomText style={[styles.textResetPassword]}>
                                    Esqueci a senha
                                </CustomText>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.sectionButton}>
                        <Button title="Entrar" action={handlerForms}/>

                        <Pressable onPress={() => navigation.navigate("signUp")}>
                            <CustomText style={[styles.textCreatAccount]}>
                                Criar uma conta
                            </CustomText>
                        </Pressable>
                    </View>
                </ScrollView>

                <PopUp 
                    openModal={visible}
                    title={title}
                    type=""
                    description={description}
                    buttons={buttons}
                />

                <Spinner showSpinner={showSpinner} size={38}/>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}