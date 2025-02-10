import React from "react";
import { StatusBar } from "expo-status-bar"
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style"


import { ConsumptionIndicator } from "../../components/consumptionIndicator";


export function ExpenseAnalysis(){

    const chartValues = {
        chart: {
            value: 30,
            size: 300,
            strokeWidth: 20
        },
        legend:{
            limit: "4000,00",
            used: "1500,00",
            available: "200,00"
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <ScrollView>

                <View>
                    <Text>Indicador de consumo</Text>
                    <ConsumptionIndicator data={chartValues}/>
                </View>

            </ScrollView>
            
        </SafeAreaView>
        
    );
}