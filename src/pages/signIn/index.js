import React, { useState } from "react";
import { View, KeyboardAvoidingView, Text, Pressable, ScrollView } from "react-native";

// icons
import SignInIcon from "../../assets/svg/signInIcon.svg"
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { InputText } from "../../components/inputText";
import { InputPassword } from "../../components/inputPassword";
import { Button } from "../../components/button";


export function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    return(
        <KeyboardAvoidingView style={[defaultPageStyle.page]}>
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
                            <Text style={styles.textResetPassword}>Esqueci a senha</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.sectionButton}>
                    <Button title="Entrar"/>

                    <Pressable>
                        <Text style={styles.textCreatAccount}>Criar uma conta</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}