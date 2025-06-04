import React, { useContext, useState } from "react";
import { View, KeyboardAvoidingView, Pressable, ScrollView, TouchableWithoutFeedback, Keyboard, Platform, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
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


export function SignIn(){

    const { signIn } = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [openModal, setOpenModal] = useState(false);


    async function handlerForms(){

        if(!email || !password){
            setTitle("Dados invalidos");
            setDescription("É necessário preencher todos os campos.");
            setVisible(true);
            return;
        }


        setOpenModal(true);
        const response = await signIn({email, password});
        
        
        if(response.statusCode !== 200){
            setOpenModal(false);

            setTitle("Erro no login");
            setDescription(response.msg);
            setVisible(true);
        }

        setOpenModal(false);
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView 
                style={[defaultPageStyle.page, styles.container]}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled
            >
                <StatusBar hidden={true}/>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.sectionIcon}>
                        <SignInIcon/>
                    </View>

                    <View style={styles.form}>
                        <InputText 
                            label="informe seu e-mail"
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <View>
                            <InputPassword
                                label="informe sua senha"
                                placeholder="senha"
                                value={password}
                                onChangeText={setPassword}
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
                    type={""}
                    description={description}
                    buttons={[{
                        title: "Ok",
                        action: () => setVisible(false)
                    }]}
                />

                <Modal transparent={true} animationType="fade" visible={openModal}>
                    <Spinner size={40}/>
                </Modal>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}