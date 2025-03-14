import React, { useState, useContext } from "react";
import { View, KeyboardAvoidingView, Text, Pressable, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"; 
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";

// icons
import SignUpIcon from "../../assets/svg/signUpIcon.svg"

// components
import { InputText } from "../../components/inputText";
import { InputPassword } from "../../components/inputPassword";
import { Button } from "../../components/button";
import { PopUp } from "../../components/popUp";


export function SignUp(){

    const navigation = useNavigation();
    const { signUp } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showModal, setShowModal] = useState(true);


    async function handlerForms(){

        if(!name || !email || !password || !confirmPassword){
            alert("É necessário preencher todos os campos.");
            return;
        }

        if(password !== confirmPassword){
            alert("As senhas devem ser iguais.");
            return;
        }

        signUp({name, email, password})
        
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
                        <SignUpIcon/>
                    </View>

                    <View style={styles.form}>
                        <InputText 
                            label="Nome completo"
                            placeholder="João da Silva"
                            value={name}
                            onChangeText={setName}
                        />

                        <InputText 
                            label="E-mail"
                            placeholder="joaoSilva@exemplo.com"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <InputPassword
                            label="Senha"
                            value={password}
                            onChangeText={setPassword}
                        />

                        <InputPassword
                            label="Confirmar senha"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <View style={styles.sectionButton}>
                        <Button 
                            title="Cadastrar"
                            action={handlerForms}
                        />

                        <Pressable onPress={() => navigation.goBack()}>
                            <Text style={[defaultPageStyle.text, styles.text]}>
                                Já tenho uma conta
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>

                <Modal 
                    transparent={true}
                    animationType="slide"
                    visible={showModal}
                >
                    <PopUp/>
                </Modal>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}