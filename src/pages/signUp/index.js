import React, { useState } from "react";
import { View, KeyboardAvoidingView, Text, Pressable, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"; 
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";

// icons
import SignUpIcon from "../../assets/svg/signUpIcon.svg"

// components
import { InputText } from "../../components/inputText";
import { InputPassword } from "../../components/inputPassword";
import { Button } from "../../components/button";


export function SignUp(){

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView 
                style={[defaultPageStyle.page]}
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
                        <Button title="Cadastrar"/>

                        <Pressable onPress={() => navigation.goBack()}>
                            <Text style={[defaultPageStyle.text, styles.text]}>
                                Já tenho uma conta
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}