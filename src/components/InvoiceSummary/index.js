import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

// components
import { ListMovements } from "../../components/ListMovements";
import { DisplayMoreDetails } from "../DisplayMoreDetails";
import { CustomText } from "../CustomText";


function ListItems({data, title, total}){
    
    
    return(
        <View>
            <View style={styles.header}>
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.title}>{formatCurrency(total)}</CustomText>
            </View>

            <View style={{paddingHorizontal: 15}}>
                {
                    data.map((movement) => {
                        return <ListMovements
                            key={movement.installmentId}
                            data={{
                                ...movement,
                                installment: `${movement.installmentNumber}/${movement.totalInstallments}`,
                                value: movement.installmentValue
                            }}
                        />
                    })
                }
            </View>
        </View>
    ); 
}


export function InvoiceSummary({data, nextPage, style}){
    
    if(!data.totalExtraExpense){
        return;
    }
    

    return(
        <View style={[styles.container, style]}>
            {data.totalFixedExpense > 0 && (
                <ListItems
                    title="Gastos fixos"
                    data={data.fixedExpense}
                    total={data.totalFixedExpense}
                />
            )}
            
            {data.totalExtraExpense > 0 && (
                <ListItems
                    title="Gastos extras"
                    data={data.extraExpense}
                    total={data.totalExtraExpense}
                />
            )}
            

            {nextPage &&
                <View style={styles.buttonNavigation}>
                    <DisplayMoreDetails 
                        title="Ver mais detalhes"
                        nextPage={nextPage}
                    />
                </View>
            }
            
        </View>
    );
}