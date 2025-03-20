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
// import { MainShortcuts } from "./mainShortcuts";
// import { ConsumptionIndicator } from "../../components/consumptionIndicator";
// import { RecentActivity } from "./recentActivity";
// import { moviments } from "../../../dataFromTest";


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

                <ConsumptionIndicator/>
                <DisplayCards/>
                
                
                {/* <MainShortcuts data={{balance: balance, showValue: showValue}} show={showBalance}/>
                <ConsumptionIndicator data={chartValues}/>
                <RecentActivity data={moviments}/> */}

                <View style={{height: 530}}/>
            </ScrollView> 
        </SafeAreaView>
    )
}
