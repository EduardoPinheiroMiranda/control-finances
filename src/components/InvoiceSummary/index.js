import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { colorPattern } from "../../themes";
import { summary } from "../../../dataFromTest";

//icon
const styleIcons = {size: 15, color: colorPattern.black_900};
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import { Card } from "../../assets/svg/card";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";
import { formatCurrency } from "../../utils/formatCurrency";


function ListItems({data, title}){
    
    
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}


export function InvoiceSummary({data}){

   
    return(
        <View style={styles.container}>

            <ListItems title="Gastos fixos"/>
        </View>
    );
}