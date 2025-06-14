import React from "react";
import { View } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { formatCurrency } from "../../../utils/formatCurrency";

// components
import { CustomText } from "../../../components/CustomText";
import { styles } from "./styles";
import { ConsumptionLegend } from "../../../components/ConsumptionLegend";


export function WallOfValues({data, backgroundColor}){


    return(
        <View style={[defaultPageStyle.box, styles.container, {backgroundColor}]}>

            <CustomText style={styles.amount}>{formatCurrency(data.amount)}</CustomText>
            <ConsumptionLegend data={data} showValue={true}/>
        </View>
    );
}