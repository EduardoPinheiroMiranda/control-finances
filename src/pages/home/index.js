import React, { useContext, useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { colorPattern } from "../../themes";
import { FinancialSummaryContext } from "../../contexts/financialSummary";

// components
import { Header } from "./header";
import { ApplicationWall } from  "../../components/applicationWall";
import { ConsumptionIndicator } from "./consumptionIndicator";
import { DisplayCards } from "./displayCards";
import { RecentActivity } from "./recentActivity";


export function Home(){

    const { applications, invoice, cards, movements, loadData } = useContext(FinancialSummaryContext);
    const [balance, setBalance] = useState(0);
    const [showValue, setShowValue] = useState(true);
    

    useEffect(() => {
        setBalance(Number(applications.value));
    }, [])


    function LoadData(){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size={38} color={colorPattern.blue_900}/>
            </View>
        );
    }


    function DisplayContent(){
        return(
            <View>
                <ApplicationWall 
                    showValue={showValue} 
                    balance={balance} 
                    visible={() => setShowValue(!showValue)}
                    activeButtons={false}
                />

                <ConsumptionIndicator showValue={showValue} data={invoice}/>
                <DisplayCards showValue={showValue} cards={cards}/>
                <RecentActivity data={movements}/>

                <View style={{height: 30}}/>
            </View>
        );
    }

    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <Header/>
            <ScrollView 
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {loadData ? LoadData() : DisplayContent()}
            </ScrollView> 
        </SafeAreaView>
    )
}
