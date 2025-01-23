import React, { useState } from "react";
import { View, Text } from "react-native";
import { stylesDefault } from "../../../themes/stylesDefault";
import { colors } from "../../../themes";
import { styles } from "./styles";


import { ExpenseIndicator } from "../../../components/expenseIndicator";


export function ConsumptionIndicator(){

    const [expiration, setExpiration] = useState("10/02");


    return(
        <View style={[stylesDefault.box, styles.container]}>
            <Text style={{fontSize: 16, color: colors.color_4}}>
                Vencimento - {expiration}
            </Text>

            <View>
                <ExpenseIndicator data={{value: 80, size: 150, strokeWidth: 10}}/>
                <View>
                    
                </View>
            </View>
            
        </View>
    );
}