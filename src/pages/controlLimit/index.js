import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";

// componets
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { PopUp } from "../../components/PopUp";


export function ControlLimit(){

    const [limit, setLimit] = useState(null);
    const [dueDate, setDueDate] = useState(null);

    const [openNotification, setOpenNotification] = useState(false);
    const [title, setTitle] = useState("");
    const [buttons, setButtons] = useState([]);
    const [description, setDescription] = useState("");


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
                        value={dueDate}
                        action={setDueDate}
                        label="Dia de vencimento"
                        keyboardType="numeric"
                        placeholder="Ex.: 10"
                    />
                </View>

                <View style={styles.sectionButton}>
                    <Button title="Salvar" action={()=>alert("ainda vou fazer")}/>
                </View>
            </View>
            
            <PopUp 
                openModal={openNotification}
                title={title}
                type=""
                description={description}
                buttons={buttons}
            />
        </SafeAreaView>
    );
}