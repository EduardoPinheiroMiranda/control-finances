import React, { useContext, useState } from "react";
import { View, KeyboardAvoidingView, Text, Pressable, ScrollView, TouchableWithoutFeedback, Keyboard, Platform, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";

// icons
import SignInIcon from "../../assets/svg/signInIcon.svg"

// components
import { InputText } from "../../components/inputText";
import { InputPassword } from "../../components/inputPassword";
import { Button } from "../../components/button";
import { Alert } from "../../components/alert";


export function SignIn(){

    const { signIn, loading } = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [popUp, setPopUp] = useState({});


    async function handlerForms(){

        if(!email || !password){
            setPopUp({
                close: () => setShowModal(false),
                title: true,
                description: "É necessário preencher todos os campos.",
                buttonTitle: false
            });
            setShowModal(true);
            return;
        }


        setShowModal(true);

        const response = await signIn({email, password});

        if(response.statusCode !== 200){
            setPopUp({
                close: () => setShowModal(false),
                title: true,
                description: response.msg,
                buttonTitle: false
            });
        }else{
            setShowModal(false);
        }

        return;
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
                                <Text style={[defaultPageStyle.text, styles.textResetPassword]}>
                                    Esqueci a senha
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.sectionButton}>
                        <Button title="Entrar" action={handlerForms}/>

                        <Pressable onPress={() => navigation.navigate("signUp")}>
                            <Text style={[defaultPageStyle.text, styles.textCreatAccount]}>
                                Criar uma conta
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showModal}
                >
                    <Alert
                        loading={loading}
                        close={popUp.close}
                        title={popUp.title}
                        description={popUp.description}
                        buttonTitle={popUp.buttonTitle}
                        success={popUp.success}
                    />
                </Modal>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}