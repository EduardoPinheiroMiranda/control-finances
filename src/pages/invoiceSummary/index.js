import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView, Pressable } from "react-native";
import { styles } from "./styles";
import { invoices } from "../../../dataFromTest";

import { InvoiceSummary as ListInvoice } from "../../components/invoiceSummary";
import { CardOfValues } from "./cardOfValues";
import { SelectionInvoice } from "./selectInvoice";
import { colors } from "../../themes";


const months = ["JAN", "FEV", "MAR", "ABR", "MAIO", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
const date = new Date();
const currentMonth = date.getMonth();


export function InvoiceSummaray(){

    const [listInvoices, setListInvoices] = useState([]);
    const [invoice, setInvoice] = useState({});
    const [accentColor, setAccentColor] = useState(colors.color_3);


    useEffect(() => {
        const currentInvoice = invoices.find(invoice => invoice.expired === `${months[currentMonth]}/${date.getFullYear()}`);
        setInvoice(currentInvoice);
        setListInvoices(invoices);
    }, []);


    function selectInvoice(color, expired){
        setAccentColor(color);
        setInvoice(listInvoices.find((invoice) => invoice.expired === expired));
    }

    
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.sectionSelectInvoice}>
                <FlatList
                    data={listInvoices}
                    renderItem={({item}) => <SelectionInvoice data={item} getInvoice={selectInvoice}/>}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <CardOfValues data={invoice} backgroundColor={accentColor}/>

            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <ListInvoice/>
            </ScrollView>

        </SafeAreaView>
    );
}