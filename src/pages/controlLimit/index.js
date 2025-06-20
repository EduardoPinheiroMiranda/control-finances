import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { checkCallAnswers } from "../../services/checkCallAnswers";
import { CachingStrategy } from "../../services/cachingStrategy";

// componets
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";
import { ExternalCalls } from "../../services/externalCalls";


export function ControlLimit(){

    const { user, signOut, getUser } = useContext(AuthContext);

    const [limit, setLimit] = useState(null);
    const [dueDay, setDueDay] = useState(null);
    const [closingDay, setClosingDay] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);

    const [openNotification, setOpenNotification] = useState(false);
    const [title, setTitle] = useState("");
    const [buttons, setButtons] = useState([]);
    const [description, setDescription] = useState("");

    const externalCalls = new ExternalCalls();
    const cachingStrategy = new CachingStrategy();


    useEffect(() => {
        if(user){
            setLimit(user.limit);
            setDueDay(user.dueDay);
            setClosingDay(user.closeDay);
        }
    }, [user]);


    async function sendForm(){

        if(!limit || !dueDay || !closingDay){
            setTitle("Dados invalidos");
            setDescription("Todos os campos devem ser preenchidos.");
            setButtons([{
                title: "Ok",
                action: () => setOpenNotification(false)
            }]);
            setOpenNotification(true);
            return;
        }
        
        if(limit === user.limit && dueDay === user.dueDay && closingDay === user.closeDay){
            setTitle("Atualização de dados");
            setDescription("Dados atualizados com sucesso.");
            setButtons([{
                title: "Ok",
                action: () => setOpenNotification(false)
            }]);
            setOpenNotification(true);
            return;
        }

        setShowSpinner(true);
        const body = {limit, dueDay, closingDay}
        const response = await externalCalls.PUT("/user/controlLimit", true, body);
        const messageContent = checkCallAnswers({response, closePopUp: setOpenNotification, signOut})
        setShowSpinner(false);


        setTitle(messageContent.title);
        setDescription(messageContent.description);
        setButtons(messageContent.buttons);
        setOpenNotification(true);

        await getUser();
        await cachingStrategy.resetData();
    
        return;
    }


    return(
        <SafeAreaView style={defaultPageStyle.page}>
            <View style={styles.container}>

                <View style={styles.form}>
                    <InputText
                        value={limit}
                        action={setLimit}
                        label="Limite mensal"
                        coin={true}
                        keyboardType="numeric"
                    />
                    <InputText
                        value={dueDay}
                        action={setDueDay}
                        label="Dia de vencimento"
                        keyboardType="numeric"
                        placeholder="Ex.: 10"
                    />
                    <InputText
                        value={closingDay}
                        action={setClosingDay}
                        label="Dia de fechamento"
                        keyboardType="numeric"
                        placeholder="Ex.: 5"
                    />
                </View>

                <View style={styles.sectionButton}>
                    <Button title="Salvar" action={sendForm}/>
                </View>
            </View>
            
            <PopUp 
                openModal={openNotification}
                title={title}
                type=""
                description={description}
                buttons={buttons}
            />
            <Spinner showSpinner={showSpinner} size={38}/>
        </SafeAreaView>
    );
}