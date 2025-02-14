import React from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";

import { InvoiceSummary as ListInvoice } from "../../components/invoiceSummary";


export function InvoiceSummaray(){

    
    return(
        <SafeAreaView style={styles.container}>

            <View>
                <FlatList
                />
            </View>

            <View style={{alignSelf: "center"}}>

                <View style={styles.summaryOfValues}>
                    <View style={styles.invoiceValue}>
                        <Text style={styles.value}>R$ 3000,00</Text>
                    </View>

                    <View style={styles.description}>
                        <View style={styles.legend}>
                            <Text style={styles.label}>Limite</Text>
                            <Text style={styles.label}>R$ 1000,00</Text>   
                        </View>
                        <View style={styles.legend}>
                            <Text style={styles.label}>Utilizado</Text>
                            <Text style={styles.label}>R$ 1000,00</Text>  
                        </View>
                        <View style={styles.legend}>
                            <Text style={styles.label}>Disponível</Text>
                            <Text style={styles.label}>R$ 1000,00</Text>  
                        </View>
                    </View>
                </View>

            </View>


            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <ListInvoice/>
            </ScrollView>

        </SafeAreaView>
    );
}