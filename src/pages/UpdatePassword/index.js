import React, { useContext, useState } from "react";
import { Keyboard, Modal, SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { ExternalCalls } from "../../services/externalCalls";
import { useNavigation } from "@react-navigation/native";

// components
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";


export function UpdatePassword(){

    const externalCalls = new ExternalCalls();
    const navigation = useNavigation();

    const { getUser, signOut } = useContext(AuthContext);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttons, setButtons] = useState([]);
    const [loading, setLoading] = useState(false);


    async function updateData(){
        
        if(!currentPassword || !newPassword || !confirmPassword){
            setTitle("Dados invalidos");
            setDescription("Todos os campos devem ser preenchidos.");
            setButtons([{
                title: "ok",
                action: () => {
                    setVisible(false);
                }
            }]);
            setVisible(true);
            return;
        }

        if(newPassword !== confirmPassword){
            setTitle("Dados invalidos");
            setDescription("A senha de confirmação deve ser igual a nova senha.");
            setButtons([{
                title: "ok",
                action: () => {
                    setVisible(false);
                }
            }]);
            setVisible(true);
            return;
        }

        
        setLoading(true);

        const { statusCode, msg } = await externalCalls.PUT(
            "/user/updatePassword", 
            true, 
            {
                password: currentPassword,
                newPassword: newPassword
            }
        );
        
        
        if(statusCode === 401){
            setLoading(false);
            setTitle("Sessão expirada");
            setDescription("Por segurança, refaça seu login para usar a aplicação novamente.");
            setButtons([{
                title: "ok",
                action: () => {
                    setVisible(false);
                    signOut();
                }
            }]);
            setVisible(true);
            return;
        }

        if(statusCode !== 200){
            setLoading(false);
            setTitle("Ops...");
            setDescription(msg);
            setButtons([{
                title: "ok",
                action: () => setVisible(false)
            }]);
            setVisible(true);
            return;
        }


        setLoading(false);

        setTitle("Sucesso !!");
        setDescription("Senha atualizada.");
        setButtons([{
            title: "ok",
            action: () => {
                setVisible(false);
                navigation.goBack();
            }
        }]);
        setVisible(true);

        await getUser();
    }


    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            
                <View style={styles.sectionInputs}>
                    <InputPassword
                        label="Senha atual"
                        placeholder=""
                        value={currentPassword}
                        action={setCurrentPassword}
                    />
                    <InputPassword
                        label="Nova senha"
                        placeholder=""
                        value={newPassword}
                        action={setNewPassword}
                    />
                    <InputPassword
                        label="Confirmar senha"
                        placeholder=""
                        value={confirmPassword}
                        action={setConfirmPassword}
                    />
                </View>


                <View style={styles.sectionButton}>
                    <Button title="Confirmar" action={updateData}/>
                </View>
                

                <PopUp 
                    openModal={visible}
                    title={title}
                    type={""}
                    description={description}
                    buttons={buttons}
                />

                <Modal visible={loading} transparent={true} animationType="fade">
                    <Spinner size={38}/>
                </Modal>

            </SafeAreaView>
        </TouchableWithoutFeedback>
        
    );
}