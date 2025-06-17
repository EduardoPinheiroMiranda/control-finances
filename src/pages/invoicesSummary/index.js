import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { ExternalCalls } from "../../services/externalCalls";
import { checkCallAnswers } from "../../services/checkCallAnswers";
import { AuthContext } from "../../contexts/auth";
import { colorPattern } from "../../themes";
import { CachingStrategy } from "../../services/cachingStrategy";

// component
import { PopUp } from "../../components/PopUp";
import { Spinner } from "../../components/Spinner";
import { InvoicesSubtitles } from "./invoicesSubtitles";
import { WallOfValues } from "./wallOfValues";
import { InvoiceSummary } from "../../components/InvoiceSummary";


function LoadPage({showSpinner}){
    return(
        <View>
            <Spinner showSpinner={showSpinner} size={38}/> 
        </View>
    );
}

function ConstructionPage({
    subtitles, invoiceIndex, selectedInvoice, selectAnInvoice, setAccentColor, accentColor
}){
    return(
        <View style={styles.container}>
            <InvoicesSubtitles
                subtitles={subtitles}
                invoiceIndex={invoiceIndex}
                selectAnInvoice={selectAnInvoice}
                selectColor={setAccentColor}
            />

            <WallOfValues data={selectedInvoice} backgroundColor={accentColor}/>

            <View style={styles.invoiceSummary}>
                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                >
                    <InvoiceSummary
                        style={{paddingBottom: 30}}
                        data={{
                            ...selectedInvoice.installments,
                            total_extra_expense: selectedInvoice.total_extra_expense,
                            total_fixed_expense: selectedInvoice.total_fixed_expense
                        }}
                    />
                </ScrollView>
                
            </View>
        </View>
    );
}


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
    const cachingStrategy = new CachingStrategy();

    useEffect(() => {

        async function startData(){
            
            setShowSpinner(true);

            const invoicesInCache = await cachingStrategy.getItem("userInvoices");
            
            if(invoicesInCache){
                setInvoices(invoicesInCache.invoices);
                setSubtitles(invoicesInCache.subtitles);
                getCurrentInvoice(invoicesInCache.invoices);
                setShowSpinner(false);
                return;
            }

            const response = await externalCall.GET("/invoice/getAllInvoices", true, null);
            const messageContent = checkCallAnswers({response, closePopUp: setVisible(false), signOut});
            
            if(response.statusCode !== 200){
                setTitle(messageContent.title);
                setDescription(messageContent.description);
                setButtons(messageContent.buttons);
                setVisible(true);
            }

            setInvoices(response.response.invoices);
            setSubtitles(response.response.subtitles);
            getCurrentInvoice(response.response.invoices);

            await cachingStrategy.addItem("userInvoices", response.response);

            setShowSpinner(false);
        }
        startData();

    }, []);


    function getCurrentInvoice(invoices){
        const currentInvoice = invoices.find((invoice) => invoice.current === true);
        const invoiceIndex = invoices.indexOf(currentInvoice);
        setInvoiceIndex(invoiceIndex);
        setSelectedInvoice(currentInvoice);
        return;
    }

    function selectAnInvoice(index){
        setInvoiceIndex(index);
        setSelectedInvoice(invoices[index]);
    }


    return(
        <SafeAreaView style={[defaultPageStyle.page]}>

            {showSpinner ?
                <LoadPage showSpinner={showSpinner}/>
            :
                <ConstructionPage
                    accentColor={accentColor}
                    invoiceIndex={invoiceIndex}
                    selectAnInvoice={selectAnInvoice}
                    selectedInvoice={selectedInvoice}
                    setAccentColor={setAccentColor}
                    subtitles={subtitles}
                />
            }

            <PopUp 
                openModal={visible}
                title={title}
                type={""}
                description={description}
                buttons={buttons}
            />
        </SafeAreaView>
    );
}