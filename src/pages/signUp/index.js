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
    const [openModal, setOpenModal] = useState(false);
    

    async function handlerForms(){

        if(!name || !email || !password || !confirmPassword){
            setTitle("Dados invalidos");
            setDescription("É necessário preencher todos os campos.");
            setVisible(true);
            return;
        }

        if(password !== confirmPassword){
            setTitle("Dados invalidos");
            setDescription("As senhas devem ser iguais.");
            setVisible(true);
            return;
        }



        setOpenModal(true);
        const response = await signUp({name, email, password});


        if(response.statusCode !== 201){
            setOpenModal(false);

            setTitle("Erro no cadastro");
            setDescription(response.msg);
            setVisible(true);
        }

        setOpenModal(false);

        setTitle("Sucesso !");
        setDescription("Usuário cadastrado com sucesso!!");
        setVisible(true);
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