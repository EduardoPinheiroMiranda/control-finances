import React from "react";
import { StatusBar } from "expo-status-bar"
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style"


import { ConsumptionIndicator } from "../../components/consumptionIndicator";
import { Summary } from "./summary";
import { InvoiceSummary } from "../../components/invoiceSummary";
import { stylesDefault } from "../../themes/stylesDefault";


export function ExpenseAnalysis(){

    const chartValues = {
        chart: {
            value: 90,
            size: 300,
            strokeWidth: 20
        },
        legend:{
            limit: 4000,
            used: 1500,
            available: 200
        },
        expired: "12/02"
    };

    const summary = {
        cards: 4000,
        fixedExpenses: 4000,
        extraExpenses: 3000
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <ScrollView style={styles.scroll}>

                <View style={styles.highlight}>
                    <Text style={styles.title}>Indicador de consumo</Text>
                    <ConsumptionIndicator data={chartValues}/>
                </View>

                <View style={styles.highlight}>
                    <Text style={styles.title}>Resumo do mês</Text>
                    <Summary data={summary}/>
                </View>

                <View style={styles.highlight}>
                    <Text style={styles.title}>Resumo de fatura</Text>
                    <View style={stylesDefault.box}>
                        <InvoiceSummary data={summary}/>
                    </View>
                </View>

            </ScrollView>
            
        </SafeAreaView>
        
    );
}