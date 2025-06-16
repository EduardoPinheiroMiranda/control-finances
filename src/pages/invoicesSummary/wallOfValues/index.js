import React from "react";
import { View } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { formatCurrency } from "../../../utils/formatCurrency";

// components
import { CustomText } from "../../../components/CustomText";
import { styles } from "./styles";
import { ConsumptionLegend } from "../../../components/ConsumptionLegend";
import { colorPattern } from "../../../themes";


export function WallOfValues({data, backgroundColor}){

    if(!data){
        return;
    }

    return(
        <View style={[defaultPageStyle.box, styles.container, {backgroundColor}]}>
            <CustomText style={styles.amount}>{formatCurrency(data.amount)}</CustomText>
            <ConsumptionLegend
                style={{width: "100%"}}
                data={data}
                showValue={true}
                fontColor={colorPattern.white_800}
            />
        </View>
    );
}