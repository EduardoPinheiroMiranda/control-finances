import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { defaultPageStyle } from "../../themes/stylesDefault";

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
    ); 
}


export function InvoiceSummary({data, nextPage}){


    return(
        <View style={[defaultPageStyle.box ,styles.container]}>
            <ListItems
                title="Gastos fixos"
                data={data.fixed_expense}
                total={data.totalFixedExpense}
            />
            
            <ListItems
                title="Gastos extras"
                data={data.extra_expense}
                total={data.totalExtraExpense}
            />

            <DisplayMoreDetails 
                title="Ver mais detalhes"
                nextPage={nextPage}
            />
        </View>
    );
}