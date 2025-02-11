import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { summary } from "../../../dataFromTest";
import { formatCurrency } from "../../utils/formatCurrency";

//icon
const styleIcons = {size: 25};
import { CheckboxNull } from "../../assets/svg/checkboxNull";
import { CheckboxConfirmed } from "../../assets/svg/checkboxConfirmed";


function Movement(props){

   
    return(
        <View style={styles.sectionMovements}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <View>
                {
                    props.data.map((movement) => {
                        return(
                            <View style={styles.movement} key={movement.id}>
                                <View>
                                    {
                                        movement.pay === true ? 
                                            <Pressable onPress={() => props.function(movement.id, false, movement.type)}>
                                                <CheckboxConfirmed data={styleIcons}/>
                                            </Pressable>
                                        :
                                            <Pressable  onPress={() => props.function(movement.id, true,  movement.type)}>
                                                <CheckboxNull data={styleIcons}/>
                                            </Pressable>
                                    }
                                </View>

                                <View style={styles.description}>
                                    <View>
                                        <Text style={styles.movementName}>{movement.name}</Text>
                                        <Text style={styles.movementExpired}>vencimento - {movement.expired}</Text>
                                    </View>

                                    <Text style={styles.movementName}>{formatCurrency(movement.value)}</Text>
                                </View>   
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
}



export function PayInvoice(){

    const [movementsCard, setMovementsCard] = useState([]);
    const [movementsFixedExpense, setMovementsFixedExpense] = useState([]);
    const [movementsExtraExpense, setMovementsExtraExpense] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    
    
    useEffect(() => {
        setMovementsCard(summary.filter((movement) => movement.type === "card"));
        setMovementsFixedExpense(summary.filter((movement) => movement.type === "fixedExpense"));
        setMovementsExtraExpense(summary.filter((movement) => movement.type === "extraExpense"));

        const sumValues = parseFloat(summary.reduce((sum, movement) => sum + movement.value, 0).toFixed(2));
        setTotalValue(sumValues);
    }, []);


    function confirmedPayment(id, pay, type){
        const movements = summary.filter((movement) => {
            if(movement.type === type){
                if(movement.id === id){
                    movement.pay = pay;
                    return movement;
                }else{
                    return movement;
                }
            }
        });

        if(type === "card"){setMovementsCard(movements)};
        if(type === "extraExpense"){setMovementsExtraExpense(movements)};
        if(type === "fixedExpense"){setMovementsFixedExpense(movements)};
    }


    return(
        <SafeAreaView style={styles.container}>
           <StatusBar style="light"/>
           <View style={styles.header}>
                <Text style={styles.expiredText}>vencimento - 12/02</Text>
                <Text style={styles.valueText}>{formatCurrency(totalValue)}</Text>
            </View>

            <ScrollView style={styles.scroll}>
                <Movement data={movementsCard} title="Cartões" function={confirmedPayment}/>
                <Movement data={movementsFixedExpense} title="Despesas fixas" function={confirmedPayment}/>
                <Movement data={movementsExtraExpense} title="Gastos extras" function={confirmedPayment}/>
                <View style={{height: 120}}></View>
            </ScrollView>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}