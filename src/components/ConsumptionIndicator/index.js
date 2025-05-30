import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { smallStyle, bigStyle } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

// components
import { ExpenseIndicator } from "../../components/ExpenseIndicator";
import { DisplayMoreDetails } from "../../components/DisplayMoreDetails";


function Indicator(props){

    const navigation = useNavigation();


    return(
        <View style={[defaultPageStyle.box, props.styles.container]}>
            
            <Text style={props.styles.title}>Vencimento - {props.data.expired}</Text>

            <View style={props.styles.sectionConsumer}>

                <ExpenseIndicator data={props.data.chart}/>

                <View style={props.styles.legends}>
                    <View style={props.styles.legendsOfValue}>
                        <Text style={props.styles.valueText}>Limite:</Text>
                        <Text style={props.styles.valueText}>{formatCurrency(props.data.legend.limit)}</Text>
                    </View>
        
                    <View style={props.styles.legendsOfValue}>
                        <Text style={props.styles.valueText}>Utilizado:</Text>
                        <Text style={props.styles.valueText}>{formatCurrency(props.data.legend.used)}</Text>
                    </View>
        
                    <View style={props.styles.legendsOfValue}>
                        <Text style={props.styles.valueText}>Disponível:</Text>
                        <Text style={props.styles.valueText}>{formatCurrency(props.data.legend.available)}</Text>
                    </View>

                    {
                        props.data.chart.size <= 150 ? 
                            <View style={props.styles.sectionButton}>
                                <DisplayMoreDetails 
                                    data={{title: "Ver mais detalhes"}} 
                                    nextPage={() => navigation.navigate("expenseAnalysis")}
                                />
                            </View>
                        :
                            <View style={props.styles.sectionButton}>
                                <TouchableOpacity 
                                    style={props.styles.button}
                                    onPress={() => navigation.navigate("payInvoice")}
                                >
                                    <Text style={props.styles.textButton}>Pagar fatura</Text>
                                </TouchableOpacity>
                            </View>
                    }
                    
                </View>

            </View>
        </View>
    );
}


export function ConsumptionIndicator({data}){


    return(
        <View>
            {
                data.chart.size <= 150 ?
                    <Indicator data={data} styles={smallStyle}/>
                :
                    <Indicator data={data} styles={bigStyle}/>
            }
        </View>
    );
}