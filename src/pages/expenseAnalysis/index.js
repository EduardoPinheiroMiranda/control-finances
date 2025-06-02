import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { FinancialSummaryContext } from "../../contexts/financialSummary";

// components
import { ConsumptionIndicator } from "../../components/ConsumptionIndicator";
import { Summary } from "./Summary";
import { InvoiceSummary } from "../../components/InvoiceSummary"


export function ExpenseAnalysis(){

    const { invoice } = useContext(FinancialSummaryContext);
    const [summary, setSummary] = useState({card: 0, invoice: 0, money: 0});


    useEffect(() => {

        setSummary({
            card: invoice.total_card,
            invoice: invoice.total_invoice,
            money: invoice.total_money
        });

    }, [invoice]);


    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>

            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.sections}>
                    <Text style={styles.title}>Indicador de consumo</Text>
                    <ConsumptionIndicator 
                        data={invoice}
                        styleBig={true}
                        showValue={true}
                        showButton={false}
                    />
                </View>


                <View style={styles.sections}>
                    <Text style={styles.title}>Resumo do mês</Text>
                    <Summary data={summary}/>
                </View>


                <View style={styles.sections}>
                    <Text style={styles.title}>Resumo de fatura</Text>
                    <InvoiceSummary 
                        data={{
                            ...invoice.installments,
                            totalFixedExpense: invoice.total_fixed_expense,
                            totalExtraExpense: invoice.total_extra_expense
                        }}
                        nextPage={() => console.log("adicionar navegação")}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}