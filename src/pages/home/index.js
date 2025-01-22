import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";


import { Header } from "./header";
import { MainShortcuts } from "./mainShortcuts";
import { ConsumptionIndicator } from "./consumptionIndicator";




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

            <View style={styles.scrollSection}>
                <ScrollView 
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <MainShortcuts/>
                    <ConsumptionIndicator/>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
