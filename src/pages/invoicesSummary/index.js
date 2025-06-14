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
import { WallOfValues } from "./wallOfValues";
import { colorPattern } from "../../themes";


export function InvoicesSummary(){

    const { signOut } = useContext(AuthContext);
    const [invoices, setInvoices] = useState([]);
    const [subtitles, setSubtitles] = useState([]);
    const [invoiceIndex, setInvoiceIndex] = useState(null);    
    const [selectedInvoice, setSelectedInvoice] = useState({});    
    const [accentColor, setAccentColor] = useState(colorPattern.blue_300);

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
            setSubtitles(response.response.subtitles);

            const invoices = response.response.invoices;
            const currentInvoice = invoices.find((invoice) => invoice.current === true);
            const invoiceIndex = invoices.indexOf(currentInvoice);

            setInvoiceIndex(invoiceIndex);
            setSelectedInvoice(currentInvoice);
        }
        startData();

    }, []);


    function selectAnInvoice(index){
        setInvoiceIndex(index);
        setSelectedInvoice(invoices[index]);
    }


    return(
        <SafeAreaView style={[defaultPageStyle.page]}>
            
            <View>
                <InvoicesSubtitles
                    subtitles={subtitles}
                    invoiceIndex={invoiceIndex}
                    selectAnInvoice={selectAnInvoice}
                    selectColor={setAccentColor}
                />

                <WallOfValues data={selectedInvoice} backgroundColor={accentColor}/>
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