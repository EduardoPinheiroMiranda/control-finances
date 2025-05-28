import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { format } from "date-fns";

// componets
import { ExpenseIndicator } from "../../../components/expenseIndicator";
import { ConsumptionLegend } from "../../../components/consumptionLegend";
import { useNavigation } from "@react-navigation/native";


export function ConsumptionIndicator({data, showValue}){

    const navigation = useNavigation();

    const [dueDate, setDueDate] = useState("");
    const [percentegeSpent, setpercentegeSpent] = useState(0);
    const [valuesDetails, setValuesDetails] = useState({limit: 0, amount: 0, available: 0});


    useEffect(() => {
        setDueDate(format(new Date(data.due_date), "dd/MM"));
        setpercentegeSpent(data.percentegeSpent);
        setValuesDetails({
            limit: data.limit,
            amount: data.amount,
            available: data.available
        })
    }, [])

    return(
        <View style={[defaultPageStyle.box, styles.container]}>
            <Text style={[defaultPageStyle.text, styles.title]}>
                Vencimento - {dueDate}
            </Text>

            <View style={styles.sectionConsumption}>
                <ExpenseIndicator data={{
                    value: percentegeSpent,
                    size: 120,
                    strokeWidth: 10
                }}/>

                <ConsumptionLegend 
                    displayMoreDatails="Ver mais detalhes" 
                    nextPage={() => navigation.navigate("finances")}
                    showValue={showValue}
                    data={valuesDetails}
                />
            </View>

        </View>
    );
}