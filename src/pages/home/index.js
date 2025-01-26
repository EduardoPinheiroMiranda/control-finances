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
                <RecentActivity data={[1,2,3,4,5]}/>
            </ScrollView> 
        </SafeAreaView>
    )
}
