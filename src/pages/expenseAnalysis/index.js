import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { styles } from "./style";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { FinancialSummaryContext } from "../../contexts/financialSummary";

// components
import { ConsumptionIndicator } from "../../components/ConsumptionIndicator";
import { Summary } from "./Summary";
import { InvoiceSummary } from "../../components/InvoiceSummary"
import { CustomText } from "../../components/CustomText";
import { useNavigation } from "@react-navigation/native";


export function ExpenseAnalysis(){

    const navigation = useNavigation();

    const { invoice } = useContext(FinancialSummaryContext);
    const [summary, setSummary] = useState({card: 0, invoice: 0, money: 0});


    useEffect(() => {

        setSummary({
            card: invoice.totalCard,
            invoice: invoice.totalInvoice,
            money: invoice.totalMoney
        });

    }, [invoice]);


    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>

            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.sections}>
                    <CustomText style={styles.title}>Indicador de consumo</CustomText>
                    <ConsumptionIndicator 
                        data={invoice}
                        styleBig={true}
                        showValue={true}
                        showButton={false}
                    />
                </View>


                <View style={styles.sections}>
                    <CustomText style={styles.title}>Resumo do mês</CustomText>
                    <Summary data={summary}/>
                </View>


                <View style={styles.sections}>
                    <CustomText style={styles.title}>Resumo de fatura</CustomText>
                    <InvoiceSummary
                        style={styles.invoiceSummary}
                        data={{
                            ...invoice.installments,
                            totalFixedExpense: invoice.totalFixedExpense,
                            totalExtraExpense: invoice.totalExtraExpense
                        }}
                        nextPage={() => navigation.navigate("invoicesSummary")}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}