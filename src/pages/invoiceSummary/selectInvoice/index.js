import React from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../themes";


const months = ["JAN", "FEV", "MAR", "ABR", "MAIO", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
const date = new Date();
const currentMonth = date.getMonth();


export function SelectionInvoice(props){

    let color = colors.color_10;

    const currentYear = date.getFullYear();
    const invoiceReference = props.data.expired.split("/");

    const invoiceMonth = months.indexOf(invoiceReference[0]);
    const invoiceYear = Number(invoiceReference[1]);


    if(!props.data.pay){
        if(invoiceMonth === currentMonth && invoiceYear === currentYear){
            color = colors.color_3;
        }

        if(invoiceMonth > currentMonth && invoiceYear === currentYear){
            color = colors.color_11;
        }
    }
    
    
    return(
        <Pressable 
            onPress={
                () => props.getInvoice(color, props.data.expired, props.index)
            }
        >
            <Text 
                style={[
                    styles.expired, 
                    {
                        color: color,
                        marginLeft: props.index === 0 ? props.distance.x: 0,
                        marginRight: props.lastIndex === props.index ? props.distance.x: 0
                    }
                ]}
            >
                {props.data.expired}
            </Text>
        </Pressable>
    );
}
