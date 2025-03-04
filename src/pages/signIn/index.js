import React, { useState } from "react";
import { View, KeyboardAvoidingView, Text, Pressable, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";

// icons
import SignInIcon from "../../assets/svg/signInIcon.svg"

// components
import { InputText } from "../../components/inputText";
import { InputPassword } from "../../components/inputPassword";
import { Button } from "../../components/button";


export function SignIn(){

    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={[defaultPageStyle.page]}>
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
                        <Button title="Entrar"/>

                        <Pressable onPress={() => navigation.navigate("signUp")}>
                            <Text style={[defaultPageStyle.text, styles.textCreatAccount]}>
                                Criar uma conta
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}