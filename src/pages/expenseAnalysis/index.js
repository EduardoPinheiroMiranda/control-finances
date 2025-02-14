import React from "react";
import { StatusBar } from "expo-status-bar"
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style"


import { ConsumptionIndicator } from "../../components/consumptionIndicator";
import { Summary } from "./summary";
import { InvoiceSummary } from "../../components/invoiceSummary";
import { stylesDefault } from "../../themes/stylesDefault";
import { DisplayMoreDetails } from "../../components/displayMoreDetails";
import { useNavigation } from "@react-navigation/native";


export function ExpenseAnalysis(){

    const navigation = useNavigation();

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
            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

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

                    <View style={[stylesDefault.box,{gap: 30}]}>
                        <View style={styles.header}>
                            <View>
                                <Text style={styles.text}>Limite</Text>
                                <Text style={styles.text}>R$ 4000,00</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>Utilizado</Text>
                                <Text style={styles.text}>R$ 4000,00</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>Disponível</Text>
                                <Text style={styles.text}>R$ 4000,00</Text>
                            </View>
                        </View>

                        <InvoiceSummary/>
                        
                        <DisplayMoreDetails data={{title: "Ver mais detalhes"}} nextPage={() => navigation.navigate("invoiceSummary")}/>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}