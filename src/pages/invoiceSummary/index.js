import React, { useEffect, useRef, useState } from "react";
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
    const flatListRef = useRef(null);
    const indicatorRef = useRef(null);


    useEffect(() => {
        const currentInvoice = invoices.find(invoice => invoice.expired === `${months[currentMonth]}/${date.getFullYear()}`);
        setInvoice(currentInvoice);
        setListInvoices(invoices);
    }, []);


    function selectInvoice(color, expired, index){
        setAccentColor(color);
        setInvoice(listInvoices.find((invoice) => invoice.expired === expired));

        flatListRef.current?.scrollToIndex({
            index: index,
            animated: true,
            viewPosition: 0.5,
        });
    }

    
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.sectionSelectInvoice}>
                <FlatList
                    ref={flatListRef}
                    data={listInvoices}
                    renderItem={({item, index}) => {
                        return(
                            <SelectionInvoice 
                                data={item} 
                                index={index}
                                lastIndex={listInvoices.length - 1}
                                distance={
                                    () => {
                                        indicatorRef.current?.measureInWindow((x, y, width, height) => {
                                            console.log(x)
                                        })
                                    }
                                }
                                getInvoice={selectInvoice}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <View ref={indicatorRef} style={styles.indicator}/>
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