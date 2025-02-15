import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { formatCurrency } from "../../../utils/formatCurrency";


export function CardOfValues(props){
    
    const [invoiceValue, setInvoiceValue] = useState("Carregando...");
    const [limit, setLimit] = useState("Carregando...");
    const [available, setAvailable] = useState("Carregando...");


    useEffect(() => {

        if(props.data.values !== undefined){            
            setInvoiceValue(formatCurrency(props.data.values.invoiceValue));
            setLimit(formatCurrency(props.data.values.limit));
            setAvailable(formatCurrency(props.data.values.available));
        }
        
    }, [props.data]);
    
    
    return(
        <View style={{alignSelf: "center"}}>

            <View style={[styles.summaryOfValues, {backgroundColor: props.backgroundColor}]}>
                <View style={styles.invoiceValue}>
                    <Text style={styles.value}>{invoiceValue}</Text>
                </View>

                <View style={styles.description}>
                    <View style={styles.legend}>
                        <Text style={styles.label}>Limite</Text>
                        <Text style={styles.label}>{limit}</Text>   
                    </View>
                    <View style={styles.legend}>
                        <Text style={styles.label}>Disponível</Text>
                        <Text style={styles.label}>{available}</Text>  
                    </View>
                </View>
            </View>

        </View>
    );
}

