import React from "react";
import { View, Text } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { styles } from "./styles";

// componets
import { ExpenseIndicator } from "../../../components/expenseIndicator";
import { ConsumptionLegend } from "../../../components/consumptionLegend";
import { useNavigation } from "@react-navigation/native";


export function ConsumptionIndicator(props){

    const navigation = useNavigation();


    return(
        <View style={[defaultPageStyle.box, styles.container]}>
            <Text style={[defaultPageStyle.text, styles.title]}>
                Vencimento - 10/02
            </Text>

            <View style={styles.sectionConsumption}>
                <ExpenseIndicator data={{
                    value: 90,
                    size: 120,
                    strokeWidth: 10
                }}/>

                <ConsumptionLegend 
                    displayMoreDatails="Ver mais detalhes" 
                    nextPage={() => navigation.navigate("finances")}
                    showValue={props.showValue}
                />
            </View>

        </View>
    );
}