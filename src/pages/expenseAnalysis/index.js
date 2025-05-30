import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

// components
import { ConsumptionIndicator } from "../../components/ConsumptionIndicator";
import { Summary } from "./Summary";
import { InvoiceSummary } from "../../components/InvoiceSummary"
import { DisplayMoreDetails } from "../../components/DisplayMoreDetails";
import { format } from "date-fns";


export function ExpenseAnalysis(){

    const { invoice } = useContext(AuthContext);
    const [invoiceDatails, setInvoiceDatails] = useState({});

    const navigation = useNavigation();


    useEffect(() => {

        setInvoiceDatails({
            chart: {
                value: invoice.percentegeSpent,
                size: 300,
                strokeWidth: 20
            },
            legend:{
                limit: invoice.limit,
                used: invoice.amount,
                available: invoice.available
            },
            expired: format(new Date(invoice.due_date), "dd/MM")
        });

        // const summary = {
        //     cards: 4000,
        //     fixedExpenses: 4000,
        //     extraExpenses: 3000
        // }

    } , [invoice])


    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.highlight}>
                    <Text style={styles.title}>Indicador de consumo</Text>
                    <ConsumptionIndicator data={invoiceDatails}/>
                </View>

                {/* <View style={styles.highlight}>
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
                </View> */}

            </ScrollView>
        </SafeAreaView>
    );
}