import React, { useState } from "react";
import { View, Text } from "react-native";
import { stylesDefault } from "../../../themes/stylesDefault";
import { colors } from "../../../themes";
import { styles } from "./styles";


import { ExpenseIndicator } from "../../../components/expenseIndicator";
import { ConsumptionLegend } from "../../../components/consumptionLegend";
import { DisplayMoreDetails } from "../../../components/displayMoreDetails";


export function ConsumptionIndicator(){

    const [expiration, setExpiration] = useState("10/02");


    return(
        <View style={[stylesDefault.box, styles.container]}>
            <Text style={{fontSize: 16, color: colors.color_4}}>
                Vencimento - {expiration}
            </Text>

            <View style={styles.sectionConsumer}>
                <ExpenseIndicator data={{value: 80, size: 140, strokeWidth: 10}}/>
                <View style={styles.legends}>
                    <ConsumptionLegend/>
                    <DisplayMoreDetails data={{title: "Ver mais detalhes"}}/>
                </View>
            </View>
        </View>
    );
}