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
                            key={movement.installment_id}
                            data={{
                                ...movement,
                                installment: `${movement.installment_number}/${movement.total_installments}`,
                                value: movement.installment_value
                            }}
                        />
                    })
                }
            </View>
        </View>
    ); 
}


export function InvoiceSummary({data, nextPage, style}){
    
    if(!data.total_extra_expense){
        return;
    }

    

    return(
        <View style={[styles.container, style]}>
            <ListItems
                title="Gastos fixos"
                data={data.fixed_expense}
                total={data.total_fixed_expense}
            />
            
            <ListItems
                title="Gastos extras"
                data={data.extra_expense}
                total={data.total_extra_expense}
            />

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