import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { styles } from "./style";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { useNavigation } from "@react-navigation/native";
import { FinancialSummaryContext } from "../../contexts/financialSummary";

// components
import { ConsumptionIndicator } from "../../components/ConsumptionIndicator";
import { Button } from "../../components/Button";
// import { Summary } from "./Summary";
// import { InvoiceSummary } from "../../components/InvoiceSummary"
// import { DisplayMoreDetails } from "../../components/DisplayMoreDetails";


export function ExpenseAnalysis(){

    const { invoice } = useContext(FinancialSummaryContext);
    const navigation = useNavigation();



    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>

            

            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.highlight}>
                    <Text style={styles.title}>Indicador de consumo</Text>
                    <ConsumptionIndicator 
                        data={invoice}
                        styleBig={true}
                        showValue={true}
                        showButton={false}
                    />
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