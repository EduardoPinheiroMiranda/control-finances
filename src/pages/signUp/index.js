import React, { useState, useContext } from "react";
import { View, KeyboardAvoidingView, Pressable, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"; 
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";

// icons
import SignUpIcon from "../../assets/svg/signUpIcon.svg"

// components
import { InputText } from "../../components/InputText";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Alert } from "../../components/Alert";
import { CustomText } from "../../components/CustomText";


export function SignUp(){

    const navigation = useNavigation();
    const { signUp, loading } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [popUp, setPopUp] = useState({});


    async function handlerForms(){

        if(!name || !email || !password || !confirmPassword){
            setPopUp({
                close: () => setShowModal(false),
                title: true,
                description: "É necessário preencher todos os campos.",
                success: false
            })
            setShowModal(true);
            return;
        }

        if(password !== confirmPassword){
            setPopUp({
                close: () => setShowModal(false),
                title: true,
                description: "As senhas devem ser iguais.",
                success: false
            })
            setShowModal(true);
            return;
        }



        setShowModal(true);
        const response = await signUp({name, email, password})
        
        setPopUp({
            close: response.statusCode !== 201 ? () => setShowModal(false) : () => navigation.goBack(),
            title: response.statusCode !== 201 ? true : false,
            description: response.msg,
            success: response.statusCode !== 201 ? false : true
        });
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
                            <CustomText style={[defaultPageStyle.text, styles.text]}>
                                Já tenho uma conta
                            </CustomText>
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
                        buttonTitle={false}
                        success={popUp.success}
                    />
                </Modal>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}