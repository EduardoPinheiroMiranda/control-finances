import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { ExternalCalls } from "../../services/externalCalls";
import { checkCallAnswers } from "../../services/checkCallAnswers";;
import { AuthContext } from "../../contexts/auth";

// component
import { CustomText } from "../../components/CustomText";
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";
import { InvoicesSubtitles } from "./invoicesSubtitles";


export function InvoicesSummary(){

    const { signOut } = useContext(AuthContext);
    const [invoices, setInvoices] = useState([]);
    const [subtitle, setSubtitle] = useState([]);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [buttons, setButtons] = useState([]);
    const [description, setDescription] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);


    const externalCall = new ExternalCalls();

    useEffect(() => {

        async function startData(){
            
            setShowSpinner(true);
            const response = await externalCall.GET("/invoice/getAllInvoices", true, null);
            const messageContent = checkCallAnswers({response, closePopUp: setVisible(false), signOut});
            setShowSpinner(false);

            if(response.statusCode !== 200){
                setTitle(messageContent.title);
                setDescription(messageContent.description);
                setButtons(messageContent.buttons);
                setVisible(true);
            }

            setInvoices(response.response.invoices);
            setSubtitle(response.response.subtitle);
        }
        startData();

    }, [])


    return(
        <SafeAreaView style={[defaultPageStyle.page]}>
            
            <View>
                <InvoicesSubtitles subtitle={subtitle}/>
            </View>
            

             <PopUp 
                openModal={visible}
                title={title}
                type={""}
                description={description}
                buttons={buttons}
            />

            <Spinner showSpinner={showSpinner} size={38}/>
        </SafeAreaView>
    );
}