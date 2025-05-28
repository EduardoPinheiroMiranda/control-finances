import React, { useContext, useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { colorPattern } from "../../themes";

// components
import { Header } from "./header";
import { ApplicationWall } from  "../../components/applicationWall";
import { ConsumptionIndicator } from "./consumptionIndicator";
import { DisplayCards } from "./displayCards";
import { RecentActivity } from "./recentActivity";
import { moviments } from "../../../dataFromTest";
import { FinancialSummaryContext } from "../../contexts/financialSummary";


export function Home(){

    const { getGeneralSummary, loadData } = useContext(FinancialSummaryContext);
    const [balance, setBalance] = useState(0);
    const [invoice, setInvoice] = useState({});
    const [cards, setCards] = useState({});
    const [movements, setMovements] = useState({});
    const [showValue, setShowValue] = useState(true);
    

    useEffect(() => {
        
        async function getInitialValues(){

           const summary = await getGeneralSummary();

            if(summary.invoice.limit){
                setBalance(Number(summary.applications.value));
                setInvoice(summary.invoice);
                setCards(summary.cards);
                setMovements(summary.movements);
            }
            
        }

        getInitialValues();

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
                <DisplayCards showValue={showValue}/>
                <RecentActivity data={moviments}/>

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
