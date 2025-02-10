import React from "react";
import { StatusBar } from "expo-status-bar"
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style"


import { ConsumptionIndicator } from "../../components/consumptionIndicator";
import { Summary } from "./summary";


export function ExpenseAnalysis(){

    const chartValues = {
        chart: {
            value: 90,
            size: 300,
            strokeWidth: 20
        },
        legend:{
            limit: "4000,00",
            used: "1500,00",
            available: "200,00"
        }
    };

    const summary = {
        cards: "4000,00",
        fixedExpenses: "4000,00",
        extraExpenses: "3000,00"
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

            </ScrollView>
            
        </SafeAreaView>
        
    );
}