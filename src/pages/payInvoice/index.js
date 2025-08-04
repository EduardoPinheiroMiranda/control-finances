import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { colorPattern } from "../../themes";
import { styles } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { FinancialSummaryContext } from "../../contexts/financialSummary";
import { format, formatDate } from "date-fns";
import Checkbox from "expo-checkbox";


const base_teste ={
    extra_expense: [
        {
            installment_id: "b0799627-5832-464c-81cd-c33c0bc18cfe",
            installment_number: 1,
            installment_value: 516.67,
            due_date: "2025-07-10T23:59:59",
            pay: true,
            shopping_id: "a7deb0df-86ff-4120-940d-5f840fb7978e",
            total_installments: 30,
            type_invoice: "extraExpense",
            payment_method: "card",
            name: "Moto",
            purchase_date: "2025-07-06T21:42:59.106"
        },
        {
            installment_id: "c9a378a0-57a8-484b-bc4f-3a31dc228e47",
            installment_number: 3,
            installment_value: 178.77,
            due_date: "2025-08-10T23:59:59",
            pay: false,
            shopping_id: "e6ffe8f8-b5cc-4583-a581-36f7c9b28d9e",
            total_installments: 18,
            type_invoice: "extraExpense",
            payment_method: "card",
            name: "Geladeira",
            purchase_date: "2025-05-29T19:54:45.202"
        },
        {
            installment_id: "d8a952bb-a401-4888-87cd-e058ad4eff16",
            installment_number: 3,
            installment_value: 178,
            due_date: "2025-08-10T23:59:59",
            pay: false,
            shopping_id: "6c032fbd-2c3e-403b-9f4d-7003f475306c",
            total_installments: 10,
            type_invoice: "extraExpense",
            payment_method: "card",
            name: "Placa de video",
            purchase_date: "2025-05-29T19:36:24.078"
        },
        {
            installment_id: "a6f81cdf-6be5-4cd8-8d6b-80296617e2d3",
            installment_number: 3,
            installment_value: 315,
            due_date: "2025-08-10T23:59:59",
            pay: false,
            shopping_id: "730d4d79-34a7-4db7-a85b-c0192b640bed",
            total_installments: 12,
            type_invoice: "extraExpense",
            payment_method: "card",
            name: "Bike Absolute 12v",
            purchase_date: "2025-05-29T19:35:26.909"
        },
        {
            installment_id: "aaf2dba3-057d-4ef1-9452-1ea519f2ab0c",
            installment_number: 3,
            installment_value: 315,
            due_date: "2025-07-10T23:59:59",
            pay: false,
            shopping_id: "e586fed0-fc00-4db8-8664-73a90cb7fa72",
            total_installments: 12,
            type_invoice: "extraExpense",
            payment_method: "card",
            name: "Bike Rava 12v",
            purchase_date: "2025-05-06T22:45:43.596"
        },
        {
            installment_id: "113f5500-a086-425a-ba78-55efeb148fa6",
            installment_number: 4,
            installment_value: 321.7,
            due_date: "2025-08-10T23:59:59",
            pay: false,
            shopping_id: "e4d3e5cf-130a-4c5c-86c4-c5666000e9e9",
            total_installments: 18,
            type_invoice: "extraExpense",
            payment_method: "invoice",
            name: "S24 ultra 1T",
            purchase_date: "2025-04-30T22:28:01.04"
        }
    ]
}


// components
import { CustomText } from "../../components/CustomText";
import { Button } from "../../components/Button";


function ListItem({data}){

    const [checked, setChecked] = useState(false);

    
    function selectToPay(){
        console.log("oi");
        setChecked(!checked);
    }

    
    return(
        <View style={styles.sectionItems}>
            <Checkbox 
                style={styles.checkBox}
                color={checked ? colorPattern.blue_300 : undefined}
                value={data.pay ? true : checked}
                disabled={data.pay ? true : false}
                onValueChange={setChecked}
            />

            <View style={{flex: 1}}>
                <View style={styles.legend}>
                    <CustomText style={{fontSize: 16}}>{data.name}</CustomText>
                    <CustomText style={{fontSize: 16}}>{formatCurrency(data.installment_value)}</CustomText>
                </View>
                <View style={styles.legend}>
                    <CustomText style={{fontSize: 12}}>Vencimento - {formatDate(new Date, "dd/MM")}</CustomText>
                    <CustomText style={{fontSize: 12}}>
                        {`${data.installment_number}/${data.total_installments}`}
                    </CustomText>
                </View>
            </View>
        </View>
    );
}


export function PayInvoice(){

    const { invoice } = useContext(FinancialSummaryContext);

    const formtDueDate = format(invoice.due_date, "dd/MM/yyyy");


    async function payItems(){
        console.log("pagar elementos");
    }


    return(
        <SafeAreaView style={defaultPageStyle.page}>
            <View style={styles.container}>

                <View style={styles.wallOfValues}>
                    <CustomText style={styles.dueDate}>Vencimento {formtDueDate}</CustomText>
                    <CustomText style={styles.amount}>{formatCurrency(invoice.amount)}</CustomText>
                </View>


                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                >

                    {base_teste.extra_expense.length > 0 && (
                        <View style={styles.listItem}>
                            <CustomText style={styles.title}>Cartões</CustomText>
                            <View>
                                {
                                    base_teste.extra_expense.map((item) => {
                                        return <ListItem key={item.installment_id} data={item}/>
                                    }) 
                                }
                            </View>
                        </View>
                    )}
                    
                    {base_teste.extra_expense.length > 0 && (
                        <View style={styles.listItem}>
                            <CustomText style={styles.title}>Despesas Fixas</CustomText>
                            <View>
                                {
                                    base_teste.extra_expense.map((item) => {
                                        return <ListItem key={item.installment_id} data={item}/>
                                    }) 
                                }
                            </View>
                        </View>
                    )}
                    
                    {base_teste.extra_expense.length > 0 && (
                        <View style={styles.listItem}>
                            <CustomText style={styles.title}>Gastos extras</CustomText>
                            <View>
                                {
                                    base_teste.extra_expense.map((item) => {
                                        return <ListItem key={item.installment_id} data={item}/>
                                    }) 
                                }
                            </View>
                        </View>
                    )}

                    <View style={{height: 150}}/>
                    
                </ScrollView>

                <View style={styles.sectionButton}>
                    <Button title="Pagar" action={payItems}/>
                </View>

            </View>
        </SafeAreaView>
    );
}