import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";


import { Header } from "./header";
import { MainShortcuts } from "./mainShortcuts";
import { ConsumptionIndicator } from "./consumptionIndicator";
import { RecentActivity } from "./recentActivity";
import { stylesDefault } from "../../themes/stylesDefault";




export function Home(){

    const [balance, setBalance] = useState(1000);
    const [showValue, setShowValue] = useState(true);

    const moviments = [
        {
            id: "1",
            method: "card",
            credit: true,
            title: "Roupas",
            date: "12/04/2001",
            value: "150,00",
            installments: "3x"
        },
        {
            id: "2",
            method: "invoice",
            credit: false,
            title: "Conta de água",
            date: "12/04/2001",
            value: "300,00",
            installments: ""
        },
        {
            id: "3",
            method: "invoice",
            credit: true,
            title: "Internet",
            date: "12/04/2001",
            value: "250,00",
            installments: ""
        },
        {
            id: "4",
            method: "card",
            credit: true,
            title: "Farmacia",
            date: "12/04/2001",
            value: "100,00",
            installments: "2x"
        },
        {
            id: "5",
            method: "invoice",
            credit: false,
            title: "IPTU",
            date: "12/04/2001",
            value: "800,00",
            installments: ""
        },
        {
            id: "6",
            method: "money",
            credit: false,
            title: "Uber",
            date: "12/04/2001",
            value: "50,00",
            installments: ""
        },
        {
            id: "7",
            method: "money",
            credit: false,
            title: "Barbeiro",
            date: "12/04/2001",
            value: "500,00",
            installments: ""
        },
        {
            id: "8",
            method: "invoice",
            credit: false,
            title: "Conta de luz",
            date: "12/04/2001",
            value: "50,00",
            installments: ""
        },        
    ]


    function showBalance(){
        setShowValue(!showValue)
    }


    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Header/>
            <ScrollView 
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <MainShortcuts/>
                <ConsumptionIndicator/>
                <RecentActivity data={moviments}/>
            </ScrollView> 
        </SafeAreaView>
    )
}
