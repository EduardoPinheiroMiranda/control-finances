import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

import { Header } from "./header";
import { MainShortcuts } from "./mainShortcuts";
import { ConsumptionIndicator } from "./consumptionIndicator";
import { RecentActivity } from "./recentActivity";
import { moviments } from "../../../dataFromTest";


export function Home(){

    const [balance, setBalance] = useState(1100);
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
                <MainShortcuts data={{balance: balance, showValue: showValue}} show={showBalance}/>
                {/* <ConsumptionIndicator/> */}
                {/* <RecentActivity data={moviments}/> */}
            </ScrollView> 
        </SafeAreaView>
    )
}
