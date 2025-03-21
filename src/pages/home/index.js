import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";

// components
import { Header } from "./header";
import { ApplicationWall } from  "../../components/applicationWall";
import { ConsumptionIndicator } from "./consumptionIndicator";
import { DisplayCards } from "./displayCards";
import { RecentActivity } from "./recentActivity";
import { moviments } from "../../../dataFromTest";


export function Home(){

    const [balance, setBalance] = useState(1100);
    const [showValue, setShowValue] = useState(true);
    

    function showBalance(){
        setShowValue(!showValue)
    }


    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <StatusBar style="light" />
            <Header/>
            <ScrollView 
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <ApplicationWall 
                    showValue={showValue} 
                    balance={balance} 
                    visible={() => setShowValue(!showValue)}
                    activeButtons={false}
                />

                <ConsumptionIndicator showValue={showValue}/>
                <DisplayCards showValue={showValue}/>
                <RecentActivity data={moviments}/>

                <View style={{height: 30}}/>
            </ScrollView> 
        </SafeAreaView>
    )
}
